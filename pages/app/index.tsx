import { useEffect, useState, useContext } from "react";
import type { NextPage } from "next";
import MainWrapper from "../../components/Wrappers/MainWrapper";
import Block from "../../components/Wrappers/Block";
import UploadBlock from "../../components/UploadBlock";
import { UserContext } from "../../context/userContext";
import Button from "../../components/Wrappers/Button";
import { getAddressShortcut } from "../../helperFuncions";

const mockedFiles = [
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "rae.txt", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "randoasd s sadname.txt", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "ran name.txt", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "rale me.txt", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "rae.txt", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "randoasd s sadname.txt", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "ran name.txt", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "rale me.txt", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "rae.txt", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "randoasd s sadname.txt", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "ran name.txt", date: "05-09-2022" },
  { cid: "Ox21yu3yu3yu213jgjg123yt213gj213", name: "rale me.txt", date: "05-09-2022" },
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
              <Block className="mb-8 flex h-[120px] flex-col">
                <span>Address: {getAddressShortcut(wallet.address)}</span>
                <span>Storage used: 99%: 4.95gb</span>
              </Block>
              {/* upload files */}
              <UploadBlock />
            </div>
            {/* files */}
            <Block className="h-[70vh] overflow-y-auto">
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
