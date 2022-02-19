import styled from "styled-components";

export const SectionTitleCon = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

export const SectionTitleTitle = styled.h1`
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    /* bottom: -15px; */
    border-bottom: 3px solid #6495ed;
  }
`;
