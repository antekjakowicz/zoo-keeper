import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve('data', 'data.json');

const AnimalService = {
    async getAnimals() {
        const data = await fs.readFile(filePath, 'utf-8')
        return JSON.parse(data);
    },
    
    async getAnimalsById(id) {
        const animals = await this.getAnimals();
        const animal = animals.find(animal => animal.id === id);
        if (!animal) throw new Error('Animal not found');
        return animal;
    },
    
    async getEndangeredAnimals() {
        const animals = await this.getAnimals()
        return animals.filter(animal => animal.isEndangered);
    },

    async getAnimalsByHabitat (habitat) {
        const animals = await this.getAnimals()
        return animals.filter(animal => animal.habitat.toLowerCase() === habitat.toLowerCase())
    },

    async getAnimalsBySpecies (species) {
        const animals = await this.getAnimals()
        return animals.filter(animal => animal.species.toLowerCase() === species.toLowerCase())
    },

    async addAnimal(newAnimal) {
        const animals = await this.getAnimals();
        const newId = animals.length + 1;
        const animal = { id: newId, ...newAnimal };
        animals.push(animal);
        await fs.writeFile(filePath, JSON.stringify(animals, null, 2));
        return animal;
    },

    async updateAniaml(id, updatedAnimal) {
        const animals = await this.getAnimals()
        const index = animals.findIndex(animal => animal.id === id);
        if (index === -1) throw new Error('Animal not found');
        animals[index] = {...animals[index], ...updatedAnimal};
        await fs.writeFile(filePath, JSON.stringify(animals, null, 2));
        return animals[index];
    },

    async deleteAnimal(id) {
        const animals = await this.getAnimals()
        const index = animals.findIndex(animal => animal.id === id);
        if (index === -1) throw new Error('Animal not found');
        const deletedAnimal = animals.splice(index, 1)[0];
        await fs.writeFile(filePath, JSON.stringify(animals, null, 2));
        return deletedAnimal;
    }
};

export default AnimalService;
