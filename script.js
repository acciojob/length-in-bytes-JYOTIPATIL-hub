function byteSize(str) {
  // Create a Blob object from the input string
  const blob = new Blob([str]);

  // Return the size of the Blob in bytes
  return blob.size;
}

// Example usage:
console.log(byteSize('hello world')); // Output: 11
console.log(byteSize('안녕하세요')); // Output: 15
console.log(byteSize('')); // Output: 0
