import mongoose from "mongoose";

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
    totalBookings: String
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
    numPlate: {
      type: String,
      required: true,
    },
    img: String,
    model: String,
    seats: Number,
    color: String,
    price: String,
    desc: String,
  }, { timestamps: true }
)
const bookingSchema = new mongoose.Schema({
  partyName: String,
  mobileNumber: Number,
  partyOrg: String,
  referral:String,
  stDate: String,
  endDate: String,
  stKM: Number,
  endKM: Number,
  fuelPurchase: Number,
  totalKM: Number,
  minKM: Number,
  journeyDetails: String,
  address: String,
  carName:String,
  carSendDateTime: String,
  ACPrice: Number,
  tollTax: Number,
  borderTax: Number,
  driverCharge: Number,
  driverName: String,
  advancePayToDriver: Number,
  paymentMethod: String,
  paymentStatus: String,
  addtionalDetails: String,
  totalMoney: Number,
  netProfit: Number
}, { timestamps: true }
)

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: String,
  orgName: String,
  number: Number,
  email: String,
  referral: String,
}, { timestamps: true })

export const Client = mongoose.models.Client || mongoose.model("Client", clientSchema)
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export const Car = mongoose.models.Car || mongoose.model("Car", carSchema)
export const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema)