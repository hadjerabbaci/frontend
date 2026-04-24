import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const users = JSON.parse(localStorage.getItem('users') || '[]');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.identifier.trim() || !formData.password.trim()) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    const user = users.find(user =>
      (user.email === formData.identifier ||
        user.phone === formData.identifier ||
        user.username === formData.identifier) &&
      user.password === formData.password
    );

    if (user) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/');
    } else {
      setError('Identifiants invalides. Vérifiez votre identifiant et votre mot de passe.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden p-4">

      {/* Background FX */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-yellow-500 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-[#111827] border border-gray-700 rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">🛠️</div>
          <h1 className="text-3xl font-extrabold text-white">
            Fix<span className="text-yellow-400">It</span> Connexion
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Accédez à votre espace de réparation
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-900/40 text-red-300 p-3 rounded-lg mb-6 border border-red-500/40">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Identifier */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              Email / Téléphone / Nom d'utilisateur
            </label>
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="Entrez votre identifiant"
              className="w-full px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              autoComplete="username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Entrez votre mot de passe"
                className="w-full px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-20"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs px-3 py-1 bg-gray-800 text-yellow-400 rounded hover:bg-gray-700 cursor-pointer"
              >
                {showPassword ? "Masquer" : "Afficher"}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-bold text-black bg-linear-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-600 transition-all shadow-lg hover:scale-[1.02]"
          >
            🔧 Se connecter à FixIt
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            Nouveau ici ?{" "}
            <Link
              to="/signUp"
              className="text-yellow-400 font-semibold hover:underline"
            >
              Créer un compte FixIt
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;