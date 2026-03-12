import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import { OP, vacancies } from "./data/opvacancies";
import { testEvents } from "./data/events";
function App() {
    // const a:Vacancy = {
    //   id: '1',
    //   title: 'Kasha'
    // }
    // const a: HrEventType = "need";
    const [events, setEvents] = useState(testEvents);
    const [selectedDate, setSelectedDate] = useState("2026-03-01");
    const i = Object.values(OP);
    console.log(i);
    return (_jsxs("div", { className: "App", children: [_jsx("h1", { children: "\u041F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044C" }), _jsxs("div", { className: "table", children: [_jsxs("div", { className: "table_top flex", children: [_jsx("div", { className: "table_top_left", children: _jsx("input", { type: "date", value: selectedDate, onChange: (ev) => { setSelectedDate(ev.target.value); } }) }), _jsx("div", { className: "table_top_right flex", children: Object.values(vacancies).map((el) => {
                                    return _jsx("p", { className: "vacancy", children: el });
                                }) })] }), _jsxs("div", { className: "table_bottom flex", children: [_jsx("div", { children: Object.values(OP).map((el) => {
                                    return _jsx("p", { className: "op_item", children: el });
                                }) }), _jsx("div", { children: _jsx("p", { children: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439" }) })] })] })] }));
}
export default App;
