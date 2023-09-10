import jsonServer from "json-server";
import path from "path";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { TiendanubeAuthInterface } from "@features/auth";
import { HttpErrorException } from "@utils";

/**
 * this repository is temporary, please use real database to production mode
 */

const userRepository = jsonServer.router(path.resolve("db.json"));

const server = jsonServer.create();
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(userRepository);

interface IDatabase {
  credentials: TiendanubeAuthInterface[];
}

const adapter = new FileSync<IDatabase>(path.resolve("db.json"));
const database = low(adapter);

class UserRepository {
  save(credential: TiendanubeAuthInterface) {
    this.createOrUpdate(credential);
  }

  findOne(user_id: number) {
    const credentials = database.get("credentials").value();
    const store = this.findValueFromProperty<TiendanubeAuthInterface, number>(
      "user_id",
      credentials,
      user_id
    );

    if (!store) {
      throw new HttpErrorException(
        "Read our documentation on how to authenticate your app"
      ).setStatusCode(404);
    }

    return store;
  }

  findFirst(): TiendanubeAuthInterface {
    return database.get("credentials").value()?.[0];
  }

  private createOrUpdate(data: TiendanubeAuthInterface) {
    const credentials = database.get("credentials").value() ?? [];
    const hasCredentials = this.findValueFromProperty<TiendanubeAuthInterface>(
      "user_id",
      credentials,
      data.user_id
    );

    if (hasCredentials) {
      const index = credentials.findIndex(
        (credential) => credential.user_id === data.user_id
      );
      credentials.splice(index, 1, data);
    } else {
      credentials?.push(data);
    }
    database.set("credentials", credentials).write();
  }

  private findValueFromProperty<T, K = any>(
    property: string,
    list: T[],
    value: K
  ): T | undefined {
    const findValue = list?.find(
      (values) => (values as any)[property] === Number(value)
    );
    return findValue;
  }
}

export default new UserRepository();
