{
  // ========================================
  // Intersection型
  // ========================================
  // Intersection型は「A かつ B」を表す型
  // 記号は & を使う

  // ----------------------------------------
  // 基本的な例
  // ----------------------------------------

  interface User {
    id: number;
    name: string;
  }

  interface Contact {
    email: string;
    phone: string;
  }

  // User と Contact の両方のプロパティを持つ型
  type UserProfile = User & Contact;

  const userProfile: UserProfile = {
    id: 1,
    name: "Taro Yamada",
    email: "taro@example.com",
    phone: "090-1234-5678",
  };

  // ----------------------------------------
  // どれか1つでも欠けるとエラー
  // ----------------------------------------

  // const invalidUserProfile: UserProfile = {
  //   id: 1,
  //   name: "Taro",
  //   email: "taro@example.com",
  // };
  // エラー: phone が足りない

  // ----------------------------------------
  // 型にプロパティを追加する例
  // ----------------------------------------

  type AdminUser = User & {
    isAdmin: boolean;
  };

  const admin: AdminUser = {
    id: 1,
    name: "Admin",
    isAdmin: true,
  };

  // ----------------------------------------
  // アプリで使いそうな例
  // ----------------------------------------

  type Media = {
    id: number;
    filePath: string;
    type: "image" | "video";
  };

  type FavoriteInfo = {
    isFavorite: boolean;
  };

  // Media にお気に入り情報を合体させる
  type MediaWithFavorite = Media & FavoriteInfo;

  const media: MediaWithFavorite = {
    id: 1,
    filePath: "/storage/cat.jpg",
    type: "image",
    isFavorite: true,
  };
}
