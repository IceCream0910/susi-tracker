
import React from 'react';
import Spacer from "../components/spacer";
import GitHubCalendar from 'react-github-calendar';

const Contribution = ({ src, image }) => {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 5;

        return contributions.filter(activity => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };


    return (
        <div className="card card-1x1">
            <b>Github에 심은 잔디</b>
            <Spacer y={20} />
            <GitHubCalendar username="icecream0910" hideColorLegend
                transformData={selectLastHalfYear}
                labels={{
                    totalCount: '지난 5개월 동안 {{count}}개의 잔디를 심었어요',
                }} />
        </div>
    );
};

export default Contribution;
