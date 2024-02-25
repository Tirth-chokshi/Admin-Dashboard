import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import { fetchUsers } from "@/app/lib/data";
import { fetchbookings } from "@/app/lib/data";
const Card = async () => {
  const { countUser } = await fetchUsers();
  const {countBooking} = await fetchbookings()
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <MdSupervisedUserCircle size={24} />
        <div className={styles.texts}>
          <span className={styles.title}>Total Users</span>
          <span className={styles.number}>{countUser}</span>
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
          <span className={styles.title}>Revenue</span>
          <span className={styles.number}>6.642</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
//export const cards = [
//   {
//     id: 1,
//     title: "Total Users",
//     number: 10.928,
//     change: 12,
//   },
//   {
//     id: 2,
//     title: "Stock",
//     number: 8.236,
//     change: -2,
//   },
//   {
//     id: 3,
//     title: "Revenue",
//     number: 6.642,
//     change: 18,
//   },
// ];