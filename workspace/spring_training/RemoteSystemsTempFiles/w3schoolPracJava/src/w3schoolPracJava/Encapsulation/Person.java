package w3schoolPracJava.Encapsulation;

public class Person {
	
	  private String name; // private = restricted access

	  protected char gender='f';
	  
	  private long phone;
	  
	  
	  public void setPhone( int newPhone)
	  {
		  this.phone = newPhone;
	  }
	  
	  
	  public long getPhone(){
		  return phone;
	  }
	  
	  
	  
	  // Getter
	  public String getName() {
	    return name;
	  }

	  // Setter
	  public void setName(String newName) {
	    this.name = newName;
	  }
	  
	  
	}