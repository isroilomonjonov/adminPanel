import { useState, useEffect } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartData } from "../../../../interface";
import { useSelector } from "react-redux";
import { isWithinInterval, parseISO } from "date-fns";
const Ariacharts = ({
  filterDate,
  filter,
}: {
  filterDate?: Date[];
  filter: boolean;
}) => {
  const chart = useSelector((state: any) => state.data.chart.ariaChart);
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
      <h2>Chiqimlar</h2>
      <AreaChart
        width={700}
        height={300}
        data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="chiqimlar"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

export default Ariacharts;
