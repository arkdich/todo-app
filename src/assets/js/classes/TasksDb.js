import Dexie from 'dexie';

class TaskStorage {
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

  getTasks(date) {
    return this._tasksDb.tasks.where({ date }).toArray();
  }

  deleteTask(id) {
    this._tasksDb.tasks.delete(id);
  }
}

const taskStorage = new TaskStorage();

export default taskStorage;
