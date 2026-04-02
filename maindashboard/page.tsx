'use client';

import { useState, useEffect } from 'react';
import StatCard from '@/components/dashboard/StatCard';
import { demoFlocks } from '@/lib/mockData';
import { AlertTriangle, Users, Thermometer } from 'lucide-react';
import TrendChart from '@/components/analytics/TrendChart';

export default function Dashboard() {
  const [flocks] = useState(demoFlocks);
  const totalBirds = flocks.reduce((sum, f) => sum + f.currentCount, 0);
  const avgMortality = (flocks.reduce((sum, f) => sum + f.mortalityRate, 0) / flocks.length).toFixed(1);

  // Simulated live mortality tick
  const [liveMortality, setLiveMortality] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMortality(prev => Math.max(1, prev + (Math.random() > 0.7 ? 1 : -1)));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-400">Welcome, Farm Manager</h1>
          <p className="text-gray-600">Srivilliputhur, Tamil Nadu • Today: April 2, 2026</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Biosecurity Score</div>
          <div className="text-5xl font-bold text-green-600">89<span className="text-xl">/100</span></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Birds" value={totalBirds.toLocaleString()} icon={Users} trend="+2 today" />
        <StatCard title="Avg Mortality" value={`${avgMortality}%`} icon={AlertTriangle} color="orange" />
        <StatCard title="Liveability" value="95.2%" icon={TrendingUp} />
        <StatCard title="Current Temp" value="29°C" icon={Thermometer} alert={true} />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Mortality Trend (Last 7 Days)</h3>
          <TrendChart data={/* mock array */} />
        </div>
        <div>
          <h3 className="font-semibold mb-4">Active Alerts</h3>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 rounded-xl flex gap-3">
              <AlertTriangle className="text-red-600" />
              <div>
                <p className="font-medium">High Mortality in Batch TN-2026-03</p>
                <p className="text-sm text-red-600">4.8% today — Check ventilation</p>
              </div>
            </div>
            {/* More alerts */}
          </div>
        </div>
      </div>

      {/* AI Predictor Quick Access */}
      <AIDiseasePredictor />
    </div>
  );
}
