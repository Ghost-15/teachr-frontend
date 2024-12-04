import React, {useRef, useState} from 'react';
import axios from "../../app/api/axios.js";

function AddCategorie() {
    const errRef = useRef();

    const [nom, setNom] = useState('')

    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const onSubmit = async (e) => {
        setErrMsg('')
        setSuccMsg('')
        e.preventDefault();
        try {
            const response = await axios.post("/addCategorie",
                JSON.stringify({nom}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                });

            if(response?.status === 200){
                setNom('')
                setSuccMsg('Nouvelle categorie ajouter');
            }
        }catch (err) {
            if (!err?.response) {
                setErrMsg('Fetch Failed');
            } else {
                setErrMsg('Ce produit existe deja');
            }
            errRef.current.focus();
        }
    };

    return (
        <div className="h-screen">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Ajouter une categorie</h2>
                <p ref={errRef} className="text-green-600 text-center" aria-live="assertive">{succMsg}</p>
                <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
            </div>

            <div className="flex justify-center mt-5">
                <form onSubmit={(e) => onSubmit(e)} className="space-y-6">

                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nom</label>
                            <div className="mt-2">
                                <input
                                    type={"text"}
                                    placeholder="Entre le nom"
                                    name="name"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Soumettre
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddCategorie;