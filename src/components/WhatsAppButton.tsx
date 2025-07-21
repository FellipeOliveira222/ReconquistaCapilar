import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/message/AECKACT3GUQ2F1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-12 h-12 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6 text-white" fill="currentColor" />
    </motion.a>
  );
};

export default WhatsAppButton;