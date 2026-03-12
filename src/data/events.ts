import { HrEvent } from "../types/vacancies";
import { TableResult } from "../types/vacancies";

export const testEvents: HrEvent[] = [
  // Сергиев Посад
  { id: "1", type: "need", date: "2026-03-01", value: 10, idOp: "Sp", idVacancy: "cargo" },
  { id: "2", type: "need", date: "2026-03-01", value: 8,  idOp: "Sp", idVacancy: "scrap" },
  { id: "3", type: "need", date: "2026-03-01", value: 2,  idOp: "Sp", idVacancy: "multi" },

  // Домодедово
  { id: "4", type: "need", date: "2026-03-01", value: 22, idOp: "Dmd", idVacancy: "cargo" },
  { id: "5", type: "need", date: "2026-03-01", value: 1,  idOp: "Dmd", idVacancy: "scrap" },
  { id: "6", type: "need", date: "2026-03-01", value: 1,  idOp: "Dmd", idVacancy: "multi" },

  // Дубна
  { id: "7",  type: "need", date: "2026-03-01", value: 39, idOp: "Dubna", idVacancy: "cargo" },
  { id: "8",  type: "need", date: "2026-03-01", value: 1,  idOp: "Dubna", idVacancy: "scrap" },
  { id: "9",  type: "need", date: "2026-03-01", value: 5,  idOp: "Dubna", idVacancy: "multi" },

  // Химки
  { id: "10", type: "need", date: "2026-03-01", value: 2, idOp: "Himki", idVacancy: "cargo" },
  { id: "11", type: "need", date: "2026-03-01", value: 15,  idOp: "Himki", idVacancy: "scrap" },
  { id: "12", type: "need", date: "2026-03-01", value: 1,  idOp: "Himki", idVacancy: "multi" },

  // Одинцово
  { id: "13", type: "need", date: "2026-03-01", value: 22, idOp: "Odin", idVacancy: "cargo" },
  { id: "14", type: "need", date: "2026-03-01", value: 12,  idOp: "Odin", idVacancy: "scrap" },
  { id: "15", type: "need", date: "2026-03-01", value: 1,  idOp: "Odin", idVacancy: "multi" },

  // Руза
  { id: "16", type: "need", date: "2026-03-01", value: 20, idOp: "Ruza", idVacancy: "cargo" },
  { id: "17", type: "need", date: "2026-03-01", value: 8,  idOp: "Ruza", idVacancy: "scrap" },
  { id: "18", type: "need", date: "2026-03-01", value: 1,  idOp: "Ruza", idVacancy: "multi" },

  // Истра
  { id: "19", type: "need", date: "2026-03-01", value: 22, idOp: "Istra", idVacancy: "cargo" },
  { id: "20", type: "need", date: "2026-03-01", value: 1,  idOp: "Istra", idVacancy: "scrap" },
  { id: "21", type: "need", date: "2026-03-09", value: 1,  idOp: "Istra", idVacancy: "multi" },

  // Кашира
  { id: "22", type: "need", date: "2026-03-01", value: 22, idOp: "Kasha", idVacancy: "cargo" },
  { id: "23", type: "need", date: "2026-03-01", value: 1,  idOp: "Kasha", idVacancy: "scrap" },
  { id: "24", type: "need", date: "2026-03-01", value: 1,  idOp: "Kasha", idVacancy: "multi" },

  // Луховицы
  { id: "25", type: "need", date: "2026-03-01", value: 22, idOp: "Luch", idVacancy: "cargo" },
  { id: "26", type: "need", date: "2026-03-01", value: 5,  idOp: "Luch", idVacancy: "scrap" },
  { id: "27", type: "need", date: "2026-03-25", value: 1,  idOp: "Luch", idVacancy: "multi" },
];

function createTable(events: HrEvent[], date: string) {

  const filterEvents = events.filter((ev) => ev.date === date)

  const result: TableResult = {}

  for(let event of events) {
    // if (result[event.idOp]) {

    // }
    // console.log(event.idOp)
  }
  
  // const fiteredEvents = events.filter((ev) => {
  //   return ev.date === date
  // })
  // console.log(fiteredEvents)

  // const result = []
  // for (let i = 0; i<events.length; i++) {
  //   if(events[i].date === date) {
  //     result.push(events[i])
  //   }
  // }
  // console.log(result.length)
}

createTable(testEvents, "2026-03-25")