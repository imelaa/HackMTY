// src/components/Crossword.tsx
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
      style={{
        width: '30px', // Tamaño de las celdas reducido
        height: '30px',
        textAlign: 'center',
        margin: '1px', // Margen reducido
        border: '1px solid #ccc',
        fontSize: '16px', // Tamaño de letra reducido
        backgroundColor: '#fff',
      }}
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
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '20px',
          width: '80%',
          maxHeight: '80vh',
          backgroundColor: '#004977',
          padding: '10px',
          borderRadius: '10px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Sección de Pistas */}
        <div
          style={{
            overflowY: 'scroll',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            maxHeight: '70vh',
          }}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Pistas</h3>
          {terms.map((term, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <strong>{index + 1}. </strong> {term.hint}
            </div>
          ))}
        </div>

        {/* Sección del Crucigrama con desplazamiento */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              overflowY: 'scroll', // Habilitar desplazamiento vertical
              maxHeight: '70vh', // Limitar la altura máxima del contenedor
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '10px',
            }}
          >
            {terms.map((term, termIndex) => (
              <div key={termIndex} style={{ marginBottom: '20px', textAlign: 'center' }}>
                <strong>{termIndex + 1}</strong>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${term.word.length}, 30px)`,
                    gap: '1px',
                    marginTop: '5px',
                  }}
                >
                  {grid[termIndex].map((cell, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      value={cell}
                      onChange={(value) => handleCellChange(termIndex, cellIndex, value)}
                    />
                  ))}
                </div>
                <div style={{ marginTop: '5px', color: isComplete(termIndex) ? '#fff' : 'red' }}>
                  {isComplete(termIndex) ? '¡Correcto!' : 'Completa la palabra'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crossword;
