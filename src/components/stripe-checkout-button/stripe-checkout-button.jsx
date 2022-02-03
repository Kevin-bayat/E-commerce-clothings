import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-checkout-button.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceToCentForStripe = price * 100;
  const publishKey =
    "pk_test_51KOq26JhCY9y1byCa9gToqZn6BIVDwqKAPXDmGvnUsxfhG48YE0YWjogIEmdcl1YFNnsX9HEGj48rxSaNQHWVncg00knS4aCG5";
  const onToken = (token) => {
    console.log({ token });
    alert("Payment is Successful");
  };
  return (
    <StripeCheckout
      amount={priceToCentForStripe}
      shippingAddress
      token={onToken}
      stripeKey={publishKey}
      label={"Pay Now"}
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
    />
  );
};
export default StripeCheckoutButton;
