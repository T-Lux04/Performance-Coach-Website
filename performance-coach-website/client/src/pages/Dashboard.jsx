import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/auth/me', {
          method: 'GET',
          credentials: 'include', // Important for sending cookies
        });
        
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Failed to fetch user data');
        }
      } catch (err) {
        setError('Network error occurred');
        console.error('Error fetching user:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      {user && (
        <div>
          <h2>User Information</h2>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
}