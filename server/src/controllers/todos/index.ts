import { Response, Request } from "express";
import { ITodo } from "../../types/todo";
import Todo from "../../models/todo";

// 获取todo list
export const getTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find(); // 获取 Todo 数据
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

export const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">;

    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });

    const newTodo: ITodo = await todo.save(); // 新建1项
    const allTodo: ITodo[] = await Todo.find(); // 数据库查找

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodo });
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allTodo: ITodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo,
      todos: allTodo,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
      { _id: id },
      body
    );
    const allTodo: ITodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo delete",
      todo: deletedTodo,
      todos: allTodo,
    });
  } catch (error) {
    throw error;
  }
}
