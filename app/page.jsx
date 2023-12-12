"use client";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/login");
  }, 200);
  return (
    <>
      <section className="container">
        <div className="loginPage"></div>
      </section>
    </>
  );
};

export default Login;
