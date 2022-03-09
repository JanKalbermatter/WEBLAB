
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot, setDoc, getDoc } from 'firebase/firestore'
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createSemanticDiagnosticsBuilderProgram } from 'typescript';
import { UserInfo } from '../entities/userInfo';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: Firestore;
  userCol: CollectionReference<DocumentData>;
  private userInfo;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsvSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    initializeApp(environment.firebaseConfig);
    this.db = getFirestore();
    this.userCol = collection(this.db, 'userInfo');

    // Get Realtime Data
    onSnapshot(this.userCol, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    })
  }

  async getUserInfo(key: string): Promise<object> {
    const docRef = doc(this.db, 'userInfo', key)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
      return docSnap.data()
    }
  }

  async createUserInfo(key: string, userInfo: UserInfo) {
    const docRef = doc(this.db, 'userInfo', key)
    await setDoc(docRef, userInfo);
  }

  async removeUserInfo(key: string) {
    const docRef = doc(this.db, 'userInfo', key);
    await deleteDoc(docRef)
  }
  
  async udpateUserInfo(key: string, userInfo: UserInfo) {
    const docRef = doc(this.db, 'userInfo', key)
    await setDoc(docRef, userInfo);
  }

  async addSummoner(key: string, summoner: string, profilePictureId: string) {
    this.getUserInfo(key).then(async (userInfo: UserInfo)  => {
      console.log('Achtung hier: ', userInfo)
      if(!userInfo) {
        await this.createUserInfo(key, {summoners: [{profilePictureId, name: summoner}]})
      } else {
        userInfo.summoners.forEach(summonerData => {
          if(summonerData.name.toLowerCase() === summoner.toLowerCase()) {
            return;
          }
        })

        userInfo.summoners.push({profilePictureId, name: summoner})
        await this.udpateUserInfo(key, userInfo)
      }
    })
  }

  async removeSummoner(key:string, summoner: string) {
    this.getUserInfo(key).then((userInfo: UserInfo) => {
      const newSummoners = userInfo.summoners.filter(summonerData => {
        return summonerData.name.toLowerCase() !== summoner.toLowerCase()
      })
      this.udpateUserInfo(key, {summoners: newSummoners})
    })
  }
}
