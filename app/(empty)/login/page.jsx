"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulación de login exitoso
    console.log("Login exitoso con:", email, password);
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <button 
          className="absolute top-4 right-4 bg-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-400 transition"
          onClick={() => router.back()}
        >
          ⬅ Regresar
        </button>
        <h2 className="text-2xl font-bold text-center text-gray-800">Iniciar Sesión</h2>
        <form className="mt-6" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
              placeholder="usuario@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          ¿No tienes cuenta? <a href="#" className="text-blue-500">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
