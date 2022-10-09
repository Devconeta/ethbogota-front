import { useEffect, useState } from "react";

import type { NextPage } from "next";
import MainWrapper from "../components/Wrappers/MainWrapper";

const Home: NextPage = () => {
  return (
    <>
      <MainWrapper>
        <div className="h-full w-full border-2 border-black">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Presentation text</h3>
            <h2 className="text-xl font-semibold">Presentation text2</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officiis tenetur
              mollitia ab laboriosam optio nostrum sit cumque, consequatur dolor quidem expedita
              eveniet fugit molestiae natus. Placeat hic excepturi odio?
            </p>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default Home;
