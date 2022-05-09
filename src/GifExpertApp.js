import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Footer } from "./components/Footer";
import { GifGrid } from "./components/GifGrid";
import { HeaderComponent } from "./components/HeaderComponent";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Marvel"]);

  /*const handleAdd = ()=>{
        setCategories(["Risas",...categories])
    }*/
  return (
    <>
      <HeaderComponent/>

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
