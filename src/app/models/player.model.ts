// src/app/models/player.model.ts
export interface Player {
    name: string;
    position: string;
    image: string; // Chemin vers l'image du joueur
    matchesPlayed: number; // Nombre de matchs joués
    goalsScored: number; // Nombre de buts marqués
    assists: number; // Nombre d'assists
    yellowCards: number; // Nombre de cartons jaunes
    redCards: number; // Nombre de cartons rouges
  }
  