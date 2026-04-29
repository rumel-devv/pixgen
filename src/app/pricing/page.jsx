import React from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Perfect for beginners",
    features: [
      "5 AI images / day",
      "Basic quality",
      "Limited styles",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$9/mo",
    desc: "For creators & freelancers",
    features: [
      "100 AI images / day",
      "High quality (HD)",
      "All styles unlocked",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$19/mo",
    desc: "Best for professionals",
    features: [
      "Unlimited images",
      "Ultra HD quality",
      "Faster generation",
      "Premium support",
    ],
  },
];

const PricingPage = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-16 px-4">
      
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold">
          Simple <span className="text-purple-500">Pricing</span>
        </h1>
        <p className="text-gray-400 mt-3">
          Choose the perfect plan for your needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 border ${
              plan.popular
                ? "border-purple-600 bg-gray-900 shadow-lg shadow-purple-600/10"
                : "border-gray-800 bg-gray-900"
            }`}
          >
            
            {plan.popular && (
              <p className="text-xs text-purple-400 mb-2">Most Popular</p>
            )}

            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="text-gray-400 text-sm">{plan.desc}</p>

            <div className="my-6 text-3xl font-bold">
              {plan.price}
            </div>

            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-lg transition ${
                plan.popular
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
              }`}
            >
              Choose Plan
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default PricingPage;