import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Humanizacion from "../components/Humanizacion";

const DosPage = () => {
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
      <Humanizacion />
    </Layout>
  );
};

export default DosPage;
