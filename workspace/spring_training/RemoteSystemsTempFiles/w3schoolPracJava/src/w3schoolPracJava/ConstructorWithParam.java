package w3schoolPracJava;

public class ConstructorWithParam {
//put void in static as it does not return anythong call by classs name or method
	// no return type in constructor 
	
 static void met(){
		System.out.println("My name is: ");
	}
 static int age=10;
 
	String name;
	
	
	public ConstructorWithParam (String n) {
		
		name= n;// to set the initial value
		
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ConstructorWithParam obj = new ConstructorWithParam("samra");
		ConstructorWithParam.met();
	//	met();
		System.out.println(ConstructorWithParam.age);
		System.out.println(age);
		System.out.println(obj.name);

	}

}