import { useEffect, useState } from "react";

import type { NextPage } from "next";
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
        <div className="h-full w-full border-2 border-black">
          {/* <div className=" h-80 w-1/2 rounded-2xl bg-white/80"></div> */}
          <div className=""></div>
        </div>
      </MainWrapper>
    </>
  ) : (
    <></>
  );
};

export default Home;
