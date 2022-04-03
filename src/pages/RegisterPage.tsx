import ProtectedRoute from "../components/ProtectedRoute";
import { Register } from "../components/Register";

export default function RegisterPage() {
    return (
        <ProtectedRoute type="public">
            <Register />
        </ProtectedRoute>
    );
}
