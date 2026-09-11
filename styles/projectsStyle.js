import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  padding: 20px;
`;

export const Content = styled.div`
  width: 1120px;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  max-height: calc(100vh - 220px);
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
    background-color: #1f1f23;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #0070f3;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  border: 1px solid #26262b;
  gap: 10px;
  border-radius: 12px;
  padding: 20px;
  background-color: #1c1c1f;
  transition: transform 0.3s, border-color 0.3s;

  &:hover {
    transform: translateY(-4px);
    border-color: #0070f3;
  }
`;

export const TitleProject = styled.strong`
  font-size: 18px;
  color: #ffffff;
`;

export const Description = styled.span`
  color: #a1a1aa;
  font-size: 14px;
  line-height: 1.5;
`;

export const Topics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Topic = styled.span`
  background-color: #0070f3;
  color: #ffffff;
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 16px;
`;

export const Created_at = styled.span`
  color: #71717a;
  font-size: 13px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 360px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const RepoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #0070f3;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  color: #a1a1aa;
  font-size: 18px;
  gap: 12px;

  svg {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  color: #f87171;
  font-size: 18px;
  gap: 10px;
`;