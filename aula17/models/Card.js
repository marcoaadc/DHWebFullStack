module.exports = (sequelize, DataType) => {
	const Card = sequelize.define(
		'Card', 
	{
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    path_image: DataType.STRING,
    title: DataType.STRING,
	text: DataType.STRING,
	},
    {
    tableName: 'cards'
	});
	return Card;
};