import { IShowDatabase } from "../data/IShowDatabase";
import { BusinessError } from "../error/BusinessError";
import { IAddShowDTO, Show, WEEK_DAY } from "../model/Show";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {
    constructor(
        private showDatabase: IShowDatabase
    ){}

    async addShow(addShowDTO: IAddShowDTO):Promise<string>{
        
        const id = (new IdGenerator()).generate()
        
        const startTime = new Date(addShowDTO.startTime)
        const endTime = new Date(addShowDTO.endTime)

        if(typeof addShowDTO.weekDay !== 'string' && Object.values(WEEK_DAY).includes(addShowDTO.weekDay)){
            throw new BusinessError('Week day must be "friday", "saturday or "sunday"', 422)
        }
        if(startTime.getMinutes() > 0 || endTime.getMinutes() > 0){
            throw new BusinessError('schedules must be exact', 422)
        }
        if(startTime.getHours() > endTime.getHours()){
            throw new BusinessError('the end time must be bigger than start time', 422)
        }
        if(startTime.getHours() < 8 || endTime.getHours() >23){
            throw new BusinessError('schedules must be between 8 and 23', 422)
        }

        await this.showDatabase.createShow(
            id,
            addShowDTO.weekDay,
            addShowDTO.startTime,
            addShowDTO.endTime,
            addShowDTO.bandId
        );

        return id
    }

    async getShows(weekday: WEEK_DAY):Promise<Show[]>{
        return await this.showDatabase.getShowsByDay(weekday);
    }
}