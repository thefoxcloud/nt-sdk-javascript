class TestClass {
  private data: string;
  constructor(data: string) {
    this.data = data;
  }

  public writeDown() {
    console.log(this.data);
  }
}

export default TestClass;
