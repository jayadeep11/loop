import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Neovim = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['installation', 'basics', 'editing', 'plugins'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (section) => activeSection === section;

  return (
    <div className="flex">
      <div className="flex flex-col items-center p-8 text-white min-h-screen w-full">
        <h1 className="text-violet-400 text-center mt-12 text-6xl font-bold leading-tight arch">Neovim</h1>
        <p className="text-center mt-4 text-lg text-gray-300 max-w-2xl">
          A guide to getting started with Neovim, the powerful text editor that's extensible and highly configurable.
        </p>

        <nav className="flex justify-center space-x-12 mt-12 border-t border-b border-gray-700 py-4">
          <a href="#installation" className="text-lg text-violet-400 hover:text-white transition">Installation</a>
          <a href="#basics" className="text-lg text-violet-400 hover:text-white transition">Basic Motions</a>
          <a href="#editing" className="text-lg text-violet-400 hover:text-white transition">Editing Commands</a>
          <a href="#plugins" className="text-lg text-violet-400 hover:text-white transition">Plugins</a>
        </nav>

        <div className="mt-16 text-left max-w-4xl">
          <section id="installation" className="mt-16">
            <h2 className="text-4xl font-bold text-violet-400 mb-6 arch">Installation</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Neovim is available on various platforms. Follow the instructions below to install it on your system:
            </p>
            <ul className="mt-4 space-y-3 text-lg text-gray-400">
              <li><b>Arch Linux:</b> <code className="text-violet-400">sudo pacman -S neovim</code></li>
              <li><b>Ubuntu/Debian:</b> <code className="text-violet-400">sudo apt install neovim</code></li>
              <li><b>macOS:</b> <code className="text-violet-400">brew install neovim</code></li>
              <li><b>Windows:</b> Download from the <a href="https://neovim.io" className="text-violet-400 hover:underline">Neovim website</a>.</li>
            </ul>
          </section>

          <section id="basics" className="mt-16">
            <h2 className="text-4xl font-bold text-violet-400 mb-6 arch">Basic Motions</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Here are some common motions used in Neovim to navigate through text efficiently:
            </p>
            <ul className="mt-4 space-y-3 text-lg text-gray-400">
              <li><b>h</b> - Move left</li>
              <li><b>j</b> - Move down</li>
              <li><b>k</b> - Move up</li>
              <li><b>l</b> - Move right</li>
              <li><b>w</b> - Jump to the start of the next word</li>
              <li><b>0</b> - Move to the start of the line</li>
              <li><b>$</b> - Move to the end of the line</li>
            </ul>
          </section>

          <section id="editing" className="mt-16">
            <h2 className="text-4xl font-bold text-violet-400 mb-6 arch">Editing Commands</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Neovim offers various editing commands for fast and efficient text editing:
            </p>
            <ul className="mt-4 space-y-3 text-lg text-gray-400">
              <li><b>i</b> - Enter insert mode</li>
              <li><b>dd</b> - Delete a line</li>
              <li><b>yy</b> - Yank (copy) a line</li>
              <li><b>p</b> - Paste the yanked or deleted content</li>
              <li><b>:w</b> - Save the current file</li>
              <li><b>:q</b> - Quit Neovim</li>
            </ul>
          </section>

          <section id="plugins" className="mt-16 mb-16">
            <h2 className="text-4xl font-bold text-violet-400 mb-6 arch">Plugins</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              One of Neovim's greatest strengths is its extensibility through plugins. You can manage plugins using popular tools like <b>vim-plug</b> or <b>packer.nvim</b>.
            </p>
            <ul className="mt-4 space-y-3 text-lg text-gray-400">
              <li>Install <b>vim-plug</b>: <code className="text-violet-400">curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim</code></li>
              <li>Example plugin (NerdTree): <code className="text-violet-400">Plug 'preservim/nerdtree'</code></li>
            </ul>
          </section>
        </div>
      </div>

      <div className="sticky top-1/4 h-1/2 w-64 flex flex-col items-end p-4 space-y-4">
        {[
          { id: 'installation', label: 'Installation', width: 'w-16' },
          { id: 'basics', label: 'Basic Motions', width: 'w-20' },
          { id: 'editing', label: 'Editing Commands', width: 'w-18' },
          { id: 'plugins', label: 'Plugins', width: 'w-14' }
        ].map(({ id, label, width }) => (
          <div key={id} className="flex items-center space-x-4 w-full">
            <motion.div
              className={`flex-shrink-0 text-sm text-white ${isActive(id) ? 'opacity-100' : 'opacity-0'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive(id) ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {label}
            </motion.div>
            <div className="flex-1 h-1 bg-gray-700 rounded overflow-hidden">
              <motion.div
                className={`h-1 rounded ${isActive(id) ? 'bg-violet-300' : 'bg-gray-500'} ${width}`}
                animate={{ width: isActive(id) ? '100%' : '0%' }}
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

