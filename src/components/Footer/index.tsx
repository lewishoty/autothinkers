import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
        style={{ marginRight: "1rem" }}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Para>
                {t(`Do you have any questions? Feel free to reach out!`)}
              </Para>
              <a href="mailto:lewisho125@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
                <SocialLink
                  href="https://wa.me/6585112340"
                  src="whatsapp.svg"
                />
                <SocialLink
                  href="mailto:lewisho125@gmail.com"
                  src="email.svg"
                />
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Empty />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
            <Empty />
            </Col>
          </Row>
          
    
        </Container>
      </FooterSection>
      
    </>
  );
};

export default withTranslation()(Footer);
