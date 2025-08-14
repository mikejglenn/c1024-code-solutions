import java.sql.*;
import java.util.ArrayList;
import java.util.List;

record Book(
  int bookId,
  String title,
  String author,
  Date publishDate) {

  Book(ResultSet rs) throws SQLException {
    this(
      rs.getInt("bookid"),
      rs.getString("title"),
      rs.getString("author"),
      rs.getDate("published")
    );
  }
}

public class JDBC {
  private Connection conn;

  public void createConnection() throws SQLException {
    String url = "jdbc:postgresql:books";
    conn = DriverManager.getConnection(url, "dev", "dev");
  }

  public Book createBook(String title, String author, Date publishDate) throws SQLException {
    String sql = "INSERT INTO books (title, author, published) VALUES (?, ?, ?) RETURNING *";

    try (PreparedStatement stmt = conn.prepareStatement(sql)) {
      stmt.setString(1, title);
      stmt.setString(2, author);
      stmt.setDate(3, publishDate);

      try (ResultSet rs = stmt.executeQuery()) {
        if (rs.next()) {
          return new Book(rs);
        }
        return null;
      }
    }
  }

  public Book readBook(int bookId) throws SQLException {
    String sql = "SELECT * FROM books WHERE bookid = ?";

    try (PreparedStatement stmt = conn.prepareStatement(sql)) {
      stmt.setInt(1, bookId);

      try (ResultSet rs = stmt.executeQuery()) {
        if (rs.next()) {
          return new Book(rs);
        }
        return null;
      }
    }
  }

  public Book updateBook(Book book) throws SQLException {
    String sql = "UPDATE books SET title = ?, author = ?, published = ? WHERE bookid = ? RETURNING *";

    try (PreparedStatement stmt = conn.prepareStatement(sql)) {
      stmt.setString(1, book.title());
      stmt.setString(2, book.author());
      stmt.setDate(3, book.publishDate());
      stmt.setInt(4, book.bookId());

      try (ResultSet rs = stmt.executeQuery()) {
        if (rs.next()) {
          return new Book(rs);
        }
        return null;
      }
    }
  }

  public boolean deleteBook(int bookId) throws SQLException {
    String sql = "DELETE FROM books WHERE bookid = ? RETURNING *";

    try (PreparedStatement stmt = conn.prepareStatement(sql)) {
      stmt.setInt(1, bookId);

      try (ResultSet rs = stmt.executeQuery()) {
        return rs.next();
      }
    }
  }

  public List<Book> readBooks() throws SQLException {
    String sql = "SELECT * FROM books ORDER BY bookid";
    List<Book> books = new ArrayList<>();

    try (PreparedStatement stmt = conn.prepareStatement(sql);
         ResultSet rs = stmt.executeQuery()) {

      while (rs.next()) {
        books.add(new Book(rs));
      }
    }

    return books;
  }

  public void deleteBooks() throws SQLException {
    String sql = "DELETE FROM books";

    try (PreparedStatement stmt = conn.prepareStatement(sql)) {
      stmt.executeUpdate();
    }
  }

  public static void main(String[] args) throws SQLException {
    JDBC main = new JDBC();

    main.createConnection();
    main.deleteBooks();
    System.out.println("After delete all");
    System.out.println(main.readBooks()); // expect []

    Book b = main.createBook("Foo", "Authfoo", Date.valueOf("2024-03-01"));
    System.out.println("After create Foo");
    System.out.println(b); // expect created Book
    System.out.println(main.readBook(b.bookId())); // expect Foo Book
    System.out.println(main.readBooks()); // expect 1 Book

    b = main.createBook("Bar", "Authbar", Date.valueOf("2024-03-01"));
    System.out.println("After create Bar");
    System.out.println(b); // expect created Book
    System.out.println(main.readBook(b.bookId())); // expect Bar Book
    System.out.println(main.readBooks()); // expect 2 Books
    System.out.println(main.readBook(b.bookId() + 1)); // expect null

    Book c = new Book(b.bookId(), "NewBar", b.author(), b.publishDate());
    Book updated = main.updateBook(c);
    System.out.println("After update Bar");
    System.out.println(updated); // expect updated Book
    System.out.println(main.readBooks()); // expect 2 Books, updated

    boolean deleted = main.deleteBook(c.bookId());
    System.out.println("After delete Bar");
    System.out.println(deleted); // expect true
    System.out.println(main.readBooks()); // expect 1 Book

    deleted = main.deleteBook(c.bookId());
    System.out.println("After re-delete Bar");
    System.out.println(deleted); // expect false
    System.out.println(main.readBooks()); // expect 1 Book
  }
}
