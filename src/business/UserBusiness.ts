import { UserInputDTO, LoginInputDTO } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { IUserDatabase } from "../data/IUserDatabase";

export class UserBusiness {

    constructor(
        private userDatabase: IUserDatabase
    ){}

    async createUser(user: UserInputDTO, ) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(user.password);

        await this.userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id, role: user.role });

        return accessToken;
    }

    async getUserByEmail(user: LoginInputDTO) {

        const userFromDB = await this.userDatabase.getUserByEmail(user.email);

        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }
}