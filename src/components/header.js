import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Navbar from './navbar';

const Header = () => {
  const data = useStaticQuery(graphql`
    query Logo {
      file(relativePath: { eq: "color.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, formats: AUTO)
        }
      }
    }
  `);

  const logo = data.file.childImageSharp.gatsbyImageData;

  return (
    <header className="container mx-auto mt-10 px-6 text-center h-20">
      <div className="h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-20">
        <Link to="/">
          <GatsbyImage
            image={logo}
            alt="Studio Logo"
            loading="eager"
            placeholder="white"
            formats={['AUTO', 'WEBP', 'AVIF']}
          />
        </Link>
      </div>
      {/* <Navbar /> */}
    </header>
  );
};

export default Header;
