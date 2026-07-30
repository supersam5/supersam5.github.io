import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type IntroFacts = {
    name: string;
    role: string;
}

const Hero: React.FC<IntroFacts> = ({ name, role }) => {
    const [introText, count] = useTypewriter({ 
        words: [
           "Hello I'm "+ name ,
           "Your "+ role,
        ], loop: true, delaySpeed: 2000});
    
    return (
        <h1 className="font-robotic text-4xl font-bold sm:text-5xl md:text-6xl">
            <span>{introText}</span>
            <Cursor cursorColor="orange" cursorStyle="_"/>
        </h1>
    );
};


export default Hero;
export type { IntroFacts };
