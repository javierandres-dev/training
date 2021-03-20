
// Order an array using quick sort technique
import java.util.Scanner;
import java.util.Arrays;

public class QuickSort {
  public static void main(String[] args) {
    // Get input data
    Scanner input = new Scanner(System.in);
    int n = Integer.parseInt(input.nextLine());
    String nn = input.nextLine();
    input.close();
    // Format data to handle
    String arr[] = nn.split(" ");
    int numbers[] = new int[n];
    for (int i = 0; i < n; i++) {
      numbers[i] = Integer.parseInt(arr[i]);
    }
    System.out.println("Unordered: " + Arrays.toString(numbers));
    // Quick sort technique - Using recursion
    organize(numbers, 0, n - 1);
    // Print result
    System.out.println("Ordered: " + Arrays.toString(numbers));
  }

  public static void organize(int arr[], int left, int right) {
    if (left < right) {
      int start = section_sort(arr, left, right);
      organize(arr, left, start - 1);
      organize(arr, start + 1, right);
    }
  }

  public static int section_sort(int arr[], int left, int right) {
    int pivot = arr[right];
    int element = (left - 1);
    for (int i = left; i < right; i++) {
      if (arr[i] < pivot) {
        element++;
        int buffer = arr[element];
        arr[element] = arr[i];
        arr[i] = buffer;
      }
    }
    element++;
    int buffer = arr[element];
    arr[element] = arr[right];
    arr[right] = buffer;
    return element;
  }
}
