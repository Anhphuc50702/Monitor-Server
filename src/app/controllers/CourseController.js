const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { Chart } = require('chart.js');
const Temperature = require('../models/Temperature');
const Geojson = require('../models/Geojson');

class CourseController {
        // [GET] /courses/:slug
        show(req, res, next) {
            Course.findOne({ slug: req.params.slug })
            .then(course => 
                res.render('courses/show', { course: mongooseToObject(course) })
            )
            .catch(next);          
        }
   

        // [GET] /courses/:slug/detail
        detail(req, res, next) {
        Temperature.find({slug:req.params.slug})
        .then(temperature => 
            //res.json(temperature)
            res.render('courses/temperatures', { temperature: mutipleMongooseToObject(temperature) })
        
        )
        .catch(next);     
             
    }

        // [GET] /courses/:slug/geoJSON
        geoJSON(req, res, next) {
            Geojson.find({slug:req.params.slug})
            .then(geojson => 
                //res.json(geojson)
                res.render('courses/geoJSON', { geojson: mutipleMongooseToObject(geojson) })
            )
            .catch(next);          
        }

        // [GET] /courses/create
        create(req, res, next) {
            res.render('courses/create');}

        // [POST] /courses/store
        store(req, res, next) {
            const formData = req.body;
           // formData.image =  `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
           const course = new Course(formData);
           course.save()
                .then(() => res.redirect('/'))
                .catch(error => {

                });
            }

 // [GET] /courses/:id/edit
 edit(req, res, next) {
     Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {
            course: mongooseToObject(course)
        }))
        .catch(next);
   }            

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
        }
    // [DELETE] /courses/:id
        destroy(req,res,next) {
            Course.deleteOne({_id: req.params.id })
                .then(()=> res.redirect('back'))
                .catch(next);
        }
    }

module.exports = new CourseController;
