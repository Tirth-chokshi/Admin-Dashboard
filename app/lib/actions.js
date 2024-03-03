// when user hit the add user/booking button incerement the value of total booking by 1
// if user / booking hit delete button the total value will decremented by 1 

"use server";

import { revalidatePath } from "next/cache";
import { Booking, Car, Product, User, Customer } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export const fuelPriceCalc = async (req, res) => {
  let petrolPrice
  const options = {
    method: 'GET',
    url: 'https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/today/india/gujarat',
    headers: {
      'X-RapidAPI-Key': process.env.FUEL_API_KEY,
      'X-RapidAPI-Host': 'daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    // res.send(response.data.fuel.petrol)
    petrolPrice = response.data.fuel.petrol.retailPrice;
  } catch (error) {
    console.error(error);
  }  
  return petrolPrice
}


export const addUser = async (formData) => {
  const { username, email, password, phone, address, img, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      img,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);

  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const addCar = async (formData) => {
  const {
    name,
    numPlate,
    model,
    img,
    seats,
    color,
    price,
    desc
  } = Object.fromEntries(formData)

  try {
    connectToDB()

    const newCar = new Car({
      name,
      numPlate,
      model,
      img,
      seats,
      color,
      price,
      desc
    })
    await newCar.save()
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create car!");
  }
  revalidatePath("/dashboard/cars");
  redirect("/dashboard/cars");
}


export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

export const addBooking = async (formData) => {
  try {
    connectToDB()

    const { partyFullName, partyNumber, address, startDate, endDate, startKillometers, endKillometers, minKillometers, AC, tripRoute, carDetails } = Object.fromEntries(formData)

    const newBooking = new Booking(
      {
        partyFullName, partyNumber, address, startDate, endDate, startKillometers, endKillometers, minKillometers, AC, tripRoute, carDetails
      }
    )
    await newBooking.save()
  } catch (error) {
    console.log(error)
    throw new Error("Faild to add Booking!")
  }
  revalidatePath("/dashboard/bookings");
  redirect('/dashboard/bookings')
}

export const addCustomer = async (formData) => {
  try {
    const { name, address, orgName, number, email, referral, totalBookings } = Object.fromEntries(formData)

    const newCustomer = new Customer({
      name, address, orgName, number, email, referral, totalBookings
    })
    await newCustomer.save()
  } catch (error) {
    console.log(error)
    throw new Error("Failed to create Customer")
  }
  revalidatePath("dashboard/customers")
  redirect('dashboard/customers')
}

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};