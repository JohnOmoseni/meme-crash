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
    height: 200,
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
  { time: 1622505600, open: 100, high: 105, low: 95, close: 102 },
  { time: 1622592000, open: 102, high: 107, low: 97, close: 103 },
  { time: 1622678400, open: 103, high: 110, low: 99, close: 105 },
  { time: 1622764800, open: 105, high: 115, low: 100, close: 110 },
  { time: 1622851200, open: 110, high: 120, low: 105, close: 115 },
  { time: 1622937600, open: 115, high: 125, low: 110, close: 120 },
  { time: 1623024000, open: 120, high: 130, low: 115, close: 125 },
  { time: 1623110400, open: 125, high: 135, low: 120, close: 130 },
  { time: 1623196800, open: 130, high: 140, low: 125, close: 135 },
  { time: 1623283200, open: 135, high: 145, low: 130, close: 140 },
  { time: 1623369600, open: 140, high: 150, low: 135, close: 145 },
  { time: 1623456000, open: 145, high: 155, low: 140, close: 150 },
  { time: 1623542400, open: 150, high: 160, low: 145, close: 155 },
  { time: 1623628800, open: 155, high: 165, low: 150, close: 160 },
  { time: 1623715200, open: 160, high: 170, low: 155, close: 165 },
  { time: 1623801600, open: 165, high: 175, low: 160, close: 170 },
  { time: 1623888000, open: 170, high: 180, low: 165, close: 175 },
  { time: 1623974400, open: 175, high: 185, low: 170, close: 180 },
  { time: 1624060800, open: 180, high: 190, low: 175, close: 185 },
  { time: 1624147200, open: 185, high: 195, low: 180, close: 190 },
  { time: 1624233600, open: 190, high: 200, low: 185, close: 195 },
  { time: 1624320000, open: 195, high: 205, low: 190, close: 200 },
  { time: 1624406400, open: 200, high: 210, low: 195, close: 205 },
  { time: 1624492800, open: 205, high: 215, low: 200, close: 210 },
  { time: 1624579200, open: 210, high: 220, low: 205, close: 215 },
  { time: 1624665600, open: 215, high: 225, low: 210, close: 220 },
  { time: 1624752000, open: 220, high: 230, low: 215, close: 225 },
  { time: 1624838400, open: 225, high: 235, low: 220, close: 230 },
  { time: 1624924800, open: 230, high: 240, low: 225, close: 235 },
  { time: 1625011200, open: 235, high: 245, low: 230, close: 240 },
  { time: 1625097600, open: 240, high: 250, low: 235, close: 245 },
  { time: 1625184000, open: 245, high: 255, low: 240, close: 250 },
  { time: 1625270400, open: 250, high: 260, low: 245, close: 255 },
  { time: 1625356800, open: 255, high: 265, low: 250, close: 260 },
  { time: 1625443200, open: 260, high: 270, low: 255, close: 265 },
  { time: 1625529600, open: 265, high: 275, low: 260, close: 270 },
  { time: 1625616000, open: 270, high: 280, low: 265, close: 275 },
  { time: 1625702400, open: 275, high: 285, low: 270, close: 280 },
  { time: 1625788800, open: 280, high: 290, low: 275, close: 285 },
  { time: 1625875200, open: 285, high: 295, low: 280, close: 290 },
  { time: 1625961600, open: 290, high: 300, low: 285, close: 295 },
  { time: 1626048000, open: 295, high: 305, low: 290, close: 300 },
  { time: 1626134400, open: 300, high: 310, low: 295, close: 305 },
  { time: 1626220800, open: 305, high: 315, low: 300, close: 310 },
  { time: 1626307200, open: 310, high: 320, low: 305, close: 315 },
  { time: 1626393600, open: 315, high: 325, low: 310, close: 320 },
  { time: 1626480000, open: 320, high: 330, low: 315, close: 325 },
  { time: 1626566400, open: 325, high: 335, low: 320, close: 330 },
  { time: 1626652800, open: 330, high: 340, low: 325, close: 335 },
  { time: 1626739200, open: 335, high: 345, low: 330, close: 340 },
];
