import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Tooltip,
  LineSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryYAxis,
  LinePrimaryXAxis,
} from "../../data/dummy";

import { useStateContext } from "../../context/ContextProvider";

const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[LineSeries, Tooltip, DateTime, Legend]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((data, index) => (
          <SeriesDirective key={index} {...data} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
