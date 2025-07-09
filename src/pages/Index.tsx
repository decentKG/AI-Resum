import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Index Page</h1>
        <p className="text-center text-muted-foreground">
          This is the main index page of your application.
        </p>
      </div>
    </div>
  );
};

export default Index;