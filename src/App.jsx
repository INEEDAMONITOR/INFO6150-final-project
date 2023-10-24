import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
function App() {
    const [page, setPage] = useState('Home');
    const changePage = event => {
        event.preventDefault();
        setPage(event.currentTarget.text);
    };
    return (
        <div className="app">
            <Header changePage={changePage} />
            <Main
                page={page}
                changePage={changePage}
                setPage={setPage}
                className="main"
            />
            <Footer />
        </div>
    );
}
export default App;
