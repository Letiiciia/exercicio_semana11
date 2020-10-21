const model = require("../models/maravilhosas-models");

function geraId(novoId){
    const tarefaMaravilhosaId = maravilhosas.map(maravilhosa => maravilhosa.id == maravilhosa.id);
    const novoId = tarefaMaravilhosaId.length > 0 ? Math.max.apply(Math, tarefaMaravilhosaId) + 1 : 1;
}


module.exports = geraId;