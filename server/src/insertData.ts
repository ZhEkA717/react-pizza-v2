export const categories = [
  {
    id: 1,
    name: "Все",
    createdAt: "2023-12-22T07:08:50.409Z",
    updatedAt: "2023-12-22T07:08:50.409Z",
  },
  {
    id: 2,
    name: "Мясные",
    createdAt: "2023-12-22T07:08:59.625Z",
    updatedAt: "2023-12-22T07:08:59.625Z",
  },
  {
    id: 3,
    name: "Вегетарианские",
    createdAt: "2023-12-22T07:09:30.151Z",
    updatedAt: "2023-12-22T07:09:30.151Z",
  },
  {
    id: 4,
    name: "Гриль",
    createdAt: "2023-12-22T07:09:34.910Z",
    updatedAt: "2023-12-22T07:09:34.910Z",
  },
  {
    id: 5,
    name: "Острые",
    createdAt: "2023-12-22T07:09:39.766Z",
    updatedAt: "2023-12-22T07:09:39.766Z",
  },
  {
    id: 6,
    name: "Закрытые",
    createdAt: "2023-12-22T07:09:46.851Z",
    updatedAt: "2023-12-22T07:09:46.851Z",
  },
];

export const types = [
  {
    name: "тонкое",
  },
  {
    name: "традиционное",
  },
];

export const sizes = [
  {
    count: 26,
  },
  {
    count: 30,
  },
  {
    count: 40,
  },
];

export const products = [
  {
    imageUrl: "d0b0fd3a-7b25-4492-922b-ca90f8808114.jpg",
    title: "Пепперони Фреш с перцем",
    price: 803,
    rating: 0,
    recipe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam         architecto repellendus labore laboriosam tenetur magnam ab quasi praesentium expedita dignissimos officiis ",
    types: [0, 1],
    sizes: [26, 30, 40],
    createdAt: "2023-12-22T07:10:03.225Z",
    updatedAt: "2023-12-22T07:10:03.225Z",
    typeId: 1,
    categoryId: 4,
    sizeId: 1,
  },
  {
    imageUrl: "8a8eab14-2007-4d2e-b2e0-ac559b2be46b.jpg",
    title: "Крэйзи пепперони",
    price: 580,
    rating: 0,
    recipe: "lorem loremlorem loremlorem lorem",
    types: [0],
    sizes: [30, 40],
    createdAt: "2023-12-27T05:51:45.962Z",
    updatedAt: "2023-12-27T05:51:45.962Z",
    typeId: 1,
    categoryId: 2,
    sizeId: 1,
  },
  {
    imageUrl: "34c08f52-ee23-49a4-9174-acf922d1fc54.jpg",
    title: "Сырная",
    price: 580,
    rating: 0,
    recipe: "Рецепт сырной пиццы",
    types: [0],
    sizes: [30, 40],
    createdAt: "2023-12-28T05:19:48.478Z",
    updatedAt: "2023-12-28T05:19:48.478Z",
    typeId: 1,
    categoryId: 5,
    sizeId: 1,
  },
];
