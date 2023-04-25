import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ChartData } from "../../../../interface";
import { useSelector } from "react-redux";
import { isWithinInterval, parseISO } from "date-fns";
import { useEffect } from 'react';

export default function BarCharts({ filterDate,filter }: { filterDate?: Date[],filter:boolean }) {
  const chart = useSelector((state: any) => state.data.chart.barChartData);
  const newChart = chart.slice(0, 10);
  const [chartData, setChartData] = useState<ChartData[]>(newChart);
  useEffect(() => {
    if (filter) {
      const allData = chart.filter((e: ChartData) => {
        const [month, day, year] = e.createdAt?.split("/");
        const dateChart = new Date(+year, +month - 1, +day).toISOString();
        const date = filterDate?.map((e: Date) => e.toISOString());
        const startDate = parseISO(`${date?.at(0)}`);
        const endDate = parseISO(`${date?.at(1)}`);
        const checkDate = parseISO(`${dateChart}`);
        return isWithinInterval(checkDate, { start: startDate, end: endDate });
      });
      if (allData.length > 10) {
        const newData = allData.slice(0, 10);
        setChartData(newData);
      } else {
        setChartData(allData);
      }
    }
  }, [filter, filterDate,chart]);
  return (
    <div>
    <h2>Tushumlar</h2> 
     <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="tushumlar" fill="#8884d8" />
    </BarChart>
    </div>
  
  );
}
