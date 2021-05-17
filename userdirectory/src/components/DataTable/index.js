import React from "react";

function TableHeader(props) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" onClick={props.handleSort}>Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default TableHeader;