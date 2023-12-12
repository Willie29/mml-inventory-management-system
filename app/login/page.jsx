"use client"

import Image from "next/image";
import logo from "../../public/logo.png";
import { useRouter } from "next/navigation";
import { login } from "../../app/api";
import { useState } from "react";
import { Messaege } from "../helper/Message";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      e.preventDefault();
      const response = await login({
        username,
        password,
      });
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("nama", response.data.data.nama);
      localStorage.setItem("position", response.data.data.position);
      localStorage.setItem("role", response.data.data.role);
      localStorage.setItem("iduser", response.data.data.id);

      Messaege("Succes", "Success Login", "success");
      setTimeout(() => {
        router.push("/home");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <div className="loginPage">
          <Image src={logo} alt="mml"></Image>
          <form onSubmit={handleLogin}>
            <div className="boxLogin">
              <div className="form-group">
                <label htmlFor="">username</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username anda"
                />
              </div>

              <div className="form-group">
                <label htmlFor="">password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassowrd(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
              <button type="submit" className="btn">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
