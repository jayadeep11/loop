import { motion } from 'framer-motion'

export const ProgressBar = ({ activeSection, sectionProgress }) => {
return (

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
)
}
