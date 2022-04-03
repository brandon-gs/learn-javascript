import React from "react";
import ReactModal from "react-modal";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import Loader from "react-loader-spinner";

ReactModal.setAppElement("#root");

// Config react modal
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 10000000000,
    },
};

interface Props {
    isOpen: boolean;
    nextLesson: string;
    isLoadingModal: boolean;
    setIsOpen: (isOpen: boolean) => void;
    goToNextLesson: () => void;
}

export default function NextProblemModal({
    isOpen,
    isLoadingModal,
    nextLesson,
    setIsOpen,
    goToNextLesson,
}: Props) {
    return (
        <ReactModal isOpen={isOpen} style={customStyles}>
            <div className="modal-container">
                {isLoadingModal ? (
                    <div className="d-flex justify-content-center align-items-center">
                        <Loader
                            type="Bars"
                            color="#0d6efd"
                            height={100}
                            width={100}
                        />
                    </div>
                ) : (
                    <>
                        <VscChromeClose
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: "absolute",
                                width: 24,
                                height: 24,
                                cursor: "pointer",
                                top: 8,
                                right: 8,
                            }}
                        />
                        <BsFillCheckCircleFill
                            color="#198754"
                            style={{
                                width: 160,
                                height: 160,
                            }}
                        />
                        <p>Lección completada</p>
                        <hr></hr>
                        <button
                            onClick={goToNextLesson}
                            className="btn btn-primary"
                            style={{
                                backgroundColor: "#2764a7",
                                borderColor: "#2764a7",
                            }}
                        >
                            {nextLesson !== ""
                                ? "Ir a la siguiente lección"
                                : "Ir a la sección de cursos"}
                        </button>
                    </>
                )}
            </div>
        </ReactModal>
    );
}
