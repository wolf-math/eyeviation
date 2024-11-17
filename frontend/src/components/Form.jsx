import { useState } from "react";
import { Link } from 'react-router-dom';
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
// import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";

// eslint-disable-next-line react/prop-types
function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "login" : "register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password })
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/")
      } else {
        navigate("/login")
      }
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>{name}</h1>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      {loading && <LoadingIndicator />}
      <button className="btn btn-primary" type="submit">
        {name}
      </button>
    </form>
    {method === "login" ? <p>New user? <Link to="/register">Register</Link></p> : <p>Already a user? <Link to="/login">login</Link></p>}
    </>
  );
}

export default Form