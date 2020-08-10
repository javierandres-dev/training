const Bicicleta = require('../../models/bicicleta');
// Method-Endpoint-Action to get list
exports.bicicleta_list = function (req, res) {
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    })
}
// Method to create a new bike
exports.bicicleta_create = function (req, res) {
    const bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];
    Bicicleta.add(bici);
    res.status(200).json({
        bicicleta: bici
    });
}
// Method to update a bike
exports.bicicleta_update = function(req, res){
    const bici = Bicicleta.findById(req.body.id);
    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lng];
    res.status(200).json({
        bicicleta: bici
    });
}
// Method to delete a bike
exports.bicicleta_delete = function(req, res){
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
}