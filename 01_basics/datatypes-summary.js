// In JavaScript, data types are classified into two categories:
// 1) Primitive Data Types
// 2) Non-Primitive (Reference) Data Types

/*
  PRIMITIVE DATA TYPES (7 total):
  Number, String, Boolean, Null, Undefined, Symbol, BigInt

  - Stored directly in stack memory
  - Immutable (a new value is created instead of modifying the original)
  - Compared and copied by value

  NON-PRIMITIVE / REFERENCE DATA TYPES:
  Array, Object, Function

  - Stored in heap memory
  - The variable only holds a reference (memory address) to the actual data
  - Compared and copied by reference
*/

// ------- Symbol Example -------
// A Symbol is always unique, even if two symbols are created with the same description

const userId = Symbol('user')
const adminId = Symbol('user')

console.log(userId === adminId)
// Output: false
// Reason: Each Symbol has a unique identity in memory,
// regardless of whether the description passed to it is identical

// ------- typeof Operator Results -------

// 1) Primitive Types:
//    Number     ->  "number"
//    String     ->  "string"
//    Boolean    ->  "boolean"
//    Null       ->  "object"    
//    Undefined  ->  "undefined"
//    Symbol     ->  "symbol"
//    BigInt     ->  "bigint"

// 2) Non-Primitive Types:
//    Array      ->  "object"
//    Function   ->  "function"
//    Object     ->  "object"