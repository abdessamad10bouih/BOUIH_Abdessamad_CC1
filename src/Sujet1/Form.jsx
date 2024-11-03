import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Form({ click, ajouterFun, idV, MarqueV, TypeCarburantV, PrixLocationV, imageV, setTable }) {
    const [formData, setFormData] = useState({
        id: idV || "",
        Marque: MarqueV || "",
        TypeCarburant: TypeCarburantV || "",
        PrixLocation: PrixLocationV || "",
        image: imageV || ""
    });

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const changer = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
      
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setTable((table) => [...table, { ...formData }]);
        click()
    };

    return (
        <AnimatePresence>
            <section className="w-full h-screen absolute flex items-center justify-center bg-black bg-opacity-35">
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        Gestion des Voitures de Location
                    </h2>
                    <p className="mb-6 text-gray-600">
                        Ajoutez ou modifiez les informations d'une voiture de location.
                    </p>

                    <form onSubmit={handleSubmit}>
                        {/* ID Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">ID</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="id" type="text" name="id" value={formData.id} onChange={changer} placeholder="ID unique de la voiture" required />
                        </div>

                        {/* Marque Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Marque">Marque</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Marque" name="Marque" type="text" value={formData.Marque} onChange={changer} placeholder="Ex: Renault, Peugeot, etc." required />
                        </div>

                        {/* TypeCarburant Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TypeCarburant">Type de TypeCarburant</label>
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="TypeCarburant" value={formData.TypeCarburant} name="TypeCarburant" onChange={changer} required>
                                <option value="">Sélectionnez le type de TypeCarburant</option>
                                <option value="essence">Essence</option>
                                <option value="diesel">Diesel</option>
                                <option value="electrique">Électrique</option>
                                <option value="hybride">Hybride</option>
                            </select>
                        </div>

                        {/* PrixLocation Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PrixLocation">PrixLocation de location (€/jour)</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="PrixLocation" type="number" name="PrixLocation" placeholder="Ex: 50" min="0" value={formData.PrixLocation} onChange={changer} required />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">URL de l'image</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="imageUrl" type="url" name="image" value={formData.image} onChange={changer} placeholder="https://exemple.com/image-voiture.jpg" />
                        </div>
                        <div className="flex items-center justify-end gap-5">
                            <button className="bg-blue-500 order-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enregistrer la voiture</button>
                            <button className="bg-slate-200 order-1 hover:bg-slate-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={click}>Annuler</button>
                        </div>
                    </form>
                </motion.div>
            </section>
        </AnimatePresence>
    );
}

export default Form;
