'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function ClientPage() {
  const router = useRouter();
  const { id: userId } = useParams();
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to read cookies
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  useEffect(() => {
    const token = getCookie('token');
    if (!token) {
      router.push('/espace-client'); // Redirect if no token
      return;
    }

    async function fetchClientData() {
      try {
        const response = await fetch(
          `https://ocean-contra.vercel.app/api/Client/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch client data');
        }
        const data = await response.json();
        setClientData(data);
      } catch (error) {
        console.log('Error fetching client data:', error);
      } finally {
        setLoading(false);
      }
    }

    if (userId) fetchClientData();
  }, [userId, router]);

  const handleLogout = async () => {
    try {
      await fetch('https://ocean-contra.vercel.app/api/logout', {
        method: 'POST',
      });
      document.cookie = 'token=; Max-Age=0; path=/; secure; samesite=strict'; // Delete the token
      router.push('/espace-client');
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!clientData) return <div>No client data found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Client Account</h1>
      <div className="text-gray-700">
        {/* <p><strong>Firstname:</strong> {clientData.Firstname}</p>
        <p><strong>Lastname:</strong> {clientData.Lastname}</p> */}
        {/* <p><strong>Email:</strong> {clientData.email}</p> */}
        {/* <p><strong>Numero:</strong> {clientData.numero}</p> */}
        <p><strong>CIN:</strong> {clientData.CIN}</p>
        <p><strong>City:</strong> {clientData.city}</p>
        <p><strong>Address:</strong> {clientData.address}</p>
        <p><strong>Code Postal:</strong> {clientData.zipCode}</p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 mt-4"
      >
        Logout
      </button>

      {clientData.dossiers && clientData.dossiers.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Dossiers</h2>
          {clientData.dossiers.map((dossier) => (
            <div key={dossier.id} className="mb-4 p-4 border rounded">
              <p><strong>Dossier ID:</strong> {dossier.id}</p>
              <p><strong>Contract ID:</strong> {dossier.idContra}</p>
              <p><strong>Status:</strong> {dossier.status}</p>
              {dossier.uploade && dossier.uploade.length > 0 && (
                <div>
                  <strong>Uploaded Files:</strong>
                  <ul className="list-disc pl-5">
                    {dossier.uploade.map((file, index) => (
                      <li key={index}>
                        <a
                          href={file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline hover:text-blue-700"
                        >
                          {file}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4">No dossiers found.</p>
      )}
    </div>
  );
}
