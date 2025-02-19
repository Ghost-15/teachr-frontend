import {Link} from "react-router-dom";
import {useEffect} from "react";
import useAuth from "../auth/useAuth.js";


export default function Navbar() {
    const { auth } = useAuth();

    useEffect(() => {
        if (auth.token){
            document.getElementById("Connexion").style.display = "none";
        }
    }, [])

    return (
        <nav className="bg-sky-800 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <h1 className="text-2xl font-serif font-bold text-white">
                        Teachr<span className="text-orange-500 font-serif font-bold">'</span>Shop</h1>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                    <Link to="/connexion">
                        <button id="Connexion" type="button"
                                className="text-white bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
                            connexion
                        </button>
                    </Link>

                    <button data-collapse-toggle="navbar-cta" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="justify-items-center hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-cta">
                    <ul className="bg-sky-800 flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link to="/hubP"
                               className="block py-2 px-3 md:p-0 text-white hover:text-orange-500 rounded md:bg-transparent bg-orange-500"
                               aria-current="page">Produit</Link>
                        </li>
                        <li>
                            <Link to="/hubC"
                               className="block py-2 px-3 md:p-0 text-white hover:text-orange-500 rounded md:bg-transparent bg-orange-500"
                               aria-current="page">Catégorie</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}