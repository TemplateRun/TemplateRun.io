import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import SimpleReactLightbox from "simple-react-lightbox";

import TRLOG from "../assets/images/TR LOGO new.png";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="pt" />
        <title>{"TemplateRun"}</title>
        <link rel="shortcut icon" type="image/x-icon" href={TRLOG} />
        <link
          href='https://fonts.googleapis.com/css?family=Open%20Sans:300,400,500,600,700,800&display=swap'
          rel='stylesheet'
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <SimpleReactLightbox>
        {children}
      </SimpleReactLightbox>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
