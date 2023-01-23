import "./styles.css";
import { useState } from "react";
import { app } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function App() {
  const [data, setData] = useState({});
  const [signIn, setSignIn] = useState(true)
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        // Signed in
        console.log(data);
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        // Signed in
        console.log(data);
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  const Switch = () => {

    setSignIn(!signIn)
    setData({
      email: "",
      password: ""
    })

  }
  return (
    <div className="form">
      <div className={signIn ? "container right-panel-active" : "container"} id="container">

        <div className="form-container sign-in-container">
          <div className="form">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" onClick={signInGoogle} className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input name="email" type="email" placeholder="Email" onChange={(e) => handleInput(e)} />
            <input name="password" type="password" placeholder="Password" onChange={(e) => handleInput(e)} />
            {/* <a href="#">Forgot your password?</a> */}
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        </div>

        <div className="form-container sign-up-container">
          <div className="form">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button onClick={Switch} className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={Switch} className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
