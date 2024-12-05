import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Url = sequelize.define('Url', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    shortUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isUrl: true, 
        },
    },
    longUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isUrl: true,
        },
    },
    clicks: {
        type: DataTypes.INTEGER,
        defaultValue: 0, 
    },
}, {
    timestamps: true,
});

export default Url;