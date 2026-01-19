import React, { useState } from 'react';
import { Download, FileText, Loader } from 'lucide-react';

const ReportGenerator = ({ onGenerate }) => {
  const [generating, setGenerating] = useState(false);

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      await onGenerate();
    } finally {
      setTimeout(() => setGenerating(false), 2000);
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Performance Report</h3>
          <p className="text-sm text-gray-400 mb-4">
            Generate a comprehensive PDF report with detailed analytics, metrics, 
            and performance insights from your pipeline execution.
          </p>
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-medium transition-all"
          >
            {generating ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Generate Full PDF Report
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerator;
