import React from 'react'

const callouts = [
    {
      name: 'Vegan Diet',
      description: 'Vegan diet is based on plants (such as vegetables, grains, nuts and fruits) and foods made from plants.',
      imageSrc: 'https://images.everydayhealth.com/images/what-is-a-vegan-diet-benefits-food-list-beginners-guide-alt-1440x810.jpg?sfvrsn=1d260c85_1',
      imageAlt: 'A vegan diet is based on plants (such as vegetables, grains, nuts and fruits) and foods made from plants. Vegans do not eat foods that come from animals, including dairy products and eggs.',
      href: '#',
    },
    {
      name: 'Keto Diet',
      description: 'A diet high in fat and low in carbohydrates (sugars) that causes the body to break down fat into molecules called ketones.',
      imageSrc: 'https://www.diabetes.co.uk/wp-content/uploads/2019/01/What-to-eat-on-a-ketogenic-diet.png',
      imageAlt: 'A diet high in fat and low in carbohydrates (sugars) that causes the body to break down fat into molecules called ketones. Ketones circulate in the blood and become the main source of energy for many cells in the body.',
      href: '#',
    },
    {
      name: 'Mediterranean diet',
      description: 'The Mediterranean diet is based on the traditional foods that people used to eat in countries bordering the Mediterranean Sea, including France, Spain, Greece, and Italy.',
      imageSrc: 'https://www.theknot.com/tk-media/images/4d170c12-5e58-441a-ac2e-a0b9457d6134',
      imageAlt: 'Rich in flavorful ingredients like fruits, vegetables, whole grains, and heart-healthy fats, the Mediterranean diet is equal parts delicious and nutritious.',
      href: '#',
    },
  ]

const FavourableDietList = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Favourable Diets</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavourableDietList