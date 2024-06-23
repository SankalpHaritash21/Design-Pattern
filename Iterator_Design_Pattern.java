import java.util.*;
// Define the Iterator interface
interface Iterator<T> {
    boolean hasNext();
    T next();
}

// Define the Aggregate interface
interface Aggregate<T> {
    Iterator<T> iterator();
}

// Define the Concrete Iterator class
class ConcreteIterator<T> implements Iterator<T> {
    private T[] elements;
    private int index = 0;

    public ConcreteIterator(T[] elements) {
        this.elements = elements;
    }

    public boolean hasNext() {
        return index < elements.length;
    }

    public T next() {
        if (hasNext()) {
            return elements[index++];
        }
        throw new NoSuchElementException("No more elements");
    }
}

// Define the Concrete Aggregate class
class ConcreteAggregate<T> implements Aggregate<T> {
    private T[] elements;

    public ConcreteAggregate(T[] elements) {
        this.elements = elements;
    }

    public Iterator<T> iterator() {
        return new ConcreteIterator<>(elements);
    }
}

// Usage
class Main {
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5};
        Aggregate<Integer> aggregate = new ConcreteAggregate<>(array);
        Iterator<Integer> iterator = aggregate.iterator();

        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}