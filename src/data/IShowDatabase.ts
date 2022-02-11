import { Show } from "../model/Show";

export interface IShowDatabase {
    createShow(
        id: string,
        weekDay: string,
        startTime: number,
        endTime: number,
        bandId: string
    ):Promise<void>

    getShowsByDay(weekday: string):Promise<Show[]>
}