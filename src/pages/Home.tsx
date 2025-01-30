import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Page, Header, MetaBar, Sidebar, Main } from "../components";
import DataProvider from "../providers/DataProvider";
const queryClient = new QueryClient();

function Home() {
  return (
    <Page>
      <Header />
      <MetaBar />
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <Page.Content>
            <Page.Sidebar>
              <Sidebar />
            </Page.Sidebar>
            <Page.Main>
              <Main />
            </Page.Main>
          </Page.Content>
        </DataProvider>
      </QueryClientProvider>
    </Page>
  );
}

export default Home;
