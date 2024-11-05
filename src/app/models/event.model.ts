import { Player } from "./player.model";

// src/app/models/event.model.ts
export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;

  type?: string;

  }
  export interface Match {
    id: number;
    location: string;
    venue: string;
    date: string;
    time: string;
    team1: Player[];
    team2: Player[];
  }
