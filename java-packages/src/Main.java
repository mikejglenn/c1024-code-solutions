import util.Dictionary;

public class Main {
  public static void main(String[] args) {
    System.out.println("Integers");
    Dictionary<Integer> ints = new Dictionary<>();
    ints.add("age", 3);
    ints.add("height", 40);

    System.out.println(ints);

    System.out.println("Strings");
    Dictionary<String> strings = new Dictionary<>();
    strings.add("bff", "Debbie");
    strings.add("foe", "Foo");

    System.out.println(strings);
  }
}
