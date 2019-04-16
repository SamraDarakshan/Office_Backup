package w3schoolPracJava.MultipleInterface;


	// DemoClass "implements" FirstInterface and SecondInterface
	class DemoClass implements FirstInterface, SecondInterface {
	  public void myMethod() {
	    System.out.println("Some text..");
	  }
	  public void myOtherMethod() {
	    System.out.println("Some other text...");
	  }
	}

