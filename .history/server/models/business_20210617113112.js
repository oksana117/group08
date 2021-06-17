let mongoose = require('mongoose');

//create a model class

let businessModel = mongoose.Schema({
    nameCustomer: String,
    numberCustomer: String,
    emailCustomer: String
},
  
{
  collection: "business"
});

module.exports = mongoose.model('Business', businessModel);

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