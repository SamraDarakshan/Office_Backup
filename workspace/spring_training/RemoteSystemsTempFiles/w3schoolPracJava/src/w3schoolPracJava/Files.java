package w3schoolPracJava;

import java.io.File;  // Import the File class
import java.io.IOException;  // Import the IOException class to handle errors

public class File { 
	//create
}
  public static void main(String[] args) { 
    try { 
      File myObj = new File("filename.txt"); 
      if (myObj.createNewFile()) { 
        System.out.println("File created: " + myObj.getName()); 
      } else { 
        System.out.println("File already exists."); 
      } 
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace(); 
      //geinfo
      File myObj = new File("filename.txt");
      if (myObj.exists()) {
        System.out.println("File name: " + myObj.getName()); 
        System.out.println("Absolute path: " + myObj.getAbsolutePath()); 
        System.out.println("Writeable: " + myObj.canWrite()); 
        System.out.println("Readable " + myObj.canRead()); 
        System.out.println("File size in bytes " + myObj.length());
      } else {
        System.out.println("The file does not exist.");
      }
      //read
    	    try { 
    	      FileWriter myWriter = new FileWriter("filename.txt");
    	      myWriter.write("Files in Java might be tricky, but it is fun enough!");
    	      myWriter.close();
    	      System.out.println("Successfully wrote to the file.");
    	    } catch (IOException e) {
    	      System.out.println("An error occurred.");
    	      e.printStackTrace();
    	      
    	      //write
    	      try {
    	          File myObj = new File("filename.txt");
    	          Scanner myReader = new Scanner(myObj); 
    	          while (myReader.hasNextLine()) {
    	            String data = myReader.nextLine();
    	            System.out.println(data);
    	          }
    	          myReader.close();
    	        } catch (FileNotFoundException e) {
    	          System.out.println("An error occurred.");
    	          e.printStackTrace();
    	        } 
    } 
  } 
}

