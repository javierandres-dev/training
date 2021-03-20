package duke.choice;

import java.util.Arrays;

public class ShopApp {

    public static void main(String[] args) {
        int average = 0;
        int count = 0;

        Customer c1 = new Customer("Pinky", 8);

        Clothing item1 = new Clothing("Blue Jacket", 20.9, "M");
        Clothing item2 = new Clothing("Orange T-Shirt", 10.5, "S");
        Clothing item3 = new Clothing("Green Scarf", 5, "S");
        Clothing item4 = new Clothing("Blue T-Shirt", 10.5, "S");
        Clothing[] items = {item1, item2, item3, item4};

        c1.addItems(items);

        Arrays.sort(c1.getItems());

        System.out.println("Welcome to Duke Choice Shop!");
        System.out.println("CUSTOMER\n" + c1.getName() + ", " + c1.getSize()
                + ", " + c1.getTotalClothingCost());
        System.out.println("MIN PRICE: " + Clothing.MIN_PRICE);
        for (Clothing item : c1.getItems()) {
            count++;
            average += item.getPrice();
            System.out.println("ITEM OUTPUT: " + item);
        }
        try {
            average = (count == 0) ? 0 : average / count;
            System.out.println("AVERAGE PRICE: " + average + ", COUNT: " + count);
        } catch (ArithmeticException e) {
            System.out.print("Don't divide by 0. e = ");
            System.out.println(e);
        }
    }
}
