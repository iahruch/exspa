import {Injectable} from "@angular/core";

@Injectable()
export class PersistanceService {
  set(key: string, data: any){
    try {
      localStorage.setItem(key, JSON.stringify(data))
    }catch (e) {
      console.log(`Error save to local storage ${e.message}`)
    }
  }

  get(key: string): any{
    try {
      return JSON.parse(localStorage.getItem(key))
    }catch (e) {
      console.log(`Error get date from localstorage ${e.message}`)
    }
  }

}
