module.exports =
{
    //"URI": "mongodb://localhost/business_contacts"
    "URI": "mongodb+srv://oksana:lgYAtBXvMQ1BkEUX@mongodbserver.wuevp.mongodb.net/business_contacts?retryWrites=true&w=majority"
    
    
}

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$sort': {
      'nameCustomer': 1
    }
  }
];

MongoClient.connect(
  '',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(connectErr, client) {
    assert.equal(null, connectErr);
    const coll = client.db('').collection('');
    coll.aggregate(agg, (cmdErr, result) => {
      assert.equal(null, cmdErr);
    });
    client.close();
  });