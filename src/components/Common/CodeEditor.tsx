import { Box, Typography } from "@mui/material";
import { langs } from "@uiw/codemirror-extensions-langs";
import { aura, xcodeLight } from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";
import FileSaver from "file-saver";
import { ClearIcon, CopyContent, DownloadIcon, UploadIcon } from "../Common";
import { ExecuteButton } from "./ExecuteButton";

interface CodeEditorProps {
  id?: string;
  title: string;
  value: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
  onExecute?: () => void;
  darkMode?: boolean;
  onClear?: () => void;
  placeholder?: string;
  fileType?: string;
  downloadEnabled?: boolean;
  downloadName?: string;
  uploadEnabled?: boolean;
  clearEnabled?: boolean;
  readFile?(fileInput?: string | ArrayBuffer | null): any;
  readOnly?: boolean;
  width?: string;
  height?: string;
  isDisabled?: boolean;
}

export const CodeEditor = ({
  id,
  title,
  value,
  onChange,
  onClick,
  onExecute,
  darkMode,
  onClear,
  placeholder,
  fileType = "jsx",
  downloadEnabled,
  downloadName,
  uploadEnabled,
  clearEnabled,
  readFile,
  readOnly,
  width,
  height,
  isDisabled = false,
}: CodeEditorProps) => {
  const handleDownload = (content: string, filename: string) => {
    if (content != null) {
      const file = new File([content], filename, {
        type: "application/json;charset=utf-8",
      });
      FileSaver.saveAs(file);
    }
  };

  const handleDownloadClick = () => {
    const content = JSON.stringify(value, null, 2);
    handleDownload(JSON.parse(content), `${downloadName}.json`);
  };

  const langExtensions: Record<string, () => any> = langs;

  return (
    <Box
      id={id}
      sx={{
        width,
        display: "flex",
        flexDirection: "column",
        height: 1,
      }}
      aria-label={title}
      color="text.primary"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 1,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Box sx={{ display: "flex" }}>
          {uploadEnabled && <ExecuteButton handleExecute={onExecute} isDisabled={isDisabled}/>}
          <CopyContent
            data={JSON.parse(JSON.stringify(value!))}
            size={20}
            isDisabled={isDisabled}
          />
          {downloadEnabled && (
            <DownloadIcon
              handleDownload={handleDownloadClick}
              size={22}
              isDisabled={isDisabled}
            />
          )}
          {uploadEnabled && (
            <UploadIcon
              readFile={readFile!}
              size={22}
              isDisabled={isDisabled}
            />
          )}
          {clearEnabled && (
            <ClearIcon onClear={onClear!} size={22} isDisabled={isDisabled} />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          border: 1,
          borderColor: "grey.500",
        }}
        onClick={onClick}
      >
        <CodeMirror
          placeholder={placeholder}
          value={value}
          height={height}
          theme={darkMode ? aura : xcodeLight}
          extensions={[langExtensions[fileType]()]}
          onChange={onChange}
          readOnly={readOnly}
          color="text.primary"
        />
      </Box>
    </Box>
  );
};
