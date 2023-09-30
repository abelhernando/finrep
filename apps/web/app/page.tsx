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
import axios from "axios";
import useScroll from "../hooks/scroller";

/**
 * 1. finnish the data
 * 2. focus in the distribution of the code
 * 3. focus in the layout
 * 4. check styles
 * 5. add animations
 */
export default function Page(): JSX.Element {
    const [data, setData] = useState<any>(null);
    const scrollY = useScroll();

    useEffect(() => {
        const API_URL = "http://localhost:3001";
        axios
            .get<any[]>(`${API_URL}/finance`)
            .then((response) => {
                setData(response.data);
                console.log("Data:", response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const fadeIn = scrollY > 399 ? 0 : 100;
    const fadeOut = scrollY < 399 ? 0 : 100;

    return (
        <main className={`${styles.main} scroll-smooth`}>
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
                            scrollTo({ top: 800, behavior: "smooth" });
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
                            <section className="flex flex-row">
                                <DoughnutChart data={data.distributionByType} />
                                <div>
                                    <BarChart
                                        data={data.distributionByCurrency}
                                    />
                                    <BarChart
                                        data={data.distributionByEntity}
                                    />
                                </div>
                            </section>

                            <section className="w-full ">
                                <Table data={data.summary} />
                            </section>
                        </>
                    )}
                </div>
            )}
        </main>
    );
}
