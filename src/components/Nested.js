import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Nested() {
    const param = useParams();
    const [repoData, setRepoData] = useState({});

    useEffect(() => {
        const apiLink = `https://api.github.com/repos/anietieakpanumoh/${param.reponame}`;
        axios.get(apiLink).then((response) => {
            setRepoData(response.data);
        });
    }, [param]);

    return (
        <div className="main-repodata">
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
            </div>
            <button className="repodataBtn">GO BACK</button>
        </div>
    );
}

export default Nested;
