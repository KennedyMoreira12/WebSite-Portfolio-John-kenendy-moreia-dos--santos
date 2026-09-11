import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }

  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
    gap: 20px;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;

  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Name = styled.span`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 760px) {
    font-size: 25px;
  }
`;

export const Function = styled.h2`
  color: #0070f3;
  margin: 8px 0;
  font-size: 22px;

  @media (max-width: 760px) {
    font-size: 18px;
  }
`;

export const Intro = styled.span`
  color: #a1a1aa;
  text-align: justify;
  line-height: 1.6;

  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  gap: 12px;
  flex-wrap: wrap;
`;

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #005bb5;
    transform: translateY(-2px);
  }
`;

export const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25rem;
    height: 25rem;
  }

  @media (max-width: 760px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    img {
      width: 16rem;
      height: 16rem;
    }
  }
`;

export const Img = styled.img``