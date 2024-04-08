// Abstract Factory Interface
class UIFactory {
  createButton() {}
  createCheckbox() {}
}

// Concrete Factory 1 for Light Theme
class LightThemeFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }
  createCheckbox() {
    return new LightCheckbox();
  }
}

// Concrete Factory 2 for Dark Theme
class DarkThemeFactory extends UIFactory {
  createButton() {
    return new DarkButton();
  }
  createCheckbox() {
    return new DarkCheckbox();
  }
}

// Abstract Product A
class Button {
  click() {}
}

// Abstract Product B
class Checkbox {
  check() {}
}

// Concrete Product A1
class LightButton extends Button {
  click() {
    console.log("Light Button clicked");
  }
}

// Concrete Product B1
class LightCheckbox extends Checkbox {
  check() {
    console.log("Light Checkbox checked");
  }
}

// Concrete Product A2
class DarkButton extends Button {
  click() {
    console.log("Dark Button clicked");
  }
}

// Concrete Product B2
class DarkCheckbox extends Checkbox {
  check() {
    console.log("Dark Checkbox checked");
  }
}

// Client code
function application(factory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.click();
  checkbox.check();
}

// Example usage
const lightThemeFactory = new LightThemeFactory();
application(lightThemeFactory);

const darkThemeFactory = new DarkThemeFactory();
application(darkThemeFactory);
