const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set github via constructor arguments", () => {
            //Arrange
            const github = "mschmitzzz";
            //Act
            const engineer = new Engineer ("Mac", 1, "email@email.com", github);
            //Assert
            expect(engineer.github).toBe(github)
        })
    })
    describe("Getter methods", () => {
        it("should get github via getGithub", () => {
            //Arrange
            const github = "mschmitzzz";
            //Act
            const engineer = new Engineer ("Mac", 1, "email@email.com", github);
            const engineerGithub = engineer.getGithub()
            //Assert
            expect(engineerGithub).toBe(github)
        });
        it("should get role via getRole()", () => {
            //Arrange
            const role = "Engineer";
            //Act
            const engineer = new Engineer("Mac", 134, "testemail@test.com", "mschmitzzz");
            const engineerRole = engineer.getRole();
            //Assert
            expect(engineerRole).toBe(role);
        });
    });
});