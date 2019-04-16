package w3schoolPracJava.Encapsulation;


		public class MyClass {
			
			
			  public static void main(String[] args) {
			    Person myObj = new Person();
			    
			/*    MyClass myOb = new MyClass(); // it wll not call person class gender because this class
			 * doest not extends the parent class
			 * yes if we add extends Person then it will called that protected gender in entended class
			    
			    System.out.println(myOb.gender); */
			    
			    
			    myObj.setName("John"); // Set the value of the name variable to "John"
			    myObj.setPhone(2233);
			    System.out.println(myObj.getName());
			    System.out.println(myObj.getPhone());
			    System.out.println(myObj.gender); // it can call by person class obj 
			  }
			}

			// Outputs "John" 

//this will give error because it was  private it can call by getter by setting value in setter
	/*	public class MyClass {
			  public static void main(String[] args) {
			    Person myObj = new Person();
			    myObj.name = "John";  // error
			    System.out.println(myObj.name); // error  
			  }
			}
*/