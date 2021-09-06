import { Problems } from "../components/Problems";
import ProtectedRoute from "../components/ProtectedRoute";

export default function ProblemsPage() {
    return (
        <ProtectedRoute type="private">
            <Problems />
        </ProtectedRoute>
    );
}
