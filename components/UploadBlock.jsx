import React, { useCallback, useEffect, useState } from "react";
import Block from "./Wrappers/Block";
import { useDropzone } from "react-dropzone";
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
  const [uploadingState, setUploadingState] = useState(null);
  // null, uploading, encrypting, publising, null

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone();
  console.log(acceptedFiles);

  const files = acceptedFiles.map((file, index) => {
    if (index > 2) return;
    return (
      <li key={file.path}>
        {getFileName(file.path)} - {getFileSize(file.size)}
      </li>
    );
  });

  const handleUploadFiles = e => {
    e.stopPropagation();
    setUploadingState("uploading");
    setTimeout(() => {
      setUploadingState("encrypting");
    }, 2000);
    setTimeout(() => {
      setUploadingState("publishing");
    }, 5000);
    setTimeout(() => {
      setUploadingState(null);
    }, 10000);
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
            {files.length > 0 ? (
              <div className="relative top-[1.2rem] left-[1.2rem]">{files}</div>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <img
                  src="upload.png"
                  className="relative bottom-[0.5rem] h-14 w-14 opacity-[0.3]"
                  alt=""
                />
              </div>
            )}
            {files.length > 3 && <p className="relative top-[1rem] text-center text-xl">...</p>}
          </>

          {files.length > 0 && (
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
