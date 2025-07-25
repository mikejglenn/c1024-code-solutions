public class RichestCustomerWealth {
  public static int maximumWealth(int[][] accounts) {
    int maxWealth = 0;

    for (int[] account : accounts) {
      int currentWealth = 0;

      for (int i : account) {
        currentWealth += i;
      }

      maxWealth = Math.max(maxWealth, currentWealth);
    }

    return maxWealth;
  }

  public static void main(String[] args) {
    int[][] account1 = { { 1, 2, 3 }, { 3, 2, 1 } };
    System.out.println("Account1 - Expected: 6, Actual: " + maximumWealth(account1));

    int[][] account2 = { { 1, 5 }, { 7 , 3 }, { 3, 5 } };
    System.out.println("Account2 - Expected: 10, Actual: " + maximumWealth(account2));

    int[][] account3 = { { 2, 8, 7 }, { 7, 1, 3 }, { 1, 9, 5 } };
    System.out.println("Account3 - Expected: 17, Actual: " + maximumWealth(account3));

    int[][] account4 = { { 5, 10, 15, 20 } };
    System.out.println("Account4 - Expected: 50, Actual: " + maximumWealth(account4));

    int[][] account5 = { { 10 }, { 25 }, { 15 } };
    System.out.println("Account5 - Expected: 25, Actual: " + maximumWealth(account5));
  }
}
