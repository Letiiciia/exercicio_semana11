const express = require("express");
const { selectAllData, selectDataById, deleteData } = require("../models/maravilhosas-models");
const models = require("../models/maravilhosas-models");

//Nomes dos métodos para implementação:
//getMaravilhosas
function getMaravilhosas (request, response){
    console.log(request.url);
    return response.status(200).send(selectAllData());
}


//getMaravilhosaById
function getMaravilhosaById (request, response){
     const id = parseInt(request.params.id);

    // if(selectDataById){
        response.status(200).send(selectDataById(id));
    // }else{
    //     response.status(404).send("Maravilhosa não encontrada na base de dados!")
    // }
}




//addMaravilhosa 
function addMaravailhosa(request, response){
    
   response.status(200).send(insertData());


}



//updateMaravilhosa 
function updateMaravilhosa (request, response){
    const atualizaMaravilhosa = request.body;
    const id = parseInt(request.params.id);


    response.status(200).send(models.upDate(id, atualizaMaravilhosa));
}

//deleteMaravilhosa
function deleteMaravilhosa (request, response){
    const id = parseInt(request.params.id);
    console.log("Maravilhosa deletada com sucesso!");

    response.status(200).send(deleteData(id));

}


module.exports = {
    getMaravilhosas,
    getMaravilhosaById,
    updateMaravilhosa,
    deleteMaravilhosa,
    addMaravailhosa
    
}