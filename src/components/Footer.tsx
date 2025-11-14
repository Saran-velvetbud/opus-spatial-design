export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-light text-white/70">
          © {currentYear} Ashoks Design Studio. All rights reserved.
        </p>
        <p className="text-xs font-light text-white/50 mt-2">
          Dream to Reality - Designed with passion for timeless aesthetics
        </p>
      </div>
    </footer>
  );
};
