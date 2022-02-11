import { BaseDatabase } from "./BaseDatabase";
import { DataError } from "../error/DataError";
import { IShowDatabase } from "./IShowDatabase";
import { Show } from "../model/Show";

export class ShowDatabase extends BaseDatabase implements IShowDatabase
 {
  private static TABLE_NAME = "shows_table";

  public async createShow(
    id: string,
    weekDay: string,
    startTime: number,
    endTime: number,
    bandId: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
            id,
            week_day: weekDay,
            start_time: startTime,
            end_time: endTime,
            band_id: bandId
        })
        .into(ShowDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new DataError(error.sqlMessage || error.message, 500);
    }
  }

  public async getShowsByDay(weekday: string): Promise<Show[]> {
    const result = await this.getConnection()
      .select("*")
      .from(ShowDatabase.TABLE_NAME)
      .where({ week_day: weekday });

      const shows: Show[] = []

      result.forEach(row => {
        shows.push(Show.toShowModel(row))
      })

    return shows
  }
}
