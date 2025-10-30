import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/files/5bea698f-f777-431b-a784-60af35d4cd0f.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="text-center space-y-8 relative z-10">
        <Button 
          onClick={() => setShowImage(!showImage)}
          size="lg"
          className="text-xl px-12 py-6 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Егор
        </Button>

        {showImage && (
          <div className="animate-in fade-in zoom-in duration-500">
            <img 
              src="https://cdn.poehali.dev/files/fd4f526a-ce53-4c12-91e8-13e6a4efedf1.png"
              alt="Егор"
              className="max-w-md w-full rounded-2xl shadow-2xl mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;