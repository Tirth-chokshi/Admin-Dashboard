import { fetchClients } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";

const ClientPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { countClients, clients } = await fetchClients(q, page);

  return (
    <div>
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a booking..." />
        <h4>Total clients: {countClients}</h4>
        <Link href="/dashboard/clients/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Party</td>
            <td>Number</td>
            <td>Email</td>
            <td>Referral</td>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>
                <div className={styles.booking}>              
                  {client.name}
                </div>
              </td>
              <td>{client.number}</td>
              <td>{client.email}</td>
              <td>{client.referral}</td>
              <td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={countClients} />
    </div>
  </div>
  )
}
export default ClientPage