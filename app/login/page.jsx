import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";
import { login } from "@/components/login";
const LoginPage = () => {
  return (
    <>
      {/* <div className={styles.container}>
        <LoginForm />
      </div> */}
      <login/>
    </>
  );
};

export default LoginPage;
