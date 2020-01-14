import React, { Component } from 'react';
import axios from 'axios';
import CardList from '../common/CardList';
import { H1 } from '../common/Headings';
import Input from '../common/Input';
import { PrimaryButton } from '../common/Button';
import { AlertDanger, AlertInfo, AlertWarning } from './../common/TextAlerts';

// Create API url
const PATH_BASE = 'https://api.github.com';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = '/users?q='

export default class SearchUsers extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            searchTerm: '',
            isLoaded: true,
            error: null,
            count: null 
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isLoaded: true
        })
        this.getGitHubData(this.state.searchTerm)
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    componentDidMount() {
        this.getGitHubData();
    }

    getGitHubData(searchTerm) {
        axios.get(`${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${searchTerm}`)
            .then(response => {
                this.setState({
                    isLoaded: false,
                    data: response.data.items, // assign the returned results to data array
                    count: response.data.total_count 
                })
            })
            .catch(error => this.setState({ error, isLoaded: false }));
    }

    render() {
        const data = this.state;
        const value = this.state.searchTerm;
        const { error, isLoaded, count } = this.state;

        return (
            <div className="container">
                <H1 title="Search Github" description="To find a GitHub profile, simply search by name or username." />

                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3 alert alert-secondary">
                        <Input type="search" placeholder="Search by name or username" arialabel="Search" value={value} onchange={this.handleChange} required />
                        <div className="input-group-append">
                            <PrimaryButton type="submit">Search</PrimaryButton>
                        </div>
                    </div>
                </form>

                {error && <AlertDanger>Oops something went wrong</AlertDanger>}
                {isLoaded && <AlertInfo>Getting data...</AlertInfo>}
                {count === 0 && <AlertWarning>No results</AlertWarning>}

                <CardList {...data} />

            </div >
        )
    }
}
