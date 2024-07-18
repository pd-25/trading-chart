"use client";

import {
  createChart,
  ColorType,
  IChartApi,
  ISeriesApi,
  LineStyle,
  SeriesOptionsCommon,
  CandlestickSeriesOptions,
} from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import "../app/globals.css";

interface CandleData {
  open: number;
  high: number;
  low: number;
  close: number;
  time: number;
}

function Home() {
  // Create a ref for the chart container element
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the ref is not null
    if (chartContainerRef.current) {
      // Sample initial data for the candlestick chart
      const initialData: CandleData[] = [
        { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
        { open: 9.55, high: 10.3, low: 9.42, close: 9.94, time: 1642514276 },
        { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
        { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
        { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
        {
          open: 10.17,
          high: 10.96,
          low: 10.16,
          close: 10.47,
          time: 1642859876,
        },
        { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 },
        { open: 10.81, high: 11.6, low: 10.3, close: 10.75, time: 1643032676 },
        { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 },
        {
          open: 10.93,
          high: 11.53,
          low: 10.76,
          close: 10.96,
          time: 1643205476,
        },
        { open: 10.96, high: 11.7, low: 10.8, close: 11.3, time: 1643291876 },
        { open: 11.3, high: 11.8, low: 11.2, close: 11.7, time: 1643378276 },
        { open: 11.7, high: 12.0, low: 11.5, close: 11.9, time: 1643464676 },
        { open: 11.9, high: 12.3, low: 11.7, close: 12.1, time: 1643551076 },
        { open: 12.1, high: 12.5, low: 12.0, close: 12.4, time: 1643637476 },
        { open: 12.4, high: 12.8, low: 12.3, close: 12.7, time: 1643723876 },
        { open: 12.7, high: 13.0, low: 12.6, close: 12.9, time: 1643810276 },
        { open: 12.9, high: 13.2, low: 12.8, close: 13.1, time: 1643896676 },
        { open: 13.1, high: 13.5, low: 13.0, close: 13.3, time: 1643983076 },
        { open: 13.3, high: 13.6, low: 13.2, close: 13.5, time: 1644069476 },
        { open: 13.5, high: 13.8, low: 13.3, close: 13.7, time: 1644155876 },
        { open: 13.7, high: 14.0, low: 13.6, close: 13.8, time: 1644242276 },
        { open: 13.8, high: 14.1, low: 13.7, close: 14.0, time: 1644328676 },
        { open: 14.0, high: 14.3, low: 13.9, close: 14.1, time: 1644415076 },
        { open: 14.1, high: 14.4, low: 14.0, close: 14.2, time: 1644501476 },
        { open: 14.2, high: 14.5, low: 14.1, close: 14.3, time: 1644587876 },
        { open: 14.3, high: 14.6, low: 14.2, close: 14.4, time: 1644674276 },
        { open: 14.4, high: 14.7, low: 14.3, close: 14.5, time: 1644760676 },
        { open: 14.5, high: 14.8, low: 14.4, close: 14.6, time: 1644847076 },
        { open: 14.6, high: 14.9, low: 14.5, close: 14.7, time: 1644933476 },
        { open: 14.7, high: 15.0, low: 14.6, close: 14.8, time: 1645019876 },
        { open: 14.8, high: 15.1, low: 14.7, close: 14.9, time: 1645106276 },
        { open: 14.9, high: 15.2, low: 14.8, close: 15.0, time: 1645192676 },
        { open: 15.0, high: 15.3, low: 14.9, close: 15.1, time: 1645279076 },
        { open: 15.1, high: 15.4, low: 15.0, close: 15.2, time: 1645365476 },
        { open: 15.2, high: 15.5, low: 15.1, close: 15.3, time: 1645451876 },
        { open: 15.3, high: 15.6, low: 15.2, close: 15.4, time: 1645538276 },
        { open: 15.4, high: 15.7, low: 15.3, close: 15.5, time: 1645624676 },
        { open: 15.5, high: 15.8, low: 15.4, close: 15.6, time: 1645711076 },
        { open: 15.6, high: 15.9, low: 15.5, close: 15.7, time: 1645797476 },
        { open: 15.7, high: 16.0, low: 15.6, close: 15.8, time: 1645883876 },
        { open: 15.8, high: 16.1, low: 15.7, close: 15.9, time: 1645970276 },
        { open: 15.9, high: 16.2, low: 15.8, close: 16.0, time: 1646056676 },
      ];

      // Create chart instance
      const chart: IChartApi = createChart(chartContainerRef.current, {
        layout: {
          background: { color: "#222" },
          textColor: "#DDD",
        },
        grid: {
          vertLines: { color: "#444" },
          horzLines: { color: "#444" },
        },
        width: chartContainerRef.current.clientWidth,
        height: 500,
      });

      // Add candlestick series
      const candlestickSeriesOptions: CandlestickSeriesOptions = {
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      };

      const newSeries: ISeriesApi<"Candlestick"> = chart.addCandlestickSeries(
        candlestickSeriesOptions
      );
      newSeries.setData(initialData);

      // Apply options to price scale
      chart.priceScale("right").applyOptions({
        borderColor: "#71649C",
      });

      // Apply options to time scale
      chart.timeScale().applyOptions({
        borderColor: "#71649C",
      });

      // Cleanup function to remove the chart on component unmount
      return () => {
        chart.remove();
      };
    }
  }, [chartContainerRef]);

  return <div ref={chartContainerRef} style={{ height: "400px" }}></div>;
}

export default Home;
