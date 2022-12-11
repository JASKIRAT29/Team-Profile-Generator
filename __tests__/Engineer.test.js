const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

describe("Engineer information", () => {
    it("Creates an object with name, id, email, and github properties", () => {
    const engineer = new Engineer("Jaskirat", 1, "jaskirat@gmail.com", "jaskiratgit");
       expect(engineer).toBeInstanceOf(Engineer);
            expect(engineer.name).toEqual("Jaskirat");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("jaskirat@gmail.com");
            expect(engineer.github).toEqual("jaskiratgit");
          });
        });
      describe("getName", () => {
          it("Should return the object's name property", () => {
            const engineer = new Engineer("Jaskirat", 1, "jaskirat@gmail.com", "jaskiratgit");
      
            expect(engineer.getName()).toEqual("Jaskirat");
          });
        });
      
        
        describe("getId", () => {
          it("Should return the object's id property", () => {
            const engineer = new Engineer("Jaskirat", 1, "jaskiratkr29@gmail.com", "jaskiratgit");
      expect(engineer.getID()).toEqual(1);
          });
        });
      
        
        describe("getEmail", () => {
          it("Should return the object's email property", () => {
            const engineer = new Engineer("Jaskirat", 1, "jaskiratkr29@gmail.com", "jaskiratgit");
      expect(engineer.getEmail()).toEqual("jaskirat@gmail.com");
          });
        });
      
       describe("getGithub", () => {
          it("Should return the object's github property", () => {
            const engineer = new Engineer("Jaskirat", 1, "jaskirat@gmail.com", "jaskiratgit");
      expect(engineer.getGithub()).toEqual("jaskiratgit");
          });
        });
      
        
        describe("getRole", () => {
          it("Should return the string 'Engineer", () => {
            const engineer = new Engineer("Jaskirat", 1, "jaskirat@gmail.com", "jaskiratgit");
      
            expect(engineer.getRole()).toEqual("Engineer");
          });
        });
      });"