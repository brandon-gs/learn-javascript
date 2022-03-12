import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLIC_KEY ||
        "pk_test_51Kc0UeEqY7vcnX4vDJFCSUC18gW2toh7KaHfyafymJysGxRL9HLHCG08z848PbBHQoPS0YDAxXcUERDKHdogrdV100cQr7TB0U"
);

function Form() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit: React.FormEventHandler = async (e) => {
        e.preventDefault();

        if (stripe && elements) {
            const card = elements.getElement(CardElement);
            if (card) {
                const { error, paymentMethod } =
                    await stripe.createPaymentMethod({
                        type: "card",
                        card,
                    });
                
                if (!error) {
                    console.log(paymentMethod)
                }

            }
        }
    };

    return (
        <div
            className="modal fade"
            id="stripeModal"
            tabIndex={-1}
            role="dialog"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Realizar compra</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            data-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className="card">
                            <CardElement className="form-control" />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <div className="d-grid gap-2 f-width">
                            <button type="submit" className="btn btn-success">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function StripeForm() {
    return (
        <Elements stripe={stripePromise}>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#stripeModal"
            >
                Desbloquear proyectos
            </button>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <Form />
                    </div>
                </div>
            </div>
        </Elements>
    );
}
