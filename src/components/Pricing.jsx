import PricingCard from "./PricingCard";

const Pricing = () => {
    const pricingData = [
      {
        title: 'Basic',
        price: 29,
        features: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'facere quaerat impedit necessitatibus laboriosam eos', ' nulla animi earum praesentium dicta consequuntur','nulla animi earum praesentium dicta consequuntur'],
        include : "Includes:"
      },
      {
        title: 'Standard',
        price: 59,
        features: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'facere quaerat impedit necessitatibus laboriosam eos', ' nulla animi earum praesentium dicta consequuntur','nulla animi earum praesentium dicta consequuntur','enim mollitia labore facilis! Commodi, aspernatur.'],
        include : "Everything in the basic plan +"
      },
      {
        title: 'Premium',
        price: 99,
        features: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'facere quaerat impedit necessitatibus laboriosam eos', ' nulla animi earum praesentium dicta consequuntur','nulla animi earum praesentium dicta consequuntur','nulla animi earum praesentium dicta consequuntur','nulla animi earum praesentium dicta consequuntur'],
        include : "Everything in the essential +"
      },
    ];
  
    return (
        <>
        <div className="text-center mt-8 text-3xl font-bold p-3">
            <h1 className="text-black">POS <span className="text-orange-500">Pricing</span> </h1>
        </div>
      <div 
        className="flex justify-center gap-2 p-6 h-[90vh] w-full bg-cover bg-center "
        style={{ backgroundImage: "url('/orange-bg.png')" }}
      >
        
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            popular={plan.popular}
            include={plan.include}
          />
        ))}
      </div>
      </>
    );
  };
  
  export default Pricing;
  