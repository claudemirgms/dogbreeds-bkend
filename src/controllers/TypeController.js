const Types = require('../models/Type');

module.exports = {
  async create(req, res){
    const {type} = req.body;
    
    let _type = await Types.findOne({type});
    
    if(!_type){
      _type = await Types.create({type})
    }

    return res.json(_type);
  },
  async findAll(req, res){
    const types = await Types.find();
    return res.json(types);
  }
}
