const Contribuyente = require("../models/Contribuyente");

exports.crearContribuyente = async(req, res) => {
    try {
        let contribuyente;

        //Creamos contribuyente
        contribuyente = new Contribuyente(req.body);
        await contribuyente.save();
        res.send(contribuyente);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
}

exports.obtenerContrib = async(req, res) => {
    try {
        const contribuyentes = await Contribuyente.find();
        res.json(contribuyentes);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
}

exports.actualizarContrib = async(req, res) => {
    try {
        const { nombre, apellidos, numDni, direccion, sueldoBase } = req.body;
        let contribuyente = await Contribuyente.findById(req.params.id);
        if (!contribuyente) {
            res.status(404).json({ msg: 'No existe el contribuyente en el sistema' })
        }

        contribuyente.nombre = nombre;
        contribuyente.apellidos = apellidos;
        contribuyente.numDni = numDni;
        contribuyente.direccion = direccion;
        contribuyente.sueldoBase = sueldoBase;

        contribuyente = await Contribuyente.findOneAndUpdate({ _id: req.params.id }, contribuyente, { new: true });
        res.json(contribuyente);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
}

exports.obtenerContribOne = async(req, res) => {
    try {
        let contribuyente = await Contribuyente.findById(req.params.id);
        if (!contribuyente) {
            res.status(404).json({ msg: 'No existe el contribuyente en el sistema' })
        }

        res.json(contribuyente);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
}

exports.eliminarContrib = async(req, res) => {
    try {
        let contribuyente = await Contribuyente.findById(req.params.id);
        if (!contribuyente) {
            res.status(404).json({ msg: 'No existe el contribuyente en el sistema' })
        }

        await Contribuyente.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: 'Contribuyente eliminado del registro' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
}