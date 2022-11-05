import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

const UsingHooks = () => {
    const [array, setArray] = useState([
        {
            name: "Peter Parker",
            age: 20,
            favmovie: "Spiderman"
        },
        {
            name: "Robert Kiyosaki",
            age: 30,
            favmovie: "Batman"
        },
        {
            name: "Ranchodas Chamadas",
            age: 40,
            favmovie: "3 idiots"
        },
    ]);

    const handleUpdateState = () => {
        const [first, second, third] = array;
        second.name = 'Rance Aubry Cañete';
        second.age = 10000;
        setArray([first, second, third]);
    };
    return (
        <Box>
            <Box>
            </Box>
            <Box style={{ margin: "0 auto",}} >
                {array.map((arr) => (
                    <Box style={{ textAlign: "center" }}>
                       <p> Name: {arr.name}</p>
                         <p>Age: {arr.age}</p>
                    </Box>
                ))}
            </Box>
            <Box style={{ margin: "20px 0", textAlign: "center" }}>
                <Button variant="contained" onClick={handleUpdateState}>
                    Update Second Record
                </Button>
            </Box>
        </Box>
    );
};


export default UsingHooks;
