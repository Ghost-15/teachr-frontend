import React from 'react';
import Navbar from "../compoments/Navbar.jsx";
import Endbar from "../compoments/Endbar.jsx";
import Formulaire from "../compoments/Formulaire.jsx";

function Hub() {
    return (
        <main>
            <Navbar/>

            <section className="bg-gradient-to-t from-sky-500 to-sky-800 p-8 mx-auto text-center ">
                <div className='flex items-center justify-center text-white'>
                    <div className="grid grid-cols-1 m-36">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h1 className="mb-4 text-4xl font-mono font-semibold md:text-5xl lg:text-6xl text-white">
                                    Bienvenu sur notre plateform
                                </h1>
                                <p className="text-3xl font-serif">
                                    Nous stockons en toute sécurité vos données.</p>
                            </div>

                            <div className="aspect-3/2 object-cover ...">
                                <img src="/hw.jpg" alt="logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="text-gray-600 body-font mx-12">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="text text-center font-mono text-2xl md:text-4xl mb-10">
                        <h1>How it works</h1>
                    </div>
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div
                                    className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"/></svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        Connexion</h2>
                                    <p className="leading-relaxed">Connetez vous grace au boutton connexion
                                        <br/>Si vous n'avez pas de compte veillez en cree un.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div
                                    className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                         viewBox="0 0 20 20">
                                        <path fill="currentColor"
                                              d="M10 1c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9m0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7m1-11H9v3H6v2h3v3h2v-3h3V9h-3z"
                                              className="st0"/>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        Categories et Produits</h2>
                                    <p className="leading-relaxed">
                                        Vous pouvez maintenant ajouter les categories et les produits.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div
                                    className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0zm-2 0V9A5 5 0 0 0 7 9v1zm-6 4v4h2v-4z"/></svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">Sécurité</h2>
                                    <p className="leading-relaxed">
                                        Toutes vos données sont sécurité.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*<img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"*/}
                        {/*     src="https://source.unsplash.com/featured?team" alt="step"/>*/}
                    </div>
                </div>
            </section>


            <section className="bg-gray-300 text-gray-600">
                <div className="container px-5 py-8 mx-auto grid grid-cols-2 items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Contacter nous</h1>
                        <p className="text-xl leading-relaxed mt-4">
                            Email: contact@mail.com
                            <br/>Numero: +33 123 45 67
                        </p>
                    </div>
                    <div>
                        <h1 className="title-font font-medium text-3xl text-gray-900">Envoyez-nous un message<br/>
                            Remplissez les détails ci-dessous</h1>
                        <Formulaire/>
                    </div>
                </div>
            </section>

            <Endbar/>
        </main>
    );
}

export default Hub;