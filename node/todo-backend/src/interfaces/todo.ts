export type ITask = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type IUpdateTodo = {
  title?: string;
  isCompleted?: boolean;
};

export type IGetTodoQuery = {
  search?: string;
  status?: "completed" | "remaining";
};
