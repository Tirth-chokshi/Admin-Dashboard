import Image from "next/image"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/products/products.module.css";

export default function CarsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a car..." />
        <Link href="/dashboard/cars/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Model</td>
            <td>Color</td>
            <td>Plate</td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    src={"/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  Ertiga
                </div>
              </td>
              <td>Model</td>
              <td>White</td>
              <td>4738</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action="">
                    <input type="hidden" name="id" />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
