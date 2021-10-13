import React from 'react';

const Form = props => {
    const { member, changeForm, submitForm } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        changeForm(name, value);
    }

    const onSumbit = evt => {
        evt.preventDefault();
        submitForm();
    }

    return (
        <form onSubmit={onSumbit}>
            <label>First Name {''}
                <input 
                    type='text'
                    name='name'
                    value={member.name}
                    onChange={onChange} 
                    maxLength='30'
                    placeholder='enter your name'
                />
            </label>
            <label>Email {''}
                <input 
                    type='email'
                    name='email'
                    value={member.email}
                    onChange={onChange}
                    placeholder='enter your email'
                />
            </label>
            <label>Role {''}
                <select name='role' value={member.role} onChange={onChange}>
                    <option value=''>---Select your role---</option>
                    <option value='frontend engineer'>frontend engineer</option>
                    <option value='backend engineer'>backend engineer</option>
                    <option value='designer'>designer</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Form;