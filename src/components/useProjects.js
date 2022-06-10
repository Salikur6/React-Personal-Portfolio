import { useEffect, useState } from 'react';

const useProjects = (id) => {


    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data);
            })
    }, [])


    return [projects];
};

export default useProjects;