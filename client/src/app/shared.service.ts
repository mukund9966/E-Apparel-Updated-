// shared.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userName = '';

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName() {
    return this.userName;
  }
}
