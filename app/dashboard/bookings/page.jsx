// import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchbookings } from "@/app/lib/data";
import { deleteBooking } from "@/app/lib/actions";
import { fetchRefrrel } from "@/app/lib/data";

const BookingsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { countBooking, bookings } = await fetchbookings(q, page);
  const formattedCounts = await fetchRefrrel()
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a booking..." />
          <h4>Total Bookings: {countBooking}</h4>
          
          <Link href="/dashboard/bookings/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Party</td>
              <td>Date</td>
              <td>Total KM</td>
              <td>Trip</td>
              <td>Bill</td>
              <td>Net Profit</td>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>
                  <div className={styles.booking}>              
                    {booking.partyName}
                  </div>
                </td>
                <td>{booking.carSendDateTime}</td>
                <td>{booking.totalKM} KM</td>
                <td>{booking.journeyDetails}</td>
                <td>{booking.totalMoney}</td>
                <td>{booking.netProfit}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/bookings/${booking.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form action={deleteBooking}>
                      <input type="hidden" name="id" value={booking.id}  />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={countBooking} />
      </div>
    </div>
  )
}

export default BookingsPage;