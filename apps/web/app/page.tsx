"use client";

import {
    BarChart,
    Table,
    DoughnutChart,
    AnimatedArrow,
    Gradient,
    Title,
} from "ui";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import useScroll from "../hooks/scroller";
import { getFinance } from "../services";

export default function Page(): JSX.Element {
    const [data, setData] = useState<any>(null);
    const scrollY = useScroll();

    useEffect(() => {
        scrollTo({ top: 0, behavior: "smooth" });
        getFinance().then((res) => setData(res));
    }, []);

    const fadeIn = scrollY > 399 ? 0 : 100;
    const fadeOut = scrollY < 399 ? 0 : 100;

    return (
        <main className={`${styles.main} scroll-smooth`}>
            <img
                aria-hidden="true"
                width="2712"
                height="2712"
                className="position-absolute top-0 right-0 height-auto col-11 events-none"
                loading="lazy"
                decoding="async"
                src="/bg-stars-1.webp"
                style={{ position: "absolute", zIndex: -1, top: 0 }}
            ></img>

            <div
                className="transition-opacity duration-500 ease-in-out"
                style={{ opacity: fadeIn }}
            >
                <Title scroll={scrollY} />

                <Gradient background conic />
                <div
                    className="flex justify-center"
                    style={{ position: "relative", top: "-100px" }}
                >
                    <AnimatedArrow
                        onClick={() => {
                            scrollTo({ top: 1200, behavior: "smooth" });
                        }}
                    />
                </div>
            </div>

            {data && (
                <div
                    className={[
                        "transition-opacity duration-500 ease-in-out",
                        styles.chartContainer,
                    ].join(" ")}
                    style={{ opacity: fadeOut }}
                >
                    <Gradient className={styles.gradientContainer} conic />
                    {scrollY >= 400 && (
                        <>
                            <section className="flex flex-row gap-12">
                                <DoughnutChart data={data.distributionByType} />
                                <div>
                                    <BarChart
                                        title="Inversion by Currency"
                                        data={data.distributionByCurrency}
                                    />
                                    <BarChart
                                        title="Inversion by Entity"
                                        data={data.distributionByEntity}
                                    />
                                </div>
                            </section>

                            <section className="w-full ">
                                <h2 className="text-center">Summary</h2>
                                <Table data={data.summary} />
                            </section>
                        </>
                    )}
                </div>
            )}
        </main>
    );
}
