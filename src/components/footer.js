import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          company
        }
      }
    }
  `);

  const { company } = data.site.siteMetadata;

  return (
    <div>
      <p>&copy; 2022 {company}</p>
    </div>
  );
};

export default Footer;
