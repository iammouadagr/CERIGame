import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private httpClient: HttpClient) { }

  getAllThemes(): any {
    return this.httpClient.get(`${environment.apiUrl}/quizz/themes`)

  }

  getQuestionsBytheme(theme: string, page: number): any {
    return this.httpClient.get(`${environment.apiUrl}/quizz/${theme}?page=${page}`)
  }


  submitRound(data: any): any {
    return this.httpClient.post(`${environment.apiUrl}/quizz/submitRound`, data)
  }

  getHistory(userId: number): any {
    return this.httpClient.get(`${environment.apiUrl}/quizz/history/${userId}`)
  }

  getOverallRanking(): any {
    return this.httpClient.get(`${environment.apiUrl}/quizz/top10Overall`)
  }

  getSingleRoundRanking(): any {
    return this.httpClient.get(`${environment.apiUrl}/quizz/top10SingleRound`)
  }

}
