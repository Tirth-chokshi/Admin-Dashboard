// import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchbookings } from "@/app/lib/data";

const BookingsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { countBooking, bookings } = await fetchbookings(q, page);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a booking..." />
          <h3>Total Bookings: {countBooking}</h3>
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
              <td>Car</td>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>
                  <div className={styles.booking}>              
                    {booking.partyFullName}
                  </div>
                </td>
                <td>{booking.startDate}</td>
                <td>${booking.tripRoute}</td>
                <td>{booking.carDetails}</td>
                {/* <td>
                  <div className={styles.buttons}>
                    <Link href="">
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form>
                      <input type="hidden" name="id" />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                  </div>
                </td> */}
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