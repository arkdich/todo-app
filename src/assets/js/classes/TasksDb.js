import Dexie from 'dexie';

export default class TaskStorage {
  #tasksDb = new Dexie('TasksDb');

  constructor() {
    this.#tasksDb.version(1).stores({
      tasks: '++id, date, value, isDone',
    });
  }

  storeTask(task) {
    this.#tasksDb.tasks.put(task);
  }

  updateTask(id, changes) {
    this.#tasksDb.tasks.update(id, changes);
  }

  async getTasks(date) {
    return await this.#tasksDb.tasks.where({ date }).toArray();
  }
}
