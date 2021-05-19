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
        event.preventDefault();
        console.log("hi")
        const results = this.state.results;

        const sortedResults = results.sort((nameOne, nameTwo) => nameOne.name.first.localeCompare(nameTwo.name.first))

        this.setState({ results: sortedResults })
    }

    render() {
        return (
            <div>
                <div className="container justify-content-center">
                <SearchBar 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    />
                </div>
                <br></br>
                <div className="container">
                <table className="table table-striped">
                <TableHeader 
                handleNameSort={this.handleNameSort}/>
                <DataBody results={this.state.results}
                 />
                </table>
                </div>
            </div>
        );
    }
}

export default DataArea;