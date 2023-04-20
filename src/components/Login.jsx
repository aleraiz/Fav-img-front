import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newData = { ...data, [name]: value };
    console.log(newData);
    setData(newData);
  };

  const loginUser = async () => {
    const baseUrl = "http://localhost:3001/login";
    try {
      const fetchResult = await fetch(baseUrl, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await fetchResult.json();
      if (result.error) {
        setError(result.error);
      } else {
        setError(null);
        localStorage.setItem("user-info", JSON.stringify(result));
        router.push("/user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser();
    console.log("submit button");
  };

  return (
    <div className={styles.AuthFormContainer}>
      <form className={styles.AuthForm} onSubmit={handleLogin}>
        <div className={styles.AuthFormContent}>
          <h3 className={styles.AuthFormTitle}>Sign In</h3>
          <div className="form-group mt-3">
            <label className="login-form-label">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
              value={data.email || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label className={styles.loginFormLabel}>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
              value={data.password || ""}
              onChange={handleInputChange}
            />
          </div>
          {error ? (
            <div className="d-flex  align-items-center">
              <p className="mb-0 mt-3 text-danger">{error}</p>
            </div>
          ) : null}

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Not registered? <a href="#">Click here</a>
          </p>
        </div>
      </form>
    </div>
  );
}
