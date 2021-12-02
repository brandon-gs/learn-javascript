import React from "react";
import Instruction from "./Instruction";

interface Props {
    instructions: string[];
    executed: boolean;
    solvedTests: number[];
}

export default function ListInstructions({
    instructions,
    executed,
    solvedTests,
}: Props) {
    return (
        <>
            {instructions.map((instruction: string, index: number) => {
                return (
                    <Instruction
                        key={`instruction-${index}`}
                        executed={executed}
                        instruction={instruction}
                        index={index}
                        solvedTests={solvedTests}
                    />
                );
            })}
        </>
    );
}
