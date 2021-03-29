const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
   
    it("should create a new employee object with name, id, and email", () => {
     
        const name ="Bill";
        const id = "101";
        const email = "bill@test.com"
        const bill = new Employee(name, id, email);
        
        expect(bill.name).toEqual(name);
        expect(bill.id).toEqual(id);
        expect(bill.email).toEqual(email);    

        
    
        });
    });
    describe('getName method', () => {
        it("should return the inputted employee.name when employee.getName is called", () => {
            const name = "John";
            const employee = new Employee(name, "202", "test@email.com");

            expect(employee.getName()).toEqual(name);

        });
    });
    describe('getId method', () => {
        it("should return the inputted employee.id when employee.getId is called", () => {
            const id = "303";
            const employee = new Employee("John", id, "test@email.com");

            expect(employee.getId()).toEqual(id);
        
        
        });
    });
    describe('getEmail method', () => {
        it("should return the inputted employee.email when employee.getEmail is called", () => {
            const email = "test@email.com";
            const employee = new Employee("John", "404", email);

            expect(employee.getEmail()).toEqual(email);

        
        
        });
    });
    describe('getRole method', () => {
        it("should return the inputted employee when employee.getRole is called", () => {
            const role = "Employee";
            const employee = new Employee("John", "505", "test@email.com")
        
            expect(employee.getRole()).toEqual(role);
        });
    });

  });

