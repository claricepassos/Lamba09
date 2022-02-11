import { IShowDatabase } from "../../src/data/IShowDatabase";
import { ShowDatabase } from "../../src/data/ShowDatabase";
import { DataError } from "../../src/error/DataError";
import { Show } from "../../src/model/Show";


export class ShowDatabaseMock implements IShowDatabase
 {
  private database: any[] = []

  public async createShow(
    id: string,
    weekDay: string,
    startTime: number,
    endTime: number,
    bandId: string
  ): Promise<void> {
    try {
      this.database.push({
        id,
        week_day: weekDay,
        start_time: startTime,
        end_time: endTime,
        band_id: bandId
      })

    } catch (error: any) {
      throw new DataError(error.sqlMessage || error.message, 500);
    }
  }

  public async getShowsByDay(weekday: string): Promise<Show[]> {
    const result = this.database.filter(show => show.week_day)

      const shows: Show[] = []

      result.forEach(row => {
        shows.push(Show.toShowModel(row))
      })

    return shows
  }
}
