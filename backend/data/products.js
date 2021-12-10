const products = [
  {
    name: 'Aashirvaad Whole Wheat Atta 10 kg',
    image: '/images/atta.jpg',
    description:
      'Aashirvaad Whole Wheat Atta provides the goodness of health in every bite. This product incorporates many benefits of wheat and lets your body maintain a nutrient balance. It is made of nutritious wheat grains. Also, it has a sweet taste that gives you fuller and softer rotis, every single time. Buy Aashirvaad Whole Wheat Atta online now.',
    brand: 'Aashirvaad',
    category: 'Staples',
    price: 379.00,
    countInStock: 500,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Amul Butter 500 g (Carton)',
    image: '/images/butter.jpg',
    description:
      'Who doesnt like a chunk of creamy, velvety, smooth and mouth-watering butter? Made with fresh ingredients, Amul Butter is a multi-purpose butter that can be used as a spread on bread, paratha, roti, naan and sandwiches. It also makes an excellent topping for Pav-bhaji, dal, soups, salads, rice as well as a great cooking medium for Paneer Butter Masala, Dal Makhni and a variety of delightful recipes. So what are you waiting for? Buy this product online today!',
    brand: 'Amul',
    category: 'Dairy Products',
    price: 225.00,
    countInStock: 180,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Britannia NutriChoice Hi-Fibre Digestive Biscuits 1 kg',
    image: '/images/biscuit.jpg',
    description:
      'Give in to your hunger cravings with Britannia NutriChoice Hi-Fibre Digestive Biscuits. These biscuits are the perfect combination of health and taste. Enjoy them with your tea or coffee or as a standalone snack. These hi-fibre biscuits are prepared using the finest ingredients and the hygienic packaging ensures they remain fresh over a period of time. So go ahead, buy Britannia NutriChoice Hi-Fibre Digestive Biscuits online today!',
    brand: 'Britannia',
    category: 'Snacks',
    price: 125.00,
    countInStock: 200,
    rating: 3,
    numReviews: 15,
  },
  {
    name: 'Closeup Everfresh+ Anti-Germ Red Hot Gel Toothpaste 150 g (Pack of 2)',
    image: '/images/toothpaste.jpg',
    description:
      'For fresh breath all day and a smile that sparkles, get the Closeup Everfresh+ Red Hot Gel Toothpaste. It gives you 3x fresher breath and whiter teeth. The Active Zinc Mouthwash present in the toothpaste fights 99% of germs, and its micro shine crystals remove yellow film for whiter teeth. Feel the intense zest of the Red Hot flavour. So what are you waiting for? Buy the product online at the best rate, right here!',
    brand: 'Closeup',
    category: 'Toothpaste',
    price: 106.67,
    countInStock: 450,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Dabur Honey 1 kg',
    image: '/images/honey.jpg',
    description:
      'Dabur Honey is sourced selectively from the Himalayas, the Nilgiris and the Sunderbans forests. This honey has been used as a versatile ingredient for decades now. It is used as a flavour enhancer in different kinds of foods. It tastes delicious on toast, with cereal, with almonds, porridge, herbal teas and crumpets, when added to a smoothie or just warm water! It is ideal for health-conscious and diabetic people. Kick start your day by consuming a spoonful of this honey as it has numerous health benefits. So what are you waiting for? Go ahead, buy Dabur Honey online today!',
    brand: 'Dabur',
    category: 'Staples',
    price: 329.00,
    countInStock: 250,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'iD Natural Creamy Thick Curd 400 g (Pouch)',
    image: '/images/curd.jpg',
    description:
      'Known for its immensely beneficial nutritive values, iD Natural Creamy Thick Curd is a soft and smoothly set curd/dahi that forms an integral part of the daily Indian diet. It is probiotic in nature and owns a prominent quota of medicinal value. It provides you with your daily calcium intake. So go ahead and buy this product online today!',
    brand: 'Id',
    category: 'Dairy Products',
    price: 28.00,
    countInStock: 150,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Kissan Mixed Fruit Jam 700 g',
    image: '/images/jam.jpg',
    description:
      'Kissan Mixed Fruit Jam - This ones a delicious blend of fine fruits. A medley of flavours from the pulp of Banana, Papaya, Apple, Pear, Pineapple, Mango, Grape and Orange blended into one lip-smacking jam. Craving something utterly sweet? This is your answer to that in a packed bottle. So the next time you want to whip up a bread and Jam delight for your kids with an assortment of flavours, you know which bottle to dig into! Lets make breakfast and tiffins yummier with this mixed fruit jam. So go ahead, buy Kissan Mixed Fruit Jam online today!',
    brand: 'Kissan',
    category: 'Staples',
    price: 162.00,
    countInStock: 130,
    rating: 4,
    numReviews: 17,
  },
  {
    name: 'Madhur Pure & Hygienic Sugar 5 kg',
    image: '/images/sugar.jpg',
    description:
      'Madhur Pure and Hygienic Sugar is used in preparing sweetmeats and sweet dishes for your loved ones. It is a must-have product in your kitchen wardrobe. Buy Madhur Pure and Hygienic Sugar online now!',
    brand: 'Madhur',
    category: 'Staples',
    price: 235.00,
    countInStock: 166,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Quaker Oats 1.5 kg',
    image: '/images/oats.jpg',
    description:
      'Start your morning with a wholesome bowl of Quaker Oats, which is the perfect breakfast porridge for the whole family. Add toppings of your favourite fruits and nuts to make it more delicious. Quaker Oats are easy to use and blend into almost any recipe, enhancing the nutritional value of any dish without compromising on taste. Quaker Oats make a healthy and satisfying breakfast choice. Quaker Oats are 100% whole grain and a natural source of carbohydrates and dietary fibre which keeps you fuller for longer, controls your hunger pangs and thereby helps you manage your weight. They have strong benefits for the heart as oats are scientifically proven to help reduce cholesterol. So go ahead, buy Quaker Oats online today!',
    brand: 'Quaker',
    category: 'Staples',
    price: 199.00,
    countInStock: 155,
    rating: 4.8,
    numReviews: 14,
  },
  {
    name: 'Super Sarvottam Physically Refined 100% Rice Bran Oil 1 L',
    image: '/images/oil.jpg',
    description:
      'Super Sarvottam Physically Refined 100% Rice Bran Oil is a special cooking oil extracted from the brown layer of brown rice which is called rice bran. It instantly enhances the flavour of your food. Buy Super Sarvottam Physically Refined 100% Rice Bran Oil online today.',
    brand: 'Super Sarvottam',
    category: 'Staples',
    price: 139.00,
    countInStock: 350,
    rating: 4.3,
    numReviews: 13,
  },
  {
    name: 'Surf Excel Easy Wash Detergent Powder 4 kg',
    image: '/images/detergent.jpg',
    description:
      'Surf Excel Easy Wash Detergent Powder is a superfine powder that removes tough stains in a jiffy and leaves no residue on your clothes. Being a superfine and fluffy powder, it dissolves easily and reaches the stain and removes it easily. Its engineered formula, with a superior technology, unleashes the power of 10 hands that is effective in removing the toughest of stains such as those of mud, ink, oil, ketchup, curry stain, and chocolate very easily. So go ahead and buy this product online today!',
    brand: 'Surf Excel',
    category: 'Detergent',
    price: 360.00,
    countInStock: 230,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Surti Kolam Rice 10 kg',
    image: '/images/rice.jpg',
    description:
      'Surti Kolam Rice is aromatic and lightweight and considered to be of the best quality. It is perfect for preparing dishes like sweet Pongal, fried rice, biryani and in daily cooking. So go ahead and buy Surti Kolam Rice online now!',
    brand: 'Surti Kolam',
    category: 'Staples',
    price: 545.00,
    countInStock: 340,
    rating: 4.5,
    numReviews: 11,
  },
]

export default products

