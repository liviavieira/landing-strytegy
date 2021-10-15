import * as React from "react";
import { graphql } from "gatsby";

import Header from "../components/Header";
import Layout from "../components/Layout";

export const query = graphql`
  query {
    alldata {
      projects {
        btnBlog
        btnEnter
        btnFaq
        btnLang
        btnStart
        featSubtitle
        featText1
        featText2
        featText3
        featText4
        featTitle
        featTitle1
        featTitle2
        featTitle3
        featTitle4
        headerImg {
          url
        }
        headerSubtitle
        headerTitle
        journeyImg {
          url
        }
        journeySubtitle
        journeyTitle
        navImg {
          url
        }
        strategyImg1 {
          url
        }
        strategyImg2 {
          url
        }
        strategyImg3 {
          url
        }
        strategySubtitle
        strategyText1
        strategyText2
        strategyText3
        strategyText4
        strategyText5
        strategyText6
        strategyTitle
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const query = data.alldata.projects[0];

  return (
    <Layout
      navImg={query.navImg.url}
      btnBlog={query.btnBlog}
      btnFaq={query.btnFaq}
      btnEnter={query.btnEnter}
      btnLang={query.btnLang}
    >
    <Header
      title={query.headerTitle}
      subtitle={query.headerSubtitle}
      btnStart={query.btnStart}
      headerImg={query.headerImg.url}
    />
    </Layout>
  )
}

export default IndexPage
