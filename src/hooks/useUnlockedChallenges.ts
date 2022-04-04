import PaymentsService from "../services/payments";
import { useCallback, useEffect, useState } from "react";
import { PaymentType } from "../utils/payment";

export default function useUnlockedChallenges(execute = true) {
    // Allow to know if the user pays for the challenges
    const [unlockedChallenges, setUnlockedChallenges] =
        useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(true);

    const email = localStorage.getItem("email");

    const getUnlockedChallenges = useCallback(async () => {
        setLoading(() => true);
        if (email) {
            const payments = await PaymentsService.getByEmailAndPaymentType(
                email,
                PaymentType.CHALLENGES
            );
            setUnlockedChallenges(payments.length > 0);
        }
        setLoading(() => false);
    }, [email]);

    useEffect(() => {
        if (execute) {
            getUnlockedChallenges();
        }
        // eslint-disable-next-line
    }, [execute]);

    return { unlockedChallenges, loading, getUnlockedChallenges };
}
