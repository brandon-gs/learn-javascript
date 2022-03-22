import { PaymentType } from "./../utils/payment";
import { firebaseClient } from "../utils/firebaseConfig";

const db = firebaseClient.collection("/payments");

export interface Payment {
    user_email: string;
    type: string;
}

class PaymentsService {
    async getByEmail(user_email: string) {
        const payments = (await db.where("user_email", "==", user_email).get())
            .docs;

        const currentPayments: Payment[] = [];
        payments.forEach((payment) => {
            currentPayments.push(payment.data() as Payment);
        });
        return currentPayments;
    }

    async getByEmailAndPaymentType(user_email: string, payment: PaymentType) {
        const payments = (
            await db
                .where("user_email", "==", user_email)
                .where("type", "==", payment)
                .get()
        ).docs;

        const currentPayments: Payment[] = [];

        payments.forEach((payment) => {
            currentPayments.push(payment.data() as Payment);
        });

        return currentPayments;
    }

    create(payment: Payment) {
        return db.add(payment);
    }

    update(id: string, payment: Payment) {
        return db.doc(id).update(payment);
    }

    delete(id: string) {
        return db.doc(id).delete();
    }
}

export default new PaymentsService();
