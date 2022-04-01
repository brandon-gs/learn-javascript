import axios from "axios";
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BiLockOpenAlt } from "react-icons/bi";
import cart from "../assets/img/cart.png";
import stripeErrors from "../utils/stripeErrors";
import { useState } from "react";
import { PaymentType } from "../utils/payment";
import PaymentsService from "../services/payments";

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLIC_KEY ||
        "pk_test_51Kc0UeEqY7vcnX4vDJFCSUC18gW2toh7KaHfyafymJysGxRL9HLHCG08z848PbBHQoPS0YDAxXcUERDKHdogrdV100cQr7TB0U"
);


interface StripeBuyFormProps {
    updatePayment: () => void;
}

function Form({ updatePayment }: StripeBuyFormProps) {
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>("");

    const handleSubmit: React.FormEventHandler = async (e) => {
        e.preventDefault();

        setMessageError(() => "");
        setLoading(() => true);

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            return 
        }

        if (paymentMethod) {
            const { id } = paymentMethod;
            const { data } = await axios.post(
                "http://localhost:3001/api/checkout",
                {
                    id,
                    amount: 100 * 5,
                    description: PaymentType.CHALLENGES,
                }
            );
            // Manage errors
            if (data.error) {
                let error = "Error al procesar, intentalo más tarde";
                if (data.decline_code) {
                    error = stripeErrors.declineCode[data.decline_code];
                } else {
                    error = stripeErrors.errorCode[data.code];
                }
                setMessageError(error);
            } else {
                // Acciones a ejecutar cuando el pago se haya realizado satisfactoriamente
                elements.getElement(CardElement)?.clear();
                const email = localStorage.getItem("email");
                if (email) {
                    await PaymentsService.create({
                        user_email: email,
                        type: PaymentType.CHALLENGES,
                    });
                    updatePayment()
                }
                setSuccess(() => true);
            }
        }

        setLoading(() => false);
    };

    if (success) {
        return null
    }

    return (
        <form onSubmit={handleSubmit}>
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
                            {!success ? (
                                <div>
                                    {messageError !== "" && (
                                        <div
                                            className="alert alert-danger"
                                            role="alert"
                                        >
                                            {messageError}
                                        </div>
                                    )}
                                    <img
                                        src={cart}
                                        alt="Imagen decorativa de un carrito de compra"
                                        className="img-fluid mx-auto d-block my-2"
                                        width={160}
                                    />
                                    <h3 className="h5 float-end">
                                        Precio:{" "}
                                        <span className="text-secondary">
                                            $5 USD
                                        </span>
                                    </h3>
                                    <label htmlFor="card" className="mt-5 mb-3">
                                        Datos de la tarjeta
                                    </label>
                                    <CardElement
                                        id="card"
                                        className="form-control"
                                    />
                                </div>
                            ) : (
                                <div className="alert alert-success">
                                    <strong>
                                        Compra realizada correctamente
                                    </strong>
                                </div>
                            )}
                        </div>
                        <div className="modal-footer">
                            <div className="d-grid gap-2 f-width">
                                {!success ? (
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        disabled={!stripe || loading}
                                    >
                                        {loading ? (
                                            <div
                                                className="spinner-border text-light"
                                                role="status"
                                            ></div>
                                        ) : (
                                            "Comprar"
                                        )}
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        data-bs-dismiss="modal"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        Finalizar
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

interface StripeFormProps {
    updatePayment: () => void;
}

export default function StripeForm({ updatePayment }: StripeFormProps) {
    return (
        <Elements stripe={stripePromise}>
            <button
                type="button"
                className="list-group-item list-group-item-action count-exercise bg-secondary"
                data-toggle="modal"
                data-target="#stripeModal"
            >
                Comprar desafíos
                <span className="float-end">
                    <BiLockOpenAlt size={24} />
                </span>
            </button>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <Form updatePayment={updatePayment} />
                    </div>
                </div>
            </div>
        </Elements>
    );
}
