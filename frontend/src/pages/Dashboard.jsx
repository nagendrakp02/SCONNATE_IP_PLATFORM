import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import Sidebar from '../components/common/Sidebar';
import PipelineBuilder from './PipelineBuilder';
import Experiments from './Experiments';
import Analytics from './Analytics';
import SavedPipelines from './SavedPipelines';
import { useWebSocket } from '../hooks/useWebSocket';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('pipeline');
  const { isConnected } = useWebSocket();

  // Sync activeTab with current route
  useEffect(() => {
    const path = window.location.pathname.split('/').pop();
    if (path && ['pipeline', 'experiment', 'analytics', 'saved'].includes(path)) {
      setActiveTab(path);
    }
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.history.pushState({}, '', `/dashboard/${tab}`);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={handleTabChange} />
      
      <div className="flex h-[calc(100vh-130px)]">
        <Sidebar />
        
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'pipeline' && <PipelineBuilder />}
          {activeTab === 'experiment' && <Experiments />}
          {activeTab === 'analytics' && <Analytics />}
          {activeTab === 'saved' && <SavedPipelines />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
