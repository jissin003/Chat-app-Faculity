import React from 'react';

function Fhome() {
  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to the Faculty Dashboard</h1>
      <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
        <div style={{ flex: 1, backgroundColor: '#f0f0f0', padding: '16px', borderRadius: '8px' }}>
          <h2>Course Management</h2>
          <p>Manage courses, assignments, and grades.</p>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f0f0f0', padding: '16px', borderRadius: '8px' }}>
          <h2>Student Progress</h2>
          <p>Track student progress and performance.</p>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f0f0f0', padding: '16px', borderRadius: '8px' }}>
          <h2>Communication</h2>
          <p>Interact with students and colleagues.</p>
        </div>
      </div>
    </div>
  );
}

export default Fhome;
