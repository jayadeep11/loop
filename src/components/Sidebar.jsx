import { LuInfinity } from "react-icons/lu";
import { GrArchlinux } from "react-icons/gr";
import { SiNeovim } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { TiAdjustBrightness } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { MdDraw } from "react-icons/md";
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
    navigate("/arch");a
  };

  const handleDraw = () => {
    navigate("/draw");
  };

  const handleNotes = () => navigate("/notes");

  return (
    <motion.div
      className="sidebar z-0 text-violet-400 flex items-center bg-transparent justify-center  rounded-2xl h-[50px] transform transition-all duration-500 ease-in-out"
      initial={{ height: "50px", opacity: 0.8 }}
      whileHover={{ height: "50px", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="icons flex flex-col gap-8 items-center justify-center w-full">
        {[
          { icon: <LuInfinity className="text-4xl" />, action: handleClick },
          { icon: <FaNoteSticky className="text-4xl" />, action: handleNotes },
          { icon: <GrArchlinux className="text-4xl" />, action: handleArch },
          { icon: <SiNeovim className="text-4xl" />, action: handleNeovim },
          { icon: <MdDraw className="text-4xl" />, action: handleDraw },
          { icon: <IoMusicalNotesOutline className="text-4xl" />, action: null },
          { icon: <AiOutlineGithub className="text-4xl" />, action: null },
          { icon: <TiAdjustBrightness className="text-4xl" />, action: null },
          { icon: <CgProfile className="text-4xl" />, action: handleLogin },
          { icon: <IoSettingsOutline className="text-4xl" />, action: handleSetting },
        ].map(({ icon, action }, index) => (
          <motion.div
            key={index}
            className="flex items-center cursor-pointer"
            onClick={action}
            whileHover={{ scale: 1.0, y: 0, x: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;

