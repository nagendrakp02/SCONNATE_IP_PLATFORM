// import { useEffect, useRef, useState } from 'react';
// import { io } from 'socket.io-client';
// import { WS_URL } from '../utils/constants';
// import { useMetricsStore } from '../store/metricsStore';
// import { usePipelineStore } from '../store/pipelineStore';

// export const useWebSocket = () => {
//   const [isConnected, setIsConnected] = useState(false);
//   const socketRef = useRef(null);
//   const { setMetrics, addLog } = useMetricsStore();
//   const { setPipelineStatus } = usePipelineStore();

//   useEffect(() => {
//     // Initialize socket connection
//     socketRef.current = io(WS_URL, {
//       transports: ['websocket'],
//       reconnection: true,
//       reconnectionDelay: 1000,
//       reconnectionAttempts: 5
//     });

//     const socket = socketRef.current;

//     socket.on('connect', () => {
//       setIsConnected(true);
//       addLog('Connected to server', 'success');
//     });

//     socket.on('disconnect', () => {
//       setIsConnected(false);
//       addLog('Disconnected from server', 'warning');
//     });

//     socket.on('metrics', (data) => {
//       setMetrics(data);
//     });

//     socket.on('status', (data) => {
//       setPipelineStatus(data.status);
//     });

//     socket.on('log', (data) => {
//       addLog(data.message, data.level);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const startPipeline = (pipelineData) => {
//     if (socketRef.current) {
//       socketRef.current.emit('pipeline:start', pipelineData);
//     }
//   };

//   const stopPipeline = () => {
//     if (socketRef.current) {
//       socketRef.current.emit('pipeline:stop');
//     }
//   };

//   return {
//     isConnected,
//     startPipeline,
//     stopPipeline
//   };
// };


// import { useEffect, useRef, useState } from 'react';
// import { io } from 'socket.io-client';
// import { WS_URL } from '../utils/constants';
// import { useMetricsStore } from '../store/metricsStore';
// import { usePipelineStore } from '../store/pipelineStore';

// export const useWebSocket = () => {
//   const [isConnected, setIsConnected] = useState(false);
//   const socketRef = useRef(null);
//   const { setMetrics, addLog } = useMetricsStore();
//   const { setPipelineStatus } = usePipelineStore();

//   useEffect(() => {
//     // Initialize socket connection
//     socketRef.current = io(WS_URL, {
//       transports: ['websocket'],
//       reconnection: true,
//       reconnectionDelay: 1000,
//       reconnectionAttempts: 5
//     });

//     const socket = socketRef.current;

//     socket.on('connect', () => {
//       setIsConnected(true);
//       addLog('Connected to server', 'success');
//     });

//     socket.on('disconnect', () => {
//       setIsConnected(false);
//       addLog('Disconnected from server', 'warning');
//     });

//     socket.on('metrics', (data) => {
//       setMetrics(data);
//     });

//     socket.on('status', (data) => {
//       setPipelineStatus(data.status);
//     });

//     socket.on('log', (data) => {
//       addLog(data.message, data.level);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const startPipeline = (pipelineData) => {
//     if (socketRef.current) {
//       socketRef.current.emit('pipeline:start', pipelineData);
//     }
//   };

//   const stopPipeline = () => {
//     if (socketRef.current) {
//       socketRef.current.emit('pipeline:stop');
//     }
//   };

//   return {
//     isConnected,
//     startPipeline,
//     stopPipeline
//   };
// };




import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { WS_URL } from '../utils/constants';
import { useMetricsStore } from '../store/metricsStore';
import { usePipelineStore } from '../store/pipelineStore';

let socketSingleton = null; // ✅ GLOBAL SINGLETON

export const useWebSocket = () => {
  const [isConnected, setIsConnected] = useState(false);
  const mountedRef = useRef(true);

  const setMetrics = useMetricsStore((s) => s.setMetrics);
  const addLog = useMetricsStore((s) => s.addLog);
  const setPipelineStatus = usePipelineStore((s) => s.setPipelineStatus);

  useEffect(() => {
    mountedRef.current = true;

    if (!socketSingleton) {
      socketSingleton = io(WS_URL, {
        transports: ['websocket'],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000
      });
    }

    const socket = socketSingleton;

    const onConnect = () => {
      if (!mountedRef.current) return;
      setIsConnected(true);
      addLog('Connected to server', 'success');
    };

    const onDisconnect = () => {
      if (!mountedRef.current) return;
      setIsConnected(false);
      addLog('Disconnected from server', 'warning');
    };

    const onMetrics = (data) => {
      if (!mountedRef.current) return;
      setMetrics(data);
    };

    const onStatus = (data) => {
      if (!mountedRef.current || !data?.status) return;
      setPipelineStatus(data.status);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('metrics', onMetrics);
    socket.on('status', onStatus);

    return () => {
      mountedRef.current = false;
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('metrics', onMetrics);
      socket.off('status', onStatus);
    };
  }, [setMetrics, addLog, setPipelineStatus]);

  return {
    isConnected,
    startPipeline: (data) => socketSingleton?.emit('pipeline:start', data),
    stopPipeline: () => socketSingleton?.emit('pipeline:stop')
  };
};


