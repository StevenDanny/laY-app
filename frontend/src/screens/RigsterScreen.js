import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegisnter = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegisnter;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contrasnias no son iguales");
    } else {
      dispatch(register(name, email, password));
    }
    dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Registro de usuario</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
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
          <div>
            <label htmlFor="confirmPassword">Confirmar contrasenia</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="********"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>
          <label />
          <button className="primary" type="submit">
            Registrar
          </button>
        </div>
        <div>
          <label />
          <div>
            Ya tienes una cuenta?{" "}
            <Link to={`/signin?redirect=${redirect}`}>Ingresar</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
