export type StandingsResponseTypes = {
  standings: [
    {
      stage: string;
      type: string;
      group: string;
      table: [
        {
          position: number;
          team: {
            id: number;
            name: string;
            crest: string;
          };
          playedGames: number;
          won: number;
          draw: number;
          lost: number;
          points: number;
        }
      ];
    }
  ];
};
