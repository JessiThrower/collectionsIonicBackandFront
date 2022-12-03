import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Boardgame } from '../model/boardgame';

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-type': "application/x-www-form-urlencoded"})
};

@Injectable({
  providedIn: 'root'
})

export class BoardgameService {

  endpoint = 'http://localhost:8080/boardgame';
 

  constructor(private httpClient: HttpClient) { }

  createBoardgame(boardgame: Boardgame): Observable<any> {
    console.log('create boardgame');
    console.log(JSON.stringify(boardgame));

    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", boardgame.name);
    bodyEncoded.append("type", boardgame.type);
    bodyEncoded.append("company", boardgame.company);
    bodyEncoded.append("players", boardgame.players.toString());
    bodyEncoded.append("description", boardgame.description);
    bodyEncoded.append("year", boardgame.year.toString());
    
    
    return this.httpClient.post<Boardgame>(this.endpoint, bodyEncoded, httpOptionsUsingUrlEncoded).pipe(
      catchError(this.handleError<Boardgame>('Error occured'))
    );
  }

  getBoardgame(id: number): Observable<Boardgame>{
    return this.httpClient.get<Boardgame>(this.endpoint + '/' + id).pipe(
      tap(_ => console.log('Boardgame fetched: ${id}')), 
      catchError(this.handleError<Boardgame>('Get boardgame id=${id}'))
    );
  }

  getBoardGames(): Observable<Boardgame[]> {
    return this.httpClient.get<Boardgame[]>(this.endpoint).pipe(
      tap(boardgames => console.log('Boardgames retrieved!')),
      catchError(this.handleError<Boardgame[]>('Get boardgame', []))
    );
  }

  updateBoardgame(id: number, boardgame: Boardgame): Observable<any> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("id", id.toString());
    bodyEncoded.append("name", boardgame.name);
    bodyEncoded.append("type", boardgame.type);
    bodyEncoded.append("company", boardgame.company);
    bodyEncoded.append("players", boardgame.players.toString());
    bodyEncoded.append("description", boardgame.description);
    bodyEncoded.append("year", boardgame.year.toString());
    

    return this.httpClient.put(this.endpoint + '/' + id, bodyEncoded, httpOptionsUsingUrlEncoded).pipe(
      tap(_ => console.log('Boardgame updated: ${id}')),
      catchError(this.handleError<any>('Update boardgame'))
    );
  }

  deleteBoardgame(id: number): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/' + id).pipe(
      tap(_ => console.log('Boardgame deleted: ${id}')),
      catchError(this.handleError<any>('Delete boardgame'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

}
