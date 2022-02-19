import React from "react";
import * as S from "./homeSection.styles";
import homebg from "../../asstes/images/home-bg.png";

// Styled Components
const HomeSection = () => {
  return (
    <S.HSContainer>
      <S.HSLeft>
        <S.HomeSlogen>
          <S.TopTitle>Space Just Got Personal</S.TopTitle>
          <S.HomeTitle>
            Welcome, <br /> E-Comrace Online Shopping Web.
          </S.HomeTitle>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </S.Description>
          <S.Button big brdr light>
            Watch Now!
          </S.Button>
        </S.HomeSlogen>
      </S.HSLeft>
      <S.HSRight>
        <S.HSImg src={homebg} />
      </S.HSRight>
    </S.HSContainer>
  );
};

export default HomeSection;
