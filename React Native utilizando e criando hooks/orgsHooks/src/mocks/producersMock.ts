import { grow, green, jennyJack, potager, salad } from "../assets";

const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const producers = {
  title: 'Produtores',
  list: [
    {
      name: 'Grow',
      image: grow,
      distance: getRandom(1,500),
      stars: getRandom(1,5),
    },
    {
      name: 'Green',
      image: green,
      distance: getRandom(1,500),
      stars: getRandom(1,5),
    },
    {
      name: 'Jenny-Jack',
      image: jennyJack,
      distance: getRandom(1,500),
      stars: getRandom(1,5),
    },
    {
      name: 'Potager',
      image: potager,
      distance: getRandom(1,500),
      stars: getRandom(1,5),
    },
    {
      name: 'Salad',
      image: salad,
      distance: getRandom(1,500),
      stars: getRandom(1,5),
    },
  ]
}

export default producers;