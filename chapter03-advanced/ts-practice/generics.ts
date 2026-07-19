interface ApiSuccessResponse<T> {
  status: "success";
  data: T;
}

interface ApiErrorResponse {
  status: "error";
  message: string;
}

type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

function handleResponse<T>(response: ApiResponse<T>): void {
  if (response.status === "success") {
    console.log(`Success! Data:${JSON.stringify(response.data)} `);
  } else if (response.status === "error") {
    console.log(`Error! Message:${response.message}`);
  }
}

type User = {
  id: number;
  name: string;
};

type Product = {
  name: string;
  price: number;
};

const userResponse: ApiResponse<User> = {
  status: "success",
  data: {
    id: 1,
    name: "Taro",
  },
};

const errorResponse: ApiResponse<User> = {
  status: "error",
  message: "User not found",
};

const productResponse: ApiResponse<Product> = {
  status: "success",
  data: {
    name: "フルーツジュース",
    price: 330,
  },
};

const errorProductResponse: ApiResponse<Product> = {
  status: "error",
  message: "Product not found",
};

handleResponse(userResponse);
handleResponse(errorResponse);
handleResponse(productResponse);
handleResponse(errorProductResponse);
