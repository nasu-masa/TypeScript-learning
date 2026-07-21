{
  // 例題(Partial, Omit)
  interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    createAt: Date;
  }

  // type UpdateUserData = Partial<Omit<User, "id" | "createAt">>;
  type UserData = Omit<User, "id" | "createAt">;

  const updateUserData: Partial<UserData> = {
    name: "Taro",
    email: "taro@example.com",
  };

  console.log(updateUserData);

  // その他 Utility Types

  // Readonly<T>
  // すべてのプロパティを読み取り専用にする

  interface ReadonlyUser {
    id: number;
    name: string;
  }

  const readonlyUser: Readonly<ReadonlyUser> = {
    id: 1,
    name: "Taro",
  };

  // readonlyUser.name = "Jiro"; // エラー：変更できない

  // Required<T>
  // すべてのオプショナルなプロパティを必須にする

  interface FormData {
    name?: string;
    email?: string;
  }

  type CompleteFormData = Required<FormData>;

  const completeFormData: CompleteFormData = {
    name: "Taro",
    email: "taro@example.com",
  };

  // ReturnType<T>
  // 関数の戻り値から型を作る

  function createUser() {
    return {
      id: 1,
      name: "Taro",
    };
  }

  type CreatedUser = ReturnType<typeof createUser>;

  const createdUser: CreatedUser = {
    id: 2,
    name: "Jiro",
  };

  console.log(readonlyUser);
  console.log(completeFormData);
  console.log(createdUser);
}
// ハンズオン
{
  // 基準となる型
  interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
  }

  // 1. Pick
  type TodoPreview = Pick<Todo, "id" | "title" | "completed">;

  const todoPreview: TodoPreview = {
    id: 1,
    title: "選択する",
    completed: true,
  };

  console.log("TodoPreview:", todoPreview);

  // 2. Omit
  type TodoCreation = Omit<Todo, "id" | "createdAt">;

  const todoCreation: TodoCreation = {
    title: "お買い物",
    description: "ネギを1本買う",
    completed: true,
  };

  console.log("\nTodoCreation:", todoCreation);

  // 3. Partial & Omit
  type TodoUpdate = Partial<Omit<Todo, "id" | "createAt">>;

  const todoUpdate: TodoUpdate = {
    title: "お昼寝",
  };

  console.log("\nTodoUpdate:", todoUpdate);

  // 4. Record
  type TodoKey = "done" | "pending";

  type GroupedTodos = Record<TodoKey, TodoPreview[]>;

  const groupedTodos: GroupedTodos = {
    done: [{ id: 1, title: "朝お散歩", completed: true }],
    pending: [
      { id: 2, title: "夕方お散歩", completed: false },
      { id: 3, title: "夜お散歩", completed: false },
    ],
  };

  console.log("\nGroupedTodos:", groupedTodos);
}
