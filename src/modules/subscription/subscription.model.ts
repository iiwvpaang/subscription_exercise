import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../../config/db";

export class Subscription extends Model<
  InferAttributes<Subscription>,
  InferCreationAttributes<Subscription>
> {
  declare id: CreationOptional<number>;
  declare user_id: number;
  declare plan_id: number;
  declare start_at: Date;
  declare update_at: Date;
}

Subscription.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "subscription",
    modelName: "Subscription",
    timestamps: false,
    underscored: true
  }
);
