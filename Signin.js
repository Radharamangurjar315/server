import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import M from "materialize-css";


const Signin = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = () => {
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
     .then((res) => res.json())
     .then((data) => {
        if (data.error) {
         
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
          
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          M.toast({
            html: "Signed in successfully",
            classes: "#43a047 green darken-1",
          })
          navigate("/")
        }
      })
     .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </form>

        <button
          className="btn waves-effect waves-light #64b5f6 blue darken-1"
          onClick={() => {
            PostData();
          }}
        >
          Login
        </button>
        <h6>
          <Link to="/signup">Don't have an account?</Link>
        </h6>
      </div>
    </div>
  );
};

export default Signin;