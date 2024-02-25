import { addCar } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

export default function AddCarPage() {
  return (
    <div className={styles.container}>
        <form action={addCar} className={styles.form}>
            <input type="text" placeholder="car name" name="name" required />
            <input type="text" placeholder="number plate" name="numPlate" required/>
            <input type="text" placeholder="car model" name="model" />
            <input type="text" placeholder="image string" name="img" />
            <input type="number" placeholder="seats" name="seats" />
            <input type="text" placeholder="color" name="color" />
            <input type="text" placeholder="price" name="price" />
            <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Description"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
