# Running a TypeScript File

To run a TypeScript file, follow these steps:

```sh
npm init -y   # Initialize a new Node.js project (creates package.json)
tsconfig.json # Create this file if it doesn’t exist

tsc <filename>.ts   # Compile the TypeScript file to JavaScript
node <filename>.js  # Run the compiled JavaScript file
```

---

# Topics of TypeScript

## Primitive Types
- `number`
- `string`
- `boolean`

## Reference Types
- `array` (e.g., `[]`)
- `object` (e.g., `{}`)
- `function` (e.g., `() => {}`)

## Array
- Can contain values of any type

## Tuples
- Define the type explicitly

## Enum
- Used to define a set of named constants

## Special Types
- `any`
- `void`
- `never`
- `unknown`
- `null`
- `undefined`

## Type System
- **Type Annotations**: `let name: string = "Sumit"` (Explicit type definition)
- **Type Inference**: `let name = "Sumit"` (Implicit type definition)
- **Type Assertion**: `let name = "Sumit" as string` (Explicit assertion of type)
- **Type Conversion**: `let name = String(55)` (Convert number to string)

## Interface
- Used to define the shape of an object

## Type
- Defines any type, including objects, unions, intersections, etc.

---

# Classes and Objects

### Class Definition
- Blueprint for creating objects

### Constructor
- Used to initialize objects

### Access Modifiers
- `public` (Accessible everywhere)
- `private` (Accessible only within the class)
- `protected` (Accessible within the class and its subclasses)

### Readonly Properties
- `readonly` (e.g., `public readonly name: string`)

### Optional Properties
- `?:` (e.g., `age?: number`)

### Parameter Properties
- Define and initialize properties in the constructor parameters

### Getters and Setters
- `get` and `set` methods for controlled access to properties

### Static Members
- Can be called without instantiating the class (e.g., `ClassName.methodName()`)

### Abstract Classes and Methods
- Classes that cannot be instantiated directly; used for inheritance
- Abstract methods are declared but not implemented in the base class

---

# Functions

### Parameters
- Function parameters must have a type

### Rest Parameters
- `...` (e.g., `function check(a: number, ...b: number[]): number`)

### Optional Parameters
- `?` (e.g., `function check(a: number, b?: number): number`)

### Default Parameters
- `=` (e.g., `function check(a: number = 1): number`)

### Return Types
- Explicitly define return type (e.g., `function check(a: number): number`)

---

# Generics

### Generic Functions
- `function check<T>(args: T): T` (Call: `check<number>(1)`) 

### Generic Interfaces
- Interfaces that use generics for type flexibility

### Generic Classes
- Classes that use generics to handle different data types
