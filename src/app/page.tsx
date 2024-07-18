"use client"
import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from "react";
// import "./page.module.css"

import '../app/globals.css';
function Home() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const initialData = [
        { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
        { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 },
        { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
        { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
        { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 },
        { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
        { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 },
        { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 },
        { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 },
        { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
        { open: 10.96, high: 11.70, low: 10.80, close: 11.30, time: 1643291876 },
        { open: 11.30, high: 11.80, low: 11.20, close: 11.70, time: 1643378276 },
        { open: 11.70, high: 12.00, low: 11.50, close: 11.90, time: 1643464676 },
        { open: 11.90, high: 12.30, low: 11.70, close: 12.10, time: 1643551076 },
        { open: 12.10, high: 12.50, low: 12.00, close: 12.40, time: 1643637476 },
        { open: 12.40, high: 12.80, low: 12.30, close: 12.70, time: 1643723876 },
        { open: 12.70, high: 13.00, low: 12.60, close: 12.90, time: 1643810276 },
        { open: 12.90, high: 13.20, low: 12.80, close: 13.10, time: 1643896676 },
        { open: 13.10, high: 13.50, low: 13.00, close: 13.30, time: 1643983076 },
        { open: 13.30, high: 13.60, low: 13.20, close: 13.50, time: 1644069476 },
        { open: 13.50, high: 13.80, low: 13.30, close: 13.70, time: 1644155876 },
        { open: 13.70, high: 14.00, low: 13.60, close: 13.80, time: 1644242276 },
        { open: 13.80, high: 14.10, low: 13.70, close: 14.00, time: 1644328676 },
        { open: 14.00, high: 14.30, low: 13.90, close: 14.10, time: 1644415076 },
        { open: 14.10, high: 14.40, low: 14.00, close: 14.20, time: 1644501476 },
        { open: 14.20, high: 14.50, low: 14.10, close: 14.30, time: 1644587876 },
        { open: 14.30, high: 14.60, low: 14.20, close: 14.40, time: 1644674276 },
        { open: 14.40, high: 14.70, low: 14.30, close: 14.50, time: 1644760676 },
        { open: 14.50, high: 14.80, low: 14.40, close: 14.60, time: 1644847076 },
        { open: 14.60, high: 14.90, low: 14.50, close: 14.70, time: 1644933476 },
        { open: 14.70, high: 15.00, low: 14.60, close: 14.80, time: 1645019876 },
        { open: 14.80, high: 15.10, low: 14.70, close: 14.90, time: 1645106276 },
        { open: 14.90, high: 15.20, low: 14.80, close: 15.00, time: 1645192676 },
        { open: 15.00, high: 15.30, low: 14.90, close: 15.10, time: 1645279076 },
        { open: 15.10, high: 15.40, low: 15.00, close: 15.20, time: 1645365476 },
        { open: 15.20, high: 15.50, low: 15.10, close: 15.30, time: 1645451876 },
        { open: 15.30, high: 15.60, low: 15.20, close: 15.40, time: 1645538276 },
        { open: 15.40, high: 15.70, low: 15.30, close: 15.50, time: 1645624676 },
        { open: 15.50, high: 15.80, low: 15.40, close: 15.60, time: 1645711076 },
        { open: 15.60, high: 15.90, low: 15.50, close: 15.70, time: 1645797476 },
        { open: 15.70, high: 16.00, low: 15.60, close: 15.80, time: 1645883876 },
        { open: 15.80, high: 16.10, low: 15.70, close: 15.90, time: 1645970276 },
        { open: 15.90, high: 16.20, low: 15.80, close: 16.00, time: 1646056676 },
      ];
      

      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { color: '#222' },
          textColor: '#DDD',
        },
        grid: {
          vertLines: { color: '#444' },
          horzLines: { color: '#444' },
        },
        width: chartContainerRef.current.clientWidth,
        height: 500,
      });

      const newSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350'
      });

      newSeries.setData(initialData);
      chart.priceScale("right").applyOptions({
        borderColor: '#71649C',
      });

      // Setting the border color for the horizontal axis
      chart.timeScale().applyOptions({
        borderColor: '#71649C',
      });
      return () => {
        chart.remove();
      }
    }
  }, [chartContainerRef]);

  return (
    <div ref={chartContainerRef} style={{ height: '400px' }}></div>
  );
}

export default Home;
