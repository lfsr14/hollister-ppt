import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../assets/scss/main.scss";
import Header from "./Header";
import FooterNavigation from "./FooterNavigation";

const Layout = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            menuLinks {
              name
              link
              cl
            }
          }
        }
      }
    `}
    render={(data) => (
      <React.Fragment>
        <div className={""}>
          <div id="page-wrapper">
            <Header
              menuLinks={data.site.siteMetadata.menuLinks}
              siteTitle={data.site.siteMetadata.title}
            />
            {children}
          </div>
        </div>
      </React.Fragment>
    )}
  />
);

export default Layout;
