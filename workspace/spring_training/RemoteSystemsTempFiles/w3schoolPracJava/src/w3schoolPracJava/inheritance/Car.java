package w3schoolPracJava.inheritance;


class Car extends Vehicle {
	  private String modelName = "Mustang";    // Car attribute
	  
	public void honk() {                     // method overriding
		    System.out.println("I am in child class");
		  } 
	  public static void main(String[] args) {
		  
//Inheritance	  
//Now see you can call public and protected methods of parent class with the obj of child class
//because child class have all the functionalities of parent class
// similarly you can call parent class methods or attributes with parent class obj
// but you can not call child class methods or attributes with parent class objects
		  
//polymorphisim if we have a same method in parent and in child class
// then when we call that method with child class obj it will print child class method preference is child class
//e.g     myCar.honk(); 
// 		Vehicle refparent  = new Car();
		  //  refparent.honk();    from this also gives child class methd
// if you want to print parent class method
		  //  Vehicle myVehicle  = new Vehicle();
		   // myVehicle.honk();
		  
		  
	
		  // Create a myCar object
	    Car myCar = new Car();
	    // Call the honk() method (from the Vehicle class) on the myCar object
	    myCar.honk(); 
	    
	    Vehicle refparent  = new Car();
	    refparent.honk();
	    
	   
	    
	    Vehicle myVehicle  = new Vehicle();
	     myVehicle.honk();
	    
	  //  myVehicle.modelName; its not possible
	    System.out.println(myVehicle.brand );
	    System.out.println(myCar.brand + " " + myCar.modelName); 
	    
	    
	    System.out.println(myCar.brand + " " + myCar.modelName); 
	    //myVehicle.brand ;
	   
	/* try {
		// System.out.println(myVehicle.modelName); ;
	    	  System.out.println(myVehicle.brand );
	    System.out.println(myCar.brand + " " + myCar.modelName); 
	    }
	    
	    catch (Exception e) {
		      System.out.println("Something went wrong.");
		    } */
	  
	    
	    
	   // Vehicle myVehic = new Car(); 
	    
	   // myVehic.honk();

	    // Call the honk() method (from the Vehicle class) on the myCar object
	   // myCar.honk();

	    // Display the value of the brand attribute (from the Vehicle class) and the value of the modelName from the Car class
	    
	   
	  }}