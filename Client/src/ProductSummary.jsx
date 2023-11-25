import { PayNowButton } from "./PayNowButton";

export const ProductSummary = (props) => {
  console.log(props);

  const groupNames =
    props.data.names &&
    props.data.names.map((name, index) => (
      <div key={index}>
        {name} <br />
      </div>
    ));

  return (
    <>
      <div className="p-4 form-field py-12 md:px-24 ">
        <h1 className="text-3xl">You are almost done!</h1>
        <p>Review & Checkout</p>
        <div className=" block lg:flex justify-start mt-10 gap-8">
          <div className="  product-details w-full md:w-[4/5] md:border-slate-400 bg-white p-4 md:p-10 ">
            <div className="font-bold border-b-2 p-2">
              <h1>Product</h1>
            </div>
            <p className="">
              {props.data.product} for <br /> {props.data.email}
            </p>
            <div className="md:flex items-start gap-4">
              <div className="paying-for p-4 md:min-w-[300px] md:w-full">
                Paying For:{" "}
                {props.data.product === "Group Registration"
                  ? groupNames
                  : props.data.email}
                <br />
              </div>
              <button className="border border-slate-400 px-8 py-2 mt-3 md:mt-0 block w-full md:max-w-[300px] rounded-[15px]">
                Cancel/Modify
              </button>
            </div>
          </div>
          <div className=" mt-10 lg:mt-0 lg:min-w-[30%]">
            <div className="order-summary ">
              <h1 className="text-center text-xl">Order Summary</h1>
              <div className="flex-apart">
                <p>Order ID</p>
                <p>#0000545</p>
              </div>
              <div className="flex-apart">
                <p>Subtotal</p>
                <p>{props.data.price}</p>
              </div>
              <div className="flex-apart">
                <p>Transaction Fee</p>
                <p>N1,822.35</p>
              </div>
              <p className="text-center">Total</p>
              <p className="text-center text-3xl">
                {parseInt(props.data.price) + 1800}
              </p>
              <PayNowButton data={props.data} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
