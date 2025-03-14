import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.js'; 
import resolvers from './resolvers.js';  

const PORT = process.env.PORT || 4001;

const server = new ApolloServer({typeDefs, resolvers});

server.listen({port:PORT}).then(({url}) => {
    console.log(`Server is running at ${url}`);
});