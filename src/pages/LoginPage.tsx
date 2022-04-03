import { Login } from "../components/Login";
import ProtectedRoute from "../components/ProtectedRoute";

export default function LoginPage() {
    return (
        <ProtectedRoute type="public">
            <Login />
        </ProtectedRoute>
    );
}
