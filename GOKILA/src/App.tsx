import React from 'react';
import { WelcomeSection } from './components/WelcomeSection';
import { MemoriesSection } from './components/MemoriesSection';
import { MessageSection } from './components/MessageSection';
import { FloatingElements } from './components/FloatingElements';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative">
      <FloatingElements />
      
      <WelcomeSection onScrollToMemories={() => scrollToSection('memories')} />
      
      <div id="memories">
        <MemoriesSection />
      </div>
      
      <div id="message">
        <MessageSection />
      </div>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8 text-center">
        <div className="font-poppins">
          <p className="text-lg opacity-80">❤️❤️MY GIRL BIRTHDAY❤️❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;