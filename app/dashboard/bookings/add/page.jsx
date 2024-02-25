import { addBooking } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

export default function addBookingsPage() {
  return (
    <div className={styles.container}>
    <form action={addBooking} className={styles.form}>
      <input type="text" placeholder="Party's Full Name" name="partyFullName"  />
      <input type="number" placeholder="Mobile Number" name="partyNumber"  />
      <input type="date" placeholder="Stat Date" name="startDate"  />
      <input type="date" placeholder="End Date" name="endDate"  />
      <input type="number" placeholder="Starting Killometer" name="startKillometer" 
       />
      <input type="number" placeholder="Ending Killometer" name="endKillometers" 
       />
      <input type="number" placeholder="Total Killometer" name="totalKillometers"  />
      <input type="number" placeholder="Minimum Killometer" name="minKillometers"  />
      {/* <select name="AC" id="AC">
        <option value="general">Choose</option>
        <option value="on">On</option>
        <option value="off">Off</option>
      </select> */}
      <textarea
        required
        name="address"
        id="address"
        rows="2"
        placeholder="Party's Address"
      ></textarea>
      <textarea
        required
        name="tripRoute"
        id="triptRoute"
        rows="2"
        placeholder="Tript Route"
      ></textarea>
      <textarea
        required
        name="carDetails"
        id="carDetails"
        rows="2"
        placeholder="Car Delivery Date , Time: "
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}
