import React from 'react';
import {Link} from "react-router-dom";

function CategorieHub() {
    return (

        <main className='flex h-screen justify-center'>
            <div className='bg-center h-48 grid grid-cols-1 gap-4 content-around '>
                <h2 className="mt-10 flex justify-center text-5xl font-bold text-[#3399FF]">
                    Bienvenu dans la section Categorie</h2>

                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <Link to="/addCategorie">
                        <button type="button"
                                className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                            Ajouter un categorie
                        </button>
                    </Link>
                    <Link to="/allCategorie">
                        <button type="button"
                                className="text-white bg-gray-900 border border-gray-900 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">
                            Voir les categories
                        </button>
                    </Link>
                </div>
            </div>
        </main>    );
}

export default CategorieHub;