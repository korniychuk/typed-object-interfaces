export interface NumberObject {
  [name: string]: number;
}

export interface StringObject {
  [name: string]: string;
}

export interface BooleanObject {
  [name: string]: boolean;
}

export interface DefaultObject {
  [name: string]: string | number;
}

export interface StdObject {
  [name: string]: string | number | boolean;
}

export interface AnyObject {
  [name: string]: any;
}

export interface ArrayObject<A> {
  [name: string]: Array<A>;
}
