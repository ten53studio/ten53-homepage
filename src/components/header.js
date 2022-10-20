import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Navbar from './navbar';

const Header = () => {
  const data = useStaticQuery(graphql`
    query Logo {
      file(relativePath: { eq: "color.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 250, formats: AUTO)
        }
      }
    }
  `);

  const logo = data.file.childImageSharp.gatsbyImageData;

  return (
    <div className="container">
      <Link to="/">
        <GatsbyImage image={logo} alt="Studio Logo" className="max-h-24" />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
