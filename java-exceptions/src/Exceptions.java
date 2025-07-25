public class Exceptions {
  class TryException extends Exception {
  }

  void tryMe() throws TryException {
    if (Math.random() > 0.5) {
      return;
    }
    if (Math.random() > 0.25) {
      throw new TryException();
    }
    throw new RuntimeException();
  }

  void nestedTry() throws TryException {
    tryMe();
  }

  public static void main(String[] args) {
    Exceptions exc = new Exceptions();

    System.out.println("Direct calls to tryMe():");
    int attempts1 = 0, successes1 = 0, failures1 = 0, errors1 = 0;

    for (int i = 0; i < 1000; i++) {
      attempts1++;
      try {
        exc.tryMe();
        successes1++;
      } catch (TryException e) {
        failures1++;
      } catch (RuntimeException e) {
        errors1++;
      }
    }

    String report = "Attempts: %s; Successes: %s; Failures: %s; Errors: %s%n";
    System.out.format(report, attempts1, successes1, failures1, errors1);

    System.out.format("Success rate: %.1f%%, Failure rate: %.1f%%, Error rate: %.1f%%%n%n",
      (successes1 * 100.0 / attempts1), (failures1 * 100.0 / attempts1), (errors1 * 100.0 / attempts1));

    System.out.println("Calls to nestedTry():");
    int attempts2 = 0, successes2 = 0, failures2 = 0, errors2 = 0;

    for (int i = 0; i < 1000; i++) {
      attempts2++;
      try {
        exc.nestedTry();
        successes2++;
      } catch (TryException e) {
        failures2++;
      } catch (RuntimeException e) {
        errors2++;
      }
    }

    System.out.format(report, attempts2, successes2, failures2, errors2);

    System.out.format("Success rate: %.1f%%, Failure rate: %.1f%%, Error rate: %.1f%%%n",
      (successes2 * 100.0 / attempts2), (failures2 * 100.0 / attempts2), (errors2 * 100.0 / attempts2));
  }
}
