export default function Alert({
    type,
    content,
    visible,
    className = "",
}: AlertProp) {
    if (!visible) return null;

    return (
        <div className={`alert alert-${type} ${className}`} role="alert">
            <p className="mb-0">{content}</p>
        </div>
    );
}

export interface AlertProp {
    className?: string;
    content: string;
    visible: boolean;
    type: TypeAlert;
}

export type TypeAlert =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
