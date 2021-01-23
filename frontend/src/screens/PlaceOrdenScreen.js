import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);

  if (!cart.paymentMethod) {
    props.history.push("/pago");
  }
  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.total = toPrice(cart.itemsPrice * 1.18);
  cart.iva = toPrice(cart.total - cart.itemsPrice);

  const placeOrderHandler = () => {};
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>Direccion:</strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Pago</h2>
                <p>
                  <strong>Metodo de pago:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Articulos</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.className}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div>
                          {item.qty} X ${item.price} = {item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1 card card-body">
          <ul>
            <li>
              <h2>Factura</h2>
            </li>
            <li className="row">
              <div>Productos</div>
              <div>$ {cart.itemsPrice}</div>
            </li>
            <li className="row">
              <div>IVA</div>
              <div>$ {cart.iva}</div>
            </li>
            <li className="row">
              <div />
              <div>--------------------</div>
            </li>
            <li className="row">
              <div>
                <strong>Total</strong>
              </div>
              <div>$ {cart.total}</div>
            </li>
            <li>
              <button
                type="button"
                onClick={placeOrderHandler}
                className="primary block"
                disabled={cart.cartItems.length === 0}
              >
                Aceptar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
