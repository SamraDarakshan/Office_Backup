package w3schoolPracJava;


import java.time.LocalDate; // import the LocalDate class
import java.time.LocalDateTime; // import the LocalDateTime class
import java.time.LocalTime; // import the LocalTime class
import java.time.format.DateTimeFormatter; // Import the DateTimeFormatter class


public class Date { 
  public static void main(String[] args) { 
    LocalDate myObj = LocalDate.now(); // Create a date object
    System.out.println(myObj); // Display the current date
    
    LocalDateTime myObj1 = LocalDateTime.now(); // current date and time
    System.out.println(myObj1); // Display the current date
    
    LocalTime myObj2 = LocalTime.now(); //current time
    System.out.println(myObj2);
    
    //format
    LocalDateTime myDateObj = LocalDateTime.now(); 
    System.out.println("Before formatting: " + myDateObj); 
    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"); 
    
    DateTimeFormatter FormatObj = DateTimeFormatter.ofPattern("E, MMM dd yyyy");
   // DateTimeFormatter myFormat = DateTimeFormatter.ofPattern("   dd/MM/yyyy");
    String formattedDate = myDateObj.format(myFormatObj); 
    String formatted = myDateObj.format(FormatObj); 
    
    System.out.println("After formatting: " + formatted  );
    System.out.println("After formatting: " + formattedDate);
   
   
  } 
}