import React from "react";
import Moment from "react-moment";

function DataBody(props) {
    return (
            <tbody>

                {props.results && props.results.map(result => (
                    <tr key={result.index}>
                    <th scope="row"></th>
                    <td><img alt="thumbnail" src={result.picture.thumbnail}></img></td>
                    <td>{result.name.first} {result.name.last}</td>
                    <td>{result.phone}</td>
                    <td>{result.email}</td>
                    <td><Moment format="MM/DD/YYYY">{(result.dob.date)}</Moment></td>
                    </tr>
                ))}
            </tbody>
    );
}

export default DataBody;