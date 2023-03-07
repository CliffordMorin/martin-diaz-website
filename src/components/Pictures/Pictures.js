import React from "react";
import ImageGallery from "react-image-gallery";
import martin2 from "../../images/martin2.jpg";
import martin3 from "../../images/martin3.jpg";
import martin4 from "../../images/martin4.jpg";
import martin5 from "../../images/martin5.jpg";
import martin6 from "../../images/martin6.jpg";
import martin7 from "../../images/martin7.jpg";
import martin8 from "../../images/martin8.jpg";
import { Container, Typography, Divider } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import useTheme from "@mui/material/styles/useTheme";
import { Helmet } from "react-helmet-async";

import "./Pictures.css";

const images = [
  {
    original: martin5,
    thumbnail: martin5,
  },
  {
    original: martin6,
    thumbnail: martin6,
  },
  {
    original: martin7,
    thumbnail: martin7,
  },
  {
    original: martin8,
    thumbnail: martin8,
  },
  {
    original: martin2,
    thumbnail: martin2,
  },
  {
    original: martin3,
    thumbnail: martin3,
  },
  {
    original: martin4,
    thumbnail: martin4,
  },
];

const Pictures = () => {
  const theme = useTheme();
  return (
    <div>
      <Helmet>
        <title>Martin Diaz | Pictures</title>
        <meta name="description" content="Pictures of Martin Diaz" />
        <link rel="canonical" href="/pictures" />
      </Helmet>
      <Typography align="center" variant="h2" sx={{ pt: 5, pb: 2 }}>
        <Bounce>PICTURES</Bounce>
      </Typography>
      <Divider
        sx={{
          zIndex: "100",
          backgroundColor: theme.palette.text.primary,
          height: "2px",
          width: "100px",
          margin: "auto",
          mb: 5,
        }}
      />
      <Container sx={{ mt: 5 }}>
        <ImageGallery items={images} lazyLoad={true} />
      </Container>
    </div>
  );
};

export default Pictures;
