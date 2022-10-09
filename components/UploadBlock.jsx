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
  return fileName.slice(0, 16) + "...";
};

const UploadBlock = () => {
  const { wallet, fs, files } = useContext(UserContext);
  const [uploadingState, setUploadingState] = useState(null);

  // null, uploading, encrypting, publising, null

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone();

  const preUploadFiles = acceptedFiles.map((file, index) => {
    if (index > 3) return;
    return (
      <li key={file.path}>
        {getFileName(file.path) + "..."} - {getFileSize(file.size)}
      </li>
    );
  });

  const handleUploadFiles = e => {
    fs?.storeFiles(wallet.address, acceptedFiles, files);
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
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <>
              <p>Drag and drop files here, or click to select them</p>
              <div>{preUploadFiles}</div>
            </>
          )}
          {preUploadFiles.length > 0 && (
            <Button
              onClick={e => {
                handleUploadFiles(e);
              }}
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
