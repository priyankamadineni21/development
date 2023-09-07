"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const {Sequelize} = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/db.config")[env];
const db: any = {};

let sequelize: any;
console.log(config);

if (config.use_env_variable) {  
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
  console.log("connection established")
} else {  
  sequelize = new Sequelize("sample","postgres", "priya@123",{
    dialect: "postgres",
    host: "localhost",
    port: 5432
  })
  console.log(sequelize)

}

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    );
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});



db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;