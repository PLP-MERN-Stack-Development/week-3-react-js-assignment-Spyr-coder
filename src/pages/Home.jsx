import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import TaskManager from '../components/TaskManager';
import Posts from "../components/Posts";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10 text-center">
      <Card>
        <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          Welcome to the React App
        </h1>
        <p className="text-gray-600 dark:text-gray-300">Here are some buttons:</p>
        <div className="flex justify-center gap-4 mt-4">
          <Button variant="primary">Click Me</Button>
          <Button variant="secondary">Go Back</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </Card>

      <div className="flex justify-center">
        <TaskManager />
      </div>

      <div className="flex justify-center">
        <Posts />
      </div>
    </div>
  );
};

export default Home;
