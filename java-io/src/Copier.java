import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

record CopySpec(String source, String destination) {}

public class Copier {
  private static final int BUFFER_SIZE = 10000; // 10KB buffer

  public void copyFiles(List<CopySpec> copySpecs) {
    for (CopySpec spec : copySpecs) {
      Path sourcePath = Paths.get(spec.source());
      Path destinationPath = Paths.get(spec.destination());

      try {
        copyFile(sourcePath, destinationPath);
      } catch (IOException e) {
        System.err.println("Error copying file from " + sourcePath + " to " + destinationPath + ": " + e.getMessage());
      }
    }
  }

  private void copyFile(Path source, Path destination) throws IOException {
    Path parentDir = destination.getParent();
    if (parentDir != null && !Files.exists(parentDir)) {
      Files.createDirectories(parentDir);
    }

    try (InputStream inputStream = Files.newInputStream(source);
         OutputStream outputStream = Files.newOutputStream(destination)) {

      byte[] buffer;

      do {
        buffer = inputStream.readNBytes(BUFFER_SIZE);
        outputStream.write(buffer);
      } while (buffer.length > 0);

      System.out.println("Successfully copied:");
      System.out.println("  Source:      " + source.toAbsolutePath());
      System.out.println("  Destination: " + destination.toAbsolutePath());
      System.out.println();
    }
  }

  public static void main(String[] args) {
    Copier copier = new Copier();

    List<CopySpec> filesToCopy = List.of(
      new CopySpec("src/test.txt", "copies/test.txt"),
      new CopySpec("src/test.svg", "copies/test.svg"),
      new CopySpec("src/test.jpg", "copies/test.jpg")
    );

    System.out.println("Starting file copy operations...\n");
    copier.copyFiles(filesToCopy);
    System.out.println("File copy operations completed!");
  }
}
