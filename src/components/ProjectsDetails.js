import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>this is projects details page. ID {id}</h2>
        </div>
    );
};

export default ProjectsDetails;