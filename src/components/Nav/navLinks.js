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
  {
    page: "Media",
    id: 4,
    children: [
      { page: "Videos", link: "/videos", id: 5 },
      { page: "Pictures", link: "/pictures", id: 6 },
      {
        page: "EPK",
        link: "https://drive.google.com/file/d/1F324HfSH12jcc-HNdzSMt69jKWNUh4Ri/view?usp=sharing",
        id: 7,
      },
    ],
  },
  { page: "Calender", link: "/calender", id: 8 },
  { page: "Contact", link: "/contact", id: 9 },
];

export default navLinksDesktop;
