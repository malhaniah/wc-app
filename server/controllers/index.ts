import { Request, response, Response } from "express";
import axios from "axios";

export async function getStandings(request: Request, response: Response) {
   const standings = await fetch('https://api.football-data.org/v4/competitions/2000/standings', {
        headers: {
            'X-Auth-Token': process.env.API_KEY as string
        }
        
    })

     response.send(await standings.json());
}