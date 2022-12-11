const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe("Intern", () => {
  
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id, email, and school properties", () => {
      const intern = new Intern("Jaskirat", 1, "jaskirat@gmail.com", "University of toronto");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("Jaskirat");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("jaskirat@gmail.com");
      expect(intern.school).toEqual("University of toronto");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const intern = new Intern("Jaskirat", 1, "jaskirat@gmail.com", "University of Richmond");
expect(intern.getName()).toEqual("Jaskirat");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const intern = new Intern("Jaskirat", 1, "jaskirat@gmail.com", "University of Toronto");
expect(intern.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const intern = new Intern("Jaskirat", 1, "jaskirat@gmail.com", "University of toronto");
expect(intern.getEmail()).toEqual("jaskirat@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("Should return the object's school property", () => {
      const intern = new Intern("Jaskirat", 1, "jaskirat@gmail.com", "University of toronto");
expect(intern.getSchool()).toEqual("University of toronto");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Intern", () => {
      const intern = new Intern("Jaskirat", 1, "jaskirat@gmail.com", "University of toronto");
expect(intern.getRole()).toEqual("Intern");
    });
  });
});