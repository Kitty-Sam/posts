import './App.css';
import { About } from '@pages/About';
import { Posts } from '@pages/Posts';
import { User } from '@pages/User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const routes = [
    { id: 1, path: '/about', element: <About /> },
    { id: 2, path: '/', element: <Posts /> },
    { id: 3, path: '/user/:id', element: <User /> },
];
export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {routes.map(({ path, element, id }) => (
                        <Route path={path} element={element} key={id} />
                    ))}
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
};
