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
      className="w-10 h-10 text-center border border-gray-300 text-lg bg-white"
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
    <div className="flex justify-center items-center min-h-screen bg-white text-black p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl bg-[#004977] p-4 rounded-lg shadow-md">
        {/* Clues Section */}
        <div className="overflow-y-auto p-4 border border-gray-300 rounded-lg max-h-[70vh] bg-white">
          <h3 className="text-center mb-4 text-lg font-semibold text-gray-800">Pistas</h3>
          {terms.length === 0 ? (
            <p className="text-center text-gray-500">No clues available</p>
          ) : (
            terms.map((term, index) => (
              <div key={index} className="mb-4 text-gray-700">
                <strong>{index + 1}. </strong> {term.hint}
              </div>
            ))
          )}
        </div>

        {/* Crossword Section */}
        <div className="flex flex-col justify-center items-center overflow-y-auto max-h-[70vh] bg-white p-4 border border-gray-300 rounded-lg">
          {terms.map((term, termIndex) => (
            <div key={termIndex} className="mb-4 text-center">
              <strong className="block mb-2">{termIndex + 1}</strong>
              <div
                className="grid gap-1"
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
              <div className={`mt-2 ${isComplete(termIndex) ? 'text-green-500' : 'text-red-500'}`}>
                {isComplete(termIndex) ? '¡Correcto!' : 'Completa la palabra'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crossword;