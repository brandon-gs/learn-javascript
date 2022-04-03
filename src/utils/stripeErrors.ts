// Object with translations for Stripe code errors
const errorCode = {
    expired_card: "Tu tarjeta expiró",
    incorrect_cvc: "Código CVC incorrecto",
    incorrect_number: "Número de tarjeta incorrecto",
};

const declineCode = {
    generic_decline: "Tarjeta declinada",
    insufficient_funds: "Fondos insuficientes",
    lost_card: "Tarjeta perdida",
    stolen_card: "Tarjeta robada",
};

const stripeErrors: Record<string, Record<string, string>> = {
    errorCode,
    declineCode,
};

export default stripeErrors;
