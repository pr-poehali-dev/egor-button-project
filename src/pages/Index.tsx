import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showImage, setShowImage] = useState<string | null>(null);

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
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => setShowImage(showImage === 'egor' ? null : 'egor')}
            size="lg"
            className="text-xl px-12 py-6 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Егор
          </Button>

          <Button 
            onClick={() => setShowImage(showImage === 'yan' ? null : 'yan')}
            size="lg"
            className="text-xl px-12 py-6 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ян
          </Button>
        </div>

        {showImage === 'egor' && (
          <div className="animate-in fade-in zoom-in duration-500">
            <img 
              src="https://cdn.poehali.dev/files/fd4f526a-ce53-4c12-91e8-13e6a4efedf1.png"
              alt="Егор"
              className="max-w-md w-full rounded-2xl shadow-2xl mx-auto"
            />
          </div>
        )}

        {showImage === 'yan' && (
          <div className="animate-in fade-in zoom-in duration-500">
            <img 
              src="https://cdn.poehali.dev/files/38f20bc0-c61d-4c77-bca9-c65a5eba8146.png"
              alt="Ян"
              className="max-w-md w-full rounded-2xl shadow-2xl mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;