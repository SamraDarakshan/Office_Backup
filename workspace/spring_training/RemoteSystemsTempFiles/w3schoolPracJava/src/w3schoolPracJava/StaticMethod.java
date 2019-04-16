package w3schoolPracJava;

public class StaticMethod {

	

			  static void myMethod() {
			    System.out.println("I just got executed!");
			  }

			  public static void main(String[] args) {
			    myMethod();
			  }
			

			// Outputs "I just got executed!"
	
	}
//The dot (.) is used to access the object's attributes and methods.

/*An example to demonstrate the differences between static and public methods:

public class MyClass {
  // Static method
  static void myStaticMethod() {
    System.out.println("Static methods can be called without creating objects");
  }

  // Public method
  public void myPublicMethod() {
    System.out.println("Public methods must be called by creating objects");
  }

  // Main method
  public static void main(String[ ] args) {
    myStaticMethod(); // Call the static method
    // myPublicMethod(); This would compile an error

    MyClass myObj = new MyClass(); // Create an object of MyClass
    myObj.myPublicMethod(); // Call the public method on the object
  }
} */
/*
 * public class MyClass {
  static int myMethod(int x, int y) {
    return x + y;
  }

  public static void main(String[] args) {
    int z = myMethod(5, 3);
    System.out.println(z);
  }
}
// Outputs 8 (5 + 3) */
