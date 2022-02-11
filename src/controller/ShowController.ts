import { ShowBusiness } from "../business/ShowBusiness";
import { Request, Response } from "express"
import { WEEK_DAY } from "../model/Show";
import { ControllerError } from "../error/ControllerError";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ){}

    async addShowToDay(req: Request, res: Response) {
        try {
            const bandId = req.body.bandId
            const endTime = req.body.endTime
            const startTime = req.body.startTime
            const weekDay = req.body.weekDay

            const id = await this.showBusiness.addShow({
                bandId,
                startTime,
                endTime,
                weekDay
            })

            res.status(201).send({id})

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || 'Unexpected error')
        }
    }

    async getShows(req: Request, res: Response) {
        try {
            const weekDay = req.params.weekDay as string

            if( !WEEK_DAY[weekDay] ){
                throw new ControllerError('weekDay must to be FRIDAY, SATURDAY or SUNDAY', 402)
            }

            const shows = await this.showBusiness.getShows( WEEK_DAY[weekDay] )

            res.status(201).send(shows)

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || 'Unexpected error')
        }
    }

}