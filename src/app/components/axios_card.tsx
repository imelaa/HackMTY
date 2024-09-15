import { useEffect, useState } from 'react';
import axios from '../utils/axios';

interface CardData {
  _id: number;
  first_name: string;
  last_name: string;
  city: string;
}

const Cards = () => {
  const [data, setData] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/accounts'); // Endpoint real de Nessie

        // Usar datos de prueba si la respuesta está vacía
        if (response.data.length === 0) {
          const mockData: CardData[] = [
            { _id: 1, first_name: 'John', last_name: 'Doe', city: 'New York' },
            { _id: 2, first_name: 'Jane', last_name: 'Smith', city: 'Los Angeles' },
            { _id: 3, first_name: 'Mike', last_name: 'Johnson', city: 'Chicago' },
            { _id: 4, first_name: 'Anna', last_name: 'Williams', city: 'Miami' },
          ];
          setData(mockData);
        } else {
          setData(response.data);
        }
      } catch (err) {
        // Manejo de errores
        const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center py-4">Loading...</p>;
  if (error) return <p className="text-center py-4 text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item._id}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-start"
        >
          <h3 className="text-xl font-semibold mb-2">
            {item.first_name} {item.last_name}
          </h3>
          <p className="text-gray-600">{item.city}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
