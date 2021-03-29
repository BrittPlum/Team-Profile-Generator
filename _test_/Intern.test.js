const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Initialization', () => {
   
    it("should create a new intern object with name, id, email, and school", () => {
     
        const name ="Bill";
        const id = "101";
        const email = "bill@test.com"
        const school = "schoolname"
        const bill = new Intern(name, id, email, school);
        

        expect(bill.name).toEqual(name);
        expect(bill.id).toEqual(id);
        expect(bill.email).toEqual(email);  
        expect(bill.school).toEqual(school);  

        
    
         });
    });
    describe('getName method', () => {
        it("should return the inputted intern.name when intern.getName is called", () => {
            const name = "John";
            const intern = new Intern(name, "202", "test@email.com", "school");

            expect(intern.getName()).toEqual(name);

        });
    });
    describe('getId method', () => {
        it("should return the inputted intern.id when intern.getId is called", () => {
            const id = "303";
            const intern = new Intern("John", id, "test@email.com", "school");

            expect(intern.getId()).toEqual(id);
        
        
        });
    });
    describe('getEmail method', () => {
        it("should return the inputted intern.email when intern.getEmail is called", () => {
            const email = "test@email.com";
            const intern = new Intern("John", "404", email, "school");

            expect(intern.getEmail()).toEqual(email);

        
        
        });
    });
    describe('getSchool method', () => {
        it("should return the inputted intern.school when intern.getSchool is called", () => {
            const school = "schoolname";
            const intern = new Intern("John", "404", "test@email.com", school);

            expect(intern.getSchool()).toEqual(school);

        
        
        });
    });
    describe('getRole method', () => {
        it("should return the inputted intern when intern.getRole is called", () => {
            const role = "Intern";
            const intern = new Intern("John", "505", "test@email.com", "school")
        
            expect(intern.getRole()).toEqual(role);
        });
    });

  });

