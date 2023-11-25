import { usePaystackPayment } from "react-paystack";
import { PaymentConfirmed } from "./PaymentConfirmed";
import { useState } from "react";
const handlePaymentSuccess = async (email) => {
  const paystackCallbackURL = "http://localhost:3000/api/paystack/callback";

  try {
    const userData = {
      name: email,
      email,
    };

    const response = await fetch(paystackCallbackURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: userData,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      console.log("User saved successfully");
    } else {
      console.error("Error saving user:", responseData.message);
    }
  } catch (error) {
    console.error("Error sending POST request:", error.message);
    // Add logic for handling errors during the POST request on the frontend
  }
};

export function PayNowButton(props) {
  const publicKey = "pk_test_55af3165b5fc6edb36aaf3bfeb37981afbaa48e8";
  const { email, price } = props.data;
  const config = {
    reference: new Date().getTime(),
    email,
    amount: price,
    publicKey,
  };

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const onSuccess = (reference) => {
    console.log("Payment successful", reference);
    // Handle payment success and set state
    handlePaymentSuccess(email).then((success) => {
      setPaymentSuccess(true);
    });
  };

  const onClose = () => {
    console.log("Payment closed");
    // Add logic for when the payment is closed
  };

  const initializePayment = usePaystackPayment(config);

  const handlePaymentClick = () => {
    initializePayment(onSuccess, onClose);
  };

  return (
    <div>
      {paymentSuccess ? (
        <PaymentConfirmed />
      ) : (
        <button
          onClick={handlePaymentClick}
          className="pay-now w-full mx-auto text-center text-bold"
        >
          Pay Now
        </button>
      )}
    </div>
  );
}
