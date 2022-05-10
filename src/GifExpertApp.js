import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Footer } from "./components/Footer";
import { GifGrid } from "./components/GifGrid";
import { Header } from "./components/Header";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Marvel"]);

  /*const handleAdd = ()=>{
        setCategories(["Risas",...categories])
    }*/
  return (
    <>
      <Header/>

      <main>
        <AddCategory setCategories={setCategories} />
        {/*Comunicación entre componentes*/}
        <hr></hr>

        <ol>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </ol>
      </main>
      <Footer/>
    </>
  );
};

export default GifExpertApp;
