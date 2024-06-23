// Define the Command interface
interface Command {
    void execute();
}

// Define Concrete Command classes
class LightOnCommand implements Command {
    private Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        light.turnOn();
    }
}

class LightOffCommand implements Command {
    private Light light;

    public LightOffCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        light.turnOff();
    }
}

// Define the Receiver
class Light {
    public void turnOn() {
        System.out.println("Light is on");
    }

    public void turnOff() {
        System.out.println("Light is off");
    }
}

// Define the Invoker
class RemoteControl {
    private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void pressButton() {
        command.execute();
    }
}

// Usage
class Main {
    public static void main(String[] args) {
        // Create receiver
        Light light = new Light();

        // Create concrete command objects
        Command turnOnCommand = new LightOnCommand(light);
        Command turnOffCommand = new LightOffCommand(light);

        // Create invoker
        RemoteControl remoteControl = new RemoteControl();

        // Execute commands
        remoteControl.setCommand(turnOnCommand);
        remoteControl.pressButton(); // Light is on

        remoteControl.setCommand(turnOffCommand);
        remoteControl.pressButton(); // Light is off
    }
}