import React,{useState} from "react";
import { HiArrowUpCircle } from "react-icons/hi2";

function UploadImage({ setFile }) {
  const [selectedfile, setSelectedfile] = useState();

  return (
    <div
      className="h-[450px] bg-[#e9e9e9]
    rounded-lg"
    >
      <label
        className="m-5 flex flex-col justify-center items-center
        cursor-pointer h-[90%] 
        border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600 "
      >
        {!selectedfile?
        <div className="flex items-center flex-col">
          <HiArrowUpCircle className="text-[22px]" />
          <h2 className=" font-semibold">Click to Upload</h2>
        </div>
        :
        <img src={window.URL.createObjectURL(selectedfile)} alt="selected-image" width={500} height={800} className="object-contain h-[90%]"/>}



        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setSelectedfile(e.target.files[0]);
          }}
        />
      </label>
    </div>
  );
}

export default UploadImage;
