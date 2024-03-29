const express = require('express');
const router = express.Router()

const courseController = require ('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.destroy);
router.get('/:slug', courseController.show);   
router.get('/:slug/temperatures', courseController.temperature);  
router.get('/:slug/geoJSON', courseController.geoJSON);
module.exports = router;
