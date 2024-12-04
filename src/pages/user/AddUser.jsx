import {useRef, useState} from "react";
import axios from "../../app/api/axios.js";

const AddUser = () => {
    const errRef = useRef();

    const [full_name,setFull_name]= useState('')
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const onSubmit = async (e) => {
        setErrMsg('')
        setSuccMsg('')
        e.preventDefault();
        try {
            const response = await axios.post("/addUser",
                JSON.stringify({full_name, username, password}), {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                });

            if(response?.status === 200){
                setFull_name('')
                setUsername('')
                setPassword('')
                setSuccMsg("Nouveau utilisateur ajouter");
            }
        }catch (err) {
            if (!err?.response) {
                setErrMsg('Fetch Failed');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else if (err.response?.status === 403) {
                setErrMsg('Forbidden');
            } else if (err.response?.status === 406) {
                setErrMsg('Cette address mail exist deja');
            } else {
                setErrMsg('Fetch Failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <div className="flex h-screen flex-col">
            <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Ajouter un utilisateur</h2>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <p ref={errRef} className="text-green-600 text-center" aria-live="assertive">{succMsg}</p>
                <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
                <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
                    <div>
                        <label htmlFor="First name" className="block text-sm font-medium leading-6 text-gray-900">
                            Nom & Prénom</label>
                        <div className="mt-2">
                            <input
                                type={"text"}
                                placeholder="Enter votre nom & prénom"
                                name="first_name"
                                value={full_name}
                                onChange={(e) => setFull_name(e.target.value)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Username" className="block text-sm font-medium leading-6 text-gray-900">
                            Email</label>
                        <div className="mt-2">
                            <input
                                type={"email"}
                                placeholder="Enter votre email"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Phone numbe" className="block text-sm font-medium leading-6 text-gray-900">
                            Mot de passe</label>
                        <div className="mt-2">
                            <input
                                type={"password"}
                                placeholder="Enter votre mot de passe"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
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
export default AddUser