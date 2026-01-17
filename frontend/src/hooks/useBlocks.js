import { useState, useEffect } from 'react';
import { blocksAPI } from '../api/blocks.api';

export const useBlocks = () => {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlocks();
  }, []);

  const fetchBlocks = async () => {
    try {
      setLoading(true);
      const data = await blocksAPI.getAllBlocks();
      setBlocks(data.blocks);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { blocks, loading, error, refetch: fetchBlocks };
};
