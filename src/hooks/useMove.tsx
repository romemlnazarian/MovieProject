import { useEffect, useState } from 'react';
import data from '../MockData.json';

interface MovieItem {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl: string;
  Description: string;
}

interface UseMoveResult {
    showItem:MovieItem | undefined,
  currentItem: MovieItem;
  setShowItem: React.Dispatch<React.SetStateAction<MovieItem | undefined>>;
  filteredItems: MovieItem[];
  playVideo: boolean;
  handleBack: () => void;
  formatDuration: (seconds: string) => string;
  handleChange: () => void;
}

export const useMove = (props: { label: string }): UseMoveResult => {
  const [showItem, setShowItem] = useState<MovieItem | undefined>(undefined);
  const [filteredItems, setFilteredItems] = useState<MovieItem[]>([]);
  const [playVideo, setPlayVideo] = useState(false);

  const handleChange = () => {
    setTimeout(() => {
      if (showItem) {
        sessionStorage.setItem('lastSeenId', showItem.Id);
        console.log('Saved to session:', showItem.Id);
      }
      setPlayVideo(true);
    }, 2000);
  };

  useEffect(() => {
    let items: MovieItem[] = [];

    if (props.label === 'Home') {
      items = [...(data.TendingNow as MovieItem[])];
    } else {
      items = (data.TendingNow as MovieItem[]).filter(
        (item) => item.Category === props.label.slice(0, -1)
      );
    }

    const lastSeenId = sessionStorage.getItem('lastSeenId');
    if (lastSeenId) {
      const lastSeenItemIndex = items.findIndex((item) => item.Id === lastSeenId);
      if (lastSeenItemIndex !== -1) {
        const [lastSeenItem] = items.splice(lastSeenItemIndex, 1);
        items.unshift(lastSeenItem);
      }
    }

    setFilteredItems(items);
  }, [props.label]);

  const handleBack = () => {
    setPlayVideo(false);
  };

  const formatDuration = (seconds: string): string => {
    const totalMinutes = Math.floor(Number(seconds) / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  const currentItem: MovieItem =
    showItem ??data.Featured 

  return {
    currentItem,
    setShowItem,
    filteredItems,
    playVideo,
    handleBack,
    formatDuration,
    handleChange,
    showItem
  };
};
