{
  // 'home' | 'about' | 'contact' のいずれかをキーに持ち、
  // 値として { title: string; path: string } を持つオブジェクトの型
  type PageKey = "home" | "about" | "contact";

  interface PageInfo {
    title: string;
    path: string;
  }

  type Pages = Record<PageKey, PageInfo>;

  const siteNav: Pages = {
    home: { title: "Home", path: "/" },
    about: { title: "About Us", path: "/about" },
    contact: { title: "Contact", path: "/contact" },
    // 'extra': { title: 'Extra', path: '/extra' } // エラー: 'extra'はPageKeyに含まれない
  };

  // 例題

  type MessageKey = "success" | "error" | "warning";

  type Messages = Record<MessageKey, string>;

  const messages: Messages = {
    success: "成功しました",
    error: "エラーが発生しました",
    warning: "危険です",
  };

  console.log(messages);
}
