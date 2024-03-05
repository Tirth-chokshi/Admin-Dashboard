

"use server";

import { revalidatePath } from "next/cache";
import { Booking, Car, Product, User, Client } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";
import axios from "axios";

export const fuelPriceCalc = async () => {
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

    const {
      partyName, mobileNumber, partyOrg, referral, stDate, endDate, fuelPurchase, stKM, endKM, totalKM, minKM, journeyDetails, address, carSendDateTime, ACPrice, carName, tollTax, borderTax, driverCharge, driverName, advancePayToDriver, paymentMethod, paymentStatus, addtionalDetails
    } = Object.fromEntries(formData)
    let KMM = ACPrice * totalKM
    let totalMoney = parseInt(tollTax) + parseInt(borderTax) + parseInt(driverCharge) + parseInt(KMM)
    let netProfit = parseInt(totalMoney) - parseInt(fuelPurchase)
    console.log('tollTax:', tollTax);
    console.log('borderTax:', borderTax);
    console.log('driverCharge:', driverCharge);
    console.log('ACPrice:', ACPrice);
    console.log('totalKM:', totalKM);
    console.log('KMM', KMM)
    console.log('Fuel Purchase: ', fuelPurchase)
    console.log('totalMoney', totalMoney)
    console.log('Net Profit: ', netProfit)

    const newBooking = new Booking(
      {
        partyName,
        mobileNumber,
        partyOrg,
        referral,
        stDate,
        endDate,
        stKM,
        fuelPurchase,
        endKM,
        totalKM,
        minKM,
        journeyDetails,
        address,
        carSendDateTime,
        ACPrice,
        carName,
        tollTax,
        borderTax,
        driverCharge,
        driverName,
        advancePayToDriver,
        paymentMethod,
        paymentStatus,
        addtionalDetails,
        totalMoney,
        netProfit
      }
    )

    await newBooking.save()
  } catch (error) {
    console.log(error)
    throw new Error("Failed to add Booking!")
  }
  revalidatePath("/dashboard/bookings");
  redirect('/dashboard/bookings')
}

export const addClient = async (formData) => {
  try {
    const { name, address, orgName, number, email, referral, totalBookings } = Object.fromEntries(formData)

    const newClient = new Client({
      name, address, orgName, number, email, referral, totalBookings
    })
    await newClient.save()
  } catch (error) {
    console.log(error)
    throw new Error("Failed to create Client")
  }
  revalidatePath("dashboard/clients")
  redirect('dashboard/clients')
}

export const updateBooking = async (formData) => {
  const {
    id, partyName, mobileNumber, partyOrg, referral, stDate, endDate, stKM, endKM, netProfit, fuelPurchase, totalKM, minKM, journeyDetails, address, carSendDateTime, ACPrice, carName, tollTax, borderTax, driverCharge, driverName, advancePayToDriver, paymentMethod, paymentStatus, addtionalDetails } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      partyName, mobileNumber, partyOrg, referral, stDate, endDate, netProfit, fuelPurchase, stKM, endKM, totalKM, minKM, journeyDetails, address, carSendDateTime, ACPrice, carName, tollTax, borderTax, driverCharge, driverName, advancePayToDriver, paymentMethod, paymentStatus, addtionalDetails
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );


    await Booking.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update Booking!");
  }

  revalidatePath("/dashboard/bookings");
  redirect("/dashboard/bookings");
};
export const deleteBooking = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Booking.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Booking!");
  }

  revalidatePath("/dashboard/bookings");
};









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
