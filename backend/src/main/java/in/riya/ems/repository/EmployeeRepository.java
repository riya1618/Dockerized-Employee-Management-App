package in.riya.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.riya.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
