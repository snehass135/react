import React, { useState } from "react";
import styled from "styled-components";

const ImageUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ImageInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const ImagePreview = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;

const ImageUploadButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <ImageUploaderContainer>
      <ImageInput type="file" onChange={handleImageUpload} />
      {image && <ImagePreview src={image} />}
      <ImageUploadButton>Upload</ImageUploadButton>
    </ImageUploaderContainer>
  );
}

export default ImageUploader;