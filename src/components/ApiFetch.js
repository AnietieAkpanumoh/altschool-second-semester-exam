import React from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../App.css";
import { useState, useEffect } from "react";

export default function ApiFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [pageNumber, setPageNumber] = useState(0);
    const numberOfRepos = 4;
    const totalPages = pageNumber * numberOfRepos;

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

    const repoCount = Math.ceil(data.length / numberOfRepos);

    function pageChange({ selected }) {
        setPageNumber(selected);
    }

    return (
        <React.Fragment>
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
                        data
                            .slice(totalPages, totalPages + numberOfRepos)
                            .map((data) => (
                                <li key={data.id} className="list">
                                    <Link to={`/repositories/${data.name}`}>
                                        <div>{data.avatar}</div>
                                        <h3>{data.name}</h3>
                                    </Link>
                                </li>
                            ))}
                </ul>
            </div>
            <div className="paginate">
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={repoCount}
                    onPageChange={pageChange}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </React.Fragment>
    );
}
