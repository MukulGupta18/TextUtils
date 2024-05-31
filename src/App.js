import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type });
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled", "success");
            // document.title = 'TextUtils - Dark Mode';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
            // document.title = 'TextUtils - Light Mode';
        }
    }

    return (
        <>
            <BrowserRouter>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className={`container my-4 ${mode}`}>
                    <Routes>
                        <Route path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />} />
                        <Route path="/about" element={<About mode={mode} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
