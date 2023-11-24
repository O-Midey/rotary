import "./App.css";
import { PaymentConfirmed } from "./PaymentConfirmed";
// import { ProductSummary } from "./ProductSummary";

// import { RegistrationContainer } from "./RegistrationContainer";
import { Header } from "./header";

export default function App() {
  return (
    <div>
      <Header />
      {/* <RegistrationContainer /> */}
      {/* <ProductSummary /> */}
      <PaymentConfirmed />
    </div>
  );
}
