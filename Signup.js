import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from 'materialize-css';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [title,setTitle] = useState("");

    const PostData = () => {
        // // Assuming Name, Password, and Email are defined elsewhere
        // const name = "John";
        // const Password = "password123";
        // const Email = "john@example.com";
    
        fetch("/Signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password,
                email: email
            })
            
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                M.toast({ html: data.error });           
            } else {
                M.toast({ html: data.message });
                // Redirect to the signin page
                navigate('/signin');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error gracefully
        });
    }
    
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password" // Change type to "password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    type="button" // Set type to "button"
                    onClick={PostData}
                >
                    Signup
                </button>
                <h6>
                    <Link to="/Signin">Already have an account?</Link>
                </h6>
            </div>
        </div>
    );
}

export default Signup;
