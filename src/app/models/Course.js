const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    khl: { type: String },
    image: { type: String },
    sdt: { type: String },
    kht: { type: String },
    klh: { type: String },
    sl: { type: String },
    ten: { type: String },
    slug: { type: String, slug: 'name' },
    vt: { type: String},
    nd: { type: String},
    bs: { type: String},

     }, {
    timestamps: true,
  });

  module.exports = mongoose.model('Course', Course);