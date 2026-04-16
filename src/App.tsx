import { useState, useEffect, createElement } from "react";
import "./App.css";
import { Vacancy, HrEventType, HrEvent } from "./types/vacancies";
import { OP, vacancies } from "./data/opvacancies";
import { testEvents } from "./data/events";
import { createTable } from "./data/events";
import { TableResult } from "./types/vacancies";

function App() {
  const [events, setEvents] = useState<HrEvent[]>(testEvents);

  const [selectedDate, setSelectedDate] = useState("2026-03-01");

  const [table, setTable] = useState<TableResult>({});

  const i = Object.values(OP);
  // console.log("first")
  useEffect(() => {
    setTable(createTable(events, selectedDate));
  }, [events, selectedDate]);
  return (
    <div className="App">
      <h1>Потребность</h1>
      <div className="table">
        <div className="table_top flex">
          <div className="table_top_left">
            <input
              type="date"
              value={selectedDate}
              onChange={(ev) => {
                setSelectedDate(ev.target.value);
              }}
            />
          </div>
          <div className="table_top_right flex">
            {Object.values(vacancies).map((el) => {
              return <p className="vacancy">{el}</p>;
            })}
          </div>
        </div>
        <div className="table_bottom flex">
          <div>
            {Object.values(OP).map((el) => {
              return <p className="op_item">{el}</p>;
            })}
          </div>
          <div className="table_info">
            {Object.entries(OP).map(([opName]) => {
              return (
                <div className="flex">
                  {Object.keys(vacancies).map((vacName) => {
                    // return <p className="cell">{opName} {vacName}</p>
                    const cell = table[opName]?.[vacName];
                    return (
                      <div>
                        <p>Потребность: {cell?.need || 0}</p>
                        <p>Принято: {cell?.hire || 0}</p>
                        <p>Уволено: {cell?.fire || 0} </p>
                        <p>Переедено: {cell?.transfer || 0}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {/* {Object.keys(table).map((Op) => {
                return (
                  <p className="flex row">
                    {Object.keys(table[Op]).map((vac) => {
                      return (
                        <p>
                          {Op} {vac}
                        </p>
                      );
                    })}
                  </p>
                );
              })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
