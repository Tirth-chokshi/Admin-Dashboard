import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { updateBooking } from "@/app/lib/actions";
import { fetchbooking } from "@/app/lib/data";
const SingleBookingPage = async ({ params }) => {
  const { id } = params
  const booking = await fetchbooking(id)
  return (
    <div className={styles.container}>
      <form action={updateBooking} className={styles.form}>
        <label >Name: </label>
        <input type="text" placeholder={booking.partyName} name="partyName" />
        <label >Mobile Number: </label>
        <input type="number" placeholder={booking.mobileNumber} name="mobileNumber" />
        <label >Organization / Company: </label>
        <input type="text" placeholder={booking.partyOrg} name="partyOrg" />
        <label >Referral: </label>
        <input type="text" placeholder={booking.referral} name="referral" />
        <label >Starting Date: </label>
        <input type="text" placeholder={booking.stDate} name="stDate" />
        <label> Ending Date: </label>
        <input type="text" placeholder={booking.endDate} name="endDate" />
        <label >Startin Killometer: </label>
        <input type="number" placeholder={booking.stKM} name="stKM" />
        <label >Ending Killometer: </label>
        <input type="number" placeholder={booking.endKM} name="endKM" />
        <label >Total Killometer: </label>
        <input type="number" placeholder={booking.totalKM} name="totalKM" />
        <label >Minimum Killometer: </label>
        <input type="number" placeholder={booking.minKM} name="minKM" />
        <label >Car Sending Date & Time: </label>
        <input type="text" placeholder={booking.carSendDateTime} name="carSendDateTime" />
        <label >Car Name: </label>
        <input type="text" placeholder={booking.carName} name="carName" />
        <label >AC Price: </label>
        <input type="number" placeholder={booking.ACPrice} name="ACPrice" />
        <label >Toll-Tax: </label>
        <input type="number" placeholder={booking.tollTax} name="tollTax" />
        <label htmlFor="">Commission: </label>
        <input type="number" placeholder={booking.commission} name="commission" />
        <label >Border-Tax</label>
        <input type="number" placeholder={booking.borderTax} name="borderTax" />
        <label >Drivers Name: </label>
        <input type="text" placeholder={booking.driverName} name="driverName" />
        <label >Drivers Charge: </label>
        <input type="number" placeholder={booking.driverCharge} name="driverCharge" />
        <label >Fuel Purchase: </label>
        <input type="number" placeholder={booking.fuelPurchase} name="fuelPurchase" />
        <label >Net Profit: </label>
        <input type="number" placeholder={booking.netProfit} name="netProfit" />
        <label >Advance Payment To Driver: </label>
        <input type="text" placeholder={booking.advancePayToDriver} name="advancePayToDriver" />
        <label >Billed Amount: </label>
        <input type="number" placeholder={booking.totalMoney} name="totalMoney" />
        <label >Payment Method: </label>
        <input type="text" name="paymentMethod" id="paymentMethod" placeholder={booking.paymentMethod} />
        <label >Payment Status: </label>
        <input type="text" name="paymentStatus" id="paymentStatus" placeholder={booking.paymentStatus} />
        <label >Journey Details: </label>
        <textarea
          required
          name="journeyDetails"
          id="journeyDetails"
          rows="2"
          placeholder={booking.journeyDetails}
        ></textarea>
        <label >Address: </label>
        <textarea
          name="address"
          id="address"
          rows="2"
          placeholder={booking.address}
        ></textarea>
        <label >Addtional Details: </label>
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