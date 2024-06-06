"use client"
import React, { useEffect, useState } from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "../../../../FirebaseConfig"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { useUser } from "@clerk/nextjs";
import { generateRandomString } from "../../../_utils/GenerateRandomString";
import { useRouter } from "next/navigation";
import CompleteCheck from "./_components/CompleteCheck";

function Upload() {

  const {user} = useUser();
  const [progress, setProgress] = useState();
  const [uploadCompleted,setUploadCompleted] = useState(false);
  const router = useRouter();

  const storage = getStorage(app)

  // const storage = getStorage(app)
  const db = getFirestore(app);
  const [DocfileId, setDocfileId] = useState();

  const uploadfile = (file) => {
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setProgress(progress);
    progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log("File available at", downloadURL);
      saveInfo(file, downloadURL);
    });
  }, )
}

const saveInfo = async (file, fileUrl) => {
  const docId = generateRandomString().toString();

  await setDoc(doc(db, "uploadedFile", docId), {
    fileName: file?.name,
    fileSize: file?.size,
    FileType: file?.type,
    fileUrl: fileUrl,
    userEmail: user?.primaryEmailAddress.emailAddress,
    userName: user?.fullName,
    password: "",
    id: docId,
    shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
  });
  setDocfileId(docId)
}

useEffect(() => {
  console.log("Trigger")
  progress == 100 && setTimeout(() => {
    setUploadCompleted(true);
    console.log("Upload Completed")
  },2000)

},[progress == 100])

useEffect(() => {
  uploadCompleted && setTimeout(() => {
    setUploadCompleted(false);
    // window.location.reload();
    router.push('/file-preview/'+ DocfileId);
  }, 2000);
},[uploadCompleted == true])

  return (
    <div className=" p-5 px-8 md:px-28">
      {!uploadCompleted? <div>
        <h2 className=" text-[20px] text-center m-5">
        Start<strong className=" text-primary"> Uploading </strong>
        File and<strong className=" text-primary"> Share </strong>it
      </h2>
      <UploadForm 
      UploadbtnClick={(file)=>uploadfile(file)}
      progress={progress} />
      </div>:
      <CompleteCheck />
      }
    </div>
  );
}

export default Upload;
