import React from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import Table from './components/Table/Table';

function App() {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status' },
  ];

  const data = [
    { name: 'Excavator', status: 'Active' },
    { name: 'Bulldozer', status: 'Idle' },
  ];

  return (
    <div>
      <h1>Design System Demo</h1>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Input label="Name" placeholder="Enter name" />
      <Card><p>This is a reusable card</p></Card>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;