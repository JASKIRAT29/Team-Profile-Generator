const Employee = require("../lib/Employee");
describe("Employee", () => {
  
  describe("Employee information", () => {
    it("Creates an object with name, id, and email properties", () => {
      const employee = new Employee("Jaskirat", 1, "jaskiratkr29@gmail.com");
      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("Jaskirat");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("jaskiratkr29@gmail.com");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const employee = new Employee("Jaskirat", 1, "jaskiratkr29@gmail.com");
     expect(employee.getName()).toEqual("Jaskirat");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const employee = new Employee("Jaskirat", 1, "jaskiratkr29@gmail.com");
     expect(employee.getID()).toEqual(1);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const employee = new Employee("Jaskirat", 1, "jaskiratkr29@gmail.com");
     expect(employee.getEmail()).toEqual("jaskiratkr29@gmail.com");
    });
  });


  describe("getRole", () => {
    it("Should return the string 'Employee'", () => {
      const employee = new Employee("Jaskirat", 1, "jaskiratkr29@gmail.com");
     expect(employee.getRole()).toEqual("Employee");
    });
  });
});