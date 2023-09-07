"use strict";
const { Model, UUIDV4 } = require("sequelize");
import { CafeAttributes } from "/home/priyanka2110/development/types/article.models.types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Cafe
    extends Model<CafeAttributes>
    implements CafeAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    title!: string;
    text!: string;
    type!: string;
    static associate(models: any) {
      // define association here

    }
  }
  Cafe.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING(500),
      },
    },
    {
      sequelize,
      modelName: "Cafe",
    }
  );
  return Cafe;
};