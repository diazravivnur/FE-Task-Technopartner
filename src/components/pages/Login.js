import logo from "../../assets/logo-technopartner.png";
import { useState, useContext } from "react";
import { API, setAuthToken } from "../config/api";
import { UserContext } from "../context/userContext";
import { useHistory } from "react-router-dom";
// oauth/token
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const body = JSON.stringify({ email, password });
      const response = await API.post("/oauth/token", body, config);

      setMessage(response.data.message);
      setAuthToken(response.data.data.user.token);
      console.log(response.data.data.user);
      //   dispatch({
      //     type: "login",
      //     payload: response.data.data.user,
      //   });
      router.push("/addfilm");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-login">
      <img src={logo} alt="logo-technopartner" className="logo" />
      <form className="form-modal1" onSubmit={handleLogin}>
        <p>Email</p>
        <input
          className="input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p>Password</p>
        <input
          className="input"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button className="button-login" onClick={() => router.push("/Home")}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
