import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Fade, Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { ButtonWrapper, ContentSection, StyledRow } from "../ContentBlock/styles";
import { SvgIcon } from "../../common/SvgIcon";
import './styles.css';

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
  id: string;
}

const MiddleBlock = ({ title, content, button, t, id }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ContentSection id={id}>
      <Fade triggerOnce>
        <div className="roworcol">
          <Col lg={8} md={8} sm={8} xs={8}>
            <ContentWrapper>
            <div className="card">
              <div className="icon-row">
                <SvgIcon src={"icons8-linkedin.svg"} width="25%" height="25%" />
                <SvgIcon src={"icons8-indeed.svg"} width="25%" height="25%" />
                </div>
                <h5>{"Client Prospecting"}</h5>
                <Content className="card-content">{"Search through linkedin or client's websites for keywords to create an email list or for cold calls"}</Content>
              </div>
            </ContentWrapper>
          </Col>
          <Col lg={8} md={8} sm={8} xs={8}>
          <ContentWrapper>
          <div className="card">
          <div className="icon-row">
                <SvgIcon src={"icons8-facebook.svg"} width="25%" height="25%" />
                <SvgIcon src={"icons8-tiktok.svg"} width="25%" height="25%" />
                <SvgIcon src={"icons8-sap.svg"} width="25%" height="25%" />
                </div>
                <h5>{"Leads Management"}</h5>
                <Content className="card-content">{"Manage leads from facebook, tiktok, google ads and automatically generate a report"}</Content>
              </div>
            </ContentWrapper>
          </Col>
          <Col lg={8} md={8} sm={8} xs={8}>
          <ContentWrapper>
          <div className="card">
                <SvgIcon src={"excel.svg"} width="25%" height="25%" />
                <h5>{"Data Entry"}</h5>
                <Content className="card-content">{"Take data collected from stockcounting, reports, websites and organise them into your software of choice"}</Content>
              </div>
            </ContentWrapper>
          </Col>
          </div>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h5><i><u>{"and so much more..."}</u></i></h5>
            </Col>
          </ContentWrapper>
        </Row>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(MiddleBlock);
