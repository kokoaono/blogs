function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <p>Copyright &copy; {footerYear} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
