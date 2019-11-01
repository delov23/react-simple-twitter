// import { readFileSync } from "fs";
// import path from 'path';
// const data = readFileSync(path.join(__dirname, './db.json'));

export default {
  tweets: [
    {
      id: '29dhh2ida-9d',
      user: 'user.1',
      content: 'Trying out the new product from riot games. Excited!',
      image:
        'https://www.riotgames.com/darkroom/1120/05c55b321db28a205bd473733f059da2:b9259253a6e91d8a4163c21231d1d346/02-logo.png',
      timestamp: 1571581591383,
    },
    {
      id: '29dhh3da-9d',
      user: 'user.2',
      content: "I just want a burger y'all 🤠🤠",
      timestamp: 1571582700145,
    },
    {
      id: '29dhh2ida/2d',
      user: 'user.3',
      content: "It's my birthday, finally 🎉🎉🎉!",
      image:
        'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/835767',
      timestamp: 1571582800145,
    },
  ],
  users: [
    {
      id: 'user.1',
      name: 'Tom Newman',
      username: 'tom_nm2',
      picture:
        'https://www.pixelite.co.nz/content/images/2019/09/mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg',
    },
    {
      id: 'user.2',
      name: 'Nia Brown',
      username: 'niabrown1',
      picture:
        'https://i.pinimg.com/736x/73/b1/ac/73b1acc4c8da50848288dffe8a48af4a.jpg',
    },
    {
      id: 'user.3',
      name: '🎉Alex',
      username: 'alex_sweetie',
      picture:
        'https://i.pinimg.com/originals/43/ef/18/43ef182ac321c4f757ecfde338eea736.jpg',
    },
  ]
};
