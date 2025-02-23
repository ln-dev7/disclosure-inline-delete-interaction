import { useState } from "react";
import { Edit, Copy, Star, Share2, Trash, MoreVertical } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const menuItems = [
    { label: "Edit", Icon: Edit },
    { label: "Duplicate", Icon: Copy },
    { label: "Favourite", Icon: Star },
    { label: "Share", Icon: Share2 },
  ];
  return (
    <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10">
      <div className="relative flex items-center justify-center w-full max-w-xs">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-xl border shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MoreVertical className="text-gray-500" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <div className="absolute flex items-center justify-center size-full">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full flex flex-col items-center border shadow-md rounded-2xl bg-white overflow-hidden"
              >
                <div className="w-full py-1.5 px-3 bg-slate-50 border-b">
                  <span className="text-sm text-slate-500">More Options</span>
                </div>
                <div className="w-full flex flex-col p-2 py-2 gap-1">
                  {menuItems.map(({ label, Icon }) => (
                    <button
                      key={label}
                      className={`flex items-center justify-start rounded-xl p-3 w-full hover:bg-gray-50`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="mr-4" />
                      <span className="pt-0.5">{label}</span>
                    </button>
                  ))}
                </div>
                <div className="w-full flex flex-col items-center justify-start gap-2 p-2 border-t overflow-hidden h-[67px] shrink-0">
                  <motion.button
                    className="flex items-center text-red-500 justify-start rounded-xl p-3 w-full hover:bg-red-50 duration-300 transition-transform"
                    style={{
                      y: isDeleteOpen ? -67 : 0,
                    }}
                    onClick={() => setIsDeleteOpen(true)}
                  >
                    <Trash className="mr-3" />
                    <span className="pt-0.5">Delete</span>
                  </motion.button>
                  <motion.div
                    className="flex items-center justify-center w-full gap-2 duration-300 transition-transform"
                    style={{
                      y: isDeleteOpen ? -58 : 0,
                    }}
                  >
                    <button className="flex items-center justify-center p-3 w-full rounded-xl bg-red-500 text-white">
                      <span>Yes, Delete</span>
                    </button>
                    <button
                      className="flex items-center justify-center p-3 w-full rounded-xl bg-white border border-slate-100 shadow"
                      onClick={() => setIsDeleteOpen(false)}
                    >
                      <span>Cancel</span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
