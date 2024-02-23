import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import aiicon from "./ai-icon.webp";

export default function BasicTextFields() {
  const [inputText, setInputText] = React.useState(""); // State to manage the text input

  // Function to handle text input change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "97.5%" },
        position: "relative", // Make the position relative to the parent Box
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        id="outlined-basic"
        label="USE THE POWER OF GENERATIVE AI TO CREATE THIS FORM"
        variant="outlined"
        multiline
        rows={3}
        value={inputText}
        onChange={handleInputChange} // Handle input change
      />
      {inputText && (
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            m: 0,
            backgroundColor: "#1b3360", // Change 'red' to the color you want
          }}
        >
          Generate
          <img
            src={aiicon}
            alt="AI Icon"
            style={{ width: "24px", height: "24px", marginRight: "5px" }}
          />
        </Button>
      )}
    </Box>
  );
}
