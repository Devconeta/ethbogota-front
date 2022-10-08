import { useEffect, useState } from "react";

import type { NextPage } from "next";

import Header from "../components/Main/Header";
import MainWrapper from "../components/Wrappers/MainWrapper";

const Home: NextPage = () => {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    }
  }, [firstRender]);

  return !firstRender ? (
    <>
      <MainWrapper>
        <Header />
      </MainWrapper>
    </>
  ) : (
    <></>
  );
};

export default Home;
