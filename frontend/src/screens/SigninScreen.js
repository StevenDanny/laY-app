import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign in</h1>
        </div>
        <div>
          <label htmlFor="email">Correo electronico</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@hotmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Contrasenia</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Ingresar
          </button>
        </div>
        <div>
          <label />
          <div>
            No tienes una cuenta? <Link to="/register">Crear</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
