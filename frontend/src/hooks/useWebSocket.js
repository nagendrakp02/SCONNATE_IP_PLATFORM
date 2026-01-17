import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { WS_URL } from '../utils/constants';
import { useMetricsStore } from '../store/metricsStore';
import { usePipelineStore } from '../store/pipelineStore';

export const useWebSocket = () => {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);
  const { setMetrics, addLog } = useMetricsStore();
  const { setPipelineStatus } = usePipelineStore();

  useEffect(() => {
    // Initialize socket connection
    socketRef.current = io(WS_URL, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5
    });

    const socket = socketRef.current;

    socket.on('connect', () => {
      setIsConnected(true);
      addLog('Connected to server', 'success');
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      addLog('Disconnected from server', 'warning');
    });

    socket.on('metrics', (data) => {
      setMetrics(data);
    });

    socket.on('status', (data) => {
      setPipelineStatus(data.status);
    });

    socket.on('log', (data) => {
      addLog(data.message, data.level);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const startPipeline = (pipelineData) => {
    if (socketRef.current) {
      socketRef.current.emit('pipeline:start', pipelineData);
    }
  };

  const stopPipeline = () => {
    if (socketRef.current) {
      socketRef.current.emit('pipeline:stop');
    }
  };

  return {
    isConnected,
    startPipeline,
    stopPipeline
  };
};
