import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) =>{
        event.preventDefault();

if(!stripe || !elements) {
    return
}

const card = elements.getElement(CardElement);

   if(card === null){
    return
   } 
   console.log('card', card)   

    }

    return (
        <form className="w-2/3 m-8 justify-between" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-outline btn-primary w-2/3 mt-4" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
};

export default CheckoutFrom;