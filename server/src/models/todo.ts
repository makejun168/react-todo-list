import { ITodo } from "../types/todo";
import { model, Schema } from "mongoose";

// 定义数据库表
const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

// 创建一个类型库定义 todo list 的数据类型。

export default model<ITodo>("Todo", todoSchema);