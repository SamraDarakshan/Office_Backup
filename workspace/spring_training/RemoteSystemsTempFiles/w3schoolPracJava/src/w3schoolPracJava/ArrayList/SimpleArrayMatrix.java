package w3schoolPracJava.ArrayList;

public class SimpleArrayMatrix {


int[][] matrix = {
	    {1,2,3},
	    {4,5,6},
	    {7,8,9},
	    {10,11,12}
	};

	printMatrix(matrix);

	public void printMatrix(int[][] m){
	    try{
	        int rows = m.length;
	        int columns = m[0].length;
	        String str = "|\t";

	        for(int i=0;i<rows;i++){
	            for(int j=0;j<columns;j++){
	                str += m[i][j] + "\t";
	            }

	            System.out.println(str + "|");
	            str = "|\t";
	        }

	    }catch(Exception e){System.out.println("Matrix is empty!!");}
	}
	
	 int[][] matrix = {
		        {1,2,3},
		        {4,5,6},
		        {7,8,9}
		    };
		    //use foreach loop as below to avoid IndexOutOfBoundException
		    //need to check matrix != null if implements as a method
		    //for each row in the matrix
		    for (int[] row : matrix) {
		        //for each number in the row
		        for (int j : row) {
		            System.out.print(j + " ");
		        }
		        System.out.println("");
		    }
}