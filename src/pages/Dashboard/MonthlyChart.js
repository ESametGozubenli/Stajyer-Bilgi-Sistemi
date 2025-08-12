import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const MonthlyChart = ({ formList }) => {
  // Aylık veriyi hesapla
  const monthlyData = useMemo(() => {
    const today = new Date();
    const months = [];
    
    // Son 6 ayı oluştur
    for (let i = 5; i >= 0; i--) {
      const date = new Date();
      date.setMonth(today.getMonth() - i);
      months.push(date);
    }
    
    // Her ay için stajyer sayısını hesapla
    return months.map(month => {
      const monthStart = new Date(month.getFullYear(), month.getMonth(), 1);
      const monthEnd = new Date(month.getFullYear(), month.getMonth() + 1, 0);
      
      const count = formList.filter(item => {
        const startDate = new Date(item.startDate);
        return startDate >= monthStart && startDate <= monthEnd;
      }).length;
      
      // Ay ismini Türkçe olarak formatla
      const monthNames = [
        'Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz',
        'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'
      ];
      
      const monthName = monthNames[month.getMonth()];
      const year = month.getFullYear();
      
      return {
        name: `${monthName} ${year}`,
        value: count,
        month: month.getMonth(),
        year: year
      };
    });
  }, [formList]);

  return (
    <div className="chart-card">
      <h3 className="chart-title">Aylık Stajyer Dağılımı</h3>
      <p className="chart-subtitle">Stajyerlerin başlangıç tarihlerine göre dağılımı</p>
      <div style={{height: 320}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={monthlyData} 
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
              allowDecimals={false} 
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              labelStyle={{ fontWeight: 'bold' }}
              formatter={(value, name) => [value, 'Başlayan Stajyer']}
            />
            <Bar 
              dataKey="value" 
              fill="#8B5CF6"
              radius={[4, 4, 0, 0]}
              name="Stajyer Sayısı"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyChart;