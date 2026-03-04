import React, { useState } from "react";

export default function AddCourses() {
    const [input, setInput] = useState("");
    const [isStatus, setIsStatus] = useState("");
    // const isStatus = false;


    // const [value, setValue] = useState("");
    // const [result, setResult] = useState("");


    const bClick = () => {
        setIsStatus(input === "1" ? true : input === "0" ? false : null);



        // if (value === "1") {
        //     setResult("Active");
        // }
        // else if (value === "0") {
        //     setResult("De-Active")
        // }

    };
    return (
        <div style={{ padding: "20px" }}>
            <input type="text" placeholder="Enter 1 or 0" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={bClick} style={{ margin: "10px" }}>Submit</button>

            <h3>
                {isStatus === null ? "Please enter only 1 or 0" : isStatus ? "Active" : "De-active"}
            </h3>

            {/* {isStatus ? <h1>Active</h1> : <h1>De-Active</h1>} */}

            {/* <input type="text" placeholder="Enter 1 or 0" value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button onClick={bClick} style={{ margin: "10px" }}>Submit</button>
            <h3>{result}</h3> */}
        </div>
    );
}