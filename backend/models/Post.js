import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Post = sequelize.define('posts', {
    id: {
        type: DataTypes.INTEGER,    
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});