import { useEffect, useState } from 'react';
import Spinner from './Spinner/Spinner';

const useProjects = (id) => {
    // const [loading, setLoading] = useState(false);

    const [projects, setProjects] = useState([]);



    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data);
            })
    }, [])

    // if (loading) {
    //     return <Spinner></Spinner>
    // }

    return [projects];
};

export default useProjects;