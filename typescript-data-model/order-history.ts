interface OrderItem {
  dateDelivered: string;
  handedDirectly?: boolean;
  title: string;
  author?: string;
  dateReturnWindowClosed: string;
  price: number;
}

interface Order {
  dateOrderPlaced: string;
  totalPrice: number;
  shipTo: string;
  orderNumber: string;
  orderItems: OrderItem[];
}

const orderHistory: Order[] = [
  {
    dateOrderPlaced: 'Aug 4, 2020',
    totalPrice: 34,
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    orderItems: [
      {
        dateDelivered: 'Aug 8, 2020',
        title: 'JavaScript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        dateReturnWindowClosed: 'Sep 7, 2020',
        price: 31.55,
      },
    ],
  },
  {
    dateOrderPlaced: 'Jul 19, 2020',
    totalPrice: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    orderItems: [
      {
        dateDelivered: 'Jul 20, 2020',
        handedDirectly: true,
        title: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        dateReturnWindowClosed: 'Aug 19, 2020',
        price: 41.33,
      },
    ],
  },
  {
    dateOrderPlaced: 'Jul 4, 2020',
    totalPrice: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    orderItems: [
      {
        dateDelivered: 'Jul 7, 2020',
        handedDirectly: true,
        title:
          'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        dateReturnWindowClosed: 'Aug 5, 2020',
        price: 15.98,
      },
    ],
  },
  {
    dateOrderPlaced: 'Jul 3, 2020',
    totalPrice: 138.93,
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    orderItems: [
      {
        dateDelivered: 'Jul 5, 2020',
        title:
          'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        dateReturnWindowClosed: 'Aug 4, 2020',
        price: 31.55,
      },
      {
        dateDelivered: 'Jul 5, 2020',
        title: 'The Art of Sql',
        author: 'Faroult, Stephanie',
        dateReturnWindowClosed: 'Aug 4, 2020',
        price: 31.55,
      },
    ],
  },
];
