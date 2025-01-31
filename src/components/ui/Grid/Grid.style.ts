import styled from "@emotion/styled";

type Direction = "row" | "column";
type AlignItems =
  | "normal"
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "start"
  | "end"
  | "baseline"
  | "initial"
  | "inherit";

type JustifyContent =
  | "normal"
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";

export const Grid = styled.div<{
  $flexDirection?: Direction;
  /** CSS gap in rems*/
  $gap?: number;
  $justifyContent?: JustifyContent;
}>`
  display: flex;
  flex-direction: ${({ $flexDirection }) =>
    $flexDirection === "column" ? "column" : "row"};
  ${({ $gap }) => ($gap ? `gap: ${$gap}rem` : "")};
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  ${({ $flexDirection }) =>
    $flexDirection === "column" ? `width: 100%;` : ""};
  flex-grow: 1;
  box-sizing: border-box;

  ul& {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export const GridItem = styled.div<{
  $flexGrow?: number;
  $flexBase?: number;
  $flexDirection?: Direction;
  $alignItems?: AlignItems;
  $offsetX?: number;
  $offsetY?: number;
  $overflow?: boolean;
}>`
  display: flex;
  flex-direction: ${({ $flexDirection }) =>
    $flexDirection === "column" ? "column" : "row"};
  ${({ $flexDirection }) =>
    $flexDirection === "column" ? `width: 100%;` : ""};
  flex-grow: ${({ $flexGrow }) => $flexGrow || 0};
  box-sizing: border-box;
  align-items: ${({ $alignItems }) => $alignItems || "normal"};
  ${({ $overflow }) => ($overflow ? "overflow: hidden" : "")}
  ${({ $offsetX }) =>
    $offsetX
      ? `
    padding-left: ${$offsetX}rem;
    padding-right: ${$offsetX}rem;
  `
      : ""}
  ${({ $offsetY }) =>
    $offsetY
      ? `
        padding-top: ${$offsetY}rem;
        padding-bottom: ${$offsetY}rem;
      `
      : ""}
`;
