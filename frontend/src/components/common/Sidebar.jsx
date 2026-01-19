import React from 'react';
import VideoFeed from '../video/VideoFeed';
import PipelineControls from '../video/PipelineControls';
import ResourceUsage from '../video/ResourceUsage';
import ActivityLogs from '../video/ActivityLogs';

const Sidebar = () => {
  return (
    <div className="w-96 bg-gray-900 border-r border-gray-800 flex flex-col">
      <VideoFeed />
      <PipelineControls />
      <ResourceUsage />
      <ActivityLogs />
    </div>
  );
};

export default Sidebar;
