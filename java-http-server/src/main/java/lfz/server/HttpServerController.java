package lfz.server;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class HttpServerController {
  private final AtomicLong counter = new AtomicLong(100);
  private final FakeData data = new FakeData();

  @GetMapping("/api/employees")
  List<Employee> all() {
    return data.all();
  }

  @GetMapping("/api/employees/{id}")
  Employee one(@PathVariable Long id) {
    Employee employee = data.one(id);
    if (employee == null) {
      throw new EmployeeNotFoundException(id);
    }
    return employee;
  }

  @PostMapping("/api/employees")
  Employee newEmployee(@RequestBody Employee newEmployee) {
    Employee employeeWithId = new Employee(counter.incrementAndGet(),
      newEmployee.name(),
      newEmployee.isManager());
    return data.create(employeeWithId);
  }

  @PutMapping("/api/employees/{id}")
  Employee replaceEmployee(@PathVariable Long id, @RequestBody Employee newEmployee) {
    if (!id.equals(newEmployee.id())) {
      throw new EmployeeNotFoundException(id);
    }
    Employee updatedEmployee = data.update(id, newEmployee);
    if (updatedEmployee == null) {
      throw new EmployeeNotFoundException(id);
    }
    return updatedEmployee;
  }

  @DeleteMapping("/api/employees/{id}")
  void deleteEmployee(@PathVariable Long id) {
    boolean deleted = data.delete(id);
    if (!deleted) {
      throw new EmployeeNotFoundException(id);
    }
  }
}
