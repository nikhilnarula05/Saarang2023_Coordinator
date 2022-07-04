import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import RegistrationForm from './components/registrationForm';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <RegistrationForm />
  </ BrowserRouter>
);
