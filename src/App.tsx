```tsx
import React, { useState } from 'react';

const App: React.FC = () => {
  const [testInput, setTestInput] = useState('');
  const [testResult, setTestResult] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestInput(e.target.value);
  };

  const handleTestClick = () => {
    if (testInput.trim().length === 0) {
      setTestResult('Please enter some text to test.');
    } else {
      setTestResult(`You entered: ${testInput}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>Test App</h1>
      <input
        type="text"
        value={testInput}
        onChange={handleInputChange}
        style={{ padding: '0.5rem', marginBottom: '1rem' }}
      />
      <button onClick={handleTestClick} style={{ padding: '0.5rem 1rem' }}>
        Test
      </button>
      <p style={{ marginTop: '1rem' }}>{testResult}</p>
    </div>
  );
};

export default App;
```