const Employee = require("../lib/Employee")

describe ("Employee", () => {
    describe("Initialization", () => {
        it("should instantiate an employee instance", () => {
            //Arrange
            const employee = new Employee()
            //Act

            //Assert
            expect(typeof employee).toBe("object")
        });

        it("should set name via constructor arguments", () => {
            // Arrange
            const name = "Freddie";
            //Act
            const employee = new Employee(name);
            //Assert
            expect(employee.name).toBe(name);
        });

        it("should set id via constructor arguments", () => {
            //Arrange
            const id = 134;
            //Act
            const employee = new Employee("Freddie", id);
            //Assert
            expect(employee.id).toBe(id);
        });

        it("should set email via constructor arguments", () => {
            //Arrange
            const email = "testemail@test.com";
            //Act
            const employee = new Employee("Freddie", 134, email);
            //Assert
            expect(employee.email).toBe(email);
        });
    });

    describe("Getter methods", () => {
        it("should get name via getName()", () => {
            //Arrange
            const name = "Freddie";
            //Act
            const employee = new Employee(name, 134, "testemail@test.com");
            const employeeName = employee.getName();
            //Assert
            expect(employeeName).toBe(name);
        });

        it("should get id via getId()", () => {
            //Arrange
            const id = 134;
            //Act
            const employee = new Employee("Freddie", id, "testemail@test.com");
            const employeeId = employee.getId();
            //Assert
            expect(employeeId).toBe(id);
        });

        it("should get email via getEmail()", () => {
            //Arrange
            const email = "testemail@test.com";
            //Act
            const employee = new Employee("Freddie", 134, email);
            const employeeEmail = employee.getEmail();
            //Assert
            expect(employeeEmail).toBe(email);
        });

        it("should get role via getRole()", () => {
            //Arrange
            const role = "Employee";
            //Act
            const employee = new Employee("Freddie", 134, "testemail@test.com");
            const employeeRole = employee.getRole();
            //Assert
            expect(employeeRole).toBe(role);
        });
    })
});

