import React from 'react'
import { useEffect, useState } from "react";
function Home() {
    const langues = ["French", "Spanish", "German"];
    const [checkedLangues, setCheckedLangues] = useState({});
    const [formData, setFormData] = useState({
      nom: "",
      email: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const changeStatus = (e) => {
      const name = e.target.name;
      const checked = e.target.checked;
      setCheckedLangues((prevCheckedLangues) => ({
        ...prevCheckedLangues,
        [name]: checked,
      }));
      console.log(checkedLangues);
    };
  
    useEffect(() => {
      console.log("Checked languages:", checkedLangues);
    }, [checkedLangues]);
    const changer = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setFormData({ ...formData, [name]: value });
    };
  
    const submit = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
    };
    return (
      <>
        <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Contact Form
            </h2>
            <form onSubmit={submit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name:
                </label>
                <input
                  id="name"
                  name="nom"
                  type="text"
                  required
                  value={formData.name}
                  onChange={changer}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={changer}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
          {isSubmitted && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Votre Nom est :{" "}
                <span className="font-medium text-gray-900">{formData.nom}</span>
              </p>
              <p className="text-sm text-gray-600">
                Votre Email est :{" "}
                <span className="font-medium text-gray-900">
                  {formData.email}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="w-full h-[60vh] flex justify-center items-center gap-20">
          <div className="w-[400px] h-[300px] shadow-md p-5 flex flex-col">
            <h1>Les Langues pour Choisi</h1>
            <div className="flex gap-2 flex-col w-full">
            {langues.map((langue) => (
                <label
                  htmlFor={langue}
                  key={langue}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    name={langue}
                    id={langue}
                    checked={checkedLangues[langue]} // Controls checkbox state
                    onChange={changeStatus}
                    className="w-4 h-4"
                  />{" "}
                  {langue}
                </label>
              ))}
            </div>
          </div>
          <div className="w-[400px] h-[300px] shadow-md p-5 flex flex-col">
            <h1>Les Langues Choisi</h1>
            {Object.keys(checkedLangues).map((langue) => (
              <p key={langue}>
                {langue}: {checkedLangues[langue] ? "Oui" : "Non"}
              </p>
            ))}
          </div>
        </div>
      </>
    );
}

export default Home