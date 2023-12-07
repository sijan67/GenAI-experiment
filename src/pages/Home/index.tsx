import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import Sources from "../../content/Sources.json";
import AboutContent from "../../content/AboutContent.json";
import PositiveImpressions from "../../content/PositiveImpressions.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import ProcessContent from "../../content/ProcessContent.json";
import NextYears from "../../content/NextYears.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="cat.jpg"
        id="intro"
      />
      <ContentBlock
        type="normal"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="process.png"
        id="about"
      />
      <MiddleBlock
        title={ProcessContent.title}
        content={ProcessContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="normal"
        title={PositiveImpressions.title}
        content={PositiveImpressions.text}
        icon="product-launch.svg"
        id="impressions"
      />
      <ContentBlock
        type="normal"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        type="left"
        title={NextYears.title}
        content={NextYears.text}
        icon="waving.svg"
        id="product2"
      />

      <MiddleBlock
        title={Sources.title}
        content={Sources.text}
        button={Sources.button}
      />

    </Container>
  );
};

export default Home;
