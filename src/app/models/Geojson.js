const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Geojson = new Schema({
    name: { type: String, required: true },
    slug: { type: String, slug: 'name' },
    vt: { type: String},

     }, {
    timestamps: true,
  });

  module.exports = mongoose.model('Geojson', Geojson);