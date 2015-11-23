/**
 * Created by 1306507 on 23/11/2015.
 */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;
var url =  'mongodb://AndrewSanderson:1306507@ds057954.mongolab.com:57954/nodeapp1306507';
