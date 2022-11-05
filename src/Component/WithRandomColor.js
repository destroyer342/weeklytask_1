import React,{useState} from 'react'

const withRandomColor = (WrapperComponent) => (props) => {
    const [color, setColor] = useState("#fcba03");
    const randomBackgroundColor = () => {
        const randomNumber = Math.floor(Math.random() * 0xFFFFFF);
        const randomColor = randomNumber.toString(16);
        setColor(randomColor);
    };
    return (
        <WrapperComponent randomBackgroundColor={randomBackgroundColor} color={color} {...props} />
    );
};


export default withRandomColor