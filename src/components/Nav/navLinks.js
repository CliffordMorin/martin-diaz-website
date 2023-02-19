const navLinksDesktop = [
  { page: "Home", link: "/", id: 0 },
  {
    page: "About",
    id: 1,
    children: [
      { page: "Bio", link: "/bio", id: 2 },
      { page: "Discography", link: "/discography", id: 3 },
    ],
  },
  { page: "Teaching", link: "/teaching", id: 4 },
  { page: "Media", link: "/media", id: 5 },
  { page: "Calender", link: "/calender", id: 6 },
  { page: "Contact", link: "/contact", id: 7 },
];

export default navLinksDesktop;
