import React  from "react";
import {useState} from "react";
import { Button, Upload, UploadProps, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
// import nhost from "../../utility/nhost";
const cloudAPI = "dk0cl9vtx";

// const [photoUrl,setPhotoUrl] = useState<any>()


interface CustomUploadProps {
  link: string;
  // productId:string;
  setLink: (link: string) => void;
  expectedFileType?: "image" | "video" | "others";
}

const CustomUpload: React.FC<CustomUploadProps> = ({
  link,
  setLink,
  expectedFileType,
  // initial_url,
}) =>{
  const props: UploadProps = {
    beforeUpload: async (file, fileList) => {
      let isValidFileType = false;
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (expectedFileType === "image") {
        isValidFileType =
          file.type === "image/jpeg" || file.type === "image/png";
      } else if (expectedFileType === "video") {
        isValidFileType = [
          "video/mp4",
          // "video/mov",
          // "video/webm",
          // "video/mkv",
        ].includes(file.type);
      } else isValidFileType = true;

      if (expectedFileType === "image" && !isLt2M) {
        message.error("Image must smaller than 2MB!");
        return isLt2M;
      }

      if (!isValidFileType && expectedFileType === "image") {
        message.error(
          `${file.name} is not a valid file type. Please upload png or jpeg file.`
        );
        return isValidFileType || Upload.LIST_IGNORE;
      } else if (!isValidFileType && expectedFileType === "video") {
        message.error(
          `${file.name} is not a valid file type. Please upload .mp4 file.`
        );
        return isValidFileType || Upload.LIST_IGNORE;
      } else {
        const formData = new FormData();
        formData.append("file", file );
        formData.append("upload_preset", "product Image");

        await axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`,
          formData
        )
        .then(async (res) => {
          const imageUrl = res.data.secure_url;
          console.log(imageUrl,"image");
          setLink(imageUrl);
          // setPhotoUrl(imageUrl)
          return false; 

        // const fileLink = await nhost.storage.upload({
        //   file,
        //   bucketId: "public",
        // });
        // const publicFileLink = await nhost.storage.getPublicUrl({
        //   fileId: fileLink?.fileMetadata?.id || "",
        // });
        
      })
    }
    },
    onChange(info) {
        if (info?.file?.status === "removed") {
          setLink("");
        }
      },
  };




  return (
    <Upload {...props} maxCount={1}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
  }

export default CustomUpload;
