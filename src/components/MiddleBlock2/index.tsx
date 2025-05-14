import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade, Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { ButtonWrapper, ContentSection, MinPara, StyledRow } from "../ContentBlock/styles";
import { SvgIcon } from "../../common/SvgIcon";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
  id: string;
}

const MiddleBlock2 = ({ title, content, button, t, id }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ContentSection id={"flow"}>
      <Fade triggerOnce>
      <StyledRow 
          direction={"left"}>
        <Col lg={12} md={12} sm={12} xs={12}>
        <h6 style={{paddingBottom: '2rem'}}>Customer Journey</h6>
        </Col>
      </StyledRow>
        <StyledRow
          align="top"
          direction={"left"}
        >
          <Col lg={6} md={6} sm={6} xs={6}>
            <ContentWrapper>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0.3rem'}}>
                <div style={{ display: 'flex', marginBottom: '1.5rem'}}>
                <SvgIcon src={"consult.png"} width="40%" height="40%" />
                </div>
                <h4>{"Step 1: Consulting"}</h4>
                <MinPara style={{ marginTop: '1.5rem', marginRight:'0.5rem' }}>{"We will learn your business' unique requirements and provide a detailed proposal on the solution we will develop, to ensure we meet your needs"}</MinPara>
              </div>
            </ContentWrapper>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <ContentWrapper>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0.4rem'}}>
                <div style={{ display: 'flex', marginBottom: '1.5rem'}}>
                <SvgIcon src={"development.png"} width="40%" height="40%" />
                </div>
                <h4>{"Step 2: Development"}</h4>
                <MinPara style={{ marginTop: '1.5rem', marginRight:'0.5rem' }}>{"Upon approval of the solution proposal by you and your team, our technical engineers will begin programming work!"}</MinPara>
              </div>
            </ContentWrapper>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <ContentWrapper>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0.4rem'}}>
                <div style={{ display: 'flex', marginBottom: '1.5rem'}}>
                <SvgIcon src={"handover.png"} width="40%" height="40%" />
                </div>
                <h4>{"Step 3: Handover"}</h4>
                <MinPara style={{ marginTop: '1.5rem', marginRight:'0.5rem' }}>{"We will conduct User Acceptance testing with your team, to verify that the solution is working as per the proposal. We will also provide a User guide on how to use and how the solution works"}</MinPara>
              </div>
            </ContentWrapper>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <ContentWrapper>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0.3rem'}}>
                <div style={{ display: 'flex', marginBottom: '1.5rem'}}>
                <SvgIcon src={"support.png"} width="40%" height="40%" />
                </div>
                <h4>{"Step 4: Aftermarket Support"}</h4>
                <MinPara style={{ marginTop: '1.5rem', marginRight:'0.5rem' }}>{"We will continue supporting the product we developed after handover, and will fix any bugs that break the requirement"}</MinPara>
              </div>
            </ContentWrapper>
          </Col>
          
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(MiddleBlock2);
