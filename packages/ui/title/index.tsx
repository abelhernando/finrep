import React = require("react");

type TitleProps = {
    scroll: number;
};

export function Title({ scroll }: TitleProps) {
    return (
        <div className="relative h-screen flex justify-center items-center">
            <h1 className={`text-6xl font-bold text-white relative z-10 `}>
                Finance Reports
            </h1>
        </div>
    );
}
