# typed-object-interfaces
Typed object interfaces. Types for plain objects.

# Examples

```typescript
import { NumberObject } from 'typed-object-interfaces';
  
/** key is a User ID, value is Age of the User */
let userAges: NumberObject = {};
  
userAges[ 1 ]   = 13;   // ok
userAges[ '2' ] = 45;   // ok
userAges[ 3 ]   = '45'; // error
```

# Source Code
```typescript
export interface NumberObject {
  [name: string]: number;
  [name: number]: number;
}

export interface StringObject {
  [name: string]: string;
  [name: number]: string;
}

export interface BooleanObject {
  [name: string]: boolean;
  [name: number]: boolean;
}

export interface DefaultObject {
  [name: string]: string | number;
  [name: number]: string | number;
}

export interface StdObject {
  [name: string]: string | number | boolean;
  [name: number]: string | number | boolean;
}

export interface AnyObject {
  [name: string]: any;
  [name: number]: any;
}

export interface TypeObject<T> {
  [name: string]: T;
  [name: number]: T;
}

export interface ArrayObject<T> {
  [name: string]: T[];
  [name: number]: T[];
}
```
