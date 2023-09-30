import * as React from "react";
import { Gradient } from "./gradient";

type AnimatedArrowProps = {
    onClick?: () => void;
};

export function AnimatedArrow({
    onClick = () => {
        return;
    },
}: AnimatedArrowProps): JSX.Element {
    return (
        <>
            <Gradient logo conic small />
            <div
                onClick={onClick}
                className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"
                style={{ marginTop: 50 }}
            >
                <svg
                    className="w-6 h-6 text-violet-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ zIndex: 100 }}
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </>
    );
}
