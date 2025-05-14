import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import MiddleBlock2 from "../../components/MiddleBlock2";

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
        direction="right"
        title="Business Tasks, On Autopilot."
        content={"We help businesses improve efficiency, cut costs, and scale by automating repetitive tasks and streamlining operations. \n\nOur consulting team designs custom automation solutions.. so your team can focus on what matters most."}
        button={[
          {
            "title": "Schedule a FREE Consultation",
          }
        ]}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        id="services"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="why"
      />
      <MiddleBlock2
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        id="flow"
      />
      <Contact
        title={"Contact Us"}
        content={"Let us help streamline your business! Get a free consultation with us today.\n\n\nWe will reply to you as soon as possible!"}
        id="contact"
      />
    </Container>
  );
};

export default Home;
