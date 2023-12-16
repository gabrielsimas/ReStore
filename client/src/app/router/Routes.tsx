import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />}, // Rota: / - Rota padrão, jogando para a Home Principal, se der um GET "Sêco", vai cair direto na Home, serve para evitar problemas ou usuários deslogados ou com Tokens vencidos.
            {path: 'catalog', element: <Catalog />}, // Rota /catalog            
            {path: 'catalog/:id', element: <ProductDetails />}, // Rota: /catalog/id
            {path: 'about', element: <AboutPage />}, // Rota: /about
            {path: 'contact', element: <ContactPage />} //Rota: /contact
        ]
    }
])