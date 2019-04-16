package w3schoolPracJava.ArrayList;
//import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;  // Import the Collections class

public class MyClass {

	/*imporatnt
	 * Array has fixed index and one  dara type to overcome this we used collections 
	 * like array list and hasmap
	 * in java we also have object array means we can store any data type but in fixed index
	 * to overcome fixed index e use arralist here we can do add, remove and all on run time not
	 * has foxed index
	 * to overcome both we use hash map like here we can give multiple datatypes in value or in keys
	 * and no fixed index
	 *  
	 */ 
	
	public static void main (String[] args) {
	
	/*	//Scanner class
		Scanner ob = new Scanner (System.in);
		System.out.println("Enter your name: ");
		String name = ob.nextLine();
		System.out.println("your name: " +name); */
		
	//---so we use array list for the resizeness in the array like there no fixed index like aray
		//but they numbering ith 0 index also
		
		
		
		//array list
		//Arraylist class we canadd remove get , set clear in array list as size is not mention
		System.out.println("Arra List ");
		ArrayList<String> cars = new ArrayList<String>();
		 cars.add("Volvo");
		    cars.add("BMW");
		    cars.add("Ford"); // cox we remove it
		    cars.add("Mazda");
		    cars.set(0, "Opel"); //update value
		    cars.remove(2);//remove
		   // cars.clear(); // clear list
		    System.out.println("Array List Size is: " + cars.size()); //for size
		    System.out.println("Arra List in simple array form");
		    System.out.println(" ");
		    System.out.println(cars.get(0)); 
		    System.out.println(cars); //print all cars in array form
		    
		    System.out.println("Arra List in MD");
		    for (int i=0; i<cars.size();i++){
		    	 System.out.println(cars.get(i));
		    }
		    System.out.println("Foreach");
		    //for eaach loop print in md
		    	   for (String i : cars) {
		    		      System.out.println(i);
		    		    }
		    	   //here this <Integer> is wrapper class
		    		    ArrayList<Integer> myNumbers = new ArrayList<Integer>();
		    		    myNumbers.add(10);
		    		    myNumbers.add(15);
		    		    myNumbers.add(20);
		    		    myNumbers.add(25);
		    		  //  for (type variable : arrayname) { }
		    		    	
		    		    //foreach
		    		    for (int i : myNumbers) {
		    		      System.out.println(i);}
//	/java.util package is the Collections class, which include the sort() method for sorting lists alphabetically or numerically:	    		      
		    		      Collections.sort(cars);  // Sort cars

		    		      for (String s : cars) {
		    		        System.out.println(s);}
		    		        
		    		      
		    		        
		    		        
		    		        Collections.sort(myNumbers);  // Sort myNumbers

		    		        for (int c : myNumbers) {
		    		          System.out.println(c);
		    		        }
				
	}
}








