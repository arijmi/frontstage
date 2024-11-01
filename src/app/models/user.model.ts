
  
  export interface UserProfile {
    id: number;
    avatarUrl:string;
    name: string;
    email: string;
    phone?: string;
    matches: Match[];
    ratings: Rating[];
    totalMatches: number; // Ajouté ici
    wins: number; // Ajouté ici
    losses: number; // Ajouté ici
  }
  export interface Match {
    id: number;
    title: string;
    date: string;
    location: string;
  }
  
  export interface Rating {
    matchId: number;
    rating: number;
    comment: string;
  }