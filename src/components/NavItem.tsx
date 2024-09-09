'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavItem: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <motion.li
      className="list-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href} className="px-2 py-1 rounded-md transition-colors hover:bg-gray-100">
        {children}
      </Link>
    </motion.li>
  );
};

export default NavItem;