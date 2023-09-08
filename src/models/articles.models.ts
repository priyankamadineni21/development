"use strict";

//const {sq} = require("../models/index");

import * as Sequelize from "sequelize";
import {Model} from "sequelize";

import { CafeAttributes } from "../../types/article-models-types";
 
module.exports = (sequelize: any, DataTypes: any) => {
  class Cafe
    extends Model<CafeAttributes>
    implements CafeAttributes
  {
    /**
       Helper method for defining associations.
      This method is not a part of Sequelize lifecycle.
      The `models/index` file will call this method automatically.
     */
    
    category!: string;
    drinkOpted!: string;
    name!: string;
    price!: number;
    static associate(models: any) {
      // define association here
          
    }
  }
  Cafe.init(
    {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      drinkOpted: {
        type: DataTypes.STRING(500),
      },
      name: {
        type: DataTypes.STRING(500),
      },
      price:{
        type: DataTypes.NUMBER,
      },
    },
    {
      sequelize,
      modelName: "Cafe",
    }
  );
  return Cafe;
};