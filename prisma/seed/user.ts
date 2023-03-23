export const User = [
  {
    name: 'Amit Kumar',
    email: 'amit@yopmail.com',
    password: 'Amit@543',
    shops: {
      create: {
        name: 'Shop1',
        description: 'Shop1 Description',
      },
    },
    products: {
      create: {
        name: 'Product1',
        description: 'Product1 Description',
        amount: 100,
        shopId: 1,
      },
    },
  },
  {
    name: 'Sumit Paul',
    email: 'sumit@yopmail.com',
    password: 'Sumit@543',
    shops: {
      create: {
        name: 'Shop2',
        description: 'Shop2 Description',
      },
    },
    products: {
      create: [
        {
          name: 'Product2',
          description: 'Product2 Description',
          amount: 150,
          shopId: 2,
        },
        {
          name: 'Product4',
          description: 'Product4 Description',
          amount: 170,
          shopId: 2,
        },
      ],
    },
  },
  {
    name: 'David Habibi',
    email: 'david@yopmail.com',
    password: 'David@543',
    products: {
      create: {
        name: 'Product3',
        description: 'Product3 Description',
        amount: 200,
        shopId: 1,
      },
    },
  },
];
