import React, { useState } from 'react';
import { Term } from '../data/terms';

interface CellProps {
  value: string;
  onChange: (value: string) => void;
}

const Cell: React.FC<CellProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value.toUpperCase())}
      maxLength={1}
      className="w-12 h-12 text-center border border-gray-500 rounded-md text-2xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
    />
  );
};

interface CrosswordProps {
  terms: Term[];
}

const Crossword: React.FC<CrosswordProps> = ({ terms }) => {
  const [grid, setGrid] = useState<string[][]>(
    terms.map(term => Array(term.word.length).fill(''))
  );

  const handleCellChange = (termIndex: number, cellIndex: number, value: string) => {
    const newGrid = grid.map((row, tIndex) =>
      tIndex === termIndex
        ? row.map((cell, cIndex) => (cIndex === cellIndex ? value : cell))
        : row
    );
    setGrid(newGrid);
  };

  const isComplete = (termIndex: number) => {
    return grid[termIndex].join('') === terms[termIndex].word;
  };

  return (
    <div className="flex justify-center items-center min-h-view bg-gray-200 p-8 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl bg-[#003366] p-6 rounded-xl shadow-lg">
        {/* Clues Section */}
        <div className="overflow-y-auto p-6 border border-gray-300 rounded-lg max-h-[70vh] bg-white shadow-sm">
          <h3 className="text-center mb-6 text-xl font-bold text-gray-800">Clues</h3>
          {terms.length === 0 ? (
            <p className="text-center text-gray-500">No clues available</p>
          ) : (
            terms.map((term, index) => (
              <div key={index} className="mb-6 text-gray-700">
                <strong className="text-lg">{index + 1}. </strong> {term.hint}
              </div>
            ))
          )}
        </div>

        {/* Crossword Section */}
        <div className="flex flex-col justify-start items-center overflow-y-auto min-h-[20vh] max-h-[70vh] bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
          {terms.map((term, termIndex) => (
            <div key={termIndex} className="mb-6 text-center">
              <strong className="block mb-4 text-xl font-bold text-gray-800">{termIndex + 1}</strong>
              <div
                className="grid gap-2"
                style={{ gridTemplateColumns: `repeat(${term.word.length}, minmax(0, 1fr))` }}
              >
                {grid[termIndex].map((cell, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    value={cell}
                    onChange={(value) => handleCellChange(termIndex, cellIndex, value)}
                  />
                ))}
              </div>
              <div className={`mt-4 text-lg ${isComplete(termIndex) ? 'text-green-600' : 'text-red-600'}`}>
                {isComplete(termIndex) ? 'Correct!' : 'Complete the word'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crossword;