import { LuInfinity } from "react-icons/lu";
import { GrArchlinux } from "react-icons/gr";
import { SiNeovim } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdDraw,  } from "react-icons/md"; // Import new icon
import { AiOutlineGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSetting = () => {
    navigate("/settings");
  };

  const handleNeovim = () => {
    navigate("/neovim");
  };

  const handleArch = () => {
    navigate("/arch");
  };

  const handleDraw = () => {
    navigate("/draw");
  };

  const handleNotes = () => navigate("/notes");

  const handleDashboard = () => {
    navigate("/dashboard"); // Add the action for the new item
  };

  const items = [
    { icon: <LuInfinity className="text-4xl" />, action: handleClick, name: "Loop" },
    { icon: <FaNoteSticky className="text-4xl" />, action: handleNotes, name: "Notes" },
    { icon: <GrArchlinux className="text-4xl" />, action: handleArch, name: "Arch" },
    { icon: <SiNeovim className="text-4xl" />, action: handleNeovim, name: "Neovim" },
    { icon: <MdDraw className="text-4xl" />, action: handleDraw, name: "Draw" },
    { icon: <AiOutlineGithub className="text-4xl" />, action: null, name: "GitHub" },
    { icon: <CgProfile className="text-4xl" />, action: handleLogin, name: "Profile" },
    { icon: <IoSettingsOutline className="text-4xl" />, action: handleSetting, name: "Settings" },
  ];

  return (
    <motion.div
      className="sidebar fixed left-0 top-1/2 transform -translate-y-1/2 z-10 text-violet-400 flex items-center bg-transparent justify-center border-zinc-700 rounded-2xl w-[80px] transition-all duration-500"
      initial={{ width: "50px", opacity: 0.3 }}
      whileHover={{ width: "50px", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="icons flex flex-col gap-8 items-center justify-center w-full mt-10">
        {items.map(({ icon, action, name }, index) => (
          <motion.div
            key={index}
            className="relative flex items-center cursor-pointer group"
            onClick={action}
            whileHover={{ scale: 1.5, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {icon}
            <span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-violet-400">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;

