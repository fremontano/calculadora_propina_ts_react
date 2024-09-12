import { useState } from "react";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";
import { MenuItem } from "./components/MenuItem";
import { OrderContest } from "./components/OrderContest";

function App() {
  const { addItem, order, removeItem } = useOrder();

  return (
    <>
      <div className="bg-success text-white p-4 text-center">
        <h1 className="fs-2">Calculadora de Propina y Consumo</h1>
      </div>

      <div className="main">
        <div className="container mx-auto  mt-5">
          <div className="row ">
            <div className="col-12 col-lg-5 ">
              <h2 className="pb-2 fs-4 fw-bold">Menú</h2>

              <div>
                {menuItems.map((item) => (
                  <MenuItem key={item.id} item={item} addItem={addItem} />
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-7 border pt-2 pe-5">
              <OrderContest order={order} removeItem={removeItem} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
