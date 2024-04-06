import "./App.css";

import { Suspense, lazy, useEffect, useState } from "react";
import CustomCircularLoading from "./Components/CustomCircularLoading";
// import LineChart from "./Charts/LineChart";

const LineChart = lazy(() => import("./Components/Charts/LineChart"));

function App() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Y",
        data: [],
        borderColor: "rgb(75,192, 192)",
      },
    ],
  });

  const fetchData = async () => {
    let response = await fetch("https://retoolapi.dev/o5zMs5/data");
    const y = await response.json();
    response = await fetch("https://retoolapi.dev/gDa8uC/data");
    const x = await response.json();
    formatData([...x], [...y]);
  };

  const formatData = (x, y) => {
    x = x
      .map((val) => {
        return {
          id: parseInt(val.id),
          Label: val.Label,
          RandomNumber: val.RandomNumber,
        };
      })
      .sort((a, b) => a.id - b.id);

    const formatedData = x
      .filter((ele) => ele.id <= 50)
      .map((ele, i) => {
        return { x: ele.RandomNumber, y: y[i].RandomNumber };
      });

    const labels = [];
    const dataValues = [];
    formatedData.forEach((ele) => {
      labels.push(ele.x);
      dataValues.push(ele.y);
    });

    setData({
      labels,
      datasets: [
        {
          label: "Y",
          data: dataValues,
          borderColor: "rgb(75,192, 192)",
        },
      ],
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => console.log(data), []);

  return (
    <div className="app">
      <h1>Plot for X Y Values given below</h1>
      <div className="links">
        <a href="https://retoolapi.dev/gDa8uC/data">X values</a>
        <a href="https://retoolapi.dev/o5zMs5/data">Y values</a>
      </div>
      <div className="container">
        <Suspense
          fallback={
            <CustomCircularLoading size={100} color={"rgb(75,192, 192)"} />
          }
        >
          <LineChart data={data} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
