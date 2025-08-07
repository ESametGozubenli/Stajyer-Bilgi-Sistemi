import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const StatusChart = ({ data }) => {
  const { totalIntern, activeIntern, startSoon, pasiveIntern } = data;

  const chartData = [
    { 
      name: 'Toplam', 
      value: totalIntern, 
      fill: '#8B5CF6' 
    },
    { 
      name: 'Aktif', 
      value: activeIntern, 
      fill: '#10B981' 
    },
    { 
      name: 'Yaklaşan', 
      value: startSoon, 
      fill: '#F59E0B' 
    },
    { 
      name: 'Tamamlanan', 
      value: pasiveIntern, 
      fill: '#EF4444' 
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Stajyer Durumu</h3>
      <p className="text-gray-600 text-sm mb-6">Mevcut stajyer durumlarının dağılımı</p>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={chartData} 
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              labelStyle={{ fontWeight: 'bold' }}
              formatter={(value, name) => [value, 'Stajyer Sayısı']}
            />
            <Bar 
              dataKey="value" 
              radius={[4, 4, 0, 0]}
              name="Stajyer Sayısı"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatusChart;