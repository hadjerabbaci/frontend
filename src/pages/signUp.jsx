import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }

    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = 'Veuillez entrer un numéro de téléphone valide';
    }

    if (!formData.email && !formData.phone) {
      newErrors.contact = 'Veuillez fournir une adresse email ou un numéro de téléphone';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Le nom d’utilisateur est obligatoire';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Le nom d’utilisateur doit contenir au moins 3 caractères';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Le nom d’utilisateur ne peut contenir que des lettres, chiffres et underscores';
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some(user => user.username === formData.username)) {
      newErrors.username = 'Ce nom d’utilisateur existe déjà';
    }

    if (formData.email && users.some(user => user.email === formData.email)) {
      newErrors.email = 'Email déjà enregistré';
    }

    if (formData.phone && users.some(user => user.phone === formData.phone)) {
      newErrors.phone = 'Numéro de téléphone déjà enregistré';
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est obligatoire';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Le mot de passe doit contenir une majuscule, une minuscule et un chiffre';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newUser = {
      email: formData.email || null,
      phone: formData.phone || null,
      username: formData.username,
      password: formData.password,
      createdAt: new Date().toISOString()
    };

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220] p-4 relative overflow-hidden">

      {/* Background FX */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-125 h-125 bg-yellow-500 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-125 h-125 bg-blue-500 blur-3xl rounded-full bottom-10 right-10"></div>
      </div>

      {/* Card */}
      <div className="relative w-full max-w-2xl bg-[#111827] border border-gray-700 rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">🧰</div>
          <h1 className="text-3xl font-extrabold text-white">
            Rejoindre <span className="text-yellow-400">FixIt</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Créez votre compte de services et réparations
          </p>
        </div>

        {/* Contact error */}
        {errors.contact && (
          <div className="bg-red-900/40 text-red-300 p-3 rounded-lg border border-red-500/40 mb-5">
            {errors.contact}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="text-gray-300 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vous@email.com"
                className="w-full mt-2 px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-gray-300 text-sm">Téléphone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+213..."
                className="w-full mt-2 px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="text-gray-300 text-sm">Nom d’utilisateur</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="utilisateur_fixit"
              className="w-full mt-2 px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            {errors.username && <p className="text-red-400 text-xs mt-1">{errors.username}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">Mot de passe</label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Créer un mot de passe"
                className="w-full px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 outline-none pr-20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs px-3 py-1 bg-gray-800 text-yellow-400 rounded-2xl cursor-pointer"
              >
                {showPassword ? "Masquer" : "Afficher"}
              </button>
            </div>
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-300 text-sm">Confirmer le mot de passe</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Répéter le mot de passe"
              className="w-full mt-2 px-4 py-3 bg-[#0b1220] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-bold text-black bg-linear-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-600 transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
          >
            🧰 Créer un compte FixIt
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            Déjà membre FixIt ?{" "}
            <Link to="/login" className="text-yellow-400 font-semibold hover:underline">
              Se connecter
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;