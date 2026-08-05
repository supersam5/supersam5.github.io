import { m } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion} from 'framer-motion';


const Header: React.FC = () => {
    return (
        <header className="font-robotic sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items center">
            <motion.div
                initial={{ 
                        x: -500,
                        opacity: 0,
                        scale: 0.5
                    }}
                animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }} 
                transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                    }}
            />
            
            <div className='flex flex-row items-center'>
                {/* Social Icons */}
                <SocialIcon url="https://linkedin.com/in/samuel-d-egemba-449055151"
                    fgColor='gray'
                    bgColor='transparent'
                 />
                <SocialIcon url="https://github.com/supersam5"
                    fgColor='gray'
                    bgColor='transparent'
                 />
            </div>

            {/* Email Icon */}
            <motion.div
                initial={{ 
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }} 
                transition={{
                        duration: 1.5 
                    }}
            />
            <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    url="mailto:egembasam@gmail.com"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'> 
                Get in touch
                </p>
            </div>
        </header  >
    );
};

export default Header; 