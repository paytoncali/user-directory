import React, { Component } from "react";
import DataBody from "../DataBody";
import TableHeader from "../DataTable";
import SearchBar from "../SearchBar";
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

    handleInputChange = event => {
        let value = event.target.value;
        const results = this.state.results;

        const searchResult = results.filter((searchedName) => 
            
            searchedName.name.first.includes(value) || 
            searchedName.name.last.includes(value))
        
        this.setState({
            search: value,
            results: searchResult
        })
    };

    handleNameSort = event => {

    }

    render() {
        return (
            <div>
                <SearchBar 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    />
                <table className="table table-striped">
                <TableHeader />
                <DataBody results={this.state.results}
                    handleNameSort={this.handleNameSort}
                 />
                </table>
            </div>
        );
    }
}

export default DataArea;