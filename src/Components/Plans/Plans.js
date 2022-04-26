import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap-v5";
import Cards from "../Cards/Cards";
import Menubar from "../Menu-bar/Menubar";

const Plans = () => {
  const [plans, setPlans] = useState("");
  useEffect(() => {
    fetch("http://demo3755793.mockable.io/plans")
      .then((res) => res.json())
      .then((data) => {
          setPlans(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Menubar></Menubar>
      <div>
        <Card style={{ width: "18rem" }}>
          {
              plans.map(data=><Cards
              data={data}
              ></Cards>)
          }
        </Card>
      </div>
    </div>
  );
};

export default Plans;
