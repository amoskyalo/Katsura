import React from "react";
import * as Components from "./components/index";

// Alphabetically ordered
const PaymentTypeToComponent = {
  alipay: Components.Alipay,
  amex: Components.Amex,
  /** Alias to american-express */
  "american-express": Components.Amex,
  /** CVV representation */
  code: Components.Code,
  cvv: Components.Code,
  "diners-club": Components.Diners,
  /** Alias to diners-club */
  diners: Components.Diners,
  discover: Components.Discover,
  elo: Components.Elo,
  generic: Components.Generic,
  hiper: Components.Hiper,
  hipercard: Components.Hipercard,
  jcb: Components.Jcb,
  maestro: Components.Maestro,
  mastercard: Components.Mastercard,
  /** Alias to mastercard */
  master: Components.Mastercard,
  mir: Components.Mir,
  paypal: Components.Paypal,
  unionpay: Components.Unionpay,
  visa: Components.Visa,
};

const aspectRatio = 780 / 500; // Width / Height of the svgs.

const defaultWidth = 40;

export function PaymentIcon(props) {
  const Component = (props) => PaymentTypeToComponent ?? PaymentTypeToComponent;

  const width =
    props.width === undefined && props.height === undefined
      ? defaultWidth
      : props.width;

  return (
    <Component
      fill="#000" // We set this because rn-svg won't set black as the default color for some reason. Elo and Maestro cards wouldn't be bg black filled as in desktop.
      {...props}
      style={[{ aspectRatio }, props.style]} // After ...props to overwrite
      width={width}
    />
  );
}
