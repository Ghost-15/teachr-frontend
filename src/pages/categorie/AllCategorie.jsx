import React, {useEffect, useRef, useState} from 'react';
import axios from "../../app/api/axios.js";
import {Link} from "react-router-dom";

function AllCategorie() {
    const errRef = useRef();

    const [categories, setCategorie] = useState([]);
    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    useEffect(() => {
        getAll();
    }, []);
    const getAll = async () => {
        setSuccMsg("Chargement...")
        try {
            const result = await axios.get("/routeC/allCategorie");
            setSuccMsg('');
            setCategorie(result.data);
        } catch (err) {
            setSuccMsg('');
            if (!err?.response) {
                setErrMsg("Il n'y a aucun résultat à afficher");
            } else if (err.response?.status === 404){
                setErrMsg("Il n'y a aucun résultat à afficher");
            } else {
                setErrMsg('Fetch Failed');
            }
            errRef.current.focus();
        }
    };
    const deleteP = async (id) => {
        try {
            const result = await axios.get("/routeC/deteleC/"+id);
            if(result?.status === 200){
                window.location.reload();
            }
        } catch (err) {
            if (!err?.response) {
                setErrMsg("Il n'y a aucun résultat à afficher");
            } else {
                setErrMsg('Failed to delete');
            }
            errRef.current.focus();
        }
    }

    return (
        <main className="h-screen">
            <h1 className="mt-10 flex justify-center text-5xl font-bold text-[#3399FF]">Tous les Produits</h1>
            <div className="mt-10 justify-items-center grid grid-cols-1 gap-4">

                <p ref={errRef} className="text-green-600 text-center" aria-live="assertive">{succMsg}</p>
                <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>

                <div className="flex flex-wrap">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table
                            className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nom
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            {Array.isArray(categories) ? (
                                    categories.map(categorie =>  (
                                        <tbody key={categorie.id}>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {categorie.nom}
                                            </th>
                                            <td className="px-6 py-4">
                                            <Link to={'/modifierC/'+categorie.id} className="font-medium text-blue-500 hover:underline">Modifier</Link>
                                                /
                                                <button onClick={() => deleteP(categorie.id)} className="font-medium text-red-500 hover:underline"> Supprimer</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    )))
                                : ( <p>No products available</p> )}
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AllCategorie;