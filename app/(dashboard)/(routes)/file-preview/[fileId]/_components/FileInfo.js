// "use client"
import { useEffect, useState } from "react"
import React from 'react'
import Image from "next/image"
import { useRouter } from "next/navigation";

function FileInfo({file}) {
  const [fileType, setFileType] = useState();
  const router = useRouter()
  useEffect(() => {
    file && setFileType(file?.FileType.split("/")[0]);
    console.log(fileType);
  }, [file]);
  // console.log(file.id);
  // const takeis = file.id;

  const down = (ids) => {
    router.push(`/f/${ids}`)
  }
  return (
    file && (
      <div
        className=" text-center border flex
     justify-center m-4 flex-col items-center p-2 rounded-md
     border-blue-200"
      >
        <Image
          src={fileType == "image" ? file?.fileUrl : "/file.png"}
          width={200}
          height={200}
          className="h-[200px] rounded-md object-contain"
          alt="Fileimage"
        />
        <div className="">
          <h2>{file.fileName}</h2>
          <h2 className="text-gray-400 text-[13px]">{file.FileType}</h2>
        </div>

        <button onClick={() => down(file.id)} className=' bg-primary text-white p-3 rounded-md'>
            Go To Download Link
        </button>
      </div>
    )
  );
}

export default FileInfo 