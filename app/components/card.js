import React, { useState, useEffect } from 'react';
import Spacer from "../components/spacer";

const Card = ({ name, logo, status, primaryDate, interviewDate, finalDate, link, preNum }) => {
    const [statusText, setStatusText] = useState('');
    const [statusColor, setStatusColor] = useState('');
    const [primaryDday, setPrimaryDday] = useState(0);
    const [interviewDday, setInterviewDday] = useState(0);
    const [finalDday, setFinalDday] = useState(0);
    const [primaryColor, setPrimaryColor] = useState('');
    const [interviewColor, setInterviewColor] = useState('');
    const [finalColor, setFinalColor] = useState('');

    useEffect(() => {
        switch (status) {
            case 0:
                setStatusText('발표 전');
                setStatusColor('gray');
                break;
            case 1:
                setStatusText('1차합격');
                setStatusColor('blue');
                break;
            case 2:
                setStatusText('최초합격');
                setStatusColor('green');
                break;
            case 3:
                setStatusText('불합격');
                setStatusColor('red');
                break;
            case 4:
                setStatusText('예비 ' + preNum + '번');
                setStatusColor('yellow');
                break;
            default:
                setStatusText('발표 전');
                setStatusColor('gray');
                break;
        }
    }, [status]);

    useEffect(() => {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        if (primaryDate) {
            const primary = primaryDate;
            const primaryDiff = Math.ceil((primary.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) - 1;
            setPrimaryDday(primaryDiff < 0 ? `+${Math.abs(primaryDiff)}` : primaryDiff === 0 ? '-DAY' : `-${primaryDiff}`);
        }
        if (interviewDate) {
            const interview = interviewDate;
            const interviewDiff = Math.ceil((interview.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) - 1;
            setInterviewDday(interviewDiff < 0 ? `+${Math.abs(interviewDiff)}` : interviewDiff === 0 ? '-DAY' : `-${interviewDiff}`);
        }
        if (finalDate) {
            const final = finalDate;
            const finalDiff = Math.ceil((final.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) - 1;
            setFinalDday(finalDiff < 0 ? `+${Math.abs(finalDiff)}` : finalDiff === 0 ? '-DAY' : `-${finalDiff}`);
        }
    }, [primaryDate, interviewDate, finalDate]);

    useEffect(() => {
        if (primaryDday && primaryDday[0] !== '+') {
            const dday = parseInt(primaryDday.slice(1));
            if (dday <= 5) {
                setPrimaryColor('red');
            }
        }
        if (interviewDday && interviewDday[0] !== '+') {
            const dday = parseInt(interviewDday.slice(1));
            if (dday <= 5) {
                setInterviewColor('red');
            }
        }
        if (finalDday && finalDday[0] !== '+') {
            const dday = parseInt(finalDday.slice(1));
            if (dday <= 5) {
                setFinalColor('red');
            }
        }
    }, [primaryDday, interviewDday, finalDday]);

    return (
        <div className={`card card-1x1 ${statusColor}`}
            onClick={() => window.open(link, '_blank')}>
            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                <b style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src={logo} width="30px" height={'30px'} />
                    {name}</b>
                <span className={`tag ${statusColor}`}>{statusText}</span>
            </div>
            <Spacer y={20} />
            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>

                    {primaryDate && (
                        <>
                            <span>1차</span>
                            <h3 style={{ fontSize: '22px', color: primaryColor }}>D{primaryDday}</h3>
                            <span style={{ opacity: 0.7 }}>{`${primaryDate.getMonth() + 1}.${primaryDate.getDate()}`}</span>
                        </>
                    )}
                </div>
                <div style={{ borderLeft: '1px solid var(--foreground)', height: '50px', opacity: 0.2 }}></div>
                <div style={{ fontSize: '14px', opacity: 0.5 }}>

                    {interviewDate && (
                        <>
                            <span>면접</span>
                            <h3 style={{ fontSize: '22px', color: interviewColor }}>D{interviewDday}</h3>
                            <span style={{ opacity: 0.7 }}>{`${interviewDate.getMonth() + 1}.${interviewDate.getDate()}`}</span>
                        </>
                    )}
                </div>
                <div style={{ borderLeft: '1px solid var(--foreground)', height: '50px', opacity: 0.2 }}></div>
                <div style={{ fontSize: '14px', opacity: 0.5 }}>
                    {finalDate && (
                        <>
                            <span>최종</span>
                            <h3 style={{ fontSize: '22px', color: finalColor }}>D{finalDday}</h3>
                            <span style={{ opacity: 0.7 }}>{`${finalDate.getMonth() + 1}.${finalDate.getDate()}`}</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
