/* 문제 1. 다음 변수들의 타입을 지정해주세요 */
let userName: string; // 예: 이름
let userAge: number; // 예: 나이
let isAdmin: boolean; // 예: 관리자 여부

userName = "Alice";
userAge = 25;
isAdmin = true;

/* 문제 2. 아래 변수들에 적절한 타입과 초기값을 지정하세요. */
 
// 변수 선언과 초기값 지정
let productName: string = "사과"; // 상품 이름
let productPrice: number = 5000; // 상품 가격
let isAvailable: boolean = true ; // 상품 재고 여부

// 예시 출력
console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);

/** 문제 3. 두 숫자를 더하는 함수를 작성하고, 함수의 매개변수와 반환값에 타입을 지정하세요. */
function addNumbers (a: number, b:number): number {
    return a + b;
}
console.log(addNumbers(5, 3)); 

/** 4. 주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 "값이 없습니다"를 반환합니다 */
function stringifyValue(value?: string|number|null) {
    if(value === null || value === undefined) {
        return "값이 없습니다.";
    }
    return value;
}

// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"

/** 문제 5. 아래 함수는 두 값을 비교하여 결과를 반환합니다. 느슨한 동등성(==)과 엄격 동등성(===)의 차이를 이해하고, 함수의 동작 결과를 예측하세요. */


function compareValues(a: unknown, b: unknown): string {
  if (a === b) {
    return "엄격한 동등성"; // 값 + 자료형 까지 같아야 true
  } else if (a == b) {
    // 값만 비교하며, 자료형이 다르면 자동으로 형변환
    // 5 == "5" (true) / null == undefined (true)
    return "느슨한 동등성"; 
  } else {
    // NaN은 자기 자신과도 같지 않기 때문
    return "동등하지 않음";
  }
}

// 함수 호출 예시
console.log(compareValues(5, "5")); // 느슨한 동등성
console.log(compareValues(null, undefined)); // 느슨한 동등성
console.log(compareValues(false, 0)); // 느슨한 동등성
console.log(compareValues(NaN, NaN)); // 동등하지 않음
console.log(compareValues(42, 42)); // 엄격한 동등성

/** 문제 6. 주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요. */
function isPrimitive(value: unknown): boolean {
 return value !== Object(value);
}

/**
 * 원시 값(string, number, boolean, null, undefined) => 객체로 변환될 수 없음 
 * 객체(Object, Array, Function, Date 등) 
 */
// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false

