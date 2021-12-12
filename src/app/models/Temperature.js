const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Temperature = new Schema({
    name: { type: String, required: true },
    slug: { type: String, slug: 'name' },
    nd: { type: String},

     }, {
    timestamps: true,
  });

  module.exports = mongoose.model('Temperature', Temperature);