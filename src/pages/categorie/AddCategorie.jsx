import React, {useEffect, useRef, useState} from 'react';
import axios from "../../app/api/axios.js";

function AddCategorie() {
    const ref = useRef();

    const [nom, setNom] = useState('')

    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const isSubmiting = document.getElementById("Submit")
    const isLoading = document.getElementById("Loading")

    useEffect(() => {
        document.getElementById("Loading").style.display = "none";
        ref.current.focus();
    }, [])

    const onSubmit = async (e) => {
        setErrMsg('')
        setSuccMsg('')
        e.preventDefault();
        try {
            isSubmiting.style.display = "none";
            isLoading.style.display = "block";
            const response = await axios.post("/routeC/addCategorie",
                JSON.stringify({nom}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                });

            if(response?.status === 200){
                setNom('')
                setSuccMsg('Nouvelle categorie ajouter');
                isSubmiting.style.display = "block";
                isLoading.style.display = "none";
            }
        }catch (err) {
            isSubmiting.style.display = "block";
            isLoading.style.display = "none";
            if (!err?.response) {
                setErrMsg('Fetch Failed');
            } else {
                setErrMsg('Ce produit existe deja');
            }
            ref.current.focus();
        }
    };

    return (
        <div className="bg-gradient-to-t from-sky-500 to-sky-800">
            <div className="flex h-screen flex-col">
                <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">

                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
                <form onSubmit={(e) => onSubmit(e)} className="space-y-6">

                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Ajouter une categorie</h2>
                    <p ref={ref} className="text-green-600 text-center" aria-live="assertive">{succMsg}</p>
                    <p ref={ref} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>

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
                        <button id="Submit"  type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Soumettre
                        </button>

                        <button id="Loading" className="w-full px-3 py-1.5 rounded-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 inline-flex items-center" disabled>
                            <svg aria-hidden="true" role="status"
                                 className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="#1C64F2"/>
                            </svg>
                            Chargement
                        </button>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
}

export default AddCategorie;