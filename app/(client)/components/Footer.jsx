export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white p-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div>
                    <h2 className="text-lg font-bold">Mi Empresa</h2>
                    <p className="text-sm text-gray-400">&copy; 2025 Todos los derechos reservados.</p>
                </div>
                <ul className="flex space-x-6 mt-4 md:mt-0">
                    <li><a href="#" className="hover:text-gray-400">Términos</a></li>
                    <li><a href="#" className="hover:text-gray-400">Política de privacidad</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
                </ul>
            </div>
        </footer>
    )
}