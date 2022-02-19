import React from "react";
import * as S from "./sectionTtitle.style";

function SectionTitle({ title }) {
  return (
    <S.SectionTitleCon>
      <S.SectionTitleTitle>{title}</S.SectionTitleTitle>
    </S.SectionTitleCon>
  );
}

export default SectionTitle;
