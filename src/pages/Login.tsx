import { useState } from 'react';
import { backendClient } from '../clients/backendClient';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await backendClient.post('/users/login', { ...formData });
      console.log(res.data);
      localStorage.setItem('social-app-token', res.data.token);
      backendClient.defaults.headers.common['Authorization'] = res.data.token; // update the JWT token for subsequent requests
      navigate(
        import.meta.env.PROD
          ? `${import.meta.env.VITE_FRONTEND_BASE}/feed`
          : `../feed`
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <main>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label htmlFor="email" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border"
        />

        <label htmlFor="password" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border"
        />

        <input type="submit" value="Login" className="border" />
      </form>
    </main>
  );
}

export default LoginPage;
