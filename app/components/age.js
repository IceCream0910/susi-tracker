import React, { useState, useEffect } from 'react';
import Spacer from "../components/spacer";

const Age = ({ birth }) => {
    const [age, setAge] = useState(0);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setAge(currentYear - birth);
    }, [birth]);

    return (
        <div className="card card-1x1">
            저는 <b>{birth}년생,</b>

            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', alignItems: 'end' }}>
                <h1 className="mbti" style={{ fontWeight: 100 }}>{age}</h1>
                <span style={{ marginBottom: '5px' }}>살이죠.</span>
            </div>
            <span style={{ fontSize: '12px', opacity: 0.5 }}>(만 나이 기준)</span>
        </div>
    );
};

export default Age;
