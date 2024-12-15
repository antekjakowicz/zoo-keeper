import AnimalsService from '../services/AnimalsService.js';

const AnimalsController = {
    async getAllAnimals(req, res) {
        try {
            const animals = await AnimalsService.getAnimals();
            res.json(animals);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getAnimalById(req, res) {
        try {
            const animal = await AnimalsService.getAnimalById(req.params.id);
            res.json(animal);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    async getEndangeredAnimals(req, res) {
        try {
            const animals = await AnimalsService.getEndangeredAnimals();
            res.json(animals);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getAnimalsByHabitat(req, res) {
        try {
            const animals = await AnimalsService.getAnimalsByHabitat(req.params.habitat);
            res.json(animals);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getAnimalsBySpecies(req, res) {
        try {
            const animals = await AnimalsService.getAnimalsBySpecies(req.params.species);
            res.json(animals);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async addAnimal(req, res) {
        try {
            const newAnimal = await AnimalsService.addAnimal(req.body);
            res.status(201).json(newAnimal);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    async updateAnimal(req, res) {
        try {
            const updatedAnimal = await AnimalsService.updateAniaml(req.params.id, req.body);
            res.json(updatedAnimal);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    async deleteAnimal(req, res) {
        try {
            const deletedAnimal = await AnimalsService.deleteAnimal(req.params.id);
            res.json(deletedAnimal);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
};

export default AnimalsController;