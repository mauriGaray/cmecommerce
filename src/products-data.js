const products = [
  {
    id: 0,
    name: "Pinta labial",
    productType: "Cosmetico",
    price: 3500,
    image: "public/0.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 2,
    name: "Perfume Channel 50ml",
    productType: "Perfumería",
    price: 60000,
    image: "public/2.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 3,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/3.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 4,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/4.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 5,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/5.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 6,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/6.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 7,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/7.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 8,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/8.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 9,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/9.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 10,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/10.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 11,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/11.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 12,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/12.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 13,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/13.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 14,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/14.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 15,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/15.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
  {
    id: 16,
    name: "Shoes",
    productType: "Running Shoes",
    price: 35000,
    image: "public/16.jpg",
    stock: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi pariatur soluta numquam at officiis rem distinctio exercitationem, libero possimus cumque fugit ratione provident? Ipsa velit aliquam excepturi assumenda explicabo.",
  },
];
export default products;
