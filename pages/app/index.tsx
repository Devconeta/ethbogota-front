import { useEffect, useState, useContext } from "react";
import type { NextPage } from "next";
import MainWrapper from "../../components/Wrappers/MainWrapper";
import Block from "../../components/Wrappers/Block";
import UploadBlock from "../../components/UploadBlock";
import { UserContext } from "../../context/userContext";
import Button from "../../components/Wrappers/Button";
import { getAddressShortcut } from "../../helperFuncions";

const mockedFiles = [
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "devcon.png", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "trillema.pdf", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "vitalik_dancing.mp4", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "wagmi.json", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "database.json", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "raave.sys", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "ethereum.jpeg", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "prettyCode.js", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "awfulCode.py", date: "05-09-2022" },
  // { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "randoasd s sadname.txt", date: "05-09-2022" },
  // { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "ran name.txt", date: "05-09-2022" },
  // { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "rale me.txt", date: "05-09-2022" },
];

const Home: NextPage = () => {
  const { wallet } = useContext(UserContext);
  return (
    <>
      <MainWrapper>
        <div className="h-full w-full ">
          <div className="flex h-full w-full gap-8">
            {/* wallet stats */}
            <div className="flex w-5/12 flex-col">
              <Block className="mb-8 flex h-[80px] flex-col">
                {/* <span>Address: {getAddressShortcut(wallet.address)}</span> */}
                <span className="flex gap-1">
                  <p className="font-semibold">Provider storage used:</p> 12mb / 5gb
                </span>
              </Block>
              {/* upload files */}
              <UploadBlock />
            </div>
            {/* files */}
            <Block className="no-scrollbar h-[69vh] overflow-hidden overflow-y-auto">
              {mockedFiles.map((file, index) => (
                <div
                  className={`flex border-black/90 py-2.5 ${
                    index + 1 !== mockedFiles.length && "border-b-2"
                  }`}
                  key={index}
                >
                  <div className="w-7/12 pl-2 ">{file.cid}</div>
                  <div className="w-4/12 ">{file.name}</div>
                  <div className="w-5/12 text-center ">{file.date}</div>
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
