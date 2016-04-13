'use strict';

var Model = require('../libraries/model');
var Category = require('../schemas/category-schema');

class CategoryModel extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }

  findOrCreate(categoryName){
    return this.findOne({name: categoryName})
      .then(cat => cat ?
        Promise.resolve(cat) :
        this.create({ name: categoryName })
      )
      .then(category => category._id);
  }

};

module.exports = new CategoryModel(Category);
