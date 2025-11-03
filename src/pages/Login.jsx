import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DollarSign, Lock, User, AlertCircle } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardkodirani credentials
  const VALID_USERNAME = "admin";
  const VALID_PASSWORD = "password123";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validacija
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      // Uspješan login
      navigate("/home");
    } else {
      // Neuspješan login
      setError("Netačan username ili lozinka");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-blue-100 to-blue-600 flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-2xl">
            <DollarSign className="w-16 h-16 text-green-400" />
          </div>
        </div>

        {/* Naslov */}
        <h1 className="text-5xl font-bold text-gray-700 text-center mb-5">
          BillUp
        </h1>

        {/* Slogan */}
        <p className="text-xl text-gray-600 text-center mb-8">
          Kontroliši svoje režije
        </p>

        {/* Login forma */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Prijavi se
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
                  placeholder="Unesi username"
                  required
                />
              </div>
            </div>

            {/* Password input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lozinka
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
                  placeholder="Unesi lozinku"
                  required
                />
              </div>
            </div>

            {/* Error poruka */}
            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm font-medium">{error}</span>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Prijavi se
            </button>
          </form>

          {/* Info tekst */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Demo credentials:{" "}
            <span className="font-mono font-semibold">admin</span> /{" "}
            <span className="font-mono font-semibold">password123</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
