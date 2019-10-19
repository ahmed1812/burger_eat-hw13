//Node Connection to MySQL

var mysql = require ('mysql');

var connection;

if (process.env.JAWSDB_URL)
{
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
	connection = mysql.createConnection(
	{
    host: 'y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
		user: 'pa44j2m5pz7kg031',
		password: 'xby9xvx8824pcxgs',
		database: 'tzqkokn5sp86ccyw'
	});
};


connection.connect(function(err) 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
