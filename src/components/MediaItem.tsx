import React from 'react';
import { Video } from 'lucide-react';

interface MediaItemProps {
  type: 'image' | 'video';
  src: string;
  caption: string;
  onClick: () => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ type, src, caption, onClick }) => {
  return (
    <div 
      className="aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg group relative"
      onClick={onClick}
    >
      {type === 'image' ? (
        <img 
          src={src} 
          alt={caption} 
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <div className="relative w-full h-full bg-dark-charcoal flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
            <div className="w-16 h-16 rounded-full bg-highlight-pink/80 flex items-center justify-center transform transition-transform group-hover:scale-110">
              <Video className="w-8 h-8 text-white" />
            </div>
          </div>
          <video 
            src={src}
            className="w-full h-full object-cover"
            muted
          />
        </div>
      )}
      {/* Caption overlay removed as requested */}
    </div>
  );
};

export default MediaItem;