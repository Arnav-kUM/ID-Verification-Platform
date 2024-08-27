import React, { useState } from "react";

function Verification_page() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
  
    const handleFileChange = (event) => {
      const files = Array.from(event.target.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
      event.target.value = '';
    };
  
    const handleUpload = async () => {
      if (selectedFiles.length === 0) return;
  
      setIsUploading(true);
  
      // Simulate an upload process
      setTimeout(() => {
        setIsUploading(false);
        alert("Files uploaded successfully!");
      }, 2000);
    };
  
    const handleDeleteFile = (index) => {
      setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };
  
    const renderFilePreview = (file, index) => {
      const fileType = file.type;
  
      if (fileType.startsWith("image/")) {
        return (
          <img
            src={URL.createObjectURL(file)}
            alt={`upload-${index}`}
            className="w-full h-full object-cover rounded"
          />
        );
      } else if (fileType === "application/pdf") {
        return (
          <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded">
            <span className="text-2xl text-gray-600">PDF</span>
          </div>
        );
      } else {
        return null; // handle other types if needed
      }
    };
  
    return (
        <div className="flex justify-center items-center h-[100vh]">

            <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg w-80 mx-auto">
                <h2 className="mb-6 text-lg font-semibold">ID Verification Process</h2>
        
                <div className="flex flex-col items-center mb-6 cursor-pointer">
                <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center cursor-pointer"
                >
                    <div className="text-4xl mb-2 rounded-full w-20 h-20 flex items-center justify-center bg-gray-100 text-gray-400">
                    +
                    </div>
                    <span className="text-sm text-gray-600">Upload images or PDFs</span>
                </label>
                <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept="image/*,application/pdf"
                    multiple
                    onChange={handleFileChange}
                />
                </div>
        
                <div className="w-full mb-6">
                {selectedFiles.length > 0 && (
                    <div className="flex overflow-x-auto space-x-2">
                    {selectedFiles.map((file, index) => (
                        <div key={index} className="relative w-24 h-24 flex-shrink-0">
                        {renderFilePreview(file, index)}
                        <button
                            className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 text-xs"
                            onClick={() => handleDeleteFile(index)}
                        >
                            &times;
                        </button>
                        </div>
                    ))}
                    </div>
                )}
                </div>
        
                <button
                className={`px-6 py-2 bg-black text-white rounded ${
                    selectedFiles.length === 0 || isUploading
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={handleUpload}
                disabled={selectedFiles.length === 0 || isUploading}
                >
                {isUploading ? "Uploading..." : "Proceed to Verification"}
                </button>
            </div>
        </div>
    );
}

export default Verification_page