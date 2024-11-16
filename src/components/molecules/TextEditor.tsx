import dynamic from "next/dynamic";

// Setup react-quill
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const modules = {
  toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }], ["link", "image"], ["clean"]],
};
const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"];

interface TextEditorProps {
  newContent?: string;
  defaultContent: string;
  setNewContent: React.Dispatch<React.SetStateAction<string | undefined>>;
  label: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ newContent, defaultContent, setNewContent }) => {
  return (
    <>
      <label>Isi Content : </label>
      <ReactQuill theme="snow" value={(newContent ?? defaultContent) || ""} onChange={setNewContent} modules={modules} formats={formats} />
    </>
  );
};

export default TextEditor;
