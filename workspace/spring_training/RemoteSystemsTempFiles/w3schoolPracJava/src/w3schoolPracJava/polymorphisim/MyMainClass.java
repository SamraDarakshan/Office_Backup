package w3schoolPracJava.polymorphisim;


class MyMainClass {
	  public static void main(String[] args) {
	    Animal myAnimal = new Animal();  // Create a Animal object
	    Animal myPig = new Pig();  // Create a Pig object
	    Animal myDog = new Dog();  // Create a Dog object
	    
	    Dog myD = new Dog(); // both gives child class

	    myAnimal.animalSound();
	    myPig.animalSound();
	    myAnimal.animalSound();
	   
	    myD.animalSound();
	    
	    //we can call notoverride method by obj of chil or parenta any because its not overridem
	    
	    System.out.println(myD.notoverride(5) + " " + myDog.notoverride(5) + " " + myAnimal.notoverride(5));
	    System.out.println(myD.notoverride(5) +  myDog.notoverride(5) +  myAnimal.notoverride(5));
	
	  }
	}