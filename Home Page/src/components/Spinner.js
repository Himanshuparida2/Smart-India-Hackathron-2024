import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loggedas } from '../context/Loggedas';

function Spinner() {
    const { login_as } = useContext(Loggedas);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (login_as === 'Login to Medco portal') {
                navigate('/medco');
            } else if (login_as === 'Login to Patient portal') {
                navigate('/');
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [login_as, navigate]);

    return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    );
}

export default Spinner;