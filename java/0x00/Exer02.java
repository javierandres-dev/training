public class Exer02 {
  public static void main(String[] args) {
    byte i = 0, j = 99;
    // Using for loop
    for (i = 1; i < 6; i++) {
      if (i == 5) {
        System.out.println(i + ", " + j);
      } else {
        System.out.print(i + ", " + j + ", ");
      }
      j--;
    }
    // The same with while loop
    i = 1;
    j = 99;
    while (i <= 5) {
      if (i < 5) {
        System.out.print(i + ", " + j + ", ");
      } else {
        System.out.println(i + ", " + j);
      }
      i++;
      j--;
    }
    // The same with do/while loop
    i = 1;
    j = 99;
    do {
      if (i == 5) {
        System.out.println(i + ", " + j);
      } else {
        System.out.print(i + ", " + j + ", ");
      }
      i++;
      j--;
    } while (i < 6);
  }
}
