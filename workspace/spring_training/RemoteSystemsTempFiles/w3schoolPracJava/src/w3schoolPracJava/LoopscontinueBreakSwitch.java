package w3schoolPracJava;

public class LoopscontinueBreakSwitch {
	public static void main(String[] args) {
int day = 4;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  case 4:
    System.out.println("Thursday");
    break;
  case 5:
    System.out.println("Friday");
    break;
  case 6:
    System.out.println("Saturday");
    break;
  case 7:
    System.out.println("Sunday");
    break;
}
//for
for (int i = 0; i <= 10; i = i + 2) {
	  System.out.println(i);
	}
//foreach for array
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : cars) {
  System.out.println(i);
}

//for with continue break
for (int i = 0; i < 10; i++) {
	  if (i == 4) {
	    break;
	  }
	  System.out.println(i);
	} 

for (int i = 0; i < 10; i++) {
	  if (i == 4) {
	    continue;
	  }
	  System.out.println(i);
	} 
//while
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}
//do while
int j = 0;
do {
  System.out.println(j);
  j++;
}
//while with continue and break
while (j < 5);

int k = 0;
while (k < 10) {
  System.out.println(k);
  k++;
  if (i == 4) {
    break;
  }
} 

int l = 0;
while (i < 10) {
  if (i == 4) {
    i++;
    continue;
  }
  System.out.println(l);
  l++;
} 
}
}