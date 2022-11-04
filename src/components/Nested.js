import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import Pagination from "../pages/Pagination";

function Nested() {
    const param = useParams();
    const [repoData, setRepoData] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    // const [data, setData] = useState(null);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageCount = Math.ceil()

    useEffect(() => {
        const apiLink = `https://api.github.com/repos/anietieakpanumoh/${param.reponame}`;
        axios.get(apiLink).then((response) => {
            setRepoData(response.data);
        });
    }, [param]);

    return (
        <div className="repodata">
            <ul>
                <li key={repoData.id}>
                    <h3>{repoData.name}</h3>
                    <p>
                        <b>Description:</b> {repoData.description}
                    </p>
                    <h4>
                        <b>Forks:</b> {repoData.forks}
                    </h4>
                    <h4>
                        <b>Language:</b> {repoData.language}
                    </h4>
                    <h4>
                        <b>Watchers:</b> {repoData.watchers}
                    </h4>
                    <h4>
                        <b>Visibility:</b> {repoData.visibility}
                    </h4>
                    <h4>
                        <b>Push At:</b> {repoData.pushed_at}
                    </h4>
                    <h4>
                        <b>Created At:</b> {repoData.created_at}
                    </h4>
                    <h4>
                        <b>Updated At:</b> {repoData.updated_at}
                    </h4>
                </li>
            </ul>

            <ReactPaginate
                postsPerPage={postsPerPage}
                totalPosts={repoData.length}
                paginate={paginate}
            />
        </div>
    );
}

export default Nested;
