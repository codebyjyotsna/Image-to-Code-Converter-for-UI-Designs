import React, { useState } from "react";

export default function DragAndDrop({ onFileUpload }) {
    const [dragging, setDragging] = useState(false);

    const handleDrop = (event) => {
        event.preventDefault();
        setDragging(false);
        const file = event.dataTransfer.files[0];
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <div
            className={`drop-zone ${dragging ? "dragging" : ""}`}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setDragging(true)}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
        >
            <p>Drag and drop your UI image here, or click to upload</p>
        </div>
    );
}
