import java.util.*;

public class TwoSum {
  public static List<Integer> twoSum(List<Integer> nums, int target) {
    System.out.println("twoSum(" + nums + ", " + target + ") = ");

    Map<Integer, Integer> numToIndex = new HashMap<>();

    for (int i = 0; i < nums.size(); i++) {
      int num = nums.get(i);
      int complement = target - num;

      if (numToIndex.containsKey(complement)) {
        return Arrays.asList(numToIndex.get(complement), i);
      }

      numToIndex.put(num, i);
    }

    return new ArrayList<>();
  }

  public static void main(String[] args) {
    List<Integer> result1 = twoSum(Arrays.asList(2, 7, 11, 15), 9);
    System.out.println(result1);

    List<Integer> result2 = twoSum(Arrays.asList(2, 7, 11, 15), 26);
    System.out.println(result2);

    List<Integer> result3 = twoSum(Arrays.asList(3, 2, 4), 6);
    System.out.println(result3);

    List<Integer> result4 = twoSum(Arrays.asList(3, 3), 6);
    System.out.println(result4);

    List<Integer> result5 = twoSum(Arrays.asList(3, 2, 4), 8);
    System.out.println(result5);
  }
}
