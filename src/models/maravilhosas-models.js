//Implementar o GET para disponibilizar a lista de mulheres maravilhosas cadastradas na API

const maravilhosas = require("../data/data.json");
const controllers = require("../controllers/maravilhosas-controller");
const { request } = require("express");
//const { retornaId } = require("../controllers/maravilhosas-controller");

// selectAllData
function selectAllData() {
    return maravilhosas;

}


//selectDataById
function selectDataById(id) {
    //const id = parseInt(request.params.id);


    const maravilhosasById = maravilhosas.find(item => item.id == id);

    return maravilhosasById;

}

//insertData
function insertData(informacao) {

    const novoId = (maravilhosas.length > 0) ? maravilhosas[maravilhosas.length - 1].id + 1 : 1;

    const verificaNome = maravilhosas.map(maravilhosa => maravilhosa.name);
    console.log(verificaNome);

    const { name, photo, subtitle, about, phrase, history, addedBy } = informacao;

  

    if (!informacao) {
        console.log("Oi");
        return "Informações incompletas";
        
    } else if (verificaNome.find(name => name == informacao.name)) {
        console.log("tchau");
        return "Maravilhosa existente na base de dados!";
    } else {
        const novaMaravilhosa = {
            id: novoId,
            name: name,
            photo: photo,
            subtitle: subtitle,
            about: about,
            phrase: phrase,
            history: [history],
            addedBy: addedBy
        }

        maravilhosas.push(novaMaravilhosa);

        return novaMaravilhosa;
    }
}



//updateData
function upDate(id, atualizaMaravilhosa) {
    const atualMaravilhosa = maravilhosas.map(maravilhosa => maravilhosa.id);
    const localizarMaravilhosa = atualMaravilhosa.indexOf(id);

    const locMaravilhosa = { id, ...atualizaMaravilhosa };
    maravilhosas.splice(localizarMaravilhosa, 1, locMaravilhosa);
    const novaMaravilhosa = maravilhosas.find(maravilhosa => maravilhosa.id == id);

    return novaMaravilhosa;

}

//deleteData
function deleteData(id) {
    const filtrarMaravilhosas = maravilhosas.filter(maravilhosa => {
        return maravilhosa.id === id;
    })[0];

    const indexMaravilhosas = maravilhosas.indexOf(filtrarMaravilhosas);

    maravilhosas.splice(indexMaravilhosas, 1)

    return maravilhosas;


}

module.exports = {
    selectAllData,
    selectDataById,
    upDate,
    deleteData,
    insertData

}