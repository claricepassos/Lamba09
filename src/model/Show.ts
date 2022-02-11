export class Show{
    constructor(
    private id: string,
    private weekDay: string,
    private startTime: number,
    private endTime: number,
    private bandId: string
    ){}

    getId = () => this.id
    setId = (id: string) => this.id = id
    getWeekDay = () => this.weekDay
    setWeekDay = (weekDay: string) => this.weekDay = weekDay
    getStartTime = () => this.startTime
    setStartTime = (startTime: number) => this.startTime = startTime
    getEndTime = () => this.endTime
    setEndTime = (endTime: number) => this.endTime = endTime
    getBandId = () => this.bandId
    setBandId = (bandId: string) => this.bandId = bandId


    static toShowModel(show: any): Show {
        return new Show(show.id, show.week_day, show.start_time, show.end_time, show.band_id);
      }


}


export interface IAddShowDTO {
  weekDay: string,
  startTime: number,
  endTime: number,
  bandId: string
}

export enum WEEK_DAY{
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday'
}