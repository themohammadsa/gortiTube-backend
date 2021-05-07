const faker = require("faker");

faker.seed(3)

data = [
  {
    id: "jh4sQdVZXCw",
    title: "TOP 6: BEST Laptop For Engineering Students [2021] | High Performance Laptops",
    author: "Unbox Daily",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwngu0BNOsh1BcrGC6govQzRx13KoKrNHCDj7Aomc=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/jh4sQdVZXCw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLA8NZttT2Zkb7_x-jbc0klsGftx9g",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
  {
    id: "e6_t26Q9aVM",
    title: "Smartphone Awards 2020!",
    author: "Marques Brownlee",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/e6_t26Q9aVM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGR8XL7JwtdtdSf46CryG47um8tg",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
  {
    id: "yl8wJsEtx1w",
    title: "Top 10 BEST Smartphones of 2020",
    author: "SuperSaf",
    avatar:
      "https://i.ytimg.com/vi/yl8wJsEtx1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO_So9LC7F0YU-bLY28Kevf4cBXA",
    thumbnail:
      "https://i.ytimg.com/vi/yl8wJsEtx1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO_So9LC7F0YU-bLY28Kevf4cBXA",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
  {
    id: "AB9KT9KxUBo",
    title: "15 Smartphone Gadgets that'll SHOCK you!",
    author: "Marques Brownlee",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s88-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/AB9KT9KxUBo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5d1tDExO-l39a8r0rpctAENIGiQ",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
   {
    id: "fTvC4Wqj16Y",
    title: "Best Smartwatch under 15000 In India 2021 | Top 5 Best Smartwatch",
    author: "technoZee",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnj3SMmt8pr-Wu3KA9etJ1MEOBoDsG_8AzKbSZoOTw=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/fTvC4Wqj16Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-gbQ_ED0_uhonb4CJ0N7nL8e-bg",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
     {
    id: "djpIExCHWJc",
    title: "Unboxing the $122,000 Smartphone. ",
    author: "Mrwhosetheboss",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/djpIExCHWJc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsBr43P7rzGBlE5W6xdTixuHO_fg",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
    {
    id: "nb0BG0ixuQA",
    title: "Mi 11 Ultra Review - Xiaomi just KILLED Samsung!?",
    author: "Mrwhosetheboss",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/nb0BG0ixuQA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPe1K8oYmqJTq_1FJEAiE-hR6wCQ",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
   {
    id: "Ijssm6Qv5nE",
    title: "The Thinnest Smartphone in the World.",
    author: "Mrwhosetheboss",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/Ijssm6Qv5nE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHJ2RJnOcPSEGF9MjXcb0CcPcJMA",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },

 {
    id: "qxRpzr-862Q",
    title: "Samsung Galaxy S21 Ultra vs iPhone 12 Pro Max Camera Test Comparison.",
    author: "Mrwhosetheboss",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/qxRpzr-862Q/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYsKa_JJEIJcdrRPefevX7lPABMg",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
 {
    id: "tNy-0cphhNU",
    title: "The 2 Fastest Phones on the Planet.",
    author: "Mrwhosetheboss",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/tNy-0cphhNU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBv0KA-NSr5iWdPKgziG_SpJBiNaA",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
{
    id: "ZI58Itw9B7A",
    title: "Why Samsung's Transparent Phone will fail.",
    author: "Mrwhosetheboss",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/ZI58Itw9B7A/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiICs8p1ge1C1bllyCTnN0FJGNZw",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
  {
    id: "djpIExCHWJc",
    title: "Unboxing the $122,000 Smartphone.",
    author: "Mrwhosetheboss",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/djpIExCHWJc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrUe-JH5eBaHuE9EZofkX-H0bKKw",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
  {
    id: "KgOYSy-q3m0",
    title: "Asus Zenfone 6 - ULTIMATE Rotating Camera Smartphone.",
    author: "Mrwhosetheboss",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/KgOYSy-q3m0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7Cz3T6-4XJ11QllhxCBIokfsf7Q",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
    {
    id: "WVVRVtJ9ujk",
    title: "20 Crazy Smartphone Gadgets for 2020.",
    author: "Mrwhosetheboss",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/WVVRVtJ9ujk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbHMqzUq2Z2555sCv5wxrS0fND4A",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
    {
    id: "w_OcYyQmPBk",
    title: "The $100,000 Smartphone Unboxing.",
    author: "Mrwhosetheboss",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/w_OcYyQmPBk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDV3beG-bmj4_I21Vj80yOuNjKzxA",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  },
    {
    id: "hsOv_VU3wKA",
    title: "Xiaomi Mi Mix Alpha - Day in the Life!",
    author: "Mrwhosetheboss",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s68-c-k-c0x00ffffff-no-rj",
    thumbnail:
      "https://i.ytimg.com/vi/hsOv_VU3wKA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqiQLz9bGPmQ0PrCnrHDKJI12cag",
    views: faker.datatype.number(),
    date: faker.date.past(),
    subscribers: faker.datatype.number(),
    likes: faker.datatype.number(),
    dislikes: faker.datatype.number(),
    description: faker.commerce.productDescription()
  }
]

module.exports = { data }