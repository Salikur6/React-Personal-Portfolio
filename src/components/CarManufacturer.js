import React from 'react';
import { useState } from 'react';
import useProjects from './useProjects';

const CarManufacturer = () => {
    const [projects] = useProjects();
    const [selectedImg, setSelectedImg] = useState(projects[0]?.img[0])

    console.log(projects)
    return (
        <div className='p-3' style={{ background: 'linear-gradient(-45deg,#212428,#212428)', borderRadius: '20px', cursor: 'pointer' }}>
            {projects?.map(project =>
                <div key={project?._id} className='container my-5'>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className=' my-5'>
                                <img style={{ height: '500px', objectFit: 'cover', width: '100%' }} src={selectedImg} alt="" />

                                {project?.img.map((img, index) => <img src={img} key={index} style={{ width: '100px', border: selectedImg === img ? '4px solid purple' : '' }} onClick={() => setSelectedImg(img)} alt="" />)}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 p-2">
                            <div className='text-white'>
                                <h6>{project?.projectIdea}</h6>

                                <h4>{project?.title}</h4>
                                <p className='fw-bold'>Project Overview</p>
                                <p>{project?.overview[0]}</p>
                                <p>{project?.overview[1]}</p>
                                <p>{project?.overview[2]}</p>
                                <p>{project?.overview[3]}</p>
                                <p>{project?.overview[4]}</p>
                                <p>{project?.overview[5]}</p>
                                <p>{project?.overview[6]}</p>
                                <p>{project?.overview[7]}</p>
                                <p>{project?.overview[8]}</p>


                                <div className='d-flex justify-content-around py-4'>
                                    <a href={project?.liveLink} target='blank' className='btn btn-primary'>
                                        Live Link
                                    </a>
                                    <a href={project?.clientLink} target='blank' className='btn btn-primary'>
                                        View Client
                                    </a>
                                    <a href={project?.serverLink} target='blank' className='btn btn-primary'>
                                        View Server
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            )}

        </div>
    );
};

export default CarManufacturer;