import { createChart, ColorType, CrosshairMode } from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import {
  candlestickData,
  chartOptions,
  myPriceFormatter,
} from "@/constants/chart";

export const ChartComponent = (props: any) => {
  const {
    colors: {
      backgroundColor = "white",
      lineColor = "#2962FF",
      textColor = "black",
      areaTopColor = "#2962FF",
      areaBottomColor = "rgba(41, 98, 255, 0.28)",
    } = {},
  } = props;

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const handleResize = () => {
        chart.applyOptions({ width: chartContainerRef?.current?.clientWidth });
      };

      const chart = createChart(
        chartContainerRef?.current!,
        chartOptions(chartContainerRef),
      );
      chart.timeScale().fitContent();

      // Apply the custom priceFormatter to the chart
      chart.applyOptions({
        localization: {
          priceFormatter: myPriceFormatter,
        },

        crosshair: {
          // Change mode from default 'magnet' to 'normal'.
          // Allows the crosshair to move freely without snapping to datapoints
          mode: CrosshairMode.Normal,

          // Vertical crosshair line (showing Date in Label)
          vertLine: {
            color: "#C3BCDB44",
            labelBackgroundColor: "#9B7DFF",
          },

          // Horizontal crosshair line (showing Price in Label)
          horzLine: {
            color: "#9B7DFF",
            labelBackgroundColor: "#9B7DFF",
          },
        },
      });

      // Setting the border color for the vertical axis
      chart.priceScale("right").applyOptions({
        borderColor: "#71649C",
      });

      // Setting the border color for the horizontal axis
      chart.timeScale().applyOptions({
        borderColor: "#71649C",
      });

      // Convert the candlestick data for use with a line series
      const lineData = candlestickData.map((datapoint) => ({
        time: datapoint.time,
        value: (datapoint.close + datapoint.open) / 2,
      }));

      // Add an area series to the chart, - Adding this before we add the candlestick chart so that it will appear beneath the candlesticks
      const areaSeries = chart.addAreaSeries({
        lastValueVisible: false, // hide the last value marker for this series
        crosshairMarkerVisible: false, // hide the crosshair marker for this series
        lineColor: "transparent", // hide the line
        topColor: "rgba(56, 33, 110,0.6)",
        bottomColor: "rgba(56, 33, 110, 0.1)",
      });

      // Create the Main Series (Candlesticks)
      const mainSeries = chart.addCandlestickSeries();

      // Set the data for the Main Series
      mainSeries.setData(candlestickData);
      // Set the data for the Area Series
      areaSeries.setData(lineData);

      // Changing the Candlestick colors
      mainSeries.applyOptions({
        wickUpColor: "rgb(54, 116, 217)",
        upColor: "rgb(54, 116, 217)",
        wickDownColor: "rgb(225, 50, 85)",
        downColor: "rgb(225, 50, 85)",
        borderVisible: false,
      });

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chartContainerRef.current && chart.remove();
      };
    }
  }, [backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

  return <div ref={chartContainerRef} />;
};

export function CandlestickChart(props: any) {
  return <ChartComponent {...props}></ChartComponent>;
}
