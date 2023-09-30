import React = require("react");
import styles from "./styles.module.css";

export function Gradient({
    conic,
    className,
    small,
    background,
    logo,
}: {
    small?: boolean;
    conic?: boolean;
    className?: string;
    background?: boolean;
    logo?: boolean;
}): JSX.Element {
    return (
        <span
            className={[
                styles.gradient,
                conic ? styles.glowConic : undefined,
                small ? styles.gradientSmall : styles.gradientLarge,
                background ? styles.backgroundGradient : undefined,
                logo ? styles.logoGradient : undefined,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        />
    );
}
