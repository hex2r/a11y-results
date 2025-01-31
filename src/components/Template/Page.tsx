import { PropsWithChildren, ReactNode } from "react";
import * as Styled from "./Page.style";
import { Container } from "./Container.style";

type Page = {
  header: ReactNode;
  sidebar?: ReactNode;
} & PropsWithChildren;

export default function Page({ children }: PropsWithChildren) {
  return <Styled.Page>{children}</Styled.Page>;
}

Page.Header = function ({ children }: PropsWithChildren) {
  return <Styled.Header>{children}</Styled.Header>;
};

Page.Content = function ({ children }: PropsWithChildren) {
  return (
    <Styled.ContentWrapper>
      <Container>
        <Styled.Content>{children}</Styled.Content>
      </Container>
    </Styled.ContentWrapper>
  );
};

Page.Sidebar = function ({ children }: PropsWithChildren) {
  return (
    <Styled.Sidebar tabIndex={-1} id="navbar">
      {children}
    </Styled.Sidebar>
  );
};

Page.Main = function ({ children }: PropsWithChildren) {
  return (
    <Styled.Main tabIndex={-1} id="main">
      {children}
    </Styled.Main>
  );
};
