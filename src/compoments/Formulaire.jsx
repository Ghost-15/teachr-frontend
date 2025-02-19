import axios from "../app/api/axios.js";
import {useEffect, useRef, useState} from "react";

function Formulaire() {
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const isSubmiting = document.getElementById("Submit")
    const isLoading = document.getElementById("Loading")

    useEffect(() => {
        document.getElementById("Loading").style.display = "none";
    }, []);

    const handleSubmit = async (e) => {
        setErrMsg('')
        setSuccMsg('')
        e.preventDefault();
        try {
            isSubmiting.style.display = "none";
            isLoading.style.display = "block";
            const response = await axios.post("/notif/contactUs",
                JSON.stringify({email, fullName, phoneNumber, message}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );

            if(response?.status === 200){
                isSubmiting.style.display = "block";
                isLoading.style.display = "none";
                setEmail('')
                setFullName('')
                setPhoneNumber('')
                setMessage('')
                setSuccMsg('Votre Mail a été envoyé avec succès');
            }
        } catch (err) {
            isSubmiting.style.display = "block";
            isLoading.style.display = "none";
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 406) {
                setErrMsg('Désolé, nous sommes confrontés à un problème technique.. ' +
                    'veuillez réessayer plus tard');
            } else {
                setErrMsg('Erreur');
            }
            errRef.current.focus();
        }
    }

    return (
        <div className="mt-10">
            <form className="lg:max-w-[1240px] md:max-w-3xl p-6 bg-white rounded-xl drop-shadow-2xl" onSubmit={handleSubmit}>
                <p ref={errRef} className="text-green-600 text-center" aria-live="assertive">{succMsg}</p>
                <p ref={errRef} className="text-red-600 text-center" aria-live="assertive">{errMsg}</p>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email"
                           pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                           className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder=" " required/>
                    <label htmlFor="floating_email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email</label>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name"
                               className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                               value={fullName}
                               onChange={(e) => setFullName(e.target.value)}
                               placeholder=" " required/>
                        <label htmlFor="floating_first_name"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Nom et prénom</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" name="floating_phone" id="floating_phone"
                               // pattern="^09[0-9]{9}$"
                               className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               value={phoneNumber}
                               onChange={(e) => setPhoneNumber(e.target.value)}
                               placeholder=" " required/>
                        <label htmlFor="floating_phone"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Téléphone
                        </label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea id="message" rows="4"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                              placeholder="Laissez un commentaire...">

                    </textarea>
                </div>

                <button id="Submit" type="submit" className="py-2.5 px-5 me-2 rounded-lg focus:z-10 text-white bg-blue-600 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 inline-flex items-center">
                    Envoyer
                </button>

                <button id="Loading" className="py-2.5 px-5 me-2 rounded-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 inline-flex items-center" disabled>
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
                    Chargement...
                </button>
            </form>
        </div>
    );
}

export default Formulaire;