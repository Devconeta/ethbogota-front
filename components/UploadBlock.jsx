import React, { useCallback, useEffect, useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { UserContext } from "../context/userContext";

import Block from "./Wrappers/Block";
import Button from "./Wrappers/Button";
import Loader from "./Modals/Loader";

const getFileSize = fileSize => {
  if (fileSize > 1000000) {
    return `${(fileSize / 1000000).toFixed(0)} MB`;
  } else if (fileSize > 1000) {
    return `${(fileSize / 1000).toFixed(0)} KB`;
  }
  return `${fileSize} bytes`;
};

const getFileName = fileName => {
  if (fileName.length > 24) {
    return fileName.slice(0, 24) + "...";
  } else return fileName;
};

const UploadBlock = () => {
  const { wallet, fs, files, setFiles, keys } = useContext(UserContext);
  const [uploadingState, setUploadingState] = useState(false);

  // null, uploading, encrypting, publising, null

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone();

  const preUploadFiles = acceptedFiles.map((file, index) => {
    if (index > 2) return;
    return (
      <li key={file.path}>
        {getFileName(file.path)} - {getFileSize(file.size)}
      </li>
    );
  });

  const handleUploadFiles = e => {
    e.stopPropagation();

    fs?.storeFiles(wallet.address, acceptedFiles, files, keys.publicKey)
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <>
      {uploadingState && <Loader state={uploadingState} />}
      <Block className="relative h-40 !p-0">
        <div
          {...getRootProps({
            className: !isDragActive
              ? "p-2 h-full rounded-2xl text-gray-500 cursor-pointer"
              : "p-2 h-full rounded-2xl bg-black/10 text-gray-500 cursor-pointer",
          })}
        >
          <input {...getInputProps()} />
          <>
            <p className="relative top-[1rem] text-center">
              {isDragActive
                ? "Drop those files here!"
                : "Drag and drop files here or click to select"}
            </p>
            {preUploadFiles.length > 0 ? (
              <div className="relative top-[1.2rem] left-[1.2rem]">{preUploadFiles}</div>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <img
                  src="upload.png"
                  className="relative bottom-[0.5rem] h-14 w-14 opacity-[0.3]"
                  alt=""
                />
              </div>
            )}
            {preUploadFiles.length > 3 && (
              <p className="relative top-[1rem] text-center text-xl">...</p>
            )}
          </>

          {preUploadFiles.length > 0 && (
            <Button
              onClick={e => handleUploadFiles(e)}
              className="from-black-to absolute left-0 bottom-[-3.8rem] w-[120px] py-1 hover:bg-black/10"
            >
              Upload
            </Button>
          )}
        </div>
      </Block>
    </>
  );
};

export default UploadBlock;
