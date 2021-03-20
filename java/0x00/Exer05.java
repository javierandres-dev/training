import java.util.Scanner;

public class Exer05 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String[] credentials = { "Javier", "PASS1234" };
    String user = null;
    String pass = null;
    System.out.println("***********");
    System.out.println("* Welcome *");
    System.out.println("***********");
    System.out.print("Enter your username: ");
    user = sc.nextLine();
    System.out.print("Enter your password: ");
    pass = sc.nextLine();
    if (credentials[0].equals(user) && credentials[1].equals(pass)) {
      System.out.println("Successful login!");
    } else {
      System.out.println("Wrong login!\nUsername or password incorrect.");
    }
  }
}
