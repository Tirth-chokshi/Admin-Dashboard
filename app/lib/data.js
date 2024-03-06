import { Booking, Car, Client, Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const countUser = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { countUser, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchClients = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const countClients = await Client.find({ name: { $regex: regex } }).count();
    const clients = await Client.find({ name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { countClients, clients };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch clients!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

export const fetchbookings = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const countBooking = await Booking.find({ partyName: { $regex: regex } }).count();
    const bookings = await Booking.find({ partyName: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { countBooking, bookings };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch bookings!");
  }
};
export const fetchbooking = async(id) =>{
  try {
    connectToDB();
    const booking = await Booking.findById(id);
    return booking;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch booking!");
  }
}

export const fetchCars = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;

  try { 
    connectToDB();
    const countCars = await Car.find({ name: { $regex: regex } }).count();
    const cars = await Car.find({ name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { countCars,cars };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch bookings!");
  }
};

export const totalRevenue = async () => {
  try {
    connectToDB()
    const result = await Booking.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$netProfit" }
        }
      }
    ])
    return { countRevenue : result[0].totalRevenue }
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch revenue")
  }
}