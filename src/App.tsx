import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import { Toaster } from './components/ui/Toaster';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <AppRoutes />
          </main>
          <Toaster />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;