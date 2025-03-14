import { useRef, useState, useEffect } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import useAuth from "../auth/useAuth.js";
import axios from '../app/api/axios';

const Login = () => {
    const { setAuth } = useAuth();
    const userRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const isSubmiting = document.getElementById("Submit")
    const isLoading = document.getElementById("Loading")

    useEffect(() => {
        document.getElementById("Loading").style.display = "none";
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            isSubmiting.style.display = "none";
            isLoading.style.display = "block";
            const response = await axios.post("/api/login",
                JSON.stringify({email, password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(response)
            const token = response?.data?.token;
            if(response?.status === 200) {
                setAuth({token});
                navigate(from, {replace: true});
            }
        } catch (err) {
            isSubmiting.style.display = "block";
            isLoading.style.display = "none";
                      console.log(err.response)
            if (!err?.response) {
                setErrMsg('Login Failed');
            } else if (err.response?.status === 400) {
                setErrMsg('Wrong Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Wrong Username or Password');
            } else if (err.response?.status === 403) {
                setErrMsg('Wrong Username or Password');
            } else {
                setErrMsg('Login Failed');
            }
            userRef.current.focus();
        }
    }
    
    return (
        <main className="h-screen grid grid-cols-4 gap-4">

            <div className='bg-gradient-to-t from-sky-500 to-sky-800'/>

            <form className="py-24" onSubmit={handleSubmit} method="post">
                <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-sky-800"> Teachr<span className="text-orange-500 font-serif font-bold">'</span>Shop</h1>
                    <span>Connexion</span>
                </div>
                <p ref={userRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div>
                        <label htmlFor="Username" className="block text-sm font-medium leading-6 text-gray-900">
                            Email</label>
                        <div className="mt-2">
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                type="email"
                                name="_username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Entrer votre email"
                                required/>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Mot de passe</label>
                            {/*<div className="text-sm">*/}
                            {/*    <a className="font-semibold text-red-600 hover:text-red-300 hover:underline hover:underline-offset-8">*/}
                            {/*        Mot de passe oublie?</a>*/}
                            {/*</div>*/}
                        </div>
                        <div className="mt-2">
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                type="password"
                                name="_password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Entrer votre mot de passe"
                                required/>
                        </div>
                    </div>

                    <div className="mt-10">
                        <button id="Submit" type="submit" className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            CONNEXION
                        </button>

                        <button id="Loading" className="w-full justify-center px-3 py-1.5 rounded-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 inline-flex items-center" disabled>
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

                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-500 border-0"/>
                            <span
                                className="absolute px-3 font-medium text-black bg-white">or</span>
                    </div>

                    <Link to="/addUser">
                        <button className="flex w-full justify-center rounded-md border-2 border-sky-600 bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-sky-800 shadow-sm hover:bg-sky-600 hover:text-white">
                            JE M'INSCRIS</button>
                    </Link>

                </div>

            </form>

        </main>
    );
}

export default Login
