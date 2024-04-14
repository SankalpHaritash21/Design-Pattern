class UserProfile {
  constructor(builder) {
    this.name = builder.name;
    this.email = builder.email;
    this.address = builder.address;
    this.age = builder.age;
    this.phone = builder.phone;
    this.company = builder.company;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class UserProfileBuilder {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  setCompany(company) {
    this.company = company;
    return this;
  }

  build() {
    return new UserProfile(this);
  }
}

// Usage
const user1 = new UserProfileBuilder("John Doe", "john.doe@example.com")
  .setAddress("1234 Elm Street")
  .setAge(30)
  .setPhone("123-456-7890")
  .setCompany("Example Corp")
  .build();

console.log(user1.toString());
