// for using in another files

module.exports = (sequelize, DataTypes) => {
    // // Table name as Blog in double quote and Blog as variable in front
    const ExchangedVehicle = sequelize.define("ExchangedVehicle", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.BLOB,
            allowNull: true,
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    });
    
    ExchangedVehicle.associate = (models) => {
        ExchangedVehicle.hasOne(models.ExchangedTransaction, {
            onDelete: "cascade",
        });
    };
    return ExchangedVehicle;
};