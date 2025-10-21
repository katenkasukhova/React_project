import React from 'react'
import CardComponent from '../components/CardComponent';

const CardsPage = () => {
  return (
    <div>
        <div className="row g-4">
  <div className="col-md-4">
    <CardComponent
    title = "Лягуха 1"
    imageUrl = "/images/frog1.webp"
    description = "Одна крутая лягуха"
    imageAlt = "лягуха 1"/>
  </div>

   <div className="col-md-4">
    <CardComponent
    title = "Лягуха 2"
    imageUrl = "/images/frog3.webp"
    description = "Две крутые лягухи"
    imageAlt = "лягуха 2"/>
  </div>

   <div className="col-md-4">
    <CardComponent
    title = "Лягуха 3"
    imageUrl = "/images/frog5.png"
    description = "Три крутые лягухи"
    imageAlt = "лягуха 3"/>
  </div>
</div>
    </div>
  );
};

export default CardsPage;