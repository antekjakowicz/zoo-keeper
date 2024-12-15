import express from 'express';
import AnimalsController from './controllers/AnimalsController.js';

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/animals', AnimalsController.getAllAnimals);
app.get('animals/:id', AnimalsController.getAnimalById);
app.get('animals/endangered', AnimalsController.getEndangeredAnimals);
app.get('animals/habitat/:habitat', AnimalsController.getAnimalsByHabitat);
app.get('animals/species/:species', AnimalsController.getAnimalsBySpecies);
app.post('/animals', AnimalsController.addAnimal);
app.put('/animals/:id', AnimalsController.updateAnimal);
app.delete('/animals/:id', AnimalsController.deleteAnimal);

app.get('/', (req, res) => {
    res.send('Welcome to Zoo Keeper!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});