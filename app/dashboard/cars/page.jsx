import Image from "next/image"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/products/products.module.css";
import { fetchCars } from "@/app/lib/data";

const Carpage = async ({ searchParams }) =>{
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { countCars , cars } = fetchCars(q,page)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a car..." />
        <h4>Total Cars: {countCars} </h4>
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
        {cars.map((car) => (
            <tr key={car.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
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
      <Pagination count={countCars}/>
    </div>
  )
}
export default Carpage