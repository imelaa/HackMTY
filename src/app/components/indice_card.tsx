import React, { useState } from 'react';
import indice, { Block } from '../data/indice';

const IndexCard: React.FC = () => {
  const [expandedBlockIndex, setExpandedBlockIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedBlockIndex(expandedBlockIndex === index ? null : index);
  };

  return (
    <div className="p-4 text-black">
      {indice.map((block: Block, blockIndex: number) => (
        <div key={blockIndex} className="mb-4">
          <div 
            className={`bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer ${expandedBlockIndex === blockIndex ? 'mb-4' : 'mb-2'}`} 
            onClick={() => handleCardClick(blockIndex)}
          >
            <div className="flex">
              {/* Imagen a la izquierda */}
              <img 
                src={'/calender-dynamic-color.png'} 
                alt={block.title} 
                className="w-1/3 h-auto object-cover" // Imagen a la izquierda ocupando 1/3 del contenedor
              />
              {/* Contenido de la card */}
              <div className="w-2/3 p-4 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-center">{block.title}</h2>
              </div>
            </div>
            {expandedBlockIndex === blockIndex && (
              <div className="p-4">
                <p className="mb-4">{block.objective}</p>

                <h3 className="text-lg font-semibold mb-2">Actividades</h3>
                <ul className="list-disc list-inside mb-4">
                  {block.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="mb-2">
                      <strong>{activity.title}:</strong> {activity.description}
                    </li>
                  ))}
                </ul>

                {block.challenge && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Desafío Final</h3>
                    <p className="mb-2"><strong>Título:</strong> {block.challenge.title}</p>
                    <h4 className="font-semibold mb-2">Roles</h4>
                    <ul className="list-disc list-inside">
                      {block.challenge.roles.map((role, roleIndex) => (
                        <li key={roleIndex} className="mb-2">
                          <strong>{role.role}:</strong> {role.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {block.forum && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Foro</h3>
                    <p className="mb-2"><strong>Descripción:</strong> {block.forum.description}</p>
                    <p><strong>Incentivo:</strong> {block.forum.incentive}</p>
                  </div>
                )}

                {block.instructions && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Instrucciones</h3>
                    <p className="mb-2">{block.instructions.description}</p>
                    {block.instructions.phases && (
                      <ul className="list-disc list-inside">
                        {block.instructions.phases.map((phase, phaseIndex) => (
                          <li key={phaseIndex} className="mb-2">
                            <strong>{phase.title}:</strong> {phase.description}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {block.roles && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Roles</h3>
                    <ul className="list-disc list-inside">
                      {block.roles.map((role, roleIndex) => (
                        <li key={roleIndex} className="mb-2">
                          <strong>{role.role}:</strong> {role.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndexCard;
