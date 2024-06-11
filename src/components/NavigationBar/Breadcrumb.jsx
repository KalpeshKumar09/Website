// Breadcrumb.js
import { Link } from 'react-router-dom';

const Breadcrumb = ({ path }) => {
    return (
        <nav className="flex my-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {path.map((crumb, index) => (
                    <li key={index} className="inline-flex items-center">
                        {index !== path.length - 1 ? (
                            <Link to={crumb.href} className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                                {index > 0 && (
                                    <svg width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L3 3.5L1 6" stroke="#0D0D0D" strokeWidth="0.5" />
                                    </svg>
                                )}
                                {crumb.label}
                            </Link>
                        ) : (
                            <span className="text-gray-500">{crumb.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
