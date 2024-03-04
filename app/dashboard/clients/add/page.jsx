import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import { addClient } from "@/app/lib/actions";

function addClientPage() {
  return (
<div className={styles.container}>
      <form action={addClient} className={styles.form}>
        <input type="text" placeholder="name" name="name" required />
        <input type="email" placeholder="email" name="email" />
        <input type="number" placeholder="Phone numberr" name="number" />
        <input type="text" placeholder="Referral" name="referral" />
        <input type="text" placeholder="Company Name: " name="orgName" />
        <textarea
          name="address"
          id="address"
          rows="2"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default addClientPage