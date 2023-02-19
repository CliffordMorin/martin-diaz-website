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
  {
    page: "Media",
    id: 5,
    children: [
      { page: "Videos", link: "/media/", id: 6 },
      { page: "Pictures", link: "/", id: 7 },
    ],
  },
  { page: "Calender", link: "/calender", id: 8 },
  { page: "Contact", link: "/contact", id: 9 },
];

export default navLinksDesktop;
