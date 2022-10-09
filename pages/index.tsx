import { useEffect, useState } from "react";

import type { NextPage } from "next";
import MainWrapper from "../components/Wrappers/MainWrapper";

const Home: NextPage = () => {
  return (
    <>
      <MainWrapper>
        <div className="h-full w-full">
          <div className="flex flex-col gap-4">
            <h3 className="text-center text-4xl font-semibold">
              Your data permanently distributed,
            </h3>
            <h3 className="relative bottom-[1rem] text-center text-4xl font-semibold">
              but preserving your privacy.
            </h3>
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
