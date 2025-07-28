package util;

import java.util.ArrayList;
import java.util.Collections;

public class Dictionary<V> {
  private class Entry {
    String key;
    V value;

    Entry(String key, V value) {
      this.key = key;
      this.value = value;
    }
  }

  final int size = 10;
  private ArrayList<Entry> entries;

  public Dictionary() {
    entries = new ArrayList<>(Collections.nCopies(size, null));
  }

  public void add(String key, V value) {
    int index = hash(key);
    entries.set(index, new Entry(key, value));
  }

  public V get(String key) {
    int index = hash(key);
    Entry entry = entries.get(index);
    return entry != null ? entry.value : null;
  }

  private int hash(String key) {
    return Math.abs(key.hashCode()) % size;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    for (Entry entry : entries) {
      if (entry != null) {
        sb.append(String.format("%s\t%s%n", entry.key, entry.value));
      }
    }
    return sb.toString();
  }
}
