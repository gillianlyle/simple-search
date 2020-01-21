import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { H1 } from '../common/Headings';
import {Input, PrimaryButton} from '../common/InputControls';
import { AlertDanger, AlertInfo } from '../common/TextAlerts';

// Create API url -  https://api.github.com/search/users?q=
const PATH_BASE = 'https://api.github.com';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = '/users?q='

const card = {
    width: "16rem",
    display: "inline-block",
    margin: "10px"
}

const SearchUsers = () => {

    // declare new state variables
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('react');
    const [url, setUrl] = useState(`${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}react`);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleOnChange = event => setQuery(event.target.value);
    const handleSubmit = event => {
        setUrl(`${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${query}`);
        event.preventDefault();
    }

    // fetch data
    useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data.items);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]); //fire data request once url changes

    return (
        <div className="container">
                <H1 title="Search Github">To find a GitHub profile, simply search by name or username.</H1>

                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3 alert alert-secondary">
                        <Input type="search" placeholder="Search by name or username" arialabel="Search" value={query} onchange={handleOnChange} required />
                        <div className="input-group-append">
                            <PrimaryButton type="submit">Search</PrimaryButton>
                        </div>
                    </div>
                </form>

                {isError && <AlertDanger>Oops something went wrong</AlertDanger>}

                {isLoading ? (
                    <AlertInfo>Getting data...</AlertInfo>
                ) : (
                        <ul>
                            {data.map(item => (
                                <div className="card" style={card} key={item.id}>
                                    <img src={item.avatar_url} className="card-img-top" alt={item.login} />
                                    <div className="card-body">
                                        <h5 className="card-title"><a href={item.html_url}>{item.login}</a></h5>
                                        <p className="card-text">Score: {item.score} <br /></p>
                                    </div>
                                </div>
                            ))}
                        </ul> 
                    )
                }
            </div>
    );
}

export default SearchUsers;
