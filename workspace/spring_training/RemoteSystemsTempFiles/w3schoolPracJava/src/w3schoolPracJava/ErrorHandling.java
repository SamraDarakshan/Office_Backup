package w3schoolPracJava;

public class ErrorHandling {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		   try {
			      int[] myNumbers = {1, 2, 3};
			      System.out.println(myNumbers[10]);
			    } catch (Exception e) {
			      System.out.println("Something went wrong.");
			    }
		   finally {
			      System.out.println("The 'try catch' is finished.");
			    }
			  }
	}


