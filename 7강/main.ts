/** 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요. */
// 매개변수, 리턴타입 정의필요 
type Input = number[]|string[]|{message: string}

function processInput(input: Input): string | number {
  // 여기에 작성
   if (Array.isArray(input)) {
    // 배열일 경우, 숫자 배열이면 합산하고 문자열 배열이면 결합
    if (typeof input[0] === "number") {
      return input.reduce((sum, num) => sum + num, 0);
    } else {
      return input.join('');
    }
  } else if (typeof input === "object" && "message" in input) {
    // 객체일 경우, message 값을 대문자로 변환
    return input.message.toUpperCase();
  }
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
// console.log(processInput(42)); // 에러 발생

/** 2. 다음 조건을 만족하는 코드를 작성하세요. */

// 클래스 정의
// 여기에 작성
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

class Bike {
  type: string;

  constructor(type: string) {
    this.type = type;
  }
}

function processVehicle(vehicle: Car | Bike): string {
  if (vehicle instanceof Car) {
    return vehicle.brand.toUpperCase();
  } else if (vehicle instanceof Bike) {
    return `Bike: ${vehicle.type}`;
  } else {
    throw new Error("unknown");
  }
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
console.log(processVehicle("unknown")); // 에러 발생

/** 3. in을 활용한 사용자 관리 */

type Admin = { 
    type: "admin",
    permissions: string[] 
}
type User = { 
    type: "user",
    email: string 
}

function processUser(user: Admin | User): string {
  if ("permissions" in user) {
    return user.permissions.join(",");
  } else if ("email" in user) {
    return user.email;
  }
  throw new Error("error"); 
}
// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
console.log(processUser({ type: "guest" })); // 에러 발생

/** 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요: */

type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
  // 여기에 작성
  return typeof (shape as Rectangle).width === "number" && typeof (shape as Rectangle).height === "number";
}

function calculateArea(shape: Rectangle | Circle): number {
  // 여기에 작성
   if (isRectangle(shape)) {
    // Rectangle인 경우, 면적 계산
    return shape.width * shape.height;
  } else {
    // Circle인 경우, 면적 계산
    return Math.PI * shape.radius ** 2;
  }
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)

/** 5. 유니온 타입의 문제점과 해결 방법 */
type Square = { type: "square"; side: number };
type Circle2 = { type: "circle"; radius: number };

type Shape = Square | Circle2;

function isSquare(shape: Shape): shape is Square {
  return shape.type === "square";
}

// 넓이를 계산하는 함수
function calculateArea1(shape: Shape): number {
  // 여기에 구현
   if (isSquare(shape)) {
    return shape.side * shape.side;
  } else {
    return Math.PI * shape.radius ** 2;
  }
}

// 테스트 코드
console.log(calculateArea1({ type: "square", side: 5 })); // 25
console.log(calculateArea1({ type: "circle", radius: 7 })); // 153.93804002589985



