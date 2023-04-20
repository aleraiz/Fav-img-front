import styles from "../styles/Login.module.css";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Register() {
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newData = { ...data, [name]: value };
    console.log(newData);
    setData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <div className={styles.AuthFormContainer}>
        <form className={styles.AuthForm}>
          <div className={styles.AuthFormContent}>
            <h3 className={styles.AuthFormTitle}>Sign Up</h3>
            <div className="text-center">
              Already registered? <span className="link-primary">Sign In</span>
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
