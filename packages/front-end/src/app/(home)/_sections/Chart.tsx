"use client";

import { createChart, ColorType, CrosshairMode } from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import {
  candlestickData,
  chartOptions,
  mainSeriesOptions,
  myPriceFormatter,
  priceScaleOptions,
  timeScaleOptions,
} from "@/constants/chart";
import { useAppSelector } from "@/types";
import ConnectLoader from "@/components/fallback/ConnectLoader";
import Image from "next/image";
import { info } from "@/constants/icons";

export const ChartComponent = (props: any) => {
  const { screenSize, isNetworkAvailable } = useAppSelector(
    (state) => state.appState,
  );

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const handleResize = () => {
        chart.applyOptions({
          width:
            screenSize < 648
              ? screenSize
              : chartContainerRef?.current?.clientWidth,
          height: chartContainerRef?.current?.clientHeight,
        });
      };

      const chart = createChart(
        chartRef?.current!,
        chartOptions(chartContainerRef),
      );
      chart.timeScale().fitContent();

      // Apply the custom priceFormatter to the chart
      chart.applyOptions({
        localization: {
          priceFormatter: myPriceFormatter,
        },

        crosshair: {
          mode: CrosshairMode.Normal,
          // Vertical crosshair line (showing Date in Label)
          vertLine: {
            color: "#9B7DFF",
            // visible: false,
          },
          horzLine: {
            color: "#9B7DFF",
            labelBackgroundColor: "#9B7DFF",
          },
        },
      });

      // Setting the border color for the vertical axis
      chart.priceScale("right").applyOptions(priceScaleOptions);

      // Setting the border color for the horizontal axis
      chart.timeScale().applyOptions(timeScaleOptions);

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
      mainSeries.applyOptions(mainSeriesOptions);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chartRef.current && chart.remove();
      };
    }
  }, [screenSize]);

  return (
    <div ref={chartContainerRef} className="relative h-full w-full">
      <div className="lw-attribution flex flex-col gap-1 text-sm">
        <p className="relative">
          Max Win: 100 SOL
          <button data-state="closed">
            <Image
              src={info}
              alt=""
              width={1000}
              height={1000}
              className="ml-[1px] h-4 w-4 -translate-y-0.5"
            />
          </button>
        </p>
        <p>Max total per round: 150 SOL</p>
      </div>

      {!isNetworkAvailable && (
        <ConnectLoader textStyles="sm:text-2xl" containerStyles="" />
      )}

      <div ref={chartRef} />
    </div>
  );
};

export function CandlestickChart(props: any) {
  return <ChartComponent {...props}></ChartComponent>;
}
