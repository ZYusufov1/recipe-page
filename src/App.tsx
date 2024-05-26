import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipePage from 'pages/RecipePage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<RecipePage />} />
        </Routes>
    );
}

export default App;
