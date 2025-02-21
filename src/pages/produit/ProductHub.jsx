import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "../../compoments/Navbar.jsx";
import Endbar from "../../compoments/Endbar.jsx";

function ProductHub() {
    return (
        <main>
            <Navbar/>
            <div className='flex h-screen justify-center'>
            <div className='bg-center h-48 grid grid-cols-1 gap-4 content-around '>
                <h2 className="mt-10 flex justify-center text-5xl font-bold text-[#3399FF]">
                    Bienvenu dans la section Produit</h2>

                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <Link to="/addproduct">
                        <button type="button"
                                className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                            Ajouter un produit
                        </button>
                    </Link>
                    <Link to="/allproduct">
                        <button type="button"
                                className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                            Voir les produits
                        </button>
                    </Link>
                </div>
            </div>
            </div>
        <Endbar/>
        </main>
    );
}

export default ProductHub;