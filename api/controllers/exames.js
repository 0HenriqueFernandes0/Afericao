var Exames = require('../models/exames')

// Shop list
module.exports.list = (resultado,modalidade) => {
    if (resultado === undefined && modalidade === undefined) {
        return Exames
        .find({},'_id nome data resultado')
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
      }else if (resultado === undefined){
        return Exames
        .find({modalidade:modalidade},'_id nome data resultado')
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
      }else if (resultado === 'OK') {
        bol = true
      } else {
        bol = false
      }
      
      if(modalidade === undefined){
        return Exames
      .find({resultado:bol},'_id nome data resultado')
      .then(resposta => {
          return resposta
      })
      .catch(erro => {
          return erro
      })
      }
      return Exames
      .find({resultado:bol,modalidade:modalidade},'_id nome data resultado')
      .then(resposta => {
          return resposta
      })
      .catch(erro => {
          return erro
      })
}

module.exports.getExame = id => {
    return Exames.findOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getModalidades = () => {
    return Exames
            .find({},'_id modalidade')
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.atletas = (gen,clube) => {
    if (gen === undefined && clube === undefined) {
        return Exames
        .find({})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
      }else if (gen === undefined){
        return Exames
        .find({clube:clube})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
      }else {
        genero = gen
      } 
      
      if(clube === undefined){
        return Exames
                .find({genero:genero})
                .then(resposta => {
                    return resposta
                })
                .catch(erro => {
                    return erro
      })
      }
      return Exames
      .find({genero:genero,clube:clube})
      .then(resposta => {
          return resposta
      })
      .catch(erro => {
          return erro
      })
}
