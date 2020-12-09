const Employee = require("../lib/Employee");

// is employee.js an object? 
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  // Arrange
  const name = "Alice";

  // Act (calling the constructor)
  const e = new Employee(name);

  // Assert (and expext our name property is equal to the name passed in)
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {

  // Arrange (faking ID, arbitrary value)
  const testValue = 100;

  // Act (test name added, create object)
  const e = new Employee("Foo", testValue);

  // Assert (that it has that expected value)
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {

  // Arrange (test value for the email)
  const testValue = "test@test.com";

  // Act (create an employee object that includes email)
  const e = new Employee("Foo", 1, testValue);

  // Assert (object now has email property=testemail)
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {

  // Arrange (test value)
  const testValue = "Alice";
  const e = new Employee(testValue);

  // Act (calling gitname action)
  const result = e.getName();

  // Assert (test value correct)
  expect(result).toBe(testValue);
});

test("Can get id via getId()", () => {

  // Arrange
  const testValue = 100;
  const e = new Employee("Foo", testValue);

  // Act
  const result = e.getID();

  // Assert
  expect(result).toBe(testValue);
});

test("Can get email via getEmail()", () => {

  // Arrange
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);

  // Act
  const result = e.getEmail();

  // Assert
  expect(result).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
