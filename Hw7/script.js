import React from 'react';


const EmployeeRecord = ({ salary, position, company }) => {
    return (
        <div style={{ marginBottom: '10px' }}>
            <b style={{ color: 'red' }}>Salary:</b> {salary} -
            <b style={{ color: 'red' }}> Position:</b> {position} -
            <b style={{ color: 'red' }}> Company:</b> {company}
        </div>
    );
};

const LoginButton = ({ isLoggedIn }) => {
    return (
        <button style={{ marginTop: '10px' }}>
            {isLoggedIn ? "Logout" : "Login"}
        </button>
    );
};

function App() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>

            <h2>Employee Records</h2>
            <EmployeeRecord salary="90000" position="Senior SDE" company="Amazon" />
            <EmployeeRecord salary="12000" position="Junior SDE" company="Google" />
            <EmployeeRecord salary="10000" position="Project Manager" company="Netflix" />

            <hr />

            <div>
                <h1>Welcome to the website</h1>
                <LoginButton isLoggedIn={true} />
            </div>

            <div style={{ marginTop: '40px' }}>
                <h1>Welcome to the website</h1>
                <LoginButton isLoggedIn={false} />
            </div>

        </div>
    );
}

export default App;