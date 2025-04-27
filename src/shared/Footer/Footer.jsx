import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
            <div className="container mx-auto px-6 lg:px-40 text-center space-y-8">
                {/* Logo */}
                <div className="flex items-center justify-center space-x-3">
                    <img src={logo} alt="Logo" className="w-8 h-8 animate-spin-slow" />
                    <Link to="/" className="text-2xl font-bold tracking-wide text-white uppercase">Product Hub</Link>
                </div>

                {/* Tagline */}
                <p className="text-gray-400 text-sm">Delivering quality products for a better tomorrow.</p>

                {/* Social Icons */}
                <div className="flex justify-center space-x-5 mt-5">
                    {/* LinkedIn */}
                    <a href="#" target="_blank" className="hover:text-white transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5C4.98 5 3.89 6 2.5 6S0 5 0 3.5 1.11 1 2.5 1 4.98 2 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.7v2.2h.05c.52-1 1.8-2.2 3.7-2.2 4 0 4.75 2.5 4.75 5.8V24h-4v-7.8c0-1.9-.03-4.3-2.6-4.3s-3 2-3 4.2V24h-4V8z"/>
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a href="#" target="_blank" className="hover:text-white transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.004-.404c1.02.005 2.045.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.609-2.807 5.628-5.479 5.922.43.372.814 1.104.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.192.694.801.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>

                    {/* Google */}
                    <a href="#" target="_blank" className="hover:text-white transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48">
                            <path d="M44.5 20H24v8.5h11.7C34.6 33 30 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l6.2-6.2C34.5 5.5 29.6 3.5 24 3.5 12.6 3.5 3.5 12.6 3.5 24S12.6 44.5 24 44.5c11.4 0 20.5-9.1 20.5-20.5 0-1.6-.2-2.8-.5-4z" />
                        </svg>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500">© 2025 Product Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
