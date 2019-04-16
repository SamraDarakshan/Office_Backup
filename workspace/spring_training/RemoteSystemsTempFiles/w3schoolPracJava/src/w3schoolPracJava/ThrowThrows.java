package w3schoolPracJava;

public class ThrowThrows {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
//Java program that demonstrates the use of throw 
class ThrowExcep 
{ 
 static void fun() 
 { 
     try
     { 
         throw new NullPointerException("demo"); 
     } 
     catch(NullPointerException e) 
     { 
         System.out.println("Caught inside fun()."); 
         throw e; // rethrowing the exception 
     } 
 } 

 public static void main(String args[]) 
 { 
     try
     { 
         fun(); 
     } 
     catch(NullPointerException e) 
     { 
         System.out.println("Caught in main."); 
     } 
 } 
} 
//throws

//Java program to illustrate throws 
class tst  
{ 
 public static void main(String[] args)throws InterruptedException 
 { 
     Thread.sleep(10000); 
     System.out.println("Hello Geeks"); 
 } 
} 
Output:

Hello Geeks

//throws
//Java program to demonstrate working of throws 
class ThrowsExecp 
{ 
 static void fun() throws IllegalAccessException 
 { 
     System.out.println("Inside fun(). "); 
     throw new IllegalAccessException("demo"); 
 } 
 public static void main(String args[]) 
 { 
     try
     { 
         fun(); 
     } 
     catch(IllegalAccessException e) 
     { 
         System.out.println("caught in main."); 
     } 
 } 
} 
Output:

Inside fun().
caught in main.