//import db from "models";
//import { env } from "process";
import { DataSource } from "typeorm";

//entity
/*DataSource db{
  const provider="postgres"
  URL = env["DB_URL"]
}
*/
export interface CafeAttributes {
    id?: string;
    category?: string;
    name?: string;
    price?: Number;
    drinkOpted?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }