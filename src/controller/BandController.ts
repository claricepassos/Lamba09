import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { ControllerError } from "../error/ControllerError";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";

export class BandController {
    constructor(
        private bandBusiness: BandBusiness
    ){}

    async registerBand(req: Request, res: Response){
        try {
            const name = req.body.name as string
            const musicGenre = req.body.musicGenre as string
            const responsible = req.body.responsible as string
        
            if(!name || !musicGenre || !responsible){
                throw new ControllerError('"name", "musicGenre" and "responsible" are required.', 402)
            }

            const id = await this.bandBusiness.registerBand({name, musicGenre, responsible})

            res.status(201).send({id: id})

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || 'Unexpected error')
        }
    }

    async detailsBand(req: Request, res: Response){
        try {
            const identification = req.params.identification

            if(!identification){
                throw new ControllerError('"identification" is required.', 402)
            }

            const band = await this.bandBusiness.detailBand(identification)

            if(!band) throw new ControllerError('Not found band', 401)

            res.status(200).send({
                id: band.getId(),
                name: band.getName(),
                genre: band.getMusicGenre(),
                responsible: band.getReponsible()
            })

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || 'Unexpected error')
        }
    }
}