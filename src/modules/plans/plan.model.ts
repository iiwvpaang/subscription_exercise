import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../../config/db";

export class Plan extends Model<
  InferAttributes<Plan>,
  InferCreationAttributes<Plan>
> {
  declare id: CreationOptional<number>;
  declare plan_name: "Professional" | "Premium";
  declare price: number;
  declare update_at: Date;
}

Plan.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    plan_name: { type: DataTypes.ENUM("Professional", "Premium"), allowNull: false },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "plan",
    modelName: "Plan",
    timestamps: false,
    underscored: true
  }
);