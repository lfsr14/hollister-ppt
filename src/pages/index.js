import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import BannerSaludDigital from "../components/BannerSaludDigital";

const SaludDigital = () => {
  return (
    <Layout location="/">
      <Helmet
        htmlAttributes={{ lang: "es" }}
        title="Salud digital"
        meta={[
          { name: "description", content: "Landed Gatsby Starter" },
          { name: "keywords", content: "sample, something" },
        ]}
      ></Helmet>
      <BannerSaludDigital />
    </Layout>
  );
};

export default SaludDigital;
