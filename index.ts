//-------------------------------------
abstract class Foo {
  protected abstract doStuff(): void;
  
  public callDoStuff() {
    this.doStuff();
  }
}

class Bar extends Foo {
  protected doStuff() {
    console.log("Bar does stuff");
  }
}

class Baz extends Foo {
  protected doStuff() {
    console.log("Baz does stuff")
  }
}

const objFooBar: Foo = new Bar();
objFooBar.callDoStuff();

const objFooBaz: Foo = new Baz();
objFooBaz.callDoStuff();

// Err
// const objFoo: Foo = new Foo();
// objFoo.callDoStuff();

//-------------------------------------
// Normal inheretance
// Method overloading

// class Foo {
//   protected doStuff() {};
  
//   public callDoStuff() {
//     this.doStuff();
//   }
// }

// class Bar extends Foo {
//   protected doStuff() {
//     console.log("Bar does stuff");
//   }
// }

// class Baz extends Bar {
//   protected doStuff() {
//     console.log("Baz does stuff")
//   }
// }

// const objFooBar: Foo = new Bar();
// objFooBar.callDoStuff();

// const objFooBaz: Foo = new Baz();
// objFooBaz.callDoStuff();

// // No Err
// const objFoo: Foo = new Foo();
// objFoo.callDoStuff();

//-------------------------------------
// Normal inheretance
// Method overloading

// class Foo {
//   protected doStuff() {};
  
//   public callDoStuff() {
//     this.doStuff();
//   }
// }

// class Bar extends Foo {
//   protected doStuff() {
//     console.log("Bar does stuff");
//   }
// }

// class Baz extends Bar {
//   protected doStuff() {
//     super.doStuff();
//     console.log("Baz does stuff")
//   }
// }

// const objFooBaz: Foo = new Baz();
// objFooBaz.callDoStuff();

//------------------------------------

// abstract class Foo {
//   protected abstract doStuff(): void;
  
//   public callDoStuff() {
//     this.doStuff();
//   }
// }

// class Bar extends Foo {
//   protected doStuff() {
//     console.log("Bar does stuff");
//   }
// }

// class Baz extends Foo {
//   protected doStuff() {
//     console.log("Baz does stuff")
//   }
// }

// class MyComponent {
//   public someMethodDoesSomething(foo: Foo) {
//     console.log("Depending on instance I call");
//     foo.callDoStuff();    
//   }
// }

// const myComp = new MyComponent();

// const objFooBar: Foo = new Bar();
// myComp.someMethodDoesSomething(objFooBar);

// const objFooBaz: Foo = new Baz();
// myComp.someMethodDoesSomething(objFooBaz);