import withRandomColor from "./WithRandomColor.js";

    const ColorPara = ({ color, randomBackgroundColor }) => {
        return (
            <div
            style={{ textAlign: "center" }}
            >
                 <p onClick={randomBackgroundColor}
                style={{
                    backgroundColor: `#${color}`,
                    border:"500px",
                    margin: "0 auto",
                }}>Click Me Multiple Times</p>
            </div>
        );
    };
    
    const NewColorPage = withRandomColor(ColorPara);

    export default NewColorPage;