public class Exer01 {
  public static void main(String[] args) {
    byte i = 0;
    // Using for loop
    for (i = 1; i <= 10; i++) {
      if (i < 10) {
        System.out.print(i + ", ");
      } else {
        System.out.println(i);
      }
    }
    // The same with while loop
    i = 1;
    while (i < 11) {
      if (i == 10) {
        System.out.println(i);
      } else {
        System.out.print(i + ", ");
      }
      i++;
    }
    // The same with do/while loop
    i = 1;
    do {
      if (i < 10) {
        System.out.print(i + ", ");
      } else {
        System.out.println(i);
      }
      i++;
    } while (i <= 10);
  }
}
