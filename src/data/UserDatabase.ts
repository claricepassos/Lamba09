import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { IUserDatabase } from "./IUserDatabase";
import { DataError } from "../error/DataError";

export class UserDatabase extends BaseDatabase implements IUserDatabase {

  private static TABLE_NAME = "user_table";

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          password,
          role
        })
        .into(UserDatabase.TABLE_NAME);

    } catch (error: any) {
        throw new DataError(error.sqlMessage || error.message, 500);
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return User.toUserModel(result[0]);
  }

}
 