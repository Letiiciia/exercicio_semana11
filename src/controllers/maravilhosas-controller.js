const express = require("express");
const { selectAllData, selectDataById, deleteData } = require("../models/maravilhosas-models");
const models = require("../models/maravilhosas-models");
const maravilhosas = require("../data/data.json");

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
// function addMaravailhosa(request, response){
    
//    response.status(200).send(insertData());


// }
function insertData(request, response) {

    const arrayId = maravilhosas.map(maravilhosa => maravilhosa.id == maravilhosa.id);
    console.log(arrayId);
   
    // const novoId = () => {
    //     if (tarefaMaravilhosaId.length > 0) {
    //         return tarefaMaravilhosaId[tarefaMaravilhosaId.length - 1].id + 1
    //     } else {
    //         return 1
    //     }
    //   }
    
    const novoId = arrayId.length > 0 ? Math.max.apply(Math, arrayId) + 1 : 1;

    
    const novaMaravilhosa = {
        id: novoId,
        name: request.body.name,
        photo: request.body.photo,
        subtitle: request.body.subtitle,
        about: request.body.about,
        phrase: request.body.phrase,
        history: [request.body.history],
        addedBy: request.body.addedBy
    }

    maravilhosas.push(novaMaravilhosa);
    

    response.status(200).send(novaMaravilhosa);
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
    //addMaravailhosa
    insertData
    
}