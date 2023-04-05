import { useState } from "react";
import { useSelector } from "react-redux";

import AreaChart from "../Dashboard/AreaChart";
import BarChart from "../Dashboard/BarChart";
import Wrapper from "./ChartsContainerWrapper";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <Wrapper>
      <h4>Статистика за месец</h4>
      <button type="'button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Графика (Area)" : "Графика (Bar)"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
