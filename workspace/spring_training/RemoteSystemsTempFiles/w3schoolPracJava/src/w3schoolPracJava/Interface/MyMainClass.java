package w3schoolPracJava.Interface;

public class MyMainClass {

	public MyMainClass() {
		// TODO Auto-generated constructor stub
	}

	
		  public static void main(String[] args) {
		    ConcreteClassPig myPig = new ConcreteClassPig ();  // Create a Pig object
		    //Animal myanimal = new Animal(); we can not creare obj of interface
		    myPig.animalSound();
		    myPig.sleep();
		  }
		}


