import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const index = ({ data }) => {
  const hero = data.file.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <div className="container mx-auto px-6 text-center pt-10 pb-20">
        {/* background blob animation */}
        <div className="relative w-full max-w-lg m-auto">
          <div className="absolute top-0 -left-4 w-96 h-96 rounded-full bg-amber-300 mix-blend-multiply filter blur-xl opacity-20 md:opacity-40 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 rounded-full  bg-[#7B8EB3] mix-blend-multiply filter blur-xl opacity-20 md:opacity-30 animate-blob animation-delay-2000 "></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 rounded-full bg-[#D63C08] mix-blend-multiply filter blur-xl opacity-20 md:opacity-40 animate-blob animation-delay-4000 z-0"></div>
          {/* content & illustration */}
          <div className="z-50">
            <h1 className="max-w-xl text-3xl md:text-6xl mx-auto mb-3 font-bold leading-normal">
              Coming Soon
            </h1>
            <h2 className="text-2=xl md:text-2xl max-w-xl mx-auto pb-10 leading-normal">
              Our new website is on its way
            </h2>
            <GatsbyImage image={hero} alt="hero image" />
          </div>
        </div>
        {/* contact btn*/}
        <Link to="mailto:info@ten53studio.com">
          <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 shadow-md">
            Contact
          </button>
        </Link>
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
