import styles from "../styles/Login.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [successMsg, setSuccesMsg] = useState(null);
  const [data, setData] = useState({});

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newData = { ...data, [name]: value };
    setData(newData);
  };

  const checkPasswords = () => {
    if (data.password !== data.ConfirmPassword) {
      setError("passwords do not match");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const signUpUser = async () => {
    const baseUrl = "http://localhost:3001/signup";
    try {
      const fetchResult = await fetch(baseUrl, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      // ver como manejar los errores segun el estado recibido.
      const result = await fetchResult.json();
      const resultStatus = await fetchResult.status;
      console.log(result);
      console.log(resultStatus);

      if (resultStatus == 409) {
        setError(result.error);
      } else if (resultStatus == 201) {
        setSuccesMsg(result.message);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(checkPasswords());
    if (checkPasswords()) {
      signUpUser();
    }
  };

  return (
    <Layout>
      <div className={styles.AuthFormContainer}>
        <form className={styles.AuthForm} onSubmit={handleSubmit}>
          <div className={styles.AuthFormContent}>
            <h3 className={styles.AuthFormTitle}>Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary">
                <Link href={"/"}>Sign In</Link>
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Username"
                required
                name="username"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                required
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                required
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Confirm Password"
                required
                name="ConfirmPassword"
                onChange={handleInputChange}
              />
            </div>
            {error ? (
              <div className="d-flex  align-items-center">
                <p className="mb-0 mt-3 text-danger">{error}</p>
              </div>
            ) : null}
            {successMsg ? (
              <div className="d-flex  align-items-center">
                <p className="mb-0 mt-3 text-success fw-bolder">{successMsg}</p>
              </div>
            ) : null}

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}
