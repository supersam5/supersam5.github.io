const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="relative z-10 px-4 py-10 text-center">
            <p className="font-robotic text-sm uppercase tracking-wide text-gray-400">
                © {year} Samuel Egemba · All rights reserved
            </p>
        </footer>
    );
};

export default Footer;