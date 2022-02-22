import styled from "styled-components";

export const NavMainContainer = styled.div`
  width: 100%;
  height: 120px;
  z-index: 999;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarContainer = styled.div`
  transition: 0.2s;
  width: ${(props) => (props.fullSize ? "100%" : "70%")};
  height: ${(props) => (props.fullSize ? "100%" : "70%")};
  background-color: #fff;
  border-radius: ${(props) => (props.fullSize ? 0 : "50px")};
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgba(74, 106, 116, 0.3);

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    border-radius: 0;
  }
`;

export const FullSizeNavbar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 0;
`;
export const NavLeft = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const NavRight = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
`;

export const NavLinkSpan = styled.span`
  font-size: 10px;
  margin-top: 5px;
`;
