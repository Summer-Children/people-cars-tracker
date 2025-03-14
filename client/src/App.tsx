import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import HomePage from './components/pages/HomePage';
import ShowPage from './components/pages/ShowPage';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/person/:id" element={<ShowPage />} />
                </Routes>
            </Router>
        </ApolloProvider>
    );
};

export default App;
