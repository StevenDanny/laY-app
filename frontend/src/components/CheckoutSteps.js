import React from "react";

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? "active" : ""}>Ingresar cuenta</div>
      <div className={props.step2 ? "active" : ""}>Comprar</div>
      <div className={props.step3 ? "active" : ""}>Pagar</div>
      <div className={props.step4 ? "active" : ""}>Realizar pedido</div>
    </div>
  );
}
