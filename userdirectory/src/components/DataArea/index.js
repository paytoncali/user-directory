import React, { Component } from "react";
import DataBody from "../DataBody";
import TableHeader from "../DataTable";
import API from "../../utils/API";

class DataArea extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.searchUser();
    }

    searchUser = () => {
        API.search()
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <table className="table table-striped">
                <TableHeader />
                <DataBody results={this.state.results} />
                </table>
            </div>
        );
    }
}

export default DataArea;