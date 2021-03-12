var BeerModel = require('../models/beerModel.js');

/**
 * beerController.js
 *
 * @description :: Server-side logic for managing beers.
 */
module.exports = {

    /**
     * beerController.list()
     */
    list: function (req, res) {
        BeerModel.find(function (err, beers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting beer.',
                    error: err
                });
            }

            return res.json(beers);
        });
    },

    /**
     * beerController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        BeerModel.findOne({_id: id}, function (err, beer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting beer.',
                    error: err
                });
            }

            if (!beer) {
                return res.status(404).json({
                    message: 'No such beer'
                });
            }

            return res.json(beer);
        });
    },

    /**
     * beerController.create()
     */
    create: function (req, res) {
        var beer = new BeerModel({
			name : req.body.name,
			percentage : req.body.percentage
        });

        beer.save(function (err, beer) {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: 'Error when creating beer',
                    error: err
                });
            }

            return res.status(201).json(beer);
        });
    },

    /**
     * beerController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        BeerModel.findOne({_id: id}, function (err, beer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting beer',
                    error: err
                });
            }

            if (!beer) {
                return res.status(404).json({
                    message: 'No such beer'
                });
            }

            beer.name = req.body.name ? req.body.name : beer.name;
			beer.percentage = req.body.percentage ? req.body.percentage : beer.percentage;
			
            beer.save(function (err, beer) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating beer.',
                        error: err
                    });
                }

                return res.json(beer);
            });
        });
    },

    /**
     * beerController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        BeerModel.findByIdAndRemove(id, function (err, beer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the beer.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
