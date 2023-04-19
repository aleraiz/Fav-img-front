import styles from "../styles/Login.module.css";

export default function Login() {
  return (
    <div className={styles.AuthFormContainer}>
      <form className={styles.AuthForm}>
        <div className={styles.AuthFormContent}>
          <h3 className={styles.AuthFormTitle}>Sign In</h3>
          <div className="form-group mt-3">
            <label className="login-form-label">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label className={styles.loginFormLabel}>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
