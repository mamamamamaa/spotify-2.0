import { FC } from "react";
import { Layout } from "../components/Layout/Layout";
import { Logo } from "../components/Logo/Logo";
import { Navbar } from "../components/Navbar/Navbar";

const App: FC = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center gap-6">
          <Logo />
          <Navbar />
        </div>
      </Layout>
    </>
  );
};

export default App;
