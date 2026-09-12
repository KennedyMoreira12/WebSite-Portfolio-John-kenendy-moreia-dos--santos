import { FaArrowRight, FaDownload, FaLayerGroup, FaChartLine, FaShieldAlt, FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import { Container, Content, Infos, Name, Function, Intro, LinkContainer, StyledButton, Logo, Img } from '../../styles/indexStyle';
import { Section, SectionTitle, AboutText, Differentials, Card, CardIcon, CardTitle, CardText, SkillsGrid, SkillGroup, SkillGroupTitle, SkillChips, Chip, Timeline, TimelineItem, JobRole, JobCompany, JobDate, JobDescription } from '../../styles/homeStyle';
import Link from 'next/link';
import styled from 'styled-components';
import { assetPath } from '../../utils/basePath';

const RoundedImg = styled(Img)`
  border-radius: 50%;
  box-shadow: 0 0 40px rgba(0, 112, 243, 0.25);
`;

const data = {
  sobre: `Profissional de Tecnologia da Informação com 17 anos de experiência prática, unindo sólida base em infraestrutura, automação comercial e desenvolvimento de software Full Stack. Sou capaz de arquitetar aplicações web modernas (React, Node.js, Python, C#, PHP), gerenciar bancos de dados relacionais e, simultaneamente, diagnosticar e resolver falhas complexas em redes, hardwares e sistemas operacionais de ponta a ponta.`,
  diferenciais: [
    {
      icon: FaLayerGroup,
      title: "Atuação Multidisciplinar",
      text: "Perfil em 'T' com capacidade comprovada para investigar e solucionar incidentes críticos que normalmente exigiriam o acionamento de múltiplas equipes (Desenvolvimento, Redes e Hardware)."
    },
    {
      icon: FaChartLine,
      title: "Visão Estratégica de Negócios",
      text: "Experiência real com implantação de automação comercial (PDV/ERP), compreendendo as dores diárias do usuário final e entregando soluções que evitam paralisações financeiras."
    },
    {
      icon: FaShieldAlt,
      title: "Resiliência e Estabilidade",
      text: "Quase duas décadas resolvendo crises tecnológicas diárias, garantindo segurança para lidar com sistemas legados, integrações complexas de APIs (REST) e manutenção de servidores."
    }
  ],
  habilidades: [
    {
      icon: FaCode,
      title: "Desenvolvimento",
      items: ["React.js", "Node.js", "Python", "PHP", "Laravel", "C#", ".NET", "JavaScript", "TypeScript", "Express"]
    },
    {
      icon: FaDatabase,
      title: "Arquitetura & Dados",
      items: ["SQL", "MySQL", "PostgreSQL", "SQL Server", "SQLite", "APIs RESTful", "JWT", "MVC", "CRUD", "Metodologias Ágeis", "Git/GitHub"]
    },
    {
      icon: FaTools,
      title: "Infraestrutura & Suporte",
      items: ["Troubleshooting", "Automação Comercial (PDV/ERP)", "Redes", "Hardware", "Suporte N1, N2 e N3"]
    }
  ],
  experiencia: [
    {
      role: "Desenvolvedor de Software e Integração de Sistemas",
      company: "Consultor Independente / Freelancer",
      period: "2023 – Atual",
      description: "Desenvolvimento de aplicações web Full Stack com React.js, TypeScript e Node.js; criação de APIs REST escaláveis e seguras com autenticação JWT; modelagem e otimização de bancos de dados relacionais e integração de sistemas."
    },
    {
      role: "Especialista em Suporte de TI, Automação Comercial e Troubleshooting",
      company: "Profissional Autônomo",
      period: "2009 – Atual",
      description: "Implantação e sustentação de sistemas de automação (PDV/ERP), automação de processos com scripts e integrações, e resolução de incidentes críticos em computadores, redes e hardwares."
    },
    {
      role: "Técnico em Manutenção de Informática e Celulares",
      company: "Multiserve",
      period: "2015 – 2016",
      description: "Diagnósticos precisos e reparos avançados de hardware e software em computadores, notebooks e dispositivos móveis corporativos, reduzindo o tempo de inatividade tecnológica."
    },
    {
      role: "Técnico de Suporte e Informática",
      company: "AS Tecnologia",
      period: "2012 – 2014",
      description: "Atendimento técnico de linha de frente, manutenção preventiva e implementação de infraestrutura de TI para ampla base de usuários."
    }
  ]
};

export default function Home() {
  return (
    <>
      <Container>
        <Content>
          <Infos>
            <Name>Olá, Sou John Kennedy Moreira Dos Santos</Name>
            <Function>FullStack Developer</Function>
            <Intro>
              Especialista em TI com 17 anos de experiência em desenvolvimento Full Stack, automação comercial e infraestrutura.
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
            <RoundedImg src={assetPath('/images/john.jpg')} alt="Foto de John Kennedy" />
          </Logo>
        </Content>
      </Container>

      <Section>
        <SectionTitle>Sobre <span>Mim</span></SectionTitle>
        <AboutText>{data.sobre}</AboutText>
        <Differentials>
          {data.diferenciais.map((item) => (
            <Card key={item.title}>
              <CardIcon><item.icon /></CardIcon>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
            </Card>
          ))}
        </Differentials>
      </Section>

      <Section>
        <SectionTitle>Habilidades <span>&</span> Tecnologias</SectionTitle>
        <SkillsGrid>
          {data.habilidades.map((group) => (
            <SkillGroup key={group.title}>
              <SkillGroupTitle><group.icon /> {group.title}</SkillGroupTitle>
              <SkillChips>
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </SkillChips>
            </SkillGroup>
          ))}
        </SkillsGrid>
      </Section>

      <Section>
        <SectionTitle>Experiência <span>Profissional</span></SectionTitle>
        <Timeline>
          {data.experiencia.map((job) => (
            <TimelineItem key={job.role}>
              <JobRole>{job.role}</JobRole>
              <JobCompany>{job.company}</JobCompany>
              <JobDate>{job.period}</JobDate>
              <JobDescription>{job.description}</JobDescription>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>
    </>
  );
}