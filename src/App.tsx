import './App.css';
import { About } from '@pages/About';
import { Posts } from '@pages/Posts';
import { User } from '@pages/User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const routes = [
    { id: 1, path: '/', element: <About /> },
    { id: 2, path: '/posts', element: <Posts /> },
    { id: 3, path: '/user/:id', element: <User /> },
];
export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, element, id }) => (
                    <Route path={path} element={element} key={id} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};
