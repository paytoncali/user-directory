import React, { Component } from "react";
import DataBody from "../DataBody";
import DataTable from "../DataTable";
import API from "../../utils/API";

class UserData extends Component {
    state = {
        search: "",
        results: []
    };

    searchUser = query => {
        API.search(query)
        .then(res => this.setState({ results: res.data.data }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <DataTable />
                <DataBody results={this.state.results} />
            </div>
        )
    }
}

export default UserData;