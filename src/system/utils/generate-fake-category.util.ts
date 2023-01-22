export const generateFakeCategory = () => {
  const randomIndex = Math.floor(
    // eslint-disable-next-line prettier/prettier
    Math.random() * ((categories.length - 1) - 0) + 0,
  );
  return categories[randomIndex];
};

export const categories = [
  'Animals',
  'Adjectives',
  'Adverbs',
  'Basktball',
  'Birds',
  'Books',
  'Buildings',
  'Cars',
  'People',
  'Holidays',
  'Cities',
  'Clothes',
  'Comic',
  'Heroes',
  'Drinks',
  'Electronic',
  'Emotions',
  'Family',
  'Film',
  'Food',
  'Football',
  'Fruit',
  'Hobbies',
  'Hotels',
  'Jobs',
  'Liquids',
  'Materials',
  'Monsters',
  'Music',
];
