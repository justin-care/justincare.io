const Footer = () => {
    const pubYear = 2025
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer w-full h-12 flex items-center justify-center">
            <h1 className="text-sm opacity-30">
                {
                    currentYear === pubYear ? `© ${pubYear} justincare.io` : `© ${pubYear} - ${currentYear} justincare.io`
                }
            </h1>
        </footer>
    )
}

export default Footer;
