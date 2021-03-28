const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
   
    it("should create a new engineer object with name, id, email, and github", () => {
     
        const name ="Bill";
        const id = "101";
        const email = "bill@test.com"
        const github = "github"
        const bill = new Engineer(name, id, email, github);
        

        expect(bill.name).toEqual(name);
        expect(bill.id).toEqual(id);
        expect(bill.email).toEqual(email);    
        expect(bill.github).toEqual(github);
        
    
    });
    describe('getName method', () => {
        it("should return the inputted engineer.name when engineer.getName is called", () => {
            const name = "John";
            const engineer = new Engineer(name, "202", "test@email.com", "github");

            expect(engineer.getName()).toEqual(name);

        });
    });
    describe('getId method', () => {
        it("should return the inputted engineer.id when engineer.getId is called", () => {
            const id = "303";
            const engineer = new Engineer("John", id, "test@email.com", "github");

            expect(engineer.getId()).toEqual(id);
        
        
        });
    });
    describe('getEmail method', () => {
        it("should return the inputted engineer.email when engineer.getEmail is called", () => {
            const email = "test@email.com";
            const engineer = new Engineer("John", "404", email, "github");

            expect(engineer.getEmail()).toEqual(email);

        
        
        });
    });
    describe('getGithub method', () => {
        it("should return the inputted engineer.github when engineer.getGithub is called", () => {
            const github = "testgithub";
            const engineer = new Engineer("John", "404", "test@email.com", github);

            expect(engineer.getGithub()).toEqual(github);

        
        
        });
    });
    describe('getRole method', () => {
        it("should return the inputted engineer.role when engineer.getRole is called", () => {
            const role = "engineer";
            const engineer = new Engineer("John", "505", "test@email.com", "github", role)
        
            expect(engineer.getRole()).toEqual(role);
        });
    });

  });
});
