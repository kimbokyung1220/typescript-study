/** 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다 */
// 인터페이스 작성
interface IUser {
    id: number;
    name: string;
    email?: string;
}

// 타입 작성
type TUser = {
  id: number;
  name: string;
  email?: string;
};


const user2: IUser = {
  id: 1,
  name: "Alice",
};

const userWithEmail: TUser = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

/** 2. 아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요. */
// User 타입을 작성하세요.
// 여기에 작성
type UserType = {
    id: number, 
    name:string,
    address: {city: string, zipCode: number}
}

// User 타입을 사용하여 아래 객체를 작성하세요.
const user3: UserType = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};

/** 3. 아래 조건에 따라 인터페이스를 확장하세요. */
// User 인터페이스 작성
// 여기에 작성
interface UserInterface {
    id: number, name:string, email?:string
}
// Admin 인터페이스 작성 (User 확장)
// 여기에 작성
interface AdminInterface extends UserInterface {
    role: string
}

const normalUser: UserInterface = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const adminUser: AdminInterface = {
  id: 2,
  name: "Bob",
  role: "Administrator",
};

/** 4. 아래 조건에 따라 type을 확장하세요. */

type ProductType = {
    id: number, name:string, price: number
}

type DiscountedProduct = ProductType & {discount: number}

const normalProduct: ProductType = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

const discountedProduct: DiscountedProduct = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};

/** 5.아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요. */

// Product 타입 작성
// 여기에 작성
interface TProduct {
    id: number,
    name: string,
    price: number
}

// Order 타입 작성
// 여기에 작성
interface TOrder {
    orderId: number,
    products: TProduct[],
    totalPrice: number
}

// Order 타입을 사용하여 아래 객체를 작성하세요.
const order: TOrder = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};

/** 6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요. */
// BaseUser 인터페이스 작성
// 여기에 작성
interface BaseUser {
    id: number, name: string
}

// AdminUser 타입 작성
// 여기에 작성
interface AdminUser extends BaseUser {
    role: string
}

// GuestUser 타입 작성
// 여기에 작성
interface GuestUser extends BaseUser {
    visitCount: number
}

// 아래 객체를 작성하세요.
const admin: AdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

const guest: GuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};

