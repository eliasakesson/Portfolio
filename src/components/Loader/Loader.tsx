import { useEffect, useState } from 'react';
import './Loader.scss';

const Loader = ({ loading } : { loading : boolean }) => {

    return (
        <div className={`loader ${!loading && "close"}`}>
            <div className="spinner"></div>
        </div>
    )
}

export default Loader