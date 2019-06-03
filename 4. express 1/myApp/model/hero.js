






















var express = require('express');
var JSONData = require('./heros.json');
var fs = require("fs");
    
let Heros= {}
Heros.getAll = function(){
    console.log('Gibin '+JSONData);
    return JSONData
}


Heros.saveNew = function(newHeroData){
    console.log('Gibin Write '+JSON.stringify(newHeroData));
    JSONData.push(newHeroData);
    fs.writeFile('./model/heros.json', JSON.stringify(JSONData), function(err) {
        if(err){
            console.lgo('ERR.')
        }   
    })
}
module.exports = Heros;
