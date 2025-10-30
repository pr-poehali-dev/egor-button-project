import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center space-y-8">
        <Button 
          onClick={() => setShowImage(!showImage)}
          size="lg"
          className="text-xl px-12 py-6 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
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