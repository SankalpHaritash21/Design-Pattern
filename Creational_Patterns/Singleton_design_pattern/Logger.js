class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push({ message, timestamp: new Date() });
  }

  printLogs() {
    this.logs.forEach((log) => {
      console.log(`${log.timestamp.toISOString()}: ${log.message}`);
    });
  }
}

const loggerInstance = new Logger();
Object.freeze(loggerInstance);

export default loggerInstance;

//Java
/*
public class Singleton {

    Private constructor to prevent instantiation
    private Singleton() {
    }

    Static inner class for holding the instance
    private static class SingletonHolder {
        private static final Singleton INSTANCE = new Singleton();
    }

    Public method to get the instance
    public static Singleton getInstance() {
        return SingletonHolder.INSTANCE;
    }

    Example method
    public void someMethod() {
        System.out.println("Doing something...");
    }
}

*/
