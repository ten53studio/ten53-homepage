import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const index = ({ data }) => {
  const hero = data.file.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <div className="container mx-auto px-6 text-center pt-10 pb-20">
        <h1 className="max-w-2xl text-3xl mx-auto mb-10 font-bold leading-normal md:text-4xl">
          Coming Soon. <br /> Our new website is on its way.
        </h1>
        <GatsbyImage image={hero} alt="hero image" />
        <h2 className="text-2xl pt-10 font-bold text-[#7B8EB3]">
          <Link
            to="mailto:info@ten53studio.com"
            className="hover:text-[#D63C08]"
          >
            info@ten53studio.com
          </Link>
        </h2>
      </div>
    </Layout>
  );
};

export default index;

export const query = graphql`
  query Hero {
    file(relativePath: { eq: "mobile.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600, formats: AUTO)
      }
    }
  }
`;
