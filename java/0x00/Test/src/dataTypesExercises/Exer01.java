/**
 * Write a Java program to convert temperature
 * from Fahrenheit to Celsius degree.
 */
package dataTypesExercises;

import java.util.Scanner;

public class Exer01 {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    double fahrenheit = 0.0, celsius = 0.0;
    System.out.print("Input a degree in Fahrenheit: ");
    fahrenheit = in.nextDouble();
    in.close();
    celsius = (fahrenheit - 32) / 1.8000;
    System.out.format("%.2f degree Fahrenheit is equal to %.2f in Celsius", fahrenheit, celsius);
  }
}
