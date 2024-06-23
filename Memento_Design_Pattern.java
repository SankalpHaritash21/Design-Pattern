// Memento object
class TextMemento {
    private final String state;

    public TextMemento(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }
}

// Originator
class TextEditor {
    private String text;

    public void write(String text) {
        this.text = text;
    }

    public TextMemento save() {
        return new TextMemento(text);
    }

    public void restore(TextMemento memento) {
        text = memento.getState();
    }

    public String getText() {
        return text;
    }
}

// Caretaker
class History {
    private final List<TextMemento> mementos = new ArrayList<>();

    public void save(TextMemento memento) {
        mementos.add(memento);
    }

    public TextMemento getLastSaved() {
        if (!mementos.isEmpty()) {
            return mementos.remove(mementos.size() - 1);
        }
        return null;
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
        History history = new History();

        editor.write("Hello");
        history.save(editor.save());
        
        editor.write("Hello World");
        history.save(editor.save());

        editor.write("Hello World!");
        editor.restore(history.getLastSaved());

        System.out.println(editor.getText());  // Output: Hello World
    }
}