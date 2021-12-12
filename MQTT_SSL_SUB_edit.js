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
        const fs = require('fs');
        var caFile = fs.readFileSync("AzureCA.cer");
        var KEY = fs.readFileSync('clientkey.pem');
        var CERT = fs.readFileSync('clientcert.pem');
        const mqtt=require('mqtt');
        var customer = mqtt.connect('mqtts://quectel-hub.azure-devices.net:8883',{rejectUnauthorized : false,clientId: "quectel-device-x509self1", username: "quectel-hub.azure-devices.net/quectel-device-x509self1/?api-version=2018-06-30", ca:caFile, key:KEY,cert:CERT});
        customer.on('connect',function(){	
            customer.subscribe("testtopic/1");
            console.log("Client has subscribed successfully");
        });

        customer.on('message', function(topic,message){
            var data = message;
            collection.insertOne(JSON.parse(data));
            console.log('Inserted data'); })

        } else {
            console.log('Conntect collection Faild');
        }

        customer.on('message',function(topic, message, packet){
            console.log("message is "+ message);
            console.log("topic is "+ topic);
        });
    });
