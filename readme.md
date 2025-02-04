
# make any file with .ts extension
# To run this file
    -> npm init -y (create tsconfig.json file)
    -> tsc <filename>.ts (compile the file and create file with .js extension)
    -> node <filename>.js (now run that file)


- ## Topics of Typescript ## - Youtube( Sheryians Coding School )
# Premitive Types = number, string, boolean, 
# Reference Types = array, object (i.e. [], {}, ())
# Array //Contains any type
# Tuples //We nee to define the type first
# enum //Used to define a set of named constants
# any, void, never, unknown, null, undefined
# type annotations (i.e. let name: string = "Sumit") //Defining the type
# type inference (i.e. let name = "Sumit") //Not defining the type
# type assertion (i.e. let name = "Sumit" as string) //Defining the type
# type conversion (i.e. let name = String(55)) //Converting number to string
# interface // used to define the shape of an object
# type // Defines any type, including objects, unions, intersections, etc.
# Classes and Objects
    -> Class Defination
    -> Constructor
    -> Access Modifiers(Public, Private, Protected)
    -> Readonly Properties (readonly ie. public readonly name: string) 
    -> Optional Properties (?:)
    -> Parameter Properties
    -> Getters and Setters (get and set methods)
    -> Static Members //Can be called without instantiating the class (i.e. ClassName.methodName())
    -> Abstract Classes and Methods //classes that cannot be instantiated directly. Instead, these classes are intended to be extended by other classes. Abstract methods are methods that are declared but not implemented in the base class.
# Functions
    -> Parameters
    -> Rest Parameters (... ie. function Check(a: number, ...b: number[]): number)
    -> Optional Parameters (? ie. function Check(a: number, b?: number): number)
    -> Default Parameters (= ie. function Check(a: number = 1): number)
    -> Return Types (function Check(a: number): number)

# Generics
    -> Generic Functions // (function check<T>(args: T): T), then call function like (check<number>(1))
    -> Generic Interfaces
    -> Generic Classes