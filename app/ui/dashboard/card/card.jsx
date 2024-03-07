import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import { fetchbookings } from "@/app/lib/data";
import { fetchClients } from "@/app/lib/data";
import { totalRevenue } from "@/app/lib/data";

const Card = async () => {
  const {countBooking} = await fetchbookings()
  const {countClients} = await fetchClients()
  const {countRevenue} = await totalRevenue()
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <MdSupervisedUserCircle size={24} />
        <div className={styles.texts}>
          <span className={styles.title}>Total Clients</span>
          <span className={styles.number}>{countClients}</span>
        </div>
      </div>
      <div className={styles.container}>
        <MdSupervisedUserCircle size={24} />
        <div className={styles.texts}>
          <span className={styles.title}>Total Bookings</span>
          <span className={styles.number}>{countBooking}</span>
        </div>
      </div>
      <div className={styles.container}>
        <MdSupervisedUserCircle size={24} />
        <div className={styles.texts}>
          <span className={styles.title}>Total Revenue</span>
          <span className={styles.number}>{countRevenue} ₹</span>
        </div>
      </div>
    </div>
  );
};

export default Card;