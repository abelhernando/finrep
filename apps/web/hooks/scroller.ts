import { useEffect, useState } from "react";

export function useScroll(limit = 500): number {
    const [scrollMultiple, setScrollMultiple] = useState<number>(0);

    useEffect(function () {
        function handleScroll() {
            const scrollY = window.scrollY;
            const scrollMultiple = Math.floor(scrollY / 100) * 100;

            if (scrollMultiple > limit) {
                return;
            }

            setScrollMultiple(scrollMultiple);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollMultiple;
}

export default useScroll;
