import withRandomColor from "./WithRandomColor.js";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ColorButton = ({ color, randomBackgroundColor }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Box style={{ margin: "20px 0", textAlign: "center" }}>
        <Button
         variant="contained"
          onClick={randomBackgroundColor}
          style={{
            backgroundColor: `#${color}`,
            border: "500px",
            margin: "0 auto",
          }}
        >
          Click Me Multiple Times
        </Button>
      </Box>
    </div>
  );
};

const NewColorPageTwo = withRandomColor(ColorButton);

export default NewColorPageTwo;
