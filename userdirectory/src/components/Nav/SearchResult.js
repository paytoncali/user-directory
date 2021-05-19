import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchBar";

class SearchForm extends Component {
    state = {
      results: {},
      search: ""
    };

    componentDidMount() {
      this.filterSearch();
    }

  filerSearch = () => {
    API.search()
    .then(res => )
  }

}
