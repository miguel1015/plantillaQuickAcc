interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
    gender: string;
  }
  
interface CharacterModalProps {
    character: Character | null;
    isOpen: boolean;
    onClose: () => void;
  }