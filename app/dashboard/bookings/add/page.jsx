import { addBooking } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

export default function addBookingsPage() {
  return (
    <div className={styles.container}>
    <form action={addBooking} className={styles.form}>
      <input type="text" placeholder="Party's Full Name" name="partyName"  />
      <input type="number" placeholder="Mobile Number" name="mobileNumber"  />
      <input type="text" placeholder="Organization Name: " name="partyOrg"/>
      <input type="text" placeholder="Referral: " name="referral" />
      <label >Starting Date: </label>
      <input type="date" placeholder="Start Date" name="stDate"  />
      <label> Ending Date: </label>
      <input type="date" placeholder="End Date" name="endDate"  />
      <input type="number" placeholder="Starting Killometer" name="stKM" 
       />
      <input type="number" placeholder="Ending Killometer" name="endKM" 
       />
      <input type="number" placeholder="Total Killometer" name="totalKM"  />
      <input type="number" placeholder="Minimum Killometer" name="minKM"  />
      <input type="text" placeholder="Car send Date and Time" name="carSendDateTime"/>
      <input type="text" placeholder="Car name" name="carName"/>
      <input type="number" placeholder="AC Price: " name="ACPrice" />
      <input type="number" placeholder="Toll Tax: " name="tollTax"/>
      <input type="number" placeholder="Border Tax: " name="borderTax"/>
      <input type="text" placeholder="Driver Full Name" name="driverName"  />
      <input type="number" placeholder="Driver Charge: " name="driverCharge"/>
      <input type="number" placeholder="How much money for fuel" name="fuelPurchase"/>
      <input type="text" placeholder="Advance pay to Driver" name="advancePayToDriver"  />
      <select name="paymentMethod" id="paymentMethod" >
        <option value="card">Card</option>
        <option value="cash">Cash</option>
        <option value="cheque">Cheque</option>
      </select>
      <select name="paymentStatus" id="paymentStatus">
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
      <textarea
        required
        name="journeyDetails"
        id="journeyDetails"
        rows="2"
        placeholder="journeyDetails"
      ></textarea>
      <textarea
        name="address"
        id="address"
        rows="2"
        placeholder="Party's Address"
      ></textarea>
      <textarea
        name="addtionalDetails"
        id="addtionalDetails"
        rows="2"
        placeholder="addtionalDetails"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}
