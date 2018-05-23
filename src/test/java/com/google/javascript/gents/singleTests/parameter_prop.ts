type Foo = string;

class A {
  a: number;
  b: any;
  c: number;
  private parameterPropWithInferredType: any;

  constructor(a: number, b: number, c, parameterPropWithInferredType: Foo) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.parameterPropWithInferredType = parameterPropWithInferredType;
  }
}

class B {
  a: number;
  b: number;
  protected c: number;
  private d: number;
  e: number;

  constructor(a: number, b: number, c: number, d: number, e: number) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
  }
}
