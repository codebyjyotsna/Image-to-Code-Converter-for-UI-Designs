import DragAndDrop from "../components/DragAndDrop";
import CodePreview from "../components/CodePreview";
import { useState } from "react";

export default function Home() {
    const [code, setCode] = useState("");

    const handleFileUpload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/generate", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        setCode(data.code);
    };

    return (
        <div>
            <h1>Image-to-Code Converter</h1>
            <DragAndDrop onFileUpload={handleFileUpload} />
            <CodePreview code={code} />
        </div>
    );
}
