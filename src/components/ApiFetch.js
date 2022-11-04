import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useState, useEffect } from "react";

export default function ApiFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/anietieakpanumoh/repos`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="main">
            <h1>
                LIST OF <span>REPOSITORIES</span>
            </h1>
            {loading && <div>Please wait for a moment....</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}

            <ul>
                {data &&
                    data.map(({ id, name }) => (
                        <li key={id}>
                            <Link to={`/repositories/${name}`}>
                                <h3>{name}</h3>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
