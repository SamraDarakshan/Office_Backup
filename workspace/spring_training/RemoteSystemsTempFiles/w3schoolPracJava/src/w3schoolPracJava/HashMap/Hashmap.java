package w3schoolPracJava.HashMap;
import java.util.HashMap;

public class Hashmap {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	HashMap <String, String> capitalCities = new HashMap <String ,String>();
	// one for key and one for value
	//we use put to add in hashmap
	
	capitalCities.put("England", "London");
	capitalCities.put("Australia","Sydney");
	System.out.println(capitalCities);
	System.out.println(capitalCities.get("Australia")); // here you can put key value there is no index in hash
	
	System.out.println("Hash Map Size is: " + capitalCities.size());
	//capitalCities.remove("England");
	
	//capitalCities.clear();

	
//Loop through the items of a HashMap with a for-each loop.
//Note: Use the keySet() method if you only want the keys, 
//	and use the values() method if you only want the values:
	
	//using for each loop
	
	/*for( String i: capitalCities){ cox we can not gives like this wht e gives in array lst for printa all
		  System.out.println(i);
		
	} */
	//print keys only
	
	
	for( String i: capitalCities.keySet()){
		  System.out.println(i);
		
	}
	//print values
	for( String i: capitalCities.values()){
		  System.out.println(i);
		
	}
	//print keys and values both
	for( String i: capitalCities.keySet()){
		  System.out.println("key: " + i + " value: " + capitalCities.get(i));
		
	
	}
	 // Create a HashMap object called people
    HashMap<String, Integer> people = new HashMap<String, Integer>();

    // Add keys and values (Name, Age)
    people.put("John", 32);
    people.put("Steve", 30);
    people.put("Angie", 33);

    for (String i : people.keySet()) {
      System.out.println("key: " + i + " value: " + people.get(i));
    }
	}

}
