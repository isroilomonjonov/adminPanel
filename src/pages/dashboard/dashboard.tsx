import React, { useState } from "react";
import MyAppBar from "../../components/appbar";
import BarCharts from "./charts/barcharts/barchart";
import PieCharts from "./charts/piecharts/piecharts";
import Ariacharts from "./charts/ariacharts/ariacharts";
import Maps from "./map/map";
import Filter from "../../components/filter";
import Button from "@mui/material/Button";
import isBetween from "dayjs/plugin/isBetween";
import dayjs from "dayjs";

dayjs.extend(isBetween);
const Dashboard = () => {
  const [filterDate, setFilterDate] = useState<Date[]>();
 const [filter,setFilter]=useState<boolean>(false);
  return (
    <MyAppBar>
      <>
        <h1>Dashboard</h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-around",
            alignItems: "end",
            padding: "20px",
          }}
        >
          <div style={{ width: "80%" }}>
            <Filter setter={setFilterDate} setFilter={setFilter}/>
          </div>
          <div
            style={{
              paddingBottom: "10px",
            }}
          >
            <Button
              onClick={() => {
                setFilter(true)
              }}
              variant="outlined"
              disabled={
                filterDate
                  ? filterDate?.filter((v: Date) => v).length === 1
                    ? true
                    : false
                  : true
              }
            >
              Filter
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <BarCharts filterDate={filterDate} filter={filter} />
          <PieCharts filterDate={filterDate} filter={filter}/>
          <Ariacharts filterDate={filterDate} filter={filter} />
        </div>
        <Maps />
      </>
    </MyAppBar>
  );
};

export default Dashboard;
