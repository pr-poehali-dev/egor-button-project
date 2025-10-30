import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showImage, setShowImage] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('https://cdn.poehali.dev/files/5bea698f-f777-431b-a784-60af35d4cd0f.png');
  const backgrounds = [
    'https://cdn.poehali.dev/files/5bea698f-f777-431b-a784-60af35d4cd0f.png',
    'https://cdn.poehali.dev/files/3cc44705-9cee-4844-9523-bad77b6de370.png',
    'https://cdn.poehali.dev/files/3f4c87d4-25d0-4429-b072-cd832b01f18a.png'
  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://cdn.poehali.dev/audio/rumbling.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleBackground = () => {
    setBackgroundImage(prev => 
      prev === 'https://cdn.poehali.dev/files/5bea698f-f777-431b-a784-60af35d4cd0f.png' 
        ? 'https://cdn.poehali.dev/files/3cc44705-9cee-4844-9523-bad77b6de370.png'
        : 'https://cdn.poehali.dev/files/5bea698f-f777-431b-a784-60af35d4cd0f.png'
    );
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-4 relative transition-all duration-500"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <Button
        onClick={toggleMusic}
        size="icon"
        className="absolute top-4 right-4 z-20 rounded-full bg-white/90 text-black hover:bg-white shadow-lg"
      >
        <Icon name={isPlaying ? "Volume2" : "VolumeX"} size={20} />
      </Button>

      <div className="text-center space-y-8 relative z-10">
        <div className="flex flex-wrap gap-4 justify-center">
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

          <Button 
            onClick={() => setShowImage(showImage === 'surprise' ? null : 'surprise')}
            size="lg"
            className="text-xl px-12 py-6 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            опа а тут кто
          </Button>

          <Button 
            onClick={() => {
              toggleBackground();
              setShowImage(showImage === 'svin' ? null : 'svin');
            }}
            size="lg"
            className="text-xl px-12 py-6 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            svin jirni
          </Button>

          <Button 
            onClick={() => {
              setShowImage(showImage === 'chin' ? null : 'chin');
              setBackgroundImage('https://cdn.poehali.dev/files/3f4c87d4-25d0-4429-b072-cd832b01f18a.png');
            }}
            size="lg"
            className="text-3xl px-20 py-10 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-3xl font-black"
          >
            ТРИ ПОДБОРОДКА
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

        {showImage === 'surprise' && (
          <div className="animate-in fade-in zoom-in duration-500">
            <img 
              src="https://cdn.poehali.dev/files/6b225bad-3674-4ce9-8ced-4034618ce45d.png"
              alt="опа а тут кто"
              className="max-w-md w-full rounded-2xl shadow-2xl mx-auto"
            />
          </div>
        )}

        {showImage === 'svin' && (
          <div className="animate-in fade-in zoom-in duration-500">
            <img 
              src="https://cdn.poehali.dev/files/4facb3ad-033d-41dc-8a5a-5575fa673977.png"
              alt="svin jirni"
              className="max-w-md w-full rounded-2xl shadow-2xl mx-auto"
            />
          </div>
        )}

        {showImage === 'chin' && (
          <div className="animate-in fade-in zoom-in duration-500">
            <img 
              src="https://cdn.poehali.dev/files/2ca0b3b6-b9aa-4252-a2ca-8c3e822ff184.png"
              alt="три подбородка"
              className="max-w-md w-full rounded-2xl shadow-2xl mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;