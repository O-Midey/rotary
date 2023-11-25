import "./App.css";
import { useState } from "react";
// import { PaymentConfirmed } from "./PaymentConfirmed";
import { ProductSummary } from "./ProductSummary";

import { RegistrationContainer } from "./RegistrationContainer";
import { Header } from "./header";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({});

  return (
    <div>
      <Header />

      {!submitted ? (
        <RegistrationContainer
          submitted={submitted}
          setSubmitted={setSubmitted}
          data={data}
          setData={setData}
        />
      ) : (
        <ProductSummary data={data} />
      )}

      {/* <PaymentConfirmed /> */}
    </div>
  );
}
