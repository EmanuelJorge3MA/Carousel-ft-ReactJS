import React, {useState} from 'react';

import {dataDigitalBestSeller} from '../carousel/data';

function GalleryReact() {

   const[items, setItems] = useState(dataDigitalBestSeller);
const filterItem = (categItem) => {
const updatedItems = dataDigitalBestSeller.filter((curElem) => {
  return curElem.category === categItem;
});

setItems(updatedItems);
}

  return (
    <>
      <h2>Explore os nossos serviços</h2>
      <br/>
      
      <div>
        <button onClick={()=> setItems(dataDigitalBestSeller)}>Todos</button>
        <button onClick={()=> filterItem('acompanhamento')}>Acompanhamento</button>
        <button>Reparações</button>
        <button>Casa</button>
        <button>Aulas</button>
      </div>

    </>
  )
}

export default GalleryReact