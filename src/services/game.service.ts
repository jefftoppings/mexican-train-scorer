import { Injectable } from '@angular/core';

export interface Game {
  players: string[];
  scores: Map<string, number>;
  totalRounds: number;
  currentRound: number;
}

const LOCAL_STORAGE_KEY = 'mexican_train_scorer';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  game!: Game;

  constructor() {
    this.fetchGameFromLocalStorage();
  }

  private fetchGameFromLocalStorage(): void {
    const gameString: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
    this.game = gameString ? JSON.parse(gameString) : null;
  }

  saveGame(g: Game): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(g));
    this.game = g;
  }

  getGame(): Game {
    return this.game;
  }

  newGame(players: string[], totalRounds: number): Game {
    return {
      players,
      totalRounds,
      currentRound: 0,
      scores: new Map<string, number>(
        players.map((p) => {
          return [p, 0];
        })
      ),
    };
  }
}
