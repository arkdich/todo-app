import Dexie from 'dexie';

export default class TaskStorage {
  _tasksDb = new Dexie('TasksDb');

  constructor() {
    this._tasksDb.version(1).stores({
      tasks: '++id, date, value, isDone',
    });
  }

  storeTask(task) {
    return this._tasksDb.tasks.put(task);
  }

  updateTask(id, changes) {
    this._tasksDb.tasks.update(id, changes);
  }

  async getTasks(date) {
    return await this._tasksDb.tasks.where({ date }).toArray();
  }
}
