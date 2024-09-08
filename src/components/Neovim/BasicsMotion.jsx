import React from 'react';

const NeovimBasics = () => {
  const char = 'x'; // Example character

  return (
    <section id="basics" className="mt-16">
      <h2 className="text-4xl font-bold text-violet-400 mb-6">Basic Motions</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        Neovim provides several powerful motions that allow you to navigate through text efficiently. Mastering these motions can significantly enhance your productivity.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mt-4">
        Here’s a rundown of some essential motions:
      </p>
      <ul className="mt-4 space-y-3 text-lg text-gray-400">
        <li>
          <b>h</b> - Move left by one character. This is a fundamental motion used for leftward navigation.
        </li>
        <li>
          <b>j</b> - Move down by one line. This command scrolls the view down one line at a time.
        </li>
        <li>
          <b>k</b> - Move up by one line. Use this command to scroll the view up by one line.
        </li>
        <li>
          <b>l</b> - Move right by one character. This command moves the cursor rightward by one character.
        </li>
        <li>
          <b>w</b> - Jump to the beginning of the next word. This is useful for quick navigation between words.
        </li>
        <li>
          <b>e</b> - Move to the end of the current word. This command allows you to quickly position the cursor at the end of a word.
        </li>
        <li>
          <b>0</b> - Move to the beginning of the current line. It places the cursor at the first character of the line.
        </li>
        <li>
          <b>$</b> - Move to the end of the current line. This command positions the cursor at the last character of the line.
        </li>
        <li>
          <b>gg</b> - Move to the first line of the file. This is useful for quickly navigating to the top of the file.
        </li>
        <li>
          <b>G</b> - Move to the last line of the file. This command quickly takes you to the bottom of the file.
        </li>
        <li>
          <b>f{char}</b> - Move to the next occurrence of a character on the current line. Replace <b>{char}</b> with the character you're searching for.
        </li>
        <li>
          <b>t{char}</b> - Move to just before the next occurrence of a character on the current line. Useful for fine-tuning your cursor's position.
        </li>
        <li>
          <b>/search</b> - Search forward for a text pattern. The <b>/</b> is followed by the search term. Press <b>Enter</b> to execute the search.
        </li>
        <li>
          <b>?search</b> - Search backward for a text pattern. The <b>?</b> is followed by the search term. Press <b>Enter</b> to execute the search.
        </li>
      </ul>
      <p className="text-lg text-gray-300 leading-relaxed mt-4">
        You can combine these motions with other commands for efficient text manipulation. Experiment with these basic motions to find what best suits your workflow.
      </p>
    </section>
  );
};

export default NeovimBasics;

