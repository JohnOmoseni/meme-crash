import { Injectable, OnModuleInit } from '@nestjs/common';
import { AceBaseClient } from 'acebase-client';

@Injectable()
export class AcebaseService implements OnModuleInit {
  db: AceBaseClient;
  constructor() {
    this.db = new AceBaseClient({
      host: '0.0.0.0',
      port: 443,
      dbname: 'mydb',
      https: false,
    });
  }
  async onModuleInit() {
    await this.startDb()
      .then((res) => {
        console.log(' THIS DB HAS STARTED ');
      })
      .catch((err) => console.log(err));
  }
  async startDb() {
    await this.db.ready();
    return await this.db.auth.signIn('admin', 'e5zpjHDy%kj#4HHT');
  }

  private getDBRootRef = () => this.db.root;

  private getDBRef = (path: string) => this.db.ref(path);

  async readData(path: string) {
    const dbRef = await this.getDBRef(path);
    return dbRef.get();
  }

  async writeData(path: string, data: {}) {
    const dbRef = this.getDBRef(path);
    return dbRef.set(data);
  }

  async updateData(path: string, updates: {}) {
    const dbRef = this.getDBRef(path);
    const update = dbRef.update(updates);
    return update;
  }

  async increment(path: string, count: number, allowNegative = false) {
    const ref = this.getDBRef(path);
    return ref.transaction((snapshot) => {
      if (!snapshot.exists()) return count;

      let currentVal = snapshot.val() | 0;
      currentVal += count;
      if (currentVal < 0 && !allowNegative) currentVal = 0;

      return currentVal;
    });
  }

  async deleteData(path: string) {
    return this.getDBRef(path).remove();
  }

  async createDataIfNotExists(path: string, object: {}, cb: Function) {
    const data = await this.readData(path);
    if (!data.exists()) {
      await this.writeData(path, object);
      await cb?.();
      return true;
    } else {
      throw new Error('Data Already Exists');
    }
  }
}
