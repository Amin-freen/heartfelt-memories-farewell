import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface MediaViewerProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  item: {
    type: 'image' | 'video';
    src: string;
    caption: string;
  } | null;
}

const MediaViewer: React.FC<MediaViewerProps> = ({ isOpen, onClose, item }) => {
  if (!item) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] bg-dark-primary border-highlight-purple/30">
        <DialogHeader>
          <DialogTitle className="text-highlight-pink">Memory</DialogTitle>
          {/* Caption removed as requested */}
        </DialogHeader>
        
        <div className="flex items-center justify-center max-h-[70vh]">
          {item.type === 'image' ? (
            <img 
              src={item.src}
              alt={item.caption}
              className="max-h-full max-w-full object-contain rounded-md shadow-lg"
            />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <video 
                src={item.src}
                controls
                autoPlay
                className="max-h-[60vh] max-w-full rounded-md shadow-lg"
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaViewer;