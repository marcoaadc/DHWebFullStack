module.exports = (sequelize, DataType) => {
	const Contact = sequelize.define(
		'Contact', 
	{
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  name: DataType.STRING,
  email: DataType.STRING,
  message: DataType.STRING,
  deleted: DataType.BOOLEAN,
},
{
    tableName: 'contacts'
	});
	return Contact;
};