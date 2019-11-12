const Dog = require('../models/Dog');

module.exports = {
  async store(req, res){
    const{ type_id, name, size, weight, longevity, origin, colors, colorsinformation, characteristics, hmexercise, hmhygiene, trainingfacility, sociability, introdution, description, kannelclub } = req.body;

    const dog = await Dog.create({
      type_id: type_id,
      name: name,            
      size: size,
      weight: weight,
      longevity: longevity,
      origin: origin,
      colors:colors.split(',').map(color => color.trim()),
      colorsinformation: colorsinformation,
      characteristics: characteristics,
      hmexercise: hmexercise,
      hmhygiene: hmhygiene,
      trainingfacility: trainingfacility,
      sociability: sociability,
      introdution: introdution,
      description: description,
      kannelclub: kannelclub,
    })

    return res.json(dog);

  },
  
  async show(req, res){
    const{ filter, type_id, name, size, weight, longevity, origin, colors, colorsinformation, characteristics, hmexercise, hmhygiene, trainingfacility, sociability, introdution, description, kannelclub } = req.query;
    
    const pfilter = parseInt(filter, 10);
    const psociability = parseInt(sociability, 10);
    const ptrainingfacility = parseInt(trainingfacility, 10); 
    const phmhygiene = parseInt(hmhygiene, 10);
    //const phmexercise = parseInt(hmexercise, 10);
    //return res.json({filter: filter});
    let data;
    switch (pfilter) {
      case 1:
        data = {sociability: psociability};
        break;
      case 2:
        data = {trainingfacility: ptrainingfacility};
        break;
      case 3:
        data = {sociability: psociability, trainingfacility: ptrainingfacility};
        break;
      case 4:
        data = {hmhygiene: phmhygiene}
        break;
      case 5:
        data = {sociability: psociability, hmhygiene: phmhygiene};
        break;
      case 6:
        data = {trainingfacility: ptrainingfacility, hmhygiene: phmhygiene}
        break;
      case 7:
        data = {sociability: psociability, trainingfacility: ptrainingfacility, hmhygiene: phmhygiene}
        break;
      case 8:
        break;
      case 9:
        break;
      case 10: 
        break;
      case 30:
        data = {name: name, hmexercise: hmexercise};
        break;
      default:
        data = {"null": "null"}
        break;
    }
    const dog = await Dog.find(data);

    return res.json(dog);
  },
  async showtest(req, res){
    const{ filter, type_id, name, size, weight, longevity, origin, colors, colorsinformation, characteristics, hmexercise, hmhygiene, trainingfacility, sociability, introdution, description, kannelclub } = req.query;
    return res.json([{message: filter}, {message: sociability}]);
  }
}