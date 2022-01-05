import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginContainer from './components/body/login/LoginContainer';
import RegisterContainer from './components/body/register/RegisterContainer';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginContainer />} />
                    <Route path="/register" element={<RegisterContainer />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
