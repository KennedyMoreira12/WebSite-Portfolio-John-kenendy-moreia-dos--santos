import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { Container, Content, Infos, Name, Function, Intro, LinkContainer, StyledButton, Logo, Img } from '../../styles/indexStyle';
import Link from 'next/link';
import styled from 'styled-components';
import { assetPath } from '../../utils/basePath';

const RoundedImg = styled(Img)`
  border-radius: 50%;
  box-shadow: 0 0 40px rgba(0, 112, 243, 0.25);
`;

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, Sou John Kennedy Moreira Dos Santos</Name>
          <Function>FullStack Developer</Function>
          <Intro>
            Graduado em Sistemas de Informação, tenho experiência em desenvolvimento Web (React | JS | Python | PHP | C | JAVA), mobile e criação de projetos de Robótica e mais.
          </Intro>
          <LinkContainer>
            <Link href="/projects" passHref>
              <StyledButton>
                PROJETOS <FaArrowRight style={{ marginLeft: '8px' }} />
              </StyledButton>
            </Link>
            <StyledButton href={assetPath('/Curriculo/Curriculo.pdf')} download>
              <FaDownload style={{ marginRight: '8px' }} /> Download CV
            </StyledButton>
          </LinkContainer>
        </Infos>
        <Logo>
          <RoundedImg src={assetPath('/images/logo.png')} alt="Foto de John Kennedy" />
        </Logo>
      </Content>
    </Container>
  );
}