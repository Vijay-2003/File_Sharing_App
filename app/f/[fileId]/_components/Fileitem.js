'use client'
import { Download } from "lucide-react";
import React, { useState } from "react";

function FileItem({ file }) {
    const [password, setpassword] = useState()
    // const {file} = params
  return (
    file && (
      <div>
        <h2>
          <strong>{file.userName}</strong>
        </h2>

        <h2>
          {file.fileName} / {file.FileType} / {file.fileSize} Bytes
        </h2>

        {file.password.length > 3 ? (
          <input
            type="password"
            className="p-2 border rounded-md text-[14px] mt-5 text-center outline-blue-400"
            onChange={(e) => setpassword(e.target.value)}
          placeholder="'Enter password to access"/>
        ) : null}

        <button 
        onClick={() => window.open(file?.fileUrl)}
        className=" flex gap-2 p-2 bg-primary text-white rounded-full w-full items-center hover:bg-blue-600 text-[14px] mt-5 text-center justify-center disabled:bg-gray-300"
         >
          <Download className="h-4 w-4" /> Download
        </button>
        <h2 className=" text-gray-400 text-[12px]">*Terms & Conditions Applied</h2>
      </div>
    )
  );
}

export default FileItem;
