import { withTranslation, TFunction } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  t: TFunction;
}

const Block = ({ title, content, t }: Props) => {
  return (
    <Container>
      <h6 style={{fontSize: "3rem"}}>{t(title)}</h6>
      <TextWrapper>
        <Content  style={{ whiteSpace: 'pre-line' }}>{t(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
