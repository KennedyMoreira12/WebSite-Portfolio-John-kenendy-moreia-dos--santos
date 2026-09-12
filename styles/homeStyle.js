import styled from "styled-components";

export const Section = styled.section`
  width: 1120px;
  max-width: 100%;
  margin: 0 auto;
  padding: 60px 20px;

  @media (max-width: 600px) {
    padding: 40px 16px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;

  span {
    color: #0070f3;
  }

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const AboutText = styled.p`
  color: #a1a1aa;
  text-align: justify;
  line-height: 1.7;
  font-size: 16px;
  max-width: 900px;
  margin: 0 auto 40px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Differentials = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: #1c1c1f;
  border: 1px solid #26262b;
  border-radius: 12px;
  padding: 24px;
  text-align: start;
  transition: transform 0.3s, border-color 0.3s;

  &:hover {
    transform: translateY(-4px);
    border-color: #0070f3;
  }
`;

export const CardIcon = styled.div`
  color: #0070f3;
  font-size: 28px;
  margin-bottom: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const CardText = styled.p`
  color: #a1a1aa;
  font-size: 14px;
  line-height: 1.6;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillGroup = styled.div`
  background-color: #1c1c1f;
  border: 1px solid #26262b;
  border-radius: 12px;
  padding: 24px;
  text-align: start;
`;

export const SkillGroupTitle = styled.h3`
  font-size: 18px;
  color: #0070f3;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.span`
  background-color: #26262b;
  color: #e4e4e7;
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0070f3;
    color: #ffffff;
  }
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

export const TimelineItem = styled.div`
  position: relative;
  padding: 0 0 32px 32px;
  border-left: 2px solid #26262b;
  text-align: start;

  &::before {
    content: '';
    position: absolute;
    left: -7px;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #0070f3;
  }

  &:last-child {
    border-left: 2px solid transparent;
    padding-bottom: 0;
  }
`;

export const JobRole = styled.h3`
  font-size: 18px;
  color: #ffffff;
`;

export const JobCompany = styled.span`
  display: block;
  color: #0070f3;
  font-weight: 600;
  margin: 4px 0;
`;

export const JobDate = styled.span`
  display: inline-block;
  background-color: #26262b;
  color: #a1a1aa;
  font-size: 13px;
  padding: 4px 12px;
  border-radius: 16px;
  margin-bottom: 8px;
`;

export const JobDescription = styled.p`
  color: #a1a1aa;
  font-size: 14px;
  line-height: 1.6;
`;