
import React, { useState, useEffect } from 'react';
import MediaViewer from './MediaViewer';
import { motion } from 'framer-motion';
import { Image, Video } from 'lucide-react';
import MediaItem from './MediaItem';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  caption: string;
}

const allMediaItems: MediaItem[] = [
  // Add your own images and videos here!
  // 1. Place your files in the `public/lovable-uploads` folder.
  // 2. Add a new object below for each file, like this example:
  /*
  {
    type: 'image', // or 'video'
    src: '/lovable-uploads/your-image-filename.jpg', // Make sure the path starts with /lovable-uploads/
    caption: 'Your descriptive caption here'
  },
  */
  { type: 'image', src: '/lovable-uploads/62c07d66-ce05-4a49-b709-cff542eb5c4d.JPG', caption: 'Candid moments - Capturing genuine smiles' },
  { type: 'image', src: '/lovable-uploads/72586672-6b60-466a-b2d1-c032c86609bd.png', caption: 'Digital art - Creative expressions of our friendship' },
  { type: 'image', src: '/lovable-uploads/IMG_3284.JPG', caption: 'Special moments captured during our college days' },
  { type: 'image', src: '/lovable-uploads/IMG_5027.JPG', caption: 'Unforgettable memories with amazing friends' },
  { type: 'image', src: '/lovable-uploads/IMG_5029.JPG', caption: 'Celebrating our achievements together' },
  { type: 'image', src: '/lovable-uploads/IMG_5037.JPG', caption: 'The bonds we formed will last forever' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 1.29.06 PM.jpeg', caption: 'Class of CSE-A - Together we made memories that will last a lifetime' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 1.29.07 PM.jpeg', caption: 'Our last class day - The beginning of a new chapter' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 1.29.17 PM.jpeg', caption: 'Friday memories - The small moments that brought us together' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 1.30.43 PM.jpeg', caption: 'Sunshine and smiles - Friends who made every day brighter' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.09.03 PM.jpeg', caption: 'Girl squad that got me through everything' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.09.04 PM (1).jpeg', caption: 'Under the shade - Where conversations flowed and friendships grew' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.09.04 PM (2).jpeg', caption: 'Friends who became family - The perfect team' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.09.04 PM.jpeg', caption: 'Friday vibes - Moments of joy between classes' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.09.05 PM (1).jpeg', caption: 'Engineering squad - Together we conquered it all' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.09.05 PM.jpeg', caption: 'The wedding celebration - Days spent well with friends' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.09.12 PM.jpeg', caption: 'The after-class gatherings - Where memories were made' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.09.16 PM.jpeg', caption: 'Our college ID cards - The start of our journey' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.09.32 PM.jpeg', caption: 'Winter adventure - Exploring new places together' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.09.38 PM.jpeg', caption: 'CSE-A gang - The laughter we shared will echo forever' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.17 PM.jpeg', caption: 'Campus adventures - Creating memories in every corner' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.18 PM (1).jpeg', caption: 'Classroom shenanigans - Where education met entertainment' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.18 PM (2).jpeg', caption: 'Project partners - Turning challenges into triumphs' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.18 PM.jpeg', caption: 'Study buddies - The ones who made learning fun' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.19 PM (1).jpeg', caption: 'Lab partners - Experimenting with friendship and science' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.19 PM.jpeg', caption: 'Coffee breaks - Where the best conversations happened' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.20 PM (2).jpeg', caption: 'Celebration time - Marking milestones together' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.20 PM.jpeg', caption: 'Weekend hangouts - Making the most of our college years' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.23 PM (1).jpeg', caption: 'Campus walks - The paths we traveled together' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.23 PM (2).jpeg', caption: 'Lunch breaks - Sharing food and stories' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.23 PM.jpeg', caption: 'Library sessions - Where knowledge and friendship grew' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.10.25 PM.jpeg', caption: 'Exam season - Supporting each other through stress' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 2.19.02 PM.jpeg', caption: 'Graduation day - The culmination of our journey' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 3.51.24 PM.jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.00.32 PM.jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.00.38 PM.jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.00.44 PM (1).jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.00.44 PM (2).jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.00.44 PM.jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.00.45 PM (1).jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.00.45 PM.jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.03.18 PM.jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.03.41 PM.jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.04.01 PM.jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.04.18 PM.jpeg', caption: 'Add caption' },
  { type: 'image', src: '/lovable-uploads/WhatsApp Image 2025-04-28 at 4.05.39 PM.jpeg', caption: 'Add caption' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.09.12 PM.mp4', caption: 'Fun memories from our last day' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.09.16 PM.mp4', caption: 'Dance practice sessions 💃' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.09.21 PM.mp4', caption: 'Cultural fest performances 🎭' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.09.26 PM.mp4', caption: 'Classroom fun - Learning with laughter' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.09.31 PM.mp4', caption: 'Birthday celebrations in class 🎂' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.09.38 PM.mp4', caption: 'Group project presentations 📊' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.09.43 PM.mp4', caption: 'Campus tour with friends 🏫' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.09.44 PM (1).mp4', caption: 'Talent show performances - Hidden skills revealed' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.09.44 PM.mp4', caption: 'Impromptu dance sessions in the corridor' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.09.52 PM.mp4', caption: 'Lab experiment success celebrations 🧪' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.09.54 PM.mp4', caption: 'Weekend trip adventures 🚗' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.10.02 PM.mp4', caption: 'Singing sessions during breaks 🎵' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.10.05 PM.mp4', caption: 'Sports day competitions 🏆' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.10.16 PM.mp4', caption: 'Farewell party preparations 🎊' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.10.17 PM.mp4', caption: 'Surprise birthday celebration 🎉' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.10.25 PM.mp4', caption: 'Graduation day excitement 🎓' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.10.29 PM.mp4', caption: 'Last day emotional moments 💕' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.10.33 PM.mp4', caption: 'Group study sessions before exams 📚' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.10.37 PM.mp4', caption: 'College festival highlights 🎪' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.10.47 PM.mp4', caption: 'Classroom debates and discussions 💬' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.11.14 PM.mp4', caption: 'Farewell speech moments 🎤' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.11.59 PM.mp4', caption: 'Last day campus tour 🏫' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.12.00 PM.mp4', caption: 'Group photo sessions 📸' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 2.12.06 PM.mp4', caption: 'Final goodbyes and promises to stay in touch ❤️' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 4.00.38 PM.mp4', caption: 'Add caption' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 4.00.43 PM.mp4', caption: 'Add caption' },
  { type: 'video', src: '/lovable-uploads/WhatsApp Video 2025-04-28 at 4.07.30 PM.mp4', caption: 'Add caption' }
];

// Fisher-Yates (aka Knuth) Shuffle function
const shuffleArray = <T,>(array: T[]): T[] => {
  let currentIndex = array.length, randomIndex;
  const newArray = [...array]; // Create a copy to avoid mutating the original

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }

  return newArray;
};

const PhotoGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shuffledItems, setShuffledItems] = useState<MediaItem[]>([]);

  useEffect(() => {
    setShuffledItems(shuffleArray(allMediaItems));
  }, []); // Empty dependency array ensures this runs only once on mount

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
      {/* Main heading removed as requested */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shuffledItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <MediaItem 
              type={item.type}
              src={item.src}
              caption={item.caption}
              onClick={() => openModal(item)}
            />
          </motion.div>
        ))}
      </div>

      <MediaViewer 
        isOpen={isModalOpen} 
        onClose={setIsModalOpen} 
        item={selectedItem} 
      />
    </div>
  );
};

export default PhotoGallery;
