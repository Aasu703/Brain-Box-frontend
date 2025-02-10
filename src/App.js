import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <AppRoutes />
            {/* Add your custom app layout or components here */}
            {/* Example:
            <header>
                <h1>My App</h1>
            </header>
            <main>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </main>
            */}
       

        </div>
    );
};

export default App;