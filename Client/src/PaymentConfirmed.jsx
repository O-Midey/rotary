import { Icon } from "./Icon";

export const PaymentConfirmed = () => {
  return (
    <>
      <div className="w-full">
        <div className="payment-confirmed w-full border bordered md:max-w-[50%] mx-auto text-center">
          <div className="border-slate-400 mx-auto">
            <Icon />
          </div>
          <h1 className="text-2xl">Thank you for your payment</h1>
          <p>A receipt for your transaction has been sent to your email</p>
          <p>Total payment amount</p>
          <div>
            <p className="text-3xl">N114,823.00</p>
            <p>Order ID: #0000545</p>
          </div>
          <button className="w-[80%] md:max-w-[50%] bg-teal-500 rounded-full p-2 text-white">
            What you paid for
          </button>
          <div className="neg-margin w-full md:max-w-[60%] mx-auto">
            <p>
              [product type] for <br /> [name of buyer], [district no]
            </p>
            <div className="w-[80%] mx-auto border border-solid border-black rounded-[0.9375rem] bg-yellow-50 p-3 my-6">
              <p>Purchased for</p>
            </div>
          </div>
          <button className="w-[80%] mx-auto border border-solid text-white border-black rounded-[0.9375rem] bg-teal-500 p-3 my-6">
            Learn more about the program
          </button>
        </div>
      </div>
    </>
  );
};
