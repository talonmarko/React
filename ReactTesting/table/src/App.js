import React from 'react';

const App = () => {
  const sqlQuery = 'SELECT COUNT(*) FROM users';

  return (
    <div>
      <h1>SQL Query</h1>
      <pre>{sqlQuery}</pre>
    </div>
  );
};

export default App;
