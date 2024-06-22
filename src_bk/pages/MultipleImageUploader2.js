import React, { useState, useEffect } from 'react';

const MultipleImageUploader2 = ({ maxFileCount, onUpload }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = async (e) => {
    const files = e.target.files;

    // Convert the FileList object to an array
    const filesArray = Array.from(files);

    // Check if adding these files exceeds the maximum file count
    if (selectedImages.length + filesArray.length > maxFileCount) {
      alert(`Maximum file count exceeded. You can only upload ${maxFileCount} files.`);
      return;
    }

    const loadImagePreviews = async (filesArray) => {
      return Promise.all(
        filesArray.map((file) => {
          return new Promise((resolve) => {
            const reader = new FileReader();

            reader.onload = (e) => {
              file.preview = e.target.result;
              resolve(file);
            };

            reader.readAsDataURL(file);
          });
        })
      );
    };

    const imagesArray = await loadImagePreviews(filesArray);

    // Update the state with the selected images and their previews
    setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };

  // Notify the parent component when the selected images change
  useEffect(() => {
    onUpload(selectedImages);
  }, [selectedImages, onUpload]);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />

      <div>
        {selectedImages.map((image, index) => (
          <div key={index} className="image-preview">
            <img src={image.preview} alt={`preview-${index}`} />
            <button onClick={() => handleRemoveImage(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleImageUploader2;
