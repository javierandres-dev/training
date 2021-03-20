import java.util.Scanner;

public class Exer04 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String name1 = null;
    String name2 = null;
    System.out.print("Enter first name: ");
    name1 = sc.nextLine();
    System.out.print("Enter second name: ");
    name2 = sc.nextLine();
    System.out.print("The name '" + name1 + "' and the name '" + name2 + "' ");
    if (name1.equals(name2)) {
      System.out.println("are equals.");
    } else {
      System.out.println("aren't equals.  They are different.");
    }
  }
}
