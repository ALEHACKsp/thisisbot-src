


const PogyClient = require("./Pogy");
const config = require("./config.json");
var express = require('express');


const Pogy = new PogyClient(config);

const color = require("./data/colors");
Pogy.color = color;

Pogy.domain = `https://thisisbot.tk`;

const emoji = require("./data/emoji");
Pogy.emoji = emoji;

let client = Pogy
const jointocreate = require("./structures/jointocreate");
jointocreate(client);

Pogy.react = new Map()
Pogy.fetchforguild = new Map()

//Pogy.cachedMessageReactions = new Map();
//Pogy.on('debug', console.log)/*

if(config.dashboard === "true"){
    const Dashboard = require("./dashboard/dashboard");
    Dashboard(client); 
}


//const api = require("./api/test.js")


        
Pogy.start();









  