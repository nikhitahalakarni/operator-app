import {useState} from 'react';
import styles from './login.module.css';
import logo from './images/n8_logo.png';
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [usererror,setUserError]=useState("");
    const [passworderror,setPasswordError]=useState("");
    const regex = /^[A-Za-z0-9]{6}$/;
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const username=e.target.username.value;
        const password=e.target.password.value;
        setUserError("");
        setPasswordError("");

        if(username !== "demo_user"){
            setUserError("Invalid User Name");
        }else if(password !== "demo12" && !regex.test(password)){
            setPasswordError("Incorrect Password & Password must be 6 characters (letters or numbers only)");
        }else{
            navigate("/dashboard");
        }
    }

    return (<div className={styles.loginWrapper}>
        <div className={styles.container2}>
        <div className={styles.imgContainer}>
            <img src={logo} alt="logo"/>
        </div>
        <h2 className={styles.header}>User Login</h2>
        <form onSubmit={handleSubmit} className={styles.myForm}>
            <label htmlFor="usernameid">User Name:</label>
            <input type="text" name="username" className={styles.username} id="usernameid" placeholder="Enter Username"/>
            {usererror && <p className={styles.userError}>{usererror}</p>}
            <label htmlFor="passwordid">Password:</label>
            <input type="password" name="password" className={styles.password} id="passwordid" placeholder="Enter Password"/>
            {passworderror && <p className={styles.passwordError}>{passworderror}</p>}
            <div className={styles.termsContainer}>
                 <label htmlFor="terms&condition"><input type="checkbox" name="terms" className={styles.terms} id="terms&condition"/>Terms & Conditions</label>
                <label htmlFor="forgot" className={styles.forgotLabel}><a href="#">Forgot Password</a></label>
            </div>
            <button type="submit" className={styles.submitBtn}>LOGIN</button>
        </form>
    </div>
    </div>
    );
}

export default Login;