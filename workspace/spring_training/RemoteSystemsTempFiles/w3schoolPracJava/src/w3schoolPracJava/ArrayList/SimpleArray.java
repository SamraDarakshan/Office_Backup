package w3schoolPracJava.ArrayList;

public class SimpleArray {

	public static void main(String[] args) {
	
	
		// TODO Auto-generated method stub
		
		//simple array
		System.out.println("Simple array print ");
		String[] ca = {"Volvo", "BMW", "Ford", "Mazda"};
		ca[0] = "Opel";
		System.out.println(ca[0]);
		
		
		System.out.println("print all values ");
		String[] car = {"Volvo", "BMW", "Ford", "Mazda"};
		for (int i = 0; i < car.length; i++) {
		  System.out.println(car[i]);
		}
		//foreach loop
		System.out.println("foreach ")
		String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
		for (String f : cars) {
		  System.out.println(f);
		}
		
		//
		int[][] myNumber = { {1, 2, 3, 4}, {5, 6, 7} };
		int x = myNumber[1][2];
		//System.out.println(x); // Outputs 7
		
		
		//ugh dont knw why they work differently
	    int[][] myNumbers = {{ 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 }};
	    /*
	     * [0][0] -> 1
	     * [0][1]= 2
	     * =3
	     * =4
	     * then [1][0]=5
	     */
	    for (int k = 0; k < myNumbers.length; k++) {
	    	
	      for(int j = 0; j < myNumbers[k].length; j++) {
	        System.out.println(myNumbers[k][j]+ " ");
	      }
	    System.out.println();
	}
	    int[][] matrix = {{ 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 }};
	    		 
	    		 
	  
	    		for (int m = 0; m < matrix.length; m++) {
	    			
	    		    for (int  n= 0; n < matrix[m].length; n++) {
	    		        System.out.print(matrix[m][n] + " ");
	    		    }
	    		  System.out.println();
	    		}  
	    
	}}

