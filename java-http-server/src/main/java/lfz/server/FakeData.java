package lfz.server;

import java.util.ArrayList;
import java.util.List;

public class FakeData {
  @SuppressWarnings("unused")
  private final List<Employee> employees = new ArrayList<>(List.of(
      new Employee(1, "Leonardo da Vinci", true),
      new Employee(12, "Pablo Picasso", false),
      new Employee(33, "Vincent van Gogh", false),
      new Employee(24, "Michelangelo", false),
      new Employee(54, "Yayoi Kusama", false),
      new Employee(16, "Jackson Pollock", false)));

  public List<Employee> all() {
    return new ArrayList<>(employees);
  }

  public Employee one(long id) {
    int index = findIndex(id);
    return index >= 0 ? employees.get(index) : null;
  }

  public Employee create(Employee employee) {
    employees.add(employee);
    return employee;
  }

  public Employee update(long id, Employee newEmployee) {
    int index = findIndex(id);
    if (index >= 0) {
      employees.set(index, newEmployee);
      return newEmployee;
    }
    return null;
  }

  public boolean delete(long id) {
    int index = findIndex(id);
    if (index >= 0) {
      employees.remove(index);
      return true;
    }
    return false;
  }

  private int findIndex(long id) {
    for (int i = 0; i < employees.size(); i++) {
      if (employees.get(i).id() == id) {
        return i;
      }
    }
    return -1;
  }
}
