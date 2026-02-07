import React from 'react';

const EmployeeRecord = (props) => {
    return (
        <div style={{ marginBottom: '10px', fontSize: '18px' }}>
            <span style={{ color: 'red', fontWeight: 'bold' }}>Salary: </span>
            {props.salary} -
            <span style={{ color: 'red', fontWeight: 'bold' }}> Position: </span>
            {props.position} -
            <span style={{ color: 'red', fontWeight: 'bold' }}> Company: </span>
            {props.company}
        </div>
    );
};

function App() {
    return (
        <div style={{ padding: '20px' }}>
            <EmployeeRecord salary="90000" position="Senior SDE" company="Amazon" />
            <EmployeeRecord salary="12000" position="Junior SDE" company="Google" />
            <EmployeeRecord salary="10000" position="Project Manager" company="Netflix" />
        </div>
    );
}

export default App;