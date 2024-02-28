import mongoose, { Schema } from "mongoose";
import { tree } from "next/dist/build/templates/app-page";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    numPlate:{
      type: String,
      required:true,
    },
    img: String,
    model: String,
    seats: Number,
    color: String,
    price: String,
    desc: String,
  }, {timestamps: true}
)
const bookingSchema = new mongoose.Schema({
 partyFullName: {
    type: String,
  },
  partyNumber: {
    type: Number,
  },
  address: String,
  startDate: String,
  endDate:String,
  startKillometers:String,
  endKillometers:String,
  totalKilometers:String,
  minKillometers:String,
  AC:{
    type:Boolean,
  },
  tripRoute:String,
  carDetails:String,
},{timestamps: true}
)

const customerSchema = new mongoose.Schema({
  namme:{
    type: String,
    required: true,
  },
  address: String,
  orgName: String,
  number: Number,
  email: email,
  referral: String,
  totalBookings: Number
},{timestamps: true})

export const Customer = mongoose.model.Customer || mongoose.model("Customer",customerSchema)
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export const Car = mongoose.models.Car || mongoose.model("Car", carSchema)
export const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema)