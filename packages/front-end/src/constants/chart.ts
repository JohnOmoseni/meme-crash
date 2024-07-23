"use client";
import { RefObject } from "react";

export const chartOptions = (chartContainerRef: RefObject<HTMLDivElement>) => {
  return {
    layout: {
      background: { color: "#272d3a" },
      textColor: "#DDD",
      fontFamily: "Avenir, sans-serif",
    },
    grid: {
      vertLines: { color: "#444" },
      horzLines: { color: "#444" },
    },
    width: chartContainerRef?.current?.clientWidth,
    height: chartContainerRef?.current?.clientHeight,
  };
};

export const myPriceFormatter = (p: number) => p.toFixed(2);

export const priceScaleOptions = {
  borderColor: "#71649C",
  autoScale: false, // disables auto scaling based on visible content
  scaleMargins: {
    top: 0.1,
    bottom: 0.2,
  },
};

export const timeScaleOptions = {
  borderColor: "#71649C",
  fixLeftEdge: true,
  borderVisible: false,
  rightOffset: 10,
};

export const mainSeriesOptions = {
  upColor: "#26a69a",
  downColor: "#ef5350",
  wickUpColor: "#26a69a",
  wickDownColor: "#ef5350",
  borderVisible: false,
};

export const candlestickData = [
  { time: "2023-07-01", open: 100, high: 120, low: 90, close: 110 },
  { time: "2023-07-02", open: 110, high: 130, low: 100, close: 120 },
  { time: "2023-07-03", open: 120, high: 140, low: 110, close: 130 },
  { time: "2023-07-04", open: 130, high: 150, low: 120, close: 140 },
  { time: "2023-07-05", open: 140, high: 160, low: 130, close: 150 },
  { time: "2023-07-06", open: 150, high: 170, low: 140, close: 160 },
  { time: "2023-07-07", open: 160, high: 180, low: 150, close: 170 },
  { time: "2023-07-08", open: 170, high: 190, low: 160, close: 180 },
  { time: "2023-07-09", open: 180, high: 200, low: 170, close: 190 },
  { time: "2023-07-10", open: 190, high: 210, low: 180, close: 200 },
];
