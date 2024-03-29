const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'NTAP_NBIoT';

// Use connect method to connect to the server
MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    collection = db.collection("temperatures");
        if (collection) {
        const mqtt=require('mqtt');
        var customer = mqtt.connect('mqtt://broker.emqx.io:1883',{clientId: "temperature"});
        customer.on('connect',function(){	
            customer.subscribe("nhietdo1");
            console.log("Client has subscribed successfully");
        });
        customer.on('message', function(topic,message){
            var data = message;
            collection.createIndex( { "created_date": 1 }, { expireAfterSeconds: 10 } )
            collection.insertOne({"nd": JSON.parse(data), "created_date": new Date ().toLocaleString(), "slug": "xe-1"});
            console.log('Inserted data');
        })
    } else {
        console.log('Conntect collection Faild');
    }
   
    
    customer.on('message',function(topic, message, packet){
        console.log("message is "+ message);
        console.log("topic is "+ topic);
    });
});