var express = require('express');
var router = express.Router();
var beerController = require('../controllers/beerController.js');

/*
 * GET
 */
router.get('/', beerController.list);

/*
 * GET
 */
router.get('/:id', beerController.show);

/*
 * POST
 */
router.post('/', beerController.create);

/*
 * PUT
 */
router.put('/:id', beerController.update);

/*
 * DELETE
 */
router.delete('/:id', beerController.remove);

module.exports = router;
