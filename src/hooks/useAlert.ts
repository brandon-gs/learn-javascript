import { useEffect, useState } from "react";
import { TypeAlert } from "../components/Alert";

export default function useAlert(
    visible: boolean,
    type: TypeAlert = "success",
    content: string = ""
) {
    const [currentContent, setCurrentContent] = useState<string>(content);
    const [currentVisible, setCurrentVisible] = useState<boolean>(visible);
    const [currentType, setCurrentType] = useState<TypeAlert>(type);

    const updateAlert = (
        newContent: string,
        newVisible: boolean,
        newType: TypeAlert
    ) => {
        setCurrentContent(newContent);
        setCurrentType(newType);
        setCurrentVisible(newVisible);
    };

    const updateVisible = (newVisible: boolean) =>
        setCurrentVisible(newVisible);

    useEffect(() => {
        // Hide alert after 5000 seconds
        const hideAlert = setTimeout(() => {
            if (visible) {
                setCurrentVisible(false);
            }
        }, 5000);

        return () => {
            clearTimeout(hideAlert);
        };
    }, [visible]);

    return {
        content: currentContent,
        visible: currentVisible,
        type: currentType,
        updateVisible,
        updateAlert,
    };
}
