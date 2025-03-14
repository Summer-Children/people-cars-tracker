import { v4 as uuidv4 } from 'uuid';
import {data} from './fakeData.js';  

const resolvers = {
    Query: {
        people: () => data.people,  
        cars: () => data.cars,      
        personWithcars: (_, { id }) => {
            const foundPerson = data.people.find(person => person.id === id);
            if (!foundPerson) throw new Error('Person not found');
            return {
                ...foundPerson,
                cars: data.cars.filter(car => car.personId === id)
            };
        }
    },
    Mutation: {
        addPerson: (_, { firstName, lastName }) => {
            const newPerson = { id: uuidv4(), firstName, lastName };
            data.people.push(newPerson);  
            return newPerson;
        },
        addCar: (_, { year, make, model, price, personId }) => {
            const newCar = { id: uuidv4(), year, make, model, price, personId };
            data.cars.push(newCar);       
            return newCar;
        },
        updatePerson: (_, { id, firstName, lastName }) => {
            const personIndex = data.people.findIndex(person => person.id === id);
            if (personIndex === -1) throw new Error('Person not found');
            data.people[personIndex] = { ...data.people[personIndex], firstName, lastName };
            return data.people[personIndex];
        },
        updateCar: (_, { id, year, make, model, price, personId }) => {
            const carIndex = data.cars.findIndex(car => car.id === id);
            if (carIndex === -1) throw new Error('Car not found');
            data.cars[carIndex] = { ...data.cars[carIndex], year, make, model, price, personId };
            return data.cars[carIndex];
        },
        deletePerson: (_, { id }) => {
            const personIndex = data.people.findIndex(person => person.id === id);
            if (personIndex === -1) throw new Error('Person not found');
            const deletedPerson = data.people.splice(personIndex, 1)[0];
            data.cars = data.cars.filter(car => car.personId !== id); 
            return deletedPerson;
        },
        deleteCar: (_, { id }) => {
            const carIndex = data.cars.findIndex(car => car.id === id);
            if (carIndex === -1) throw new Error('Car not found');
            const deletedCar = data.cars.splice(carIndex, 1)[0];
            return deletedCar;
        }
    }
};

export default resolvers;  
