const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Initialization', () => {
   
    it("should create a new manager object with name, id, email, and school", () => {
     
        const name ="Bill";
        const id = "101";
        const email = "bill@test.com"
        const officeNumber = "officenumber"
        const bill = new Intern(name, id, email, officeNumber);
        

        expect(bill.name).toEqual(name);
        expect(bill.id).toEqual(id);
        expect(bill.email).toEqual(email);
        expect(bill.officeNumber).toEqual(officeNumber)    

        
    
    });
    describe('getName method', () => {
        it("should return the inputted manager.name when manager.getName is called", () => {
            const name = "John";
            const manager = new Manager(name, "202", "test@email.com");

            expect(manager.getName()).toEqual(name);

        });
    });
    describe('getId method', () => {
        it("should return the inputted manager.id when manager.getId is called", () => {
            const id = "303";
            const manager = new Manager("John", id, "test@email.com");

            expect(manager.getId()).toEqual(id);
        
        
        });
    });
    describe('getEmail method', () => {
        it("should return the inputted manager.email when manager.getEmail is called", () => {
            const email = "test@email.com";
            const manager = new Manager("John", "404", email);

            expect(manager.getEmail()).toEqual(email);

        
        
        });
    });
    describe('getOfficeNumber method', () => {
        it("should return the inputted manager.school when manager.getSchool is called", () => {
            const officeNumber = "officenumber";
            const manager = new Manager("John", "404", "test@email.com", officeNumber);

            expect(manager.getOfficeNumber()).toEqual(officeNumber);

        
        
        });
    });
    describe('getRole method', () => {
        it("should return the inputted manager.role when manager.getRole is called", () => {
            const role = "intern";
            const manager = new Manager("John", "505", "test@email.com", "officeNumber", role)
        
            expect(manager.getRole()).toEqual(role);
        });
    });

  });
});
