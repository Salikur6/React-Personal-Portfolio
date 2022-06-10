import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from './useProjects';

const ProjectsDetails = () => {
    const { id } = useParams();

    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);

            })
    }, [])



    // const [projects] = useProjects();


    console.log(projects)


    return (
        <div>
            <h2>this is projects details page. ID {id}</h2>

            {projects.map(project =>

                <div className='p-3' style={{ background: 'linear-gradient(-45deg,#212428,#212428)', borderRadius: '20px', cursor: 'pointer' }}>

                    <div className="col-lg-6">
                        <div>
                            <img style={{ width: '750px' }} src={project?.img[0]} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div>

                        </div>
                    </div>

                </div>

            )}

        </div>
    );
};

export default ProjectsDetails;