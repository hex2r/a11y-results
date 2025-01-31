import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Page, Header, MetaBar, Sidebar, Main } from "../components";
import DataProvider from "../providers/DataProvider";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "../components/ui";

const queryClient = new QueryClient();

function reloadPage() {}

function fallbackRender({ error, onReset }) {
  return <Error message={error.message} onReset={onReset} />;
}

function Home() {
  return (
    <Page>
      <Page.Header>
        <Header />
        <MetaBar />
      </Page.Header>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary fallbackRender={fallbackRender} onReset={reloadPage}>
          <DataProvider>
            <Page.Content>
              <Page.Sidebar>
                <Sidebar />
              </Page.Sidebar>
              <Page.Main>
                <ErrorBoundary
                  fallbackRender={fallbackRender}
                  onReset={reloadPage}
                >
                  <Main />
                </ErrorBoundary>
              </Page.Main>
            </Page.Content>
          </DataProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </Page>
  );
}

export default Home;
