export interface Vacancy {
  id: string;
  title: string;
}

export type HrEventType = "need" | "hire" | "fire" | "transfer";

export interface HrEvent {
  id: string;
  type: HrEventType;
  date: string;
  value: number;
  idOp: string;
  idVacancy: string;
}

export type TableResult = {
  [idOp: string]: {
    [idVacancy: string]: {
      need: number;
      hire: number;
      fire: number;
      transfer: number;
    };
  };
};
