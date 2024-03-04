"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { BsEmojiSunglasses } from "react-icons/bs"; 

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.icons}>
        <BsEmojiSunglasses size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
