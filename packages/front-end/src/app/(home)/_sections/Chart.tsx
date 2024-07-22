import React, { useEffect, useRef } from "react";
import { createChart, LineStyle } from "lightweight-charts";

const CandlestickChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current!, {
      width: 600,
      height: 300,
    });
    const candlestickSeries = chart.addCandlestickSeries();

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef?.current?.clientWidth,
      });
    };

    candlestickSeries.setData([
      // Add more data points here
      { time: "2023-07-01", open: 100, high: 120, low: 80, close: 110 },
    ]);

    chart.timeScale().fitContent();

    window.addEventListener("resize", handleResize);

    return () => {
      chart.remove();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={chartContainerRef} className="w-full grow"></div>;
};

export default CandlestickChart;
