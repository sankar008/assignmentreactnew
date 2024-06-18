// import React, { useState, useEffect } from 'react';
// import JSZip from 'jszip';
// import pdfIcon from '../assets/images/pdf.webp';
// import docIcon from '../assets/images/doc.png';
// import excelfIcon from '../assets/images/excel.png';
// import zipIcon from '../assets/images/zip.webp';

// const MultipleFileUploader = ({ maxFileCount, onUpload, selectedFiles, setSelectedFiles }) => {
//   // const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleFileChange = async (e) => {
//     const files = e.target.files;

//     // Convert the FileList object to an array
//     const filesArray = Array.from(files);

//     // Check if adding these files exceeds the maximum file count
//     if (selectedFiles.length + filesArray.length > maxFileCount) {
//       alert(`Maximum file count exceeded. You can only upload ${maxFileCount} files.`);
//       return;
//     }

//     const loadedFiles = await Promise.all(
//       filesArray.map(async (file) => {
//         if (isZip(file)) {
//           const zip = new JSZip();
//           const zipContents = await zip.loadAsync(file);
//           const innerFiles = Object.keys(zipContents.files).map((key) => ({
//             name: key,
//           }));
//           return {
//             name: file.name,
//             files: innerFiles,
//           };
//         } else {
//           return new Promise((resolve) => {
//             const reader = new FileReader();

//             reader.onload = (e) => {
//               resolve({ name: file.name, preview: e.target.result, type: file.type });
//             };

//             reader.readAsDataURL(file);
//           });
//         }
//       })
//     );

//     // Update the state with the selected files and their previews
//     setSelectedFiles((prevFiles) => [...prevFiles, ...loadedFiles]);
//   };

//   const handleRemoveFile = (index) => {
//     const newFiles = [...selectedFiles];
//     newFiles.splice(index, 1);
//     setSelectedFiles(newFiles);
//   };

//   // Notify the parent component when the selected files change
//   useEffect(() => {
//     onUpload(selectedFiles);
//   }, [selectedFiles, onUpload]);

//   const isZip = (file) => file.type === 'application/zip';

//   return (
//     <div>
//       <input type="file" accept="image/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/zip" multiple onChange={handleFileChange} />

//       <div className="file-list d-flex flex-wrap">
//         {selectedFiles.map((file, index) => (
//           <div
//             key={index}
//             className={`previewViewContainer file-preview border p-2 m-2 ${isZip(file) ? 'zip' : ''}`}
//             style={{ width: '150px', height: '250px' }}
//           >
//             {isZip(file) ? (
//               <div>
//                 <p className="fileNameText">Zip File: {file.name}</p>
//                 {file.files && (
//                   <ul>
//                     {file.files.map((innerFile, innerIndex) => (
//                       <li key={innerIndex}>{innerFile.name}</li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ) : (
//               <div className="flex">
//                 <p className="fileNameText">File Name: {file.name}</p>

//                 {file.type.startsWith('image') ?
//                   (
//                     <img className='' src={file.preview} alt={`preview-${index}`} />
//                   )
//                   :
//                   file.type.startsWith('application/pdf') ? (
//                     <img  className="pdficon" src={pdfIcon} alt={`pdf-icon-${index}`} />
//                   )
//                     :
//                     file.type.startsWith('application/msword') ? (
//                       <img className="excelicon" src={docIcon} alt={`word-icon-${index}`} />
//                     )
//                       :
//                       file.type.startsWith('application/vnd.openxmlformats-officedocument.wordprocessingml.document') ? (
//                         <img className="docicon" src={excelfIcon} alt={`word-icon-${index}`} />
//                       )
//                         :
//                         (
//                           <img className="zipicon" src={zipIcon} alt={`default-icon-${index}`}  />
//                         )
//                 }
//               </div>
//             )}

//             <button className="btn btn-danger mt-2" onClick={() => handleRemoveFile(index)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MultipleFileUploader;

import React, { useState, useEffect } from "react";
import JSZip from "jszip";
import pdfIcon from "../assets/images/pdf.webp";
import docIcon from "../assets/images/doc.png";
import excelfIcon from "../assets/images/excel.png";
import zipIcon from "../assets/images/zip.webp";
import crossIcon2 from "../assets/images/crossIcon.png";
import crossIcon from "../assets/images/crossIcon.webp";
import { UploadCloud, UserPlus } from "react-feather";

const MultipleFileUploader = ({
  maxFileCount,
  onUpload,
  selectedFiles,
  setSelectedFiles,
}) => {
  console.log("newFiles", selectedFiles);
  const handleFileChange = async (e) => {
    const files = e.target.files;

    // Convert the FileList object to an array
    const filesArray = Array.from(files);

    // Check if adding these files exceeds the maximum file count
    if (selectedFiles.length + filesArray.length > maxFileCount) {
      alert(
        `Maximum file count exceeded. You can only upload ${maxFileCount} files.`
      );
      return;
    }

    const loadedFiles = await Promise.all(
      filesArray.map(async (file) => {
        if (isZip(file)) {
          const zip = new JSZip();
          const zipContents = await zip.loadAsync(file);
          const innerFiles = Object.keys(zipContents.files).map((key) => ({
            name: key,
          }));
          return {
            name: file.name,
            files: innerFiles,
          };
        } else {
          return new Promise((resolve) => {
            const reader = new FileReader();

            reader.onload = (e) => {
              // Convert file data to base64
              const base64Data = e.target.result.split(",")[1];
              resolve({
                name: file.name,
                preview: `data:${file.type};base64,${base64Data}`,
                type: file.type,
              });
            };

            reader.readAsDataURL(file);
          });
        }
      })
    );

    // Update the state with the selected files and their previews
    setSelectedFiles((prevFiles) => [...prevFiles, ...loadedFiles]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  // Notify the parent component when the selected files change
  useEffect(() => {
    onUpload(selectedFiles);
  }, [selectedFiles, onUpload]);

  const isZip = (file) => file.type === "application/zip";

  return (
    <div>
      <label for="filess" className="filesUpload">
        <input
          hidden
          id="filess"
          type="file"
          accept="image/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/zip"
          multiple
          onChange={handleFileChange}
        />
        <UploadCloud /> Choose Files{" "}
        {selectedFiles.length === 0 ? "" : selectedFiles.length}
      </label>

      <div className="mainContainer file-list d-flex flex-wrap">
        {selectedFiles.map((file, index) => (
          <div
            key={index}
            className={`previewViewContainer file-preview border p-2 m-2 ${
              isZip(file) ? "zip" : ""
            }`}
            style={{ width: "100%", height: "50px" }}
          >
            {isZip(file) ? (
              <div className="">
                <div>
                  <p className="fileNameText">Zip File: {file.name}</p>
                  {file.files && (
                    <ul>
                      {file.files.map((innerFile, innerIndex) => (
                        <li key={innerIndex}>{innerFile.name}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div></div>
              </div>
            ) : (
              <div className="flexcontainer">
                {/* File Name:  */}
                {file.type.startsWith("image") ? (
                  <img
                    className="previewImages"
                    src={file.preview}
                    alt={`preview-${index}`}
                  />
                ) : file.type.startsWith("application/pdf") ? (
                  <img
                    className="pdficon"
                    src={pdfIcon}
                    alt={`pdf-icon-${index}`}
                  />
                ) : file.type.startsWith("application/msword") ? (
                  <img
                    className="excelicon"
                    src={docIcon}
                    alt={`word-icon-${index}`}
                  />
                ) : file.type.startsWith(
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  ) ? (
                  <img
                    className="docicon"
                    src={docIcon}
                    alt={`word-icon-${index}`}
                  />
                ) : (
                  <img
                    className="zipicon"
                    src={zipIcon}
                    alt={`default-icon-${index}`}
                  />
                )}
                <div className="nameContainer">
                  <p className="fileNameText">{file.name}</p>
                  <img
                    className="removeButton"
                    src={crossIcon}
                    alt={`cross`}
                    onClick={() => handleRemoveFile(index)}
                  />
                </div>
              </div>
            )}

            {/* <button className="btn btn-danger mt-2" onClick={() => handleRemoveFile(index)}>
              Remove
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleFileUploader;
