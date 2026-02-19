import { useState } from "react";
import "./App.css";
import { Vacancy, HrEventType, HrEvent } from "./types/vacancies";

function App() {
  // const a:Vacancy = {
  //   id: '1',
  //   title: 'Kasha'
  // }

  const a:HrEventType = "need"

  const [events, setEvents] = useState<HrEvent[]>([])

  const db = [
    {
      Sp: { cargo: { needs: 10 }, scrap: { needs: 8 }, multi: { needs: 2 } },
      Dmd: { cargo: { needs: 22 }, scrap: { needs: 1 }, multi: { needs: 1 } },
      Dubna: { cargo: { needs: 22 }, scrap: { needs: 1 }, multi: { needs: 1 } },
      Himki: { cargo: { needs: 22 }, scrap: { needs: 1 }, multi: { needs: 1 } },
      Odin: { cargo: { needs: 22 }, scrap: { needs: 1 }, multi: { needs: 1 } },
      Ruza: { cargo: { needs: 22 }, scrap: { needs: 1 }, multi: { needs: 1 } },
      Istra: { cargo: { needs: 22 }, scrap: { needs: 1 }, multi: { needs: 1 } },
      Kasha: { cargo: { needs: 22 }, scrap: { needs: 1 }, multi: { needs: 1 } },
      Luch: { cargo: { needs: 22 }, scrap: { needs: 1 }, multi: { needs: 1 } },
    },
  ];
  const OP = {
    Sp: "Сергиев Посад",
    Dmd: "Домодедово",
    Dubna: "Дубна",
    Himki: "Химки",
    Odin: "Одинцово",
    Ruza: "Руза",
    Istra: "Истра",
    Kasha: "Кашира",
    Luch: "Луховицы",
  };

  const vacancies = {
    cargo: "Водитель грузового автомобиля",
    scrap: "Водитель ломовоза",
    multi: "Водитель мультилифта"
  };

  const i = Object.values(OP);
  console.log(i);
  return (
    <div className="App">
      <h1>Потребность</h1>
      <div className="table">
<div className="table_top flex">
        <div className="table_top_left">

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
        <div>
          <p>Текст основной</p>
        </div>
      </div>
    </div>
      </div>
      
  );
}

export default App;
