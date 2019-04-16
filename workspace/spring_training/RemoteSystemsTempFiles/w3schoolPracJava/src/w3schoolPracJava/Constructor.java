package w3schoolPracJava;

public class Constructor {// Create a MyClass class

	int x; // Create a class attribute
		// TODO Auto-generated method stub
		
	
		  // Create a class constructor for the MyClass class
		  public Constructor() {
		    x = 5;  // Set the initial value for the class attribute x
		  }

		  public static void main(String[] args) {
		    Constructor myObj = new Constructor(); // Create an object of class MyClass (This will call the constructor)
		    System.out.println(myObj.x); // Print the value of x
		  }
		}


/* All classes have constructors by default: if you do not create a class constructor yourself, Java creates one for you. However, then you are not able to set initial values for object attributes.	

Note that the constructor name must match the class name, and it cannot have a return type (like void). */
/*
//constructor with parameters set values
public class MyClass {
	  int x;

	  public MyClass(int y) {
	    x = y;
	  }

	  public static void main(String[] args) {
	    MyClass myObj = new MyClass(5);
	    System.out.println(myObj.x);
	  }
	}

	// Outputs 5



public class Car {
	  int modelYear;
	  String modelName;

	  public Car(int year, String name) {
	    modelYear = year;
	    modelName = name;
	  }

	  public static void main(String[] args) {
	    Car myCar = new Car(1969, "Mustang");
	    System.out.println(myCar.modelYear + " " + myCar.modelName);
	  }
	}

	// Outputs 1969 Mustang */