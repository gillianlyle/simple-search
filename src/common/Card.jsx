import React from 'react';
import PropTypes from 'prop-types';

const card = {
    width: "16rem",
    display: "inline-block",
    margin: "10px"
}

const Card = ({ id, avatar_url, login, score, html_url }) => {

    return (
        <div className="card" style={card} key={id}>
            <img src={avatar_url} className="card-img-top" alt={login} />
            <div className="card-body">
                <h5 className="card-title"><a href={html_url}>{login}</a></h5>
                <p className="card-text">Score: {score} <br /></p>
            </div>
        </div>
    )
}

export default Card;

Card.propTypes = {
    id: PropTypes.number,
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    score: PropTypes.number,
    html_url: PropTypes.string
};