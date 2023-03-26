import { useEffect, useState } from 'react';
import './Loader.scss';

const Loader = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div className={`loader ${!loading && "close"}`}>
            <div className="spinner"></div>
        </div>
    )
}

export default Loader