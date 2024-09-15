// InvestmentSimulator.tsx
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Slider } from '../components/ui/slider';
import { Input } from '../components/ui/inputa';
import { Button } from '../components/ui/button2';

const generateProjectionData = (initialInvestment: number, monthlyContribution: number, years: number, annualReturn: number) => {
  let balance = initialInvestment;
  const data = [];

  for (let i = 0; i <= years; i++) {
    data.push({
      year: i,
      balance: Math.round(balance),
    });

    balance = balance * (1 + annualReturn / 100) + monthlyContribution * 12;
  }

  return data;
};

const Simulator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [years, setYears] = useState(10);
  const [annualReturn, setAnnualReturn] = useState(7);

  const projectionData = generateProjectionData(initialInvestment, monthlyContribution, years, annualReturn);

  return (
    <div className="flex flex-col space-y-6 p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">Investment Simulator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="initialInvestment" className="block text-sm font-medium text-black">
              Initial Investment
            </label>
            <Input
              id="initialInvestment"
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="mt-1, text-black"
            />
          </div>

          <div>
            <label htmlFor="monthlyContribution" className="block text-sm font-medium text-gray-700">
              Monthly Contribution
            </label>
            <Input
              id="monthlyContribution"
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="mt-1, text-black"
            />
          </div>

          <div>
            <label htmlFor="years" className="block text-sm font-medium text-gray-700">
              Investment Period (Years): {years}
            </label>
            <Slider
              id="years"
              min={1}
              max={30}
              step={1}
              value={[years]}
              onValueChange={(value) => setYears(value[0])}
              className="mt-1"
            />
          </div>

          <div>
            <label htmlFor="annualReturn" className="block text-sm font-medium text-gray-700">
              Annual Return (%): {annualReturn}
            </label>
            <Slider
              id="annualReturn"
              min={1}
              max={15}
              step={0.1}
              value={[annualReturn]}
              onValueChange={(value) => setAnnualReturn(value[0])}
              className="mt-1"
            />
          </div>

          <Button onClick={() => console.log('Saving simulation...')}>
            Save Simulation
          </Button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl text-black font-semibold mb-4">Investment Projection</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectionData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="balance" stroke="#D03027" name="Balance" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-red-600 p-4 rounded-lg">
        <h2 className="text-xl text font-semibold mb-2">Projection Summary</h2>
        <p>
          Initial Investment: ${initialInvestment.toLocaleString()}
        </p>
        <p>
          Monthly Contribution: ${monthlyContribution.toLocaleString()}
        </p>
        <p>
          Total Contributions: ${((years * 12 * monthlyContribution) + initialInvestment).toLocaleString()}
        </p>
        <p>
          Final Balance: ${projectionData[projectionData.length - 1].balance.toLocaleString()}
        </p>
        <p>
          Total Earnings: ${(projectionData[projectionData.length - 1].balance - (years * 12 * monthlyContribution) - initialInvestment).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Simulator;






