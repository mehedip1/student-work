import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutFrom";


const stripePromise = loadStripe(import.meta.env.VITE_PAY_PK);
const Payment = () => {
    return (
        <div>
       
            <h2 className="text-3xl text-center">Payment Now</h2>
            <Elements stripe={stripePromise}>
                <CheckoutFrom></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;