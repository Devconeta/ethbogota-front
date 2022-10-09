import { useEffect, useState, useContext } from "react";
import type { NextPage } from "next";
import MainWrapper from "../../components/Wrappers/MainWrapper";
import Block from "../../components/Wrappers/Block";
import UploadBlock from "../../components/UploadBlock";
import { UserContext } from "../../context/userContext";
import { getAddressShortcut } from "../../helperFuncions";
import { UploadedFile } from "myweb3fs";

const Home: NextPage = () => {
  const { wallet, files } = useContext(UserContext);

  const formatDate = (file: UploadedFile) => {
    return new Date(file.lastModified).toISOString().split("T")[0];
  };

  return (
    <>
      <MainWrapper>
        <div className="h-full w-full ">
          <div className="flex h-full w-full gap-10">
            {/* wallet stats */}
            <div className="flex w-4/12 flex-col">
              <Block className="mb-10 flex h-[120px] flex-col">
                <span>
                  Address: {wallet.address}{" "}
                  {getAddressShortcut("0x7ED27AB6cE44B19e2c1eE1317B836D4dEC1fD7ae")}
                </span>
                <span>Available space: 99%: 4.95gb</span>
              </Block>
              {/* upload files */}
              <UploadBlock />
            </div>
            {/* files */}
            <Block className="">
              {files.map((file, index) => (
                <div className="flex border-b-2 border-black/90 py-2.5" key={index}>
                  <div className="flex w-full flex-row items-center justify-between">
                    <div className="w-7/12 pl-2 ">
                      {file.cid.slice(0, 10) + "..." + file.cid.slice(30, -1)}
                    </div>
                    <div className="w-4/12 pl-14">{file.name}</div>
                    <div className="w-3/12 text-center ">{formatDate(file)}</div>
                  </div>

                  <div className="flex justify-end pr-2 ">
                    <img
                      className="h-6 w-6 cursor-pointer"
                      src="download.png"
                      alt="download encrypted file"
                    />
                  </div>
                </div>
              ))}
            </Block>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default Home;
