import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 760px) {
    font-size: 24px;
  }
`;

export const ItemCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 560px;
`;