const navLinksDesktop = [
  { page: "Home", link: "/", id: 0 },
  {
    page: "About",
    id: 1,
    children: [
      { page: "BIO", link: "/bio", id: 2 },
      { page: "DISCOGRAPHY", link: "/discography", id: 3 },
    ],
  },
  {
    page: "Media",
    id: 4,
    children: [
      { page: "VIDEOS", link: "/videos", id: 5 },
      { page: "PICTURES", link: "/pictures", id: 6 },
      {
        page: "EPK",
        link: "https://drive.google.com/file/d/1F324HfSH12jcc-HNdzSMt69jKWNUh4Ri/view?usp=sharing",
        id: 7,
      },
    ],
  },
  { page: "CALENDAR", link: "/calendar", id: 8 },
  { page: "CONTACT", link: "/contact", id: 9 },
];

export default navLinksDesktop;
