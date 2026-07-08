// 4. オプショナルプロパティ
// プロパティ名の後ろに?をつけると、そのプロパティは省略可能になる。
{
    interface OptionalUser {
        name: string;
        manAge?: number; // 省略可能
        manEmail?: string; // 省略可能
        isStaff?: boolean;
    }

    const user1: OptionalUser = { name: "Taro" };
    const user2: OptionalUser = { name: "Hanako", manAge: 30 };
    const user3: OptionalUser = { name: "Jiro", manAge: 28, manEmail: "jiro@example.com", isStaff: true }; // OK

    console.log(user3);
}