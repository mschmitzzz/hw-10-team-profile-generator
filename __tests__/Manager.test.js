const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set office number via constructor arguments", () => {
            //Arrange
            const officeNumber = 100;
            //Act
            const manager = new Manager ("Terique", 1, "email@email.com", officeNumber);
            //Assert
            expect(manager.officeNumber).toBe(officeNumber)
        })
    })
    describe("Getter methods", () => {
        it("should get office number via getOffice", () => {
            //Arrange
            const officeNumber = 134;
            //Act
            const manager = new Manager ("Tyrique", 1, "email@email.com", officeNumber);
            const managerOfficeNumber = manager.getOffice()
            //Assert
            expect(managerOfficeNumber).toBe(officeNumber)
        });
        it("should get role via getRole()", () => {
            //Arrange
            const role = "Manager";
            //Act
            const manager = new Manager("Freddie", 134, "testemail@test.com", 100);
            const managerRole = manager.getRole();
            //Assert
            expect(managerRole).toBe(role);
        });
    });
});