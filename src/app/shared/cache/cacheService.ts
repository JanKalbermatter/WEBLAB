// import { Injectable } from "@angular/core";

export class CacheService<T> {
    private key: string
    constructor(key: string) {
        this.key = key
        this.setupCache(this.key);
    }

    private setupCache(key: string) {
        if(!this.get()) {
            this.set([])
        }
    }

    get(): T[] {
        return JSON.parse(localStorage.getItem(this.key))
    }
    
    put(value: T) {
        let current = this.get()
        current.push(value);
        localStorage.setItem(this.key, JSON.stringify(current));
    }

    set(value: T[]) {
        localStorage.setItem(this.key, JSON.stringify(value));
    }

    clear() {
        localStorage.setItem(this.key, JSON.stringify([]));
    }
}