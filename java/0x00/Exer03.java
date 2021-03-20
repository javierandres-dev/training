public class Exer03 {
  public static void main(String[] args) {
    byte i = 0;
    int a = 0, b = 1, fibonacci = 0;
    // Using for loop
    for (i = 0; i < 10; i++) {
      if (i == 9) {
        System.out.println(fibonacci);
      } else {
        System.out.print(fibonacci + ", ");
      }
      fibonacci = a + b;
      b = a;
      a = fibonacci;
    }
    // The same with while loop
    i = 0;
    a = 0;
    b = 1;
    fibonacci = 0;
    while (i < 10) {
      if (i == 9) {
        System.out.println(fibonacci);
      } else {
        System.out.print(fibonacci + ", ");
      }
      fibonacci = a + b;
      b = a;
      a = fibonacci;
      i++;
    }
    // The same with do/while loop
    i = 0;
    a = 0;
    b = 1;
    fibonacci = 0;
    do {
      if (i == 9) {
        System.out.println(fibonacci);
      } else {
        System.out.print(fibonacci + ", ");
      }
      fibonacci = a + b;
      b = a;
      a = fibonacci;
      i++;
    } while (i < 10);
  }
}
