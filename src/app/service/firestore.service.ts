import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Util } from '../app.variables';

export abstract class FirestoreService<T> {
  protected collection: string;

  protected constructor(protected firestore: AngularFirestore) {
  }

  generateId(): string {
    return this.firestore.collection<T>(this.collection).doc().ref.id;
  }

  getById(id: string): Observable<T> {
    return this.firestore.collection<T>(this.collection).doc(id).get().pipe(map(doc => {
      return this.format({ id: doc.id, ...doc.data() });
    }));
  }

  findAll(): Observable<T[]> {
    return this.firestore.collection<T>(this.collection).get().pipe(map(coll => {
      return coll.docs.map(doc => {
        return this.format({ id: doc.id, ...doc.data() });
      });
    }));
  }

  findByField(field: string, value: any): Observable<T[]> {
    return from(this.firestore.collection<T>(this.collection).ref.where(field, '==', value).get()).pipe(map(coll => {
      return coll.docs.map(doc => {
        return this.format({ id: doc.id, ...doc.data() });
      });
    }));
  }

  create(item: T): Observable<void> {
    const id = this.firestore.collection<T>(this.collection).doc().ref.id;
    return this.createById(id, item);
  }

  createById(id: string, item: T): Observable<void> {
    item['createdBy'] = Util.ADMIN;
    item['createdDate'] = new Date();
    item['updatedBy'] = Util.ADMIN;
    item['updatedDate'] = new Date();
    return from(this.firestore.collection<T>(this.collection).doc(id).set({ ...item }));
  }

  update(item: T): Observable<void> {
    const id = item['id'];
    return this.updateById(id, item);
  }

  updateById(id: string, item: T): Observable<void> {
    item['updatedBy'] = Util.ADMIN;
    item['updatedDate'] = new Date();
    return from(this.firestore.collection<T>(this.collection).doc(id).set({ ...item }));
  }

  delete(item: T): Observable<void> {
    const id = item['id'];
    return this.deleteById(id);
  }

  deleteById(id: string): Observable<void> {
    return from(this.firestore.collection<T>(this.collection).doc(id).delete());
  }

  private format(item: T): T {
    for (const prop in item) {
      if (typeof (item[prop] as any)?.toDate === "function") {
        item[prop] = (item[prop] as any).toDate();
      }
    }
    return item;
  }
}
