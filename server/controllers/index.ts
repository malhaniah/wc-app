import { Request, response, Response } from "express";
import axios from "axios";

export async function getStandings(request: Request, response: Response) {
   const standings = await fetch('https://api.football-data.org/v4/competitions/2000/standings', {
        headers: {
            'X-Auth-Token': 'e96f4d26094f49e98966f2c9753a29dc'
        }
        
    })

     response.send(await standings.json());
}