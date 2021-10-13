import React from 'react';

const Member = props => {
    const { member } = props
    const { name, email, role } = member;

    if (!member) {
        return <h2>fetching team members...</h2>
    }

    return(
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{role}</p>
        </div>
    )
}

export default Member;