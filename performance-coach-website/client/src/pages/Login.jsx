import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!validEmail) return setError('Please enter a valid email.');
    if (!password || password.length < 8) return setError('Password must be at least 8 characters.');

    setLoading(true);
    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Invalid credentials');
      }
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-[#0f0f0f] border border-yellow-500/25 rounded-2xl p-8 shadow-[0_0_35px_-14px_rgba(250,204,21,0.35)]"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold emph text-yellow-400">Phase Tennis</h1>
          <p className="text-gray-300 mt-1">Login</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          {error && (
            <div className="text-sm text-red-400 bg-red-900/20 border border-red-500/30 rounded px-3 py-2">{error}</div>
          )}
          <div>
            <label className="block text-sm mb-1 emph">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 emph">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black font-semibold rounded-md py-3 hover:bg-yellow-300 transition-colors"
          >
            {loading ? 'Logging in…' : 'Login'}
          </motion.button>
          <p className="text-center text-sm text-gray-400">
            Don’t have an account? <a className="text-yellow-400 hover:underline" href="/register">Sign up</a>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
