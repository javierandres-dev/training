# Self-learning
## Java Explorer
### :open_file_folder: subject-java/0x01

#### Resources
##### Copyright © 2020 Oracle University. All rights reserved.
* [Java Explorer](https://learn.oracle.com/ols/learning-path/java-explorer/40805/79726)
* [Java Learning Subscription](https://learn.oracle.com/ols/home/java-learning-subscription/40805)

### Overview
#### A brief overview of the “World of Java”: its ecosystem, syntax, design mindset, APIs, and Enterprise usage.
* Origins and Ecosystem
* Java Language
  * Java Code Structures
    - Class
    - Package
    - Module
* Java Design Mindset
  - Polymorphism
  * Analysis, Design and Architecture
    - Unified Modelling Language (UML)
* Java APIs
  - Java Streams APIs
  - Java IO API
  - Java Concurrency API
  - Java Persistence API
* Java in the Enterprise
  * Implement Web Services with Java
    - JAXB
    - XML
    - JSON
    - SOAP
    - REST
  * Enterprise Java
    - Java EE Application Server (WebLogic)
  - Java in Oracle Cloud

### Introduction to Java Basics
#### Overview of the Java Basics course, audience, cloud lab environment and where to go for more information.
* Java Basics Overview
  - Basic programming languages concepts
  - The Java programming language
  - Java Development Kit (JDK)
  - Java API Documentation
* Provision Environment
  - Register for free Oracle Cloud Trial Account
  - Connect that Oracle Coud account
  - Run keygen to generate public/private keys
  - Provision VM compute instance with Oracle Cloud Developer Image
  - Set up VNC access
  - Connect to the VM using Tiger VNC
  - Download NetBeans in to VM
  - Set the proper JDK
  - Install NetBeans
  - Test NetBeans starts and runs
* Provision Env Demo
  - Do the step by step of the previous point

### What is a Java Program
#### Learn the basics of what a Java program is, how it works and how to compile it and are introduced to Classes and Objects in Java.
* Java and Objetives
  - Java Virtual Machine (JVM)
* Java Language
  - Purpose of a Computer Program
  - High-level code
  - Bytecode
  - Machine code
  - Java Editions
  - Platform independent
  - Object oriented
  * How Java Works?
    - Java source code (.java file)
    - Compiled into byte-code (.class file)
    - JVM translate Java byte-code instructions to platform-specific code
    - The command ```javac``` execute the compiler, using ```.java``` file, require specific extension name
    - The command ```java``` execute the JVM, using ```.class``` file, don't require specific extension name
  * Java is an Object-Oriented Language
    - Interaction of objects
    - No prescribed sequence
    * Benefits
      - Modularity
      - Information hiding
      - Code reuse
      - Maintainability
  * Java Classes
    * Class Structure
      - Class name
      - Class body
  * Java Packages
  * Java Objects
  * Output for a Java Program
    - to the console
    - to a file
    - to a database
    - to a webpage
    - to an other user interface
  * Avoiding Syntax Errors
* NetBeans Intro
  - IDE
* NetBeans Intro Demo
* Jshell
  - JShell is an interactive Read-Evaluate-Print Loop (REPL) command-line tool.

### Handling Text and Numbers
#### Create and work with variables, primitive data types, String, and expressions.
* Variables
* Constants
* Data types
  * Primitive
    - byte: 0
    - short: 0
    - int: 0
    - long: 0L
    - float: 0.0f
    - double: 0.0d
    - char: "\u0000"
    - boolean: false
  * Objects
    - String (or any object): null
* Operators
  * Mathematical
    - Precedence
  - Relational
  * String
    - Concatenation
    - Operations

### Arrays, Conditions, and Loops
#### Make decisions using if/else, store multiple elements in an array and perform iteration using loops.
* Flow control
  * Conditionals statement
    - if
    - if/else
    - if/else with Ternary Conditional Operator
    - switch
  * Conditional operators
* Arrays
  * Contents
    - Primitive items
    - Object items
  - Accessing Array Elements
* Flow control
  * Loops and Iteration
    - while
    - do/while
    * for
      - Standard for Loop
      - Enhanced for Loop
      - for-each (automatically iterates throught a collection of values)
    * Using break with Loops

### Defining Calsses and Creating Objects
#### Define classes and instantiate them into objects to do the work of the program.
* Modeling Classes
  * Classes and Instances
    * Class
      - Properties
      - Behaviors
    * Object
      - Is an instance of a specific class
  * Modeling Properties and Behaviors
    - Unified Modelling Language (UML) diagrams
* Define Methods
  * Components of a Class
    - Class declaration
    - field definitions
    - Method definitions
  * Components of a method definition
    - Method name
    - Return type
    - Access modifier
    - Parameter list (optional)
    - Method body
    - Return statement
  * Using Method Overloading
*Scope and Access
  * Variable Scopes
    - Overall
    - Local
  * Variable Shadowing
    - ```this```
  * Access Modifiers
    * Restrict access (control visibility scope)
      - public
      - protected
      - default (no access modifier)
      - private
    * Apply Access Modifiers to Enforce Encapsulation
  * Apply Encapsulation
    - setters
    - getters
* Objects
  * Objects Instances
    - Create new instance or Instantiate
    - Access fields
    - Invoke methods
  * The Dot (.) Operator
    - Access the fields and methods of an object
  * Object referencing other objects as a property

### Working with Objects
#### Manipulate objects via references, how objects are stored in memory. How to initialize objects and use data and behavior that apply to all objects.
* Working with Object References
  * References and Objects in Memory
    * Stack
      - Store primitive data types, variables/constants
      - Store reference to the object (pointer)
    * Heap
      - Store objects
  * Arrays Are Objects
    - Storing Arrays of object references
* Constructor
  * Initializing object using the constructor method
    - The same name that class
    - Don't have return because asume same of the class
    - Don't take arguments
    - 
* Static
  - Static methods and variables
  - When to use static methods or fields

### Handling Exceptions
#### Handle errors and exceptional conditions in Java using a try/catch block and exception handlers.
* Java handles unexpected situations using exceptions
  - Exception type
  - Actions that produce exception
  - Exception Stack Trace
* The ```try/cathc``` Block

### Object-Oriented Approach to Code Reuse
#### Use inheritance to implement polymorphism and reuse code. Use interfaces to share common behavior among classes.
* Inheritance
  * Class hierarchy
    - Object is the top-level class in Java class hierarchy
    - Superclass
    - Subclass
  * Extending classes and reusing superclass logic
  * Overriding Methods
  * Polymorphism (many forms)
    - A method declared in a superclass can be overriden is a subclass
    - The subclass version of a method takes precedence
* Abstract Classes
  * The abstrack keyword
    - The abstract class
    - The abstract method
  * Override object class operations
* Interfaces
  - An interface defines a set of features that can be applied to various other classes

### Oracle Cloud and Beyond
#### Convert a Java SE application to respond to a web request instead of the command line.
* Package & Deploy Cloud Applications
  - Java Standard Edition / Micro Profile (SE/MP) Applications
  - Java Enterprise Edition (EE) Applications
* Helidon Server

### Case Study
#### Design and code a basic set of APIs to support basic requirements like creating and managing collections of objects used by other programs.

### Continue Your Learning as a Java Programmer
#### An overview of the Java Learning Subscription, Certification and digital+live sessions

## Software Developer
Built by [javi](https://github.com/javierandres-dev/) :copyright:  
Found a bug or have an idea? [Contact me](https://www.linkedin.com/in/javierandres-dev/).
