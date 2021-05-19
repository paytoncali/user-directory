import React from "react";

function TableHeader(props) {
    return (
        <thead>
            <tr>
                <th></th>
                <th scope="col">Image</th>
                <th scope="col" onClick={props.handleNameSort}>Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
            </tr>
        </thead>
    )
}

export default TableHeader;