import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BasicsMotion from './BasicsMotion';

const Neovim = () => {
  const [activeSection, setActiveSection] = useState('');
  const [sectionProgress, setSectionProgress] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['installation', 'basics', 'editing', 'plugins'];
      const progress = {};
      let newActiveSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const sectionTop = rect.top + window.scrollY;
          const sectionHeight = rect.height;
          const scrollTop = window.scrollY;
          const scrollBottom = scrollTop + windowHeight;

          if (scrollBottom > sectionTop && scrollTop < sectionTop + sectionHeight) {
            const visibleHeight = Math.min(scrollBottom, sectionTop + sectionHeight) - Math.max(scrollTop, sectionTop);
            const progressPercentage = (visibleHeight / sectionHeight) * 100;
            progress[section] = progressPercentage;

            // Set the current section as active
            newActiveSection = section;
          } else {
            progress[section] = 0;
          }
        }
      });

      setSectionProgress(progress);
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger it initially in case of already scrolled content

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col items-center p-10 text-white min-h-screen w-full">
        <h1 className="text-violet-400 text-center mt-12 text-7xl font-bold leading-tight arch">Neovim</h1>
        <p className="text-center mt-4 text-xl text-gray-300 max-w-2xl">
          A guide to getting started with Neovim, the powerful text editor thats extensible and highly configurable.
        </p>

        <nav className="flex justify-center space-x-12 mt-12 border-t border-b border-gray-700 py-4">
          <a href="#installation" className="text-lg text-violet-400 hover:text-white transition">Installation</a>
          <a href="#basics" className="text-lg text-violet-400 hover:text-white transition">Basic Motions</a>
          <a href="#editing" className="text-lg text-violet-400 hover:text-white transition">Editing Commands</a>
          <a href="#plugins" className="text-lg text-violet-400 hover:text-white transition">Plugins</a>
        </nav>

        <div className="mt-16 text-left max-w-4xl">
          <section id="installation" className="mt-16">
            <h2 className="text-5xl font-bold text-violet-400 mb-6 arch">Installation</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Neovim is available on various platforms. Follow the instructions below to install it on your system:
            </p>
            <ul className="mt-4 space-y-3 text-xl text-gray-400">
              <li><b>Arch Linux:</b> <code className="text-violet-400">sudo pacman -S neovim</code></li>
              <li><b>Ubuntu/Debian:</b> <code className="text-violet-400">sudo apt install neovim</code></li>
              <li><b>macOS:</b> <code className="text-violet-400">brew install neovim</code></li>
              <li><b>Windows:</b> Download from the <a href="https://neovim.io" className="text-violet-400 hover:underline">Neovim website</a>.</li>
            </ul>
          </section>

          <BasicsMotion />

          <section id="plugins" className="mt-16 mb-16">
            <h2 className="text-5xl font-bold text-violet-400 mb-6 arch">Plugins</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              One of Neovim's greatest strengths is its extensibility through plugins. You can manage plugins using popular tools like <b>vim-plug</b> or <b>packer.nvim</b>.
            </p>
            <ul className="mt-4 space-y-3 text-xl text-gray-400">
              <li>Install <b>vim-plug</b>: <code className="text-violet-400">curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim</code></li>
              <li>Example plugin (NerdTree): <code className="text-violet-400">Plug 'preservim/nerdtree'</code></li>
            </ul>
          </section>
        </div>
      </div>

      {/* Progress bar */}
      <div className="hidden md:flex sticky top-1/4 h-1/2 w-64 flex flex-col items-end p-4 space-y-4">
        {['installation', 'basics', 'editing', 'plugins'].map((id) => (
          <div key={id} className="flex items-center space-x-4 w-full">
            <motion.div
              className={`flex-shrink-0 text-sm text-white ${id === activeSection ? 'opacity-96' : 'opacity-70'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: id === activeSection ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </motion.div>
            <div className="flex-1 h-1 bg-gray-700 rounded overflow-hidden">
              <motion.div
                className={`h-1 rounded ${id === activeSection ? 'bg-violet-300' : 'bg-gray-500'}`}
                style={{ width: `${sectionProgress[id] || 0}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Neovim;

