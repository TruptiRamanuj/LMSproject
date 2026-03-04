import { useState } from "react";
import PTitle from "../style/PTitle";



export default function Courses() {

    const [no, setNo] = useState(0);

    const addData = () => {
        setNo(no + 1);
    }
    const minData = () => {
        setNo(no - 1);
    }


    const [name, setName] = useState("Raman");
    const [stdData, setStdData] = useState([]);
    const adD = () => {
        setStdData([...stdData, name]);
        //console.log(stdData);
        setNo(no + 1);
        console.log(no);

    }
    // const [] = useState(0);
    // const isStatus = 1;
    // const actDe = () => {
    //     { isStatus ? <h1>Active</h1> : <h1>De-Active</h1> }
    //}
    return (
        <div style={{ padding: "20px" }}>
            {/* 
            <PTitle title="Courses" color="blue"></PTitle>
            <h1>{no}</h1>
            <button onClick={addData}>addition</button>
            <button onClick={minData}>subtraction</button>


            <h1>{no}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={adD}>Click</button>
            <ul>
                {stdData.map((e, index) => (
                    <li>{e}</li>
                ))};
            </ul> */}

            {/* <input type="text" value={actDe} ></input>

            <button onClick={actDe}>Click Heare</button> */}

        </div >
    );
}