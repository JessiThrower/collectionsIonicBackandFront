import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Boardgame {
  _id: number;
  name: string;
  type: string;
  company: string;
  players: number;
  description: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  endpoint = 'http://localhost:8080/boardgame';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  httpOptionsUsingUrlEncoded = {
    headers: new HttpHeaders({ 'Content-type': "aplication/x-www-form-urlencoded"})
  };

  constructor(private httpClient: HttpClient) { }

  createBoardgame(boardgame: Boardgame): Observable<Boardgame> {
    console.log('create boardgame');
    console.log(JSON.stringify(boardgame));
    return this.httpClient.post<Boardgame>(this.endpoint, JSON.stringify(boardgame), this.httpOptions).pipe(
      catchError(this.handleError<Boardgame>('Error occured'))
    );
  }

  getBoardgame(_id): Observable<Boardgame[]>{
    return this.httpClient.get<Boardgame[]>(this.endpoint + '/' + _id).pipe(
      tap(_ => console.log('Boardgame fetched: ${_id}')), 
      catchError(this.handleError<Boardgame[]>('Get boardgame id=${id}'))
    )
  }

  getBoardGames(): Observable<Boardgame[]> {
    return this.httpClient.get<Boardgame[]>(this.endpoint).pipe(
      tap(boardgames => console.log('Boardgames retrieved!')),
      catchError(this.handleError<Boardgame[]>('Get boardgame', []))
    );
  }

  updateBoardgame(_id, boardgame: Boardgame): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + _id, JSON.stringify(boardgame), this.httpOptions).pipe(
      tap(_ => console.log('Boardgame updated: ${_id}')),
      catchError(this.handleError<Boardgame[]>('Update boardgame'))
    );
  }

  deleteBoardgame(_id): Observable<Boardgame[]> {
    return this.httpClient.delete<Boardgame[]>(this.endpoint + '/' + _id, this.httpOptions).pipe(
      tap(_ => console.log('Boardgame deleted: ${_id}')),
      catchError(this.handleError<Boardgame[]>('Delete boardgame'))
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
