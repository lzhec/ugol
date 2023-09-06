import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { leftMenuData, paramsForGettingApartments } from '../../modules/left-menu/left-menu.types';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public getListComplexes() {
    return this.http.get(
      'https://api.living.ru/partner-api/complex?cityIds=77,78&realtyType=RESALE',
    );
  }

  public getListApartments(id: string, payload: paramsForGettingApartments) {
    return this.http.post(`https://api.living.ru/partner-api/complex/${id}/apartment`, payload);
  }

  public getListApartmentLayout(id: string) {
    return this.http.post(`https://api.living.ru/partner-api/complex/${id}/planning`, {
      observe: 'response',
    });
  }

  public sendApartmentSettings(params: any) {
    return this.http.post('/api//v2/client/configurator/save-params', params);
  }

  public getLeftPanelData(): Observable<leftMenuData> {
    return this.http.get<leftMenuData>('/api/v2/client/configurator/get-side');
  }
}
