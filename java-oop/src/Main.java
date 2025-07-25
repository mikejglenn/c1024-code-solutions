public class Main {
  private class Car {
    private String color;
    private int horsepower;
    private int numDoors;
    private boolean isRunning;

    protected Car(String color, int horsepower, int numDoors) {
      this.color = color;
      this.horsepower = horsepower;
      this.numDoors = numDoors;
      this.isRunning = false;
    }

    public void start() {
      this.isRunning = true;
      System.out.println("Car started!");
    }

    public void accelerate() {
      if (isRunning) {
        System.out.println("Car is accelerating!");
      } else {
        System.out.println("Cannot accelerate - car is not running!");
      }
    }

    public void brake() {
      if (isRunning) {
        System.out.println("Car is braking!");
      } else {
        System.out.println("Car is already stopped!");
      }
    }

    public void stop() {
      this.isRunning = false;
      System.out.println("Car stopped!");
    }

    public String describe() {
      return "color: " + color + "; horsepower: " + horsepower + "; doors: " + numDoors + "; running: " + isRunning;
    }
  }

  public class Sedan extends Car {
    private boolean hasLargeTrunk;

    public Sedan(String color, int horsepower) {
      super(color, horsepower, 4);
      this.hasLargeTrunk = true;
    }

    @Override
    public String describe() {
      return "Sedan - " + super.describe() + "; large trunk: " + hasLargeTrunk;
    }
  }

  public class Coupe extends Car {
    private boolean isSporty;

    public Coupe(String color, int horsepower) {
      super(color, horsepower, 2);
      this.isSporty = horsepower > 300;
    }

    @Override
    public String describe() {
      return "Coupe - " + super.describe() + "; sporty: " + isSporty;
    }
  }

  public static void main(String[] args) {
    Main main = new Main();

    Car sedan = main.new Sedan("Blue", 250);
    Car coupe = main.new Coupe("Red", 350);

    System.out.println(sedan.describe());
    System.out.println(coupe.describe());

    System.out.println("\nDemonstrating car behavior:");
    sedan.start();
    sedan.accelerate();
    sedan.brake();
    sedan.stop();

    System.out.println();
    coupe.start();
    coupe.accelerate();
    coupe.stop();
  }
}
