public class Dictionary<V> {
  private final int SIZE = 10;
  private String[] keys;
  private V[] values;

  @SuppressWarnings("unchecked")
  public Dictionary() {
    keys = new String[SIZE];
    values = (V[]) new Object[SIZE];
  }

  private int getIndex(String key) {
    return Math.abs(key.hashCode()) % SIZE;
  }

  private void add(String key, V value) {
    int index = getIndex(key);
    keys[index] = key;
    values[index] = value;
  }

  public V get(String key) {
    int index = getIndex(key);
    if (keys[index] != null && keys[index].equals(key)) {
      return values[index];
    }
    return null;
  }

  public void describe() {
    for (int i = 0; i < SIZE; i++) {
      if (keys[i] != null && values[i] != null) {
        System.out.format("%s\t%s%n", keys[i], values[i]);
      }
    }
  }

  public static void main(String[] args) {
    System.out.println("Integers");
    Dictionary<Integer> ints = new Dictionary<>();
    ints.add("age", 3);
    ints.add("height", 40);

    ints.describe();

    System.out.println();
    System.out.println("Strings");
    Dictionary<String> strings = new Dictionary<>();
    strings.add("bff", "Debbie");
    strings.add("foe", "Foo");

    strings.describe();

    System.out.println();
    System.out.println("Doubles");
    Dictionary<Double> doubles = new Dictionary<>();
    doubles.add("pi", 3.14159);
    doubles.add("e", 2.71828);

    doubles.describe();

    System.out.println();
    System.out.println("Testing get method:");
    System.out.println("Age: " + ints.get("age"));
    System.out.println("BFF: " + strings.get("bff"));
    System.out.println("Pi: " + doubles.get("pi"));
    System.out.println("Non-existent key: " + ints.get("nonexistent"));
  }

}
