export interface Vacancy {
  id: string;
  title: string;
}

export type HrEventType = 'need' | 'hire' | 'fire'

export interface HrEvent {
    id: string;
    type: HrEventType;
    date: string;
    value: number;
    idOp: string;
    idVacancy: string;
}
