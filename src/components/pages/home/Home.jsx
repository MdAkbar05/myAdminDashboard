import { useState } from "react";
import FeaturedInfo from "../../FeaturedInfo/FeaturedInfo";
import "./home.css";
import Chart from "../../chart/Chart";
import { userData } from "../../../DummyData";
import WidgetSM from "../../widgetSM/WidgetSM";
import WidgetLM from "../../widgetLM/WidgetLM";
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analystics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidget">
        <WidgetSM />
        <WidgetLM />
      </div>
    </div>
  );
};

export default Home;
