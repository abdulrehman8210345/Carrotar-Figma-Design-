// import React from 'react';

const PricingCard = ({title,price, features,popular,include}) => {
  return (
    <div className={`bg-white w-[25%] overflow-hidden shadow-2xl border rounded-xl ${popular ? 'border-orange-500' : 'border-gray-300'}`}>
        <div className="bg-orange-500 w-full h-4"></div>
       <div className="p-6 text-center">
       <h2 className="text-2xl text-center text-blue-600 font-bold mb-4">{title}</h2>
      <p className="text-4xl font-bold mb-4">${price}/mo</p>
      <p className="text-sm  mb-4">{include}</p>
      <ul className="list-disc list-inside mb-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul></div> 
      
    </div>
  );
};

export default PricingCard;
