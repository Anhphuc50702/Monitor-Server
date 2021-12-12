const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'NTAP_NBIoT';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    collection = db.collection("courses");
    if (collection) {
        const mqtt=require('mqtt');
        var customer = mqtt.connect('mqtt://broker.emqx.io:1883',{clientId: "nhietdo"});
        customer.on('connect',function(){	
            customer.subscribe("nhietdo");
            console.log("Client has subscribed nhietdo successfully");
        });
        customer.on('message', function(topic,message){
            var data = message; 
            var myquery = { name: "Xe 2" };
            var newvalues = { $set: { nd: JSON.parse(data) } };
            collection.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                console.log("nhiet do da cap nhat");
            });
        });
   
    
        customer.on('message',function(topic, message, packet){
        console.log("message is "+ message);
        console.log("topic is "+ topic);
        });
    }

    if (collection) {
        const mqtt=require('mqtt');
        var customer = mqtt.connect('mqtt://broker.emqx.io:1883',{clientId: "vitri"});
        customer.on('connect',function(){	
            customer.subscribe("vitri");
            console.log("Client has subscribed vitri successfully");
        });
        customer.on('message', function(topic,message){
            var data = message; 
            var myquery = { name: "Xe 2" };
            var newvalues = { $set: { vt: JSON.parse(data) } };
            collection.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                console.log("vi tri da cap nhat");
            });
        });
   
    
        customer.on('message',function(topic, message, packet){
        console.log("message is "+ message);
        console.log("topic is "+ topic);
        });
    }});