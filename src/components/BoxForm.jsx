import react, { useState } from 'react';


const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [boxColors, setBoxColors] = useState([]); // setting state of creating box to empty array so that we can map over and display



    // Handles submit of form
    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxColors([...boxColors, color]); // Add the current color to the box array
        setColor(""); // Reset the color input field.
    };


    // Handles color change
    const handleColorChange = (e) => {
        setColor(e.target.value); // Update the color state.
    };

    return (
        <>
            <form style={{ margin: "20px" }} onSubmit={handleSubmit} >
                <div>
                    <label>Color</label>
                    <input type="text" onChange={handleColorChange} value={color} /> // clears the input becuase "color" is an empty string.
                    <button type="submit" >Add</button>
                </div>
            </form>
            <>
                <div style={{ display: "flex", width: "1000px" }} >
                    {boxColors.map((boxColors, index) => (
                        <div
                            key={index}
                            style={{ width: "150px", height: "200px", backgroundColor: boxColors, margin: "10px" }}
                        ></div>
                    ))}
                </div>
            </>


        </>
    );
};
// ================================================================================================================





export default BoxForm;
