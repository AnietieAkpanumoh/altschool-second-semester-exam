import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";


function Nested() {
    const param = useParams();
    const [repoData, setRepoData] = useState({});

    useEffect(() => {
        const apiLink = `https://api.github.com/repos/anietieakpanumoh/${param.reponame}`;
        axios.get(apiLink).then((response) => {
            setRepoData(response.data);
        });
    }, [param]);

    const navigate = useNavigate();

    const navigateToRepo = () => {
      navigate('/repositories/');
    };

    return (
        <>
            <Helmet>
                <title>Repositories</title>
                <meta
                    name="description"
                    content="The list of repositories fetched from the Api call"
                />
                <link rel="canonical" href="/repositories" />
            </Helmet>
            <div className="main-repodata">
                <div className="repodata">
                    <ul>
                        <li key={repoData.id}>
                            {/* <div><img src="https://avatars.githubusercontent.com/u/102967666?v=4" width="82" height="82" /></div> */}
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
                <button onClick={navigateToRepo} className="repodataBtn">GO BACK</button>
            </div>
        </>
    );
}

export default Nested;
