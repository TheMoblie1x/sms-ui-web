import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CropFreeSharp';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

export default function InputFileUpload() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  function handleScanClick() {
    setIsCameraOpen(true);
  }

  function handleTakePhoto(dataUri) {
    // photo ke saath jo v krna ho
    console.log('takePhoto');
    setIsCameraOpen(false); 
  }

  return (
    <>
       <Button
        variant="contained"
        startIcon={<CloudUploadIcon />}
        onClick={handleScanClick}
        style={{ marginLeft: '714px' , backgroundColor: '#1b3360', height: '51px', borderRadius: '32px', marginTop: '-172px' }}
      >
        Scan
      </Button>
      {isCameraOpen && (
        <Camera
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
        />
      )}
    </>
  );
}
