import styled from "@emotion/styled";

// TODO: min-width has been set here, because we don't have small screen UI
export const Page = styled.div`
  width: 100%;
  min-width: 60rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media print {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-grow: 1;
  overflow: hidden;
  padding: 2px;
`;

export const Sidebar = styled.aside`
  display: flex;
  width: 25rem;
  flex-basis: 25rem;
  flex: none;
  outline: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 0.5rem;

  @media print {
    display: none;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  outline: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 0.5rem;
`;
