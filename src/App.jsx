import "./App.css";

function App() {
  const db = [
    {
      Sp: { cargo: { needs: 10 }, scrap: { needs: 8 } },
      Dmd: { cargo: { needs: 22 }, scrap: { needs: 1 } },
    },
  ];
  const OP = {
    Sp: "Сергиев Посад",
    Dmd: "Домодедово",
  };

  const vacancies = {
    cargo: "Водитель грузового автомобиля",
    scrap: "Водитель ломовоза",
  };

  const i = Object.values(OP);
  console.log(i);
  return (
    <div className="App">
      <h1>Потребность</h1>

      <div className="table_top">
        <div></div>
        <div>
          {Object.values(vacancies).map((el) => {
            return <p className="vacancy">{el}</p>;
          })}
        </div>
      </div>
      <div className="table_bottom">
        <div>
          {Object.values(OP).map((el) => {
          return <p className="op_item">{el}</p>;
        })}
        </div>
        <div>
          <p>
            Текст
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
