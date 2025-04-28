import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from 'framer-motion';
import { Gallery, Video } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  caption: string;
}

const mediaItems: MediaItem[] = [
  {
    src: 'public/lovable-uploads/0436f1a2-579b-46f4-8ad1-c787ed03a807.png',
    caption: 'Class of CSE-A - Together we made memories that will last a lifetime'
  },
  {
    src: 'public/lovable-uploads/4a480831-4938-4686-9f2e-379ac37b323a.png',
    caption: 'Our last class day - The beginning of a new chapter'
  },
  {
    src: 'public/lovable-uploads/4b15ffa6-3d89-419d-bdd8-f1f9e65e0f72.png',
    caption: 'Friday memories - The small moments that brought us together'
  },
  {
    src: 'public/lovable-uploads/6ffacf86-0390-4565-8235-7b9638a41dc0.png',
    caption: 'Sunshine and smiles - Friends who made every day brighter'
  },
  {
    src: 'public/lovable-uploads/948d3024-8061-4d70-b9a7-123d8c9a5da4.png',
    caption: 'Girl squad that got me through everything'
  },
  {
    src: 'public/lovable-uploads/ab24688f-33a1-4768-95b2-e43a2b40e907.png',
    caption: 'Friday vibes - Moments of joy between classes'
  },
  {
    src: 'public/lovable-uploads/8350ebb3-3136-4b89-b6f2-27589cb6bdc7.png',
    caption: 'Under the shade - Where conversations flowed and friendships grew'
  },
  {
    src: 'public/lovable-uploads/191921eb-876c-4f19-923e-318be81e8096.png',
    caption: 'Friends who became family - The perfect team'
  },
  {
    src: 'public/lovable-uploads/982d2d88-3f85-497a-9988-336733f520fe.png',
    caption: 'The wedding celebration - Days spent well with friends'
  },
  {
    src: 'public/lovable-uploads/9c466272-e2b2-497b-a458-0e6d1d87cdf2.png',
    caption: 'Engineering squad - Together we conquered it all'
  },
  {
    src: 'public/lovable-uploads/9955a582-e4d1-448e-87cb-4adfd54ff59c.png',
    caption: 'The after-class gatherings - Where memories were made'
  },
  {
    src: 'public/lovable-uploads/0ef15bb7-f37f-416f-a698-71d06ba3b840.png',
    caption: 'Our college ID cards - The start of our journey'
  },
  {
    src: 'public/lovable-uploads/a3219834-966b-48b0-8637-f093771f2f22.png',
    caption: 'Winter adventure - Exploring new places together'
  },
  {
    src: 'public/lovable-uploads/f2862979-399c-4a38-ba69-775ab5d65da6.png',
    caption: 'CSE-A gang - The laughter we shared will echo forever'
  },
  {
    type: 'video',
    src: 'path_to_your_video.mp4',
    caption: 'Fun memories from our last day'
  }
];

const PhotoGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: MediaItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        className="text-3xl md:text-4xl font-serif text-center mb-10 text-glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Memories Together
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mediaItems.map((item, index) => (
          <motion.div 
            key={index}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => openModal(item)}
          >
            {item.type === 'image' ? (
              <img 
                src={item.src} 
                alt={`Memory ${index + 1}`} 
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="relative w-full h-full bg-dark-charcoal flex items-center justify-center">
                <Video className="w-12 h-12 text-white/70" />
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm truncate">{item.caption}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] bg-dark-primary border-highlight-purple/30">
          <DialogHeader>
            <DialogTitle className="text-highlight-pink">Memory</DialogTitle>
            <DialogDescription>
              {selectedItem?.caption}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex items-center justify-center max-h-[70vh]">
            {selectedItem?.type === 'image' ? (
              <img 
                src={selectedItem.src}
                alt="Selected memory"
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <video 
                src={selectedItem?.src}
                controls
                className="max-h-full max-w-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoGallery;
