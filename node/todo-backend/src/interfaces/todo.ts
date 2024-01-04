export type ITask = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type IUpdateTodo = {
  title?: string;
  isCompleted?: boolean;
};

export interface IGetTodoQuery {
  search?: string;
  status?: "completed" | "remaining";
  page?: number;
  size?: number;
}

export interface IPaginationTodo extends IGetTodoQuery {
  limit: number;
  offset: number;
}
