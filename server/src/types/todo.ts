import { Document } from "mongoose"

// 基础的文本格式
export interface ITodo extends Document {
  name: string
  description: string
  status: boolean
}

export interface TodoItem extends Document {
  name: string,
  description: string,
  arr: string[]
}
