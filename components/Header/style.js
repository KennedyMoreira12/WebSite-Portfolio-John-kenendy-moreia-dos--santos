import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #26262b;
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 760px) {
    padding: 0 16px;
  }
`;

export const Title = styled.a`
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #0070f3;
  }

  @media (max-width: 460px) {
    font-size: 20px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 8px;

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #121214;
    position: fixed;
    height: 100%;
    gap: 0px;
    top: 0px;
    width: 70%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.4s ease;
    box-shadow: ${props => props.sidebar ? '-4px 0 20px rgba(0,0,0,0.5)' : 'none'};

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Ancora = styled.a`
  font-size: 18px;
  color: #a1a1aa;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: 0.3s;

  &:hover,
  &.active {
    color: #ffffff;
    background-color: #1c1c1f;
  }

  @media (min-width: 560px) {
    align-items: center;
    display: flex;
  }
`;

export const Menu = styled.div`
  font-size: 28px;
  display: none;
  cursor: pointer;
  color: #a1a1aa;

  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 28px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  color: #a1a1aa;

  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
  cursor: pointer;
`;

export const SubTitle = styled.span`
  font-size: 13px;
  color: #71717a;
`;