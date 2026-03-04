import { useState } from "react";

export default function Test() {
    const isStatus = false;
    const [count, setCount] = useState(0);
    const data = [
        {
            "Id": "BSCIT3056",
            "Name": "Trupti",
            "City": "Mehsana",
            "Contact": "9386979532",
            "Email": "ramanuj@gmail.com",
            "Course": "BSc(CA&IT)",
            "Semester": "6"
        },
        {
            "Id": "BSCIT3056",
            "Name": "Maitri",
            "City": "Mehsana",
            "Contact": "9986979892",
            "Email": "maitri@gmail.com",
            "Course": "BSc(CA&IT)",
            "Semester": "2"
        },
        {
            "Id": "BSCIT3036",
            "Name": "Tanavi",
            "City": "Morbi",
            "Contact": "8386979206",
            "Email": "tanavi@gmail.com",
            "Course": "BSc(CA&IT)",
            "Semester": "5"
        },
        {
            "Id": "BSCIT3030",
            "Name": "Tirth",
            "City": "Ahemdabad",
            "Contact": "7384569532",
            "Email": "tirth@gmail.com",
            "Course": "BSc(CA&IT)",
            "Semester": "4"
        },
        {
            "Id": "BSCIT3046",
            "Name": "Tulsi",
            "City": "Mehsana",
            "Contact": "9386979439",
            "Email": "patel@gmail.com",
            "Course": "BSc(CA&IT)",
            "Semester": "2"
        },
        {
            "Id": "BSC2050",
            "Name": "Trupti",
            "City": "Mehsana",
            "Contact": "9786979530",
            "Email": "trupti@gmail.com",
            "Course": "BSc",
            "Semester": "6"
        },
        {
            "Id": "BSC2056",
            "Name": "Jay",
            "City": "Mehsana",
            "Contact": "9380079532",
            "Email": "jay@gmail.com",
            "Course": "BSc",
            "Semester": "4"
        },
        {
            "Id": "BSC2066",
            "Name": "Radha",
            "City": "Mehsana",
            "Contact": "8286979532",
            "Email": "radha@gmail.com",
            "Course": "BSc",
            "Semester": "2"
        },
        {
            "Id": "BSC2046",
            "Name": "Krishna",
            "City": "Kadi",
            "Contact": "9300979532",
            "Email": "krishna@gmail.com",
            "Course": "BSc",
            "Semester": "3"
        },
        {
            "Id": "BSC2036",
            "Name": "Rutva",
            "City": "Mehsana",
            "Contact": "9006979532",
            "Email": "rutva@gmail.com",
            "Course": "BSc",
            "Semester": "1"
        },
        {
            "Id": "BCA4056",
            "Name": "Trupti",
            "City": "Rajkot",
            "Contact": "9086979502",
            "Email": "ramanuj@gmail.com",
            "Course": "BCA",
            "Semester": "6"
        },
        {
            "Id": "BCA4056",
            "Name": "Ridhdhi",
            "City": "Gandhinagar",
            "Contact": "9286979502",
            "Email": "sadhu@gmail.com",
            "Course": "BCA",
            "Semester": "4"
        },
        {
            "Id": "BCA4056",
            "Name": "Tupi",
            "City": "Mehsana",
            "Contact": "9099979532",
            "Email": "nimbark@gmail.com",
            "Course": "BCA",
            "Semester": "1"
        },
        {
            "Id": "BCA4055",
            "Name": "Sidhdhi",
            "City": "Mehsana",
            "Contact": "9300979532",
            "Email": "ramanuj@gmail.com",
            "Course": "BCA",
            "Semester": "3"
        },
        {
            "Id": "BCA4043",
            "Name": "Anita",
            "City": "Patan",
            "Contact": "7784979532",
            "Email": "prajapati@gmail.com",
            "Course": "BCA",
            "Semester": "5"
        },
    ];
    return (
        <div>
            <table className="table table-dark table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Semester</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr>
                            <td>{d.Id}</td>
                            <td>{d.Name}</td>
                            <td>{d.City}</td>
                            <td>{d.Contact}</td>
                            <td>{d.Email}</td>
                            <td>{d.Course}</td>
                            <td>{d.Semester}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
