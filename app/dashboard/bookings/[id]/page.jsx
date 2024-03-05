import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { updateBooking } from "@/app/lib/actions";
import { fetchbooking } from "@/app/lib/data";
const SingleBookingPage = async ({ params }) =>{
    const {id} = params
    const booking = await fetchbooking(id)
  return (
    <div className={styles.container}>
    <form action={updateBooking} className={styles.form}>
<label >Name: </label>
      <input type="text" placeholder={booking.partyName} name="partyName"  />
      <label htmlFor="">Mobile Number: </label>
      <input type="number" placeholder={booking.mobileNumber} name="mobileNumber"  />
      <label htmlFor="">Organization / Company: </label>
      <input type="text" placeholder={booking.partyOrg} name="partyOrg"/>
      <label htmlFor="">Referral: </label>
      <input type="text" placeholder={booking.referral} name="referral" />
      <label >Starting Date: </label>
      <input type="text" placeholder={booking.stDate} name="stDate"  />
      <label> Ending Date: </label>
      <input type="text" placeholder={booking.endDate} name="endDate"  />
      <label htmlFor="">Startin Killometer: </label>
      <input type="number" placeholder={booking.stKM} name="stKM" />
      <label htmlFor="">Ending Killometer: </label>
      <input type="number" placeholder={booking.endKM} name="endKM" />
      <label htmlFor="">Total Killometer: </label>
      <input type="number" placeholder={booking.totalKM} name="totalKM"  />
      <label htmlFor="">Minimum Killometer: </label>
      <input type="number" placeholder={booking.minKM} name="minKM"  />
      <label htmlFor="">Car Sending Date & Time: </label>
      <input type="text" placeholder={booking.carSendDateTime} name="carSendDateTime"/>
      <label htmlFor="">Car Name: </label>
      <input type="text" placeholder={booking.carName} name="carName"/>
      <label htmlFor="">AC Price: </label>
      <input type="number" placeholder={booking.ACPrice} name="ACPrice" />
      <label htmlFor="">Toll-Tax: </label>
      <input type="number" placeholder={booking.tollTax} name="tollTax"/>
      <label htmlFor="">Border-Tax</label>
      <input type="number" placeholder={booking.borderTax} name="borderTax"/>
      <label htmlFor="">Driver's Name: </label>
      <input type="text" placeholder={booking.driverName} name="driverName"  />
      <label htmlFor="">Driver's Charge: </label>
      <input type="number" placeholder={booking.driverCharge} name="driverCharge"/>
      <label htmlFor="">Advance Payment To Driver: </label>
      <input type="text" placeholder={booking.advancePayToDriver} name="advancePayToDriver"  />
      <label htmlFor="">Payment Method: </label>
      <select name="paymentMethod" id="paymentMethod" >
        <option value="card">Card</option>
        <option value="cash">Cash</option>
        <option value="cheque">Cheque</option>
      </select>
      <label htmlFor="">Payment Status: </label>
      <select name="paymentStatus" id="paymentStatus">
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
      <label htmlFor="">Journey Details: </label>
      <textarea
        required
        name="journeyDetails"
        id="journeyDetails"
        rows="2"
        placeholder={booking.journeyDetails}
      ></textarea>
      <label htmlFor="">Address: </label>
      <textarea
        name="address"
        id="address"
        rows="2"
        placeholder={booking.address}
      ></textarea>
      <label htmlFor="">Addtional Details: </label>
      <textarea
        name="addtionalDetails"
        id="addtionalDetails"
        rows="2"
        placeholder={booking.addtionalDetails}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}
export default SingleBookingPage