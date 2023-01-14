import { FC } from "react";
import { Layout } from "../components/Layout/Layout";
import { Logo } from "../components/Logo/Logo";
import { Navbar } from "../components/Navbar/Navbar";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { PlaylistCard } from "../components/PlaylistCard/PlaylistCard";

const App: FC = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center gap-6">
          {/*<Logo />*/}
          {/*<Navbar />*/}
        </div>
        <div>
          {/*<Searchbar />*/}
          <PlaylistCard />
        </div>
      </Layout>
    </>
  );
};

export default App;
