import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import Sources from "../../content/Sources.json";
import AboutContent from "../../content/AboutContent.json";
import PositiveImpressions from "../../content/PositiveImpressions.json";
import Limitations from "../../content/Limitations.json";
import ContactContent from "../../content/ContactContent.json";
import ProcessContent from "../../content/ProcessContent.json";
import AuthorContent from "../../content/Authors.json";
import NextYears from "../../content/NextYears.json";
import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";
import four from "./img/4.png";
import five from "./img/5.png";

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
      <h1 id="process">Process</h1>
      <div className="process-container">
        <div className="process-left-div">
          <p>Several steps were taken and prompts were used to arrive at the final image generated above.</p>
          <p>First of all, from the model selection drop-down in Leonardo AI, one can choose the genAI model to generate an image with. We initially experimented with Stable Diffusion 2.1, Anime Pastel Dream models with a goal to generate an animation-style final image; however, these models did not work as expected. They generated outputs such as a person with cat headbands (1) or an image of just a tailored blazer and trousers without a cat (2). In contrast, the 3D Animation Style generated the expected Anime-style image with a cat. (3)</p>

          <p>The prompt used for all of these models was the same, which is ‘Envision a cat in a sophisticated power suit with a tailored blazer and high-waisted trousers. Choose a bold color like navy blue or charcoal gray to exude authority.’</p>

          <p>However, we noticed that the generated image did not have any background related to the business world (3), as per our theme. So, we modified the prompt to add a background as: ‘Envision a cat wearing a sophisticated power suit with a tailored blazer and high-waisted trousers. Choose a bold color like navy blue or charcoal gray to exude authority. Consider a background that showcases a blend of technology and innovation, reflecting the cat's forward-thinking approach to business.’ This prompt generated a background, but it was just a blurry one. (4)</p>

          <p>Therefore, we decided to make the prompt more concise and removed the choice of color, as: ‘Envision a cat wearing a sophisticated power suit with a tailored blazer and high-waisted trousers. Consider a background that showcases a blend of technology and innovation, reflecting the cat's forward-thinking approach to business.’</p>

          <p>And with this prompt, we were able to get the final result we expected. (5)</p>
        </div>
        <div className="process-right-div">
          <p style={{ fontStyle: "italic" }}>Image 1</p>
          <img src={one} alt="Image 1" />
          <p style={{ fontStyle: "italic" }}>Image 2</p>
          <img src={two} alt="Image 2" />
          <p style={{ fontStyle: "italic" }}>Image 3</p>
          <img src={three} alt="Image 3" />
          <p style={{ fontStyle: "italic" }}>Image 4</p>
          <img src={four} alt="Image 4" />
          <p style={{ fontStyle: "italic" }}>Image 5</p>
          <img src={five} alt="Image 5" />
        </div>
      </div>
      <ContentBlock
        type="normal"
        title={PositiveImpressions.title}
        content={PositiveImpressions.text}
        icon="product-launch.svg"
        id="impressions"
      />
      <ContentBlock
        type="normal"
        title={Limitations.title}
        content={Limitations.text}
        icon="limitations.svg"
        id="limitations"
      />
      <ContentBlock
        type="left"
        title={NextYears.title}
        content={NextYears.text}
        icon="waving.svg"
        id="years"
      />
      <h1>Conclusion</h1>
      <p>Generative AI is transforming education, work, and society. It is expected to change the way we've been conducting business using conventional ways.<br /><br /> Overall, generative AI is expected to become a transformative force and we can expect huge advancements in its research and development.</p>
      <ContentBlock
        type="normal"
        title={AuthorContent.title}
        content={AuthorContent.text}
        icon="authors.png"
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
