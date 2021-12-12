/* const mqtt = require('mqtt');
const fs = require('fs');
const path = require('path');
const caFile = path.resolve(__dirname, "./AzureCA.cer");
const KEY = path.resolve(__dirname, "./clientkey.pem");
const CERT = path.resolve(__dirname, "./clientcert.pem");
var options = {
    clientId: "quectel-device-x509self",
    ca: fs.readFileSync(caFile),
    cert: fs.readFileSync(CERT),
    key: fs.readFileSync(KEY)
};

var client = mqtt.connect("quectel-hub.azure-devices.net:8883", options);
console.log("connected flag  " + client.connected);
client.on("connect", function () {
    console.log("connected  " + client.connected);
})
 */

//https://github.com/mqttjs/MQTT.js/issues/264
const fs = require('fs');
var caFile = fs.readFileSync("AzureCA.cer");
var KEY = fs.readFileSync('clientkey.pem');
var CERT = fs.readFileSync('clientcert.pem');

const mqtt=require('mqtt');
        var customer = mqtt.connect('mqtts://quectel-hub.azure-devices.net:8883',{rejectUnauthorized : false,clientId: "quectel-device-x509self1", username: "quectel-hub.azure-devices.net/quectel-device-x509self1/?api-version=2018-06-30", ca:caFile, key:KEY,cert:CERT});
        customer.on('connect',function(){	
            customer.subscribe("devices/quectel-device-x509self1/messages/events/");
            console.log("Client has subscribed successfully");
        });
        customer.on('message',function(topic, message, packet){
            console.log("message is "+ message);
            console.log("topic is "+ topic);
        });

      
    

// var customer  = mqtt.connect("quectel-hub.azure-devices.net",options);
// var options={
// clientId:"quectel-device-x509self",
// rejectUnauthorized : false,
// key: KEY,
// cert: CERT,
// ca:caFile ,
// username: "quectel-iot-hub.azure-devices.net/quectel-device-x509self/?api-version=2018-06-30",
// host: mqtthost,
// protocol: 'mqtts',
// protocolId: 'MQIsdp',
// secureProtocol: 'TLSv1.2_method',
// protocolVersion: 3.1,
// port: 8883
// }

// console.log("connected flag  " + customer.connected);
// customer.on("connect",function(){	
// console.log("connected  "+ customer.connected);
// })