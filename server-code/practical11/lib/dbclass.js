import { v4 as uuidv4 } from "uuid"

export class Collection {

  constructor() {
    this.datas = []
  }

  insert(data) {
    const newData = {
      _id: uuidv4(),
      ...data
    }
    this.datas.push(newData)
    return newData
  }

  findMany() {
    return this.datas
  }

  findById(id) {
    return this.datas.filter((e) => e._id === id)
  }

  delete(id) {
    this.datas = this.datas.filter((e) => e._id !== id)
    return true
  }

  update(id, data) {
    this.delete(id)
    const newData = this.insert(data)
    return newData
  }
}
