import { ForgotPassword } from "../components/ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute";

export default function ForgotPasswordPage() {
    return (
        <ProtectedRoute type="public">
            <ForgotPassword />
        </ProtectedRoute>
    );
}
