import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const index = ({ data }) => {
  const hero = data.file.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <GatsbyImage image={hero} alt="hero image" />
    </Layout>
  );
};

export default index;

export const query = graphql`
  query Hero {
    file(relativePath: { eq: "mobile.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;
