const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="site-footer" aria-label="Footer">
			<div className="site-footer-inner">
				<p>© Copyright {year} Cantor College. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
