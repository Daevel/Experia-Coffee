
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tbl_carrello
 * 
 */
export type tbl_carrello = $Result.DefaultSelection<Prisma.$tbl_carrelloPayload>
/**
 * Model tbl_cliente
 * 
 */
export type tbl_cliente = $Result.DefaultSelection<Prisma.$tbl_clientePayload>
/**
 * Model tbl_corriere
 * 
 */
export type tbl_corriere = $Result.DefaultSelection<Prisma.$tbl_corrierePayload>
/**
 * Model tbl_dipendente
 * 
 */
export type tbl_dipendente = $Result.DefaultSelection<Prisma.$tbl_dipendentePayload>
/**
 * Model tbl_filiale
 * 
 */
export type tbl_filiale = $Result.DefaultSelection<Prisma.$tbl_filialePayload>
/**
 * Model tbl_fornitore
 * 
 */
export type tbl_fornitore = $Result.DefaultSelection<Prisma.$tbl_fornitorePayload>
/**
 * Model tbl_fornitura
 * 
 */
export type tbl_fornitura = $Result.DefaultSelection<Prisma.$tbl_fornituraPayload>
/**
 * Model tbl_ordine
 * 
 */
export type tbl_ordine = $Result.DefaultSelection<Prisma.$tbl_ordinePayload>
/**
 * Model tbl_prodotto
 * 
 */
export type tbl_prodotto = $Result.DefaultSelection<Prisma.$tbl_prodottoPayload>
/**
 * Model tbl_spedizione
 * 
 */
export type tbl_spedizione = $Result.DefaultSelection<Prisma.$tbl_spedizionePayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tbl_carrellos
 * const tbl_carrellos = await prisma.tbl_carrello.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tbl_carrellos
   * const tbl_carrellos = await prisma.tbl_carrello.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tbl_carrello`: Exposes CRUD operations for the **tbl_carrello** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_carrellos
    * const tbl_carrellos = await prisma.tbl_carrello.findMany()
    * ```
    */
  get tbl_carrello(): Prisma.tbl_carrelloDelegate<ExtArgs>;

  /**
   * `prisma.tbl_cliente`: Exposes CRUD operations for the **tbl_cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_clientes
    * const tbl_clientes = await prisma.tbl_cliente.findMany()
    * ```
    */
  get tbl_cliente(): Prisma.tbl_clienteDelegate<ExtArgs>;

  /**
   * `prisma.tbl_corriere`: Exposes CRUD operations for the **tbl_corriere** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_corrieres
    * const tbl_corrieres = await prisma.tbl_corriere.findMany()
    * ```
    */
  get tbl_corriere(): Prisma.tbl_corriereDelegate<ExtArgs>;

  /**
   * `prisma.tbl_dipendente`: Exposes CRUD operations for the **tbl_dipendente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_dipendentes
    * const tbl_dipendentes = await prisma.tbl_dipendente.findMany()
    * ```
    */
  get tbl_dipendente(): Prisma.tbl_dipendenteDelegate<ExtArgs>;

  /**
   * `prisma.tbl_filiale`: Exposes CRUD operations for the **tbl_filiale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_filiales
    * const tbl_filiales = await prisma.tbl_filiale.findMany()
    * ```
    */
  get tbl_filiale(): Prisma.tbl_filialeDelegate<ExtArgs>;

  /**
   * `prisma.tbl_fornitore`: Exposes CRUD operations for the **tbl_fornitore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_fornitores
    * const tbl_fornitores = await prisma.tbl_fornitore.findMany()
    * ```
    */
  get tbl_fornitore(): Prisma.tbl_fornitoreDelegate<ExtArgs>;

  /**
   * `prisma.tbl_fornitura`: Exposes CRUD operations for the **tbl_fornitura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_fornituras
    * const tbl_fornituras = await prisma.tbl_fornitura.findMany()
    * ```
    */
  get tbl_fornitura(): Prisma.tbl_fornituraDelegate<ExtArgs>;

  /**
   * `prisma.tbl_ordine`: Exposes CRUD operations for the **tbl_ordine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_ordines
    * const tbl_ordines = await prisma.tbl_ordine.findMany()
    * ```
    */
  get tbl_ordine(): Prisma.tbl_ordineDelegate<ExtArgs>;

  /**
   * `prisma.tbl_prodotto`: Exposes CRUD operations for the **tbl_prodotto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_prodottos
    * const tbl_prodottos = await prisma.tbl_prodotto.findMany()
    * ```
    */
  get tbl_prodotto(): Prisma.tbl_prodottoDelegate<ExtArgs>;

  /**
   * `prisma.tbl_spedizione`: Exposes CRUD operations for the **tbl_spedizione** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_spediziones
    * const tbl_spediziones = await prisma.tbl_spedizione.findMany()
    * ```
    */
  get tbl_spedizione(): Prisma.tbl_spedizioneDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tbl_carrello: 'tbl_carrello',
    tbl_cliente: 'tbl_cliente',
    tbl_corriere: 'tbl_corriere',
    tbl_dipendente: 'tbl_dipendente',
    tbl_filiale: 'tbl_filiale',
    tbl_fornitore: 'tbl_fornitore',
    tbl_fornitura: 'tbl_fornitura',
    tbl_ordine: 'tbl_ordine',
    tbl_prodotto: 'tbl_prodotto',
    tbl_spedizione: 'tbl_spedizione',
    Profile: 'Profile',
    User: 'User',
    Post: 'Post'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'tbl_carrello' | 'tbl_cliente' | 'tbl_corriere' | 'tbl_dipendente' | 'tbl_filiale' | 'tbl_fornitore' | 'tbl_fornitura' | 'tbl_ordine' | 'tbl_prodotto' | 'tbl_spedizione' | 'profile' | 'user' | 'post'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      tbl_carrello: {
        payload: Prisma.$tbl_carrelloPayload<ExtArgs>
        fields: Prisma.tbl_carrelloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_carrelloFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_carrelloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_carrelloFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_carrelloPayload>
          }
          findFirst: {
            args: Prisma.tbl_carrelloFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_carrelloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_carrelloFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_carrelloPayload>
          }
          findMany: {
            args: Prisma.tbl_carrelloFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_carrelloPayload>[]
          }
          create: {
            args: Prisma.tbl_carrelloCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_carrelloPayload>
          }
          createMany: {
            args: Prisma.tbl_carrelloCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_carrelloDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_carrelloPayload>
          }
          update: {
            args: Prisma.tbl_carrelloUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_carrelloPayload>
          }
          deleteMany: {
            args: Prisma.tbl_carrelloDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_carrelloUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_carrelloUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_carrelloPayload>
          }
          aggregate: {
            args: Prisma.Tbl_carrelloAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_carrello>
          }
          groupBy: {
            args: Prisma.tbl_carrelloGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_carrelloGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_carrelloCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_carrelloCountAggregateOutputType> | number
          }
        }
      }
      tbl_cliente: {
        payload: Prisma.$tbl_clientePayload<ExtArgs>
        fields: Prisma.tbl_clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_clienteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_clienteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_clientePayload>
          }
          findFirst: {
            args: Prisma.tbl_clienteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_clienteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_clientePayload>
          }
          findMany: {
            args: Prisma.tbl_clienteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_clientePayload>[]
          }
          create: {
            args: Prisma.tbl_clienteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_clientePayload>
          }
          createMany: {
            args: Prisma.tbl_clienteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_clienteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_clientePayload>
          }
          update: {
            args: Prisma.tbl_clienteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_clientePayload>
          }
          deleteMany: {
            args: Prisma.tbl_clienteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_clienteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_clienteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_clientePayload>
          }
          aggregate: {
            args: Prisma.Tbl_clienteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_cliente>
          }
          groupBy: {
            args: Prisma.tbl_clienteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_clienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_clienteCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_clienteCountAggregateOutputType> | number
          }
        }
      }
      tbl_corriere: {
        payload: Prisma.$tbl_corrierePayload<ExtArgs>
        fields: Prisma.tbl_corriereFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_corriereFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_corrierePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_corriereFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_corrierePayload>
          }
          findFirst: {
            args: Prisma.tbl_corriereFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_corrierePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_corriereFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_corrierePayload>
          }
          findMany: {
            args: Prisma.tbl_corriereFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_corrierePayload>[]
          }
          create: {
            args: Prisma.tbl_corriereCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_corrierePayload>
          }
          createMany: {
            args: Prisma.tbl_corriereCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_corriereDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_corrierePayload>
          }
          update: {
            args: Prisma.tbl_corriereUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_corrierePayload>
          }
          deleteMany: {
            args: Prisma.tbl_corriereDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_corriereUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_corriereUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_corrierePayload>
          }
          aggregate: {
            args: Prisma.Tbl_corriereAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_corriere>
          }
          groupBy: {
            args: Prisma.tbl_corriereGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_corriereGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_corriereCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_corriereCountAggregateOutputType> | number
          }
        }
      }
      tbl_dipendente: {
        payload: Prisma.$tbl_dipendentePayload<ExtArgs>
        fields: Prisma.tbl_dipendenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_dipendenteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_dipendentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_dipendenteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_dipendentePayload>
          }
          findFirst: {
            args: Prisma.tbl_dipendenteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_dipendentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_dipendenteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_dipendentePayload>
          }
          findMany: {
            args: Prisma.tbl_dipendenteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_dipendentePayload>[]
          }
          create: {
            args: Prisma.tbl_dipendenteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_dipendentePayload>
          }
          createMany: {
            args: Prisma.tbl_dipendenteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_dipendenteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_dipendentePayload>
          }
          update: {
            args: Prisma.tbl_dipendenteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_dipendentePayload>
          }
          deleteMany: {
            args: Prisma.tbl_dipendenteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_dipendenteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_dipendenteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_dipendentePayload>
          }
          aggregate: {
            args: Prisma.Tbl_dipendenteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_dipendente>
          }
          groupBy: {
            args: Prisma.tbl_dipendenteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_dipendenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_dipendenteCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_dipendenteCountAggregateOutputType> | number
          }
        }
      }
      tbl_filiale: {
        payload: Prisma.$tbl_filialePayload<ExtArgs>
        fields: Prisma.tbl_filialeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_filialeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_filialePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_filialeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_filialePayload>
          }
          findFirst: {
            args: Prisma.tbl_filialeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_filialePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_filialeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_filialePayload>
          }
          findMany: {
            args: Prisma.tbl_filialeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_filialePayload>[]
          }
          create: {
            args: Prisma.tbl_filialeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_filialePayload>
          }
          createMany: {
            args: Prisma.tbl_filialeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_filialeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_filialePayload>
          }
          update: {
            args: Prisma.tbl_filialeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_filialePayload>
          }
          deleteMany: {
            args: Prisma.tbl_filialeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_filialeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_filialeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_filialePayload>
          }
          aggregate: {
            args: Prisma.Tbl_filialeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_filiale>
          }
          groupBy: {
            args: Prisma.tbl_filialeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_filialeGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_filialeCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_filialeCountAggregateOutputType> | number
          }
        }
      }
      tbl_fornitore: {
        payload: Prisma.$tbl_fornitorePayload<ExtArgs>
        fields: Prisma.tbl_fornitoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_fornitoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornitorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_fornitoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornitorePayload>
          }
          findFirst: {
            args: Prisma.tbl_fornitoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornitorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_fornitoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornitorePayload>
          }
          findMany: {
            args: Prisma.tbl_fornitoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornitorePayload>[]
          }
          create: {
            args: Prisma.tbl_fornitoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornitorePayload>
          }
          createMany: {
            args: Prisma.tbl_fornitoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_fornitoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornitorePayload>
          }
          update: {
            args: Prisma.tbl_fornitoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornitorePayload>
          }
          deleteMany: {
            args: Prisma.tbl_fornitoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_fornitoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_fornitoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornitorePayload>
          }
          aggregate: {
            args: Prisma.Tbl_fornitoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_fornitore>
          }
          groupBy: {
            args: Prisma.tbl_fornitoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_fornitoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_fornitoreCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_fornitoreCountAggregateOutputType> | number
          }
        }
      }
      tbl_fornitura: {
        payload: Prisma.$tbl_fornituraPayload<ExtArgs>
        fields: Prisma.tbl_fornituraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_fornituraFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornituraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_fornituraFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornituraPayload>
          }
          findFirst: {
            args: Prisma.tbl_fornituraFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornituraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_fornituraFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornituraPayload>
          }
          findMany: {
            args: Prisma.tbl_fornituraFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornituraPayload>[]
          }
          create: {
            args: Prisma.tbl_fornituraCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornituraPayload>
          }
          createMany: {
            args: Prisma.tbl_fornituraCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_fornituraDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornituraPayload>
          }
          update: {
            args: Prisma.tbl_fornituraUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornituraPayload>
          }
          deleteMany: {
            args: Prisma.tbl_fornituraDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_fornituraUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_fornituraUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_fornituraPayload>
          }
          aggregate: {
            args: Prisma.Tbl_fornituraAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_fornitura>
          }
          groupBy: {
            args: Prisma.tbl_fornituraGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_fornituraGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_fornituraCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_fornituraCountAggregateOutputType> | number
          }
        }
      }
      tbl_ordine: {
        payload: Prisma.$tbl_ordinePayload<ExtArgs>
        fields: Prisma.tbl_ordineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_ordineFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_ordinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_ordineFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_ordinePayload>
          }
          findFirst: {
            args: Prisma.tbl_ordineFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_ordinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_ordineFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_ordinePayload>
          }
          findMany: {
            args: Prisma.tbl_ordineFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_ordinePayload>[]
          }
          create: {
            args: Prisma.tbl_ordineCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_ordinePayload>
          }
          createMany: {
            args: Prisma.tbl_ordineCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_ordineDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_ordinePayload>
          }
          update: {
            args: Prisma.tbl_ordineUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_ordinePayload>
          }
          deleteMany: {
            args: Prisma.tbl_ordineDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_ordineUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_ordineUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_ordinePayload>
          }
          aggregate: {
            args: Prisma.Tbl_ordineAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_ordine>
          }
          groupBy: {
            args: Prisma.tbl_ordineGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_ordineGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_ordineCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_ordineCountAggregateOutputType> | number
          }
        }
      }
      tbl_prodotto: {
        payload: Prisma.$tbl_prodottoPayload<ExtArgs>
        fields: Prisma.tbl_prodottoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_prodottoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_prodottoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_prodottoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_prodottoPayload>
          }
          findFirst: {
            args: Prisma.tbl_prodottoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_prodottoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_prodottoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_prodottoPayload>
          }
          findMany: {
            args: Prisma.tbl_prodottoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_prodottoPayload>[]
          }
          create: {
            args: Prisma.tbl_prodottoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_prodottoPayload>
          }
          createMany: {
            args: Prisma.tbl_prodottoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_prodottoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_prodottoPayload>
          }
          update: {
            args: Prisma.tbl_prodottoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_prodottoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_prodottoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_prodottoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_prodottoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_prodottoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_prodottoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_prodotto>
          }
          groupBy: {
            args: Prisma.tbl_prodottoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_prodottoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_prodottoCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_prodottoCountAggregateOutputType> | number
          }
        }
      }
      tbl_spedizione: {
        payload: Prisma.$tbl_spedizionePayload<ExtArgs>
        fields: Prisma.tbl_spedizioneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_spedizioneFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_spedizionePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_spedizioneFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_spedizionePayload>
          }
          findFirst: {
            args: Prisma.tbl_spedizioneFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_spedizionePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_spedizioneFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_spedizionePayload>
          }
          findMany: {
            args: Prisma.tbl_spedizioneFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_spedizionePayload>[]
          }
          create: {
            args: Prisma.tbl_spedizioneCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_spedizionePayload>
          }
          createMany: {
            args: Prisma.tbl_spedizioneCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tbl_spedizioneDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_spedizionePayload>
          }
          update: {
            args: Prisma.tbl_spedizioneUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_spedizionePayload>
          }
          deleteMany: {
            args: Prisma.tbl_spedizioneDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_spedizioneUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tbl_spedizioneUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tbl_spedizionePayload>
          }
          aggregate: {
            args: Prisma.Tbl_spedizioneAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTbl_spedizione>
          }
          groupBy: {
            args: Prisma.tbl_spedizioneGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_spedizioneGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_spedizioneCountArgs<ExtArgs>,
            result: $Utils.Optional<Tbl_spedizioneCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Tbl_carrelloCountOutputType
   */

  export type Tbl_carrelloCountOutputType = {
    tbl_ordine: number
  }

  export type Tbl_carrelloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_ordine?: boolean | Tbl_carrelloCountOutputTypeCountTbl_ordineArgs
  }

  // Custom InputTypes

  /**
   * Tbl_carrelloCountOutputType without action
   */
  export type Tbl_carrelloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_carrelloCountOutputType
     */
    select?: Tbl_carrelloCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Tbl_carrelloCountOutputType without action
   */
  export type Tbl_carrelloCountOutputTypeCountTbl_ordineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_ordineWhereInput
  }



  /**
   * Count Type Tbl_clienteCountOutputType
   */

  export type Tbl_clienteCountOutputType = {
    tbl_carrello: number
  }

  export type Tbl_clienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_carrello?: boolean | Tbl_clienteCountOutputTypeCountTbl_carrelloArgs
  }

  // Custom InputTypes

  /**
   * Tbl_clienteCountOutputType without action
   */
  export type Tbl_clienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_clienteCountOutputType
     */
    select?: Tbl_clienteCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Tbl_clienteCountOutputType without action
   */
  export type Tbl_clienteCountOutputTypeCountTbl_carrelloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_carrelloWhereInput
  }



  /**
   * Count Type Tbl_corriereCountOutputType
   */

  export type Tbl_corriereCountOutputType = {
    tbl_spedizione: number
  }

  export type Tbl_corriereCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_spedizione?: boolean | Tbl_corriereCountOutputTypeCountTbl_spedizioneArgs
  }

  // Custom InputTypes

  /**
   * Tbl_corriereCountOutputType without action
   */
  export type Tbl_corriereCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_corriereCountOutputType
     */
    select?: Tbl_corriereCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Tbl_corriereCountOutputType without action
   */
  export type Tbl_corriereCountOutputTypeCountTbl_spedizioneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_spedizioneWhereInput
  }



  /**
   * Count Type Tbl_filialeCountOutputType
   */

  export type Tbl_filialeCountOutputType = {
    tbl_dipendente: number
  }

  export type Tbl_filialeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_dipendente?: boolean | Tbl_filialeCountOutputTypeCountTbl_dipendenteArgs
  }

  // Custom InputTypes

  /**
   * Tbl_filialeCountOutputType without action
   */
  export type Tbl_filialeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_filialeCountOutputType
     */
    select?: Tbl_filialeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Tbl_filialeCountOutputType without action
   */
  export type Tbl_filialeCountOutputTypeCountTbl_dipendenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_dipendenteWhereInput
  }



  /**
   * Count Type Tbl_fornitoreCountOutputType
   */

  export type Tbl_fornitoreCountOutputType = {
    tbl_fornitura: number
  }

  export type Tbl_fornitoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_fornitura?: boolean | Tbl_fornitoreCountOutputTypeCountTbl_fornituraArgs
  }

  // Custom InputTypes

  /**
   * Tbl_fornitoreCountOutputType without action
   */
  export type Tbl_fornitoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_fornitoreCountOutputType
     */
    select?: Tbl_fornitoreCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Tbl_fornitoreCountOutputType without action
   */
  export type Tbl_fornitoreCountOutputTypeCountTbl_fornituraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_fornituraWhereInput
  }



  /**
   * Count Type Tbl_fornituraCountOutputType
   */

  export type Tbl_fornituraCountOutputType = {
    tbl_prodotto: number
  }

  export type Tbl_fornituraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_prodotto?: boolean | Tbl_fornituraCountOutputTypeCountTbl_prodottoArgs
  }

  // Custom InputTypes

  /**
   * Tbl_fornituraCountOutputType without action
   */
  export type Tbl_fornituraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_fornituraCountOutputType
     */
    select?: Tbl_fornituraCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Tbl_fornituraCountOutputType without action
   */
  export type Tbl_fornituraCountOutputTypeCountTbl_prodottoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_prodottoWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }



  /**
   * Models
   */

  /**
   * Model tbl_carrello
   */

  export type AggregateTbl_carrello = {
    _count: Tbl_carrelloCountAggregateOutputType | null
    _avg: Tbl_carrelloAvgAggregateOutputType | null
    _sum: Tbl_carrelloSumAggregateOutputType | null
    _min: Tbl_carrelloMinAggregateOutputType | null
    _max: Tbl_carrelloMaxAggregateOutputType | null
  }

  export type Tbl_carrelloAvgAggregateOutputType = {
    QUANTITA_PRODOTTO: number | null
    PREZZO_TOTALE: number | null
  }

  export type Tbl_carrelloSumAggregateOutputType = {
    QUANTITA_PRODOTTO: number | null
    PREZZO_TOTALE: number | null
  }

  export type Tbl_carrelloMinAggregateOutputType = {
    ID: string | null
    DATA_ACQUISTO: Date | null
    QUANTITA_PRODOTTO: number | null
    PREZZO_TOTALE: number | null
    EMAIL_CLIENTE: string | null
  }

  export type Tbl_carrelloMaxAggregateOutputType = {
    ID: string | null
    DATA_ACQUISTO: Date | null
    QUANTITA_PRODOTTO: number | null
    PREZZO_TOTALE: number | null
    EMAIL_CLIENTE: string | null
  }

  export type Tbl_carrelloCountAggregateOutputType = {
    ID: number
    DATA_ACQUISTO: number
    QUANTITA_PRODOTTO: number
    PREZZO_TOTALE: number
    EMAIL_CLIENTE: number
    _all: number
  }


  export type Tbl_carrelloAvgAggregateInputType = {
    QUANTITA_PRODOTTO?: true
    PREZZO_TOTALE?: true
  }

  export type Tbl_carrelloSumAggregateInputType = {
    QUANTITA_PRODOTTO?: true
    PREZZO_TOTALE?: true
  }

  export type Tbl_carrelloMinAggregateInputType = {
    ID?: true
    DATA_ACQUISTO?: true
    QUANTITA_PRODOTTO?: true
    PREZZO_TOTALE?: true
    EMAIL_CLIENTE?: true
  }

  export type Tbl_carrelloMaxAggregateInputType = {
    ID?: true
    DATA_ACQUISTO?: true
    QUANTITA_PRODOTTO?: true
    PREZZO_TOTALE?: true
    EMAIL_CLIENTE?: true
  }

  export type Tbl_carrelloCountAggregateInputType = {
    ID?: true
    DATA_ACQUISTO?: true
    QUANTITA_PRODOTTO?: true
    PREZZO_TOTALE?: true
    EMAIL_CLIENTE?: true
    _all?: true
  }

  export type Tbl_carrelloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_carrello to aggregate.
     */
    where?: tbl_carrelloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_carrellos to fetch.
     */
    orderBy?: tbl_carrelloOrderByWithRelationInput | tbl_carrelloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_carrelloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_carrellos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_carrellos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_carrellos
    **/
    _count?: true | Tbl_carrelloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_carrelloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_carrelloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_carrelloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_carrelloMaxAggregateInputType
  }

  export type GetTbl_carrelloAggregateType<T extends Tbl_carrelloAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_carrello]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_carrello[P]>
      : GetScalarType<T[P], AggregateTbl_carrello[P]>
  }




  export type tbl_carrelloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_carrelloWhereInput
    orderBy?: tbl_carrelloOrderByWithAggregationInput | tbl_carrelloOrderByWithAggregationInput[]
    by: Tbl_carrelloScalarFieldEnum[] | Tbl_carrelloScalarFieldEnum
    having?: tbl_carrelloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_carrelloCountAggregateInputType | true
    _avg?: Tbl_carrelloAvgAggregateInputType
    _sum?: Tbl_carrelloSumAggregateInputType
    _min?: Tbl_carrelloMinAggregateInputType
    _max?: Tbl_carrelloMaxAggregateInputType
  }

  export type Tbl_carrelloGroupByOutputType = {
    ID: string
    DATA_ACQUISTO: Date | null
    QUANTITA_PRODOTTO: number
    PREZZO_TOTALE: number
    EMAIL_CLIENTE: string | null
    _count: Tbl_carrelloCountAggregateOutputType | null
    _avg: Tbl_carrelloAvgAggregateOutputType | null
    _sum: Tbl_carrelloSumAggregateOutputType | null
    _min: Tbl_carrelloMinAggregateOutputType | null
    _max: Tbl_carrelloMaxAggregateOutputType | null
  }

  type GetTbl_carrelloGroupByPayload<T extends tbl_carrelloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_carrelloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_carrelloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_carrelloGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_carrelloGroupByOutputType[P]>
        }
      >
    >


  export type tbl_carrelloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    DATA_ACQUISTO?: boolean
    QUANTITA_PRODOTTO?: boolean
    PREZZO_TOTALE?: boolean
    EMAIL_CLIENTE?: boolean
    tbl_cliente?: boolean | tbl_carrello$tbl_clienteArgs<ExtArgs>
    tbl_ordine?: boolean | tbl_carrello$tbl_ordineArgs<ExtArgs>
    _count?: boolean | Tbl_carrelloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_carrello"]>

  export type tbl_carrelloSelectScalar = {
    ID?: boolean
    DATA_ACQUISTO?: boolean
    QUANTITA_PRODOTTO?: boolean
    PREZZO_TOTALE?: boolean
    EMAIL_CLIENTE?: boolean
  }

  export type tbl_carrelloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_cliente?: boolean | tbl_carrello$tbl_clienteArgs<ExtArgs>
    tbl_ordine?: boolean | tbl_carrello$tbl_ordineArgs<ExtArgs>
    _count?: boolean | Tbl_carrelloCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $tbl_carrelloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_carrello"
    objects: {
      tbl_cliente: Prisma.$tbl_clientePayload<ExtArgs> | null
      tbl_ordine: Prisma.$tbl_ordinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: string
      DATA_ACQUISTO: Date | null
      QUANTITA_PRODOTTO: number
      PREZZO_TOTALE: number
      EMAIL_CLIENTE: string | null
    }, ExtArgs["result"]["tbl_carrello"]>
    composites: {}
  }


  type tbl_carrelloGetPayload<S extends boolean | null | undefined | tbl_carrelloDefaultArgs> = $Result.GetResult<Prisma.$tbl_carrelloPayload, S>

  type tbl_carrelloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tbl_carrelloFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tbl_carrelloCountAggregateInputType | true
    }

  export interface tbl_carrelloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_carrello'], meta: { name: 'tbl_carrello' } }
    /**
     * Find zero or one Tbl_carrello that matches the filter.
     * @param {tbl_carrelloFindUniqueArgs} args - Arguments to find a Tbl_carrello
     * @example
     * // Get one Tbl_carrello
     * const tbl_carrello = await prisma.tbl_carrello.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_carrelloFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_carrelloFindUniqueArgs<ExtArgs>>
    ): Prisma__tbl_carrelloClient<$Result.GetResult<Prisma.$tbl_carrelloPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tbl_carrello that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_carrelloFindUniqueOrThrowArgs} args - Arguments to find a Tbl_carrello
     * @example
     * // Get one Tbl_carrello
     * const tbl_carrello = await prisma.tbl_carrello.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_carrelloFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_carrelloFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_carrelloClient<$Result.GetResult<Prisma.$tbl_carrelloPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tbl_carrello that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_carrelloFindFirstArgs} args - Arguments to find a Tbl_carrello
     * @example
     * // Get one Tbl_carrello
     * const tbl_carrello = await prisma.tbl_carrello.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_carrelloFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_carrelloFindFirstArgs<ExtArgs>>
    ): Prisma__tbl_carrelloClient<$Result.GetResult<Prisma.$tbl_carrelloPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tbl_carrello that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_carrelloFindFirstOrThrowArgs} args - Arguments to find a Tbl_carrello
     * @example
     * // Get one Tbl_carrello
     * const tbl_carrello = await prisma.tbl_carrello.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_carrelloFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_carrelloFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_carrelloClient<$Result.GetResult<Prisma.$tbl_carrelloPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tbl_carrellos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_carrelloFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_carrellos
     * const tbl_carrellos = await prisma.tbl_carrello.findMany()
     * 
     * // Get first 10 Tbl_carrellos
     * const tbl_carrellos = await prisma.tbl_carrello.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const tbl_carrelloWithIDOnly = await prisma.tbl_carrello.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends tbl_carrelloFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_carrelloFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_carrelloPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tbl_carrello.
     * @param {tbl_carrelloCreateArgs} args - Arguments to create a Tbl_carrello.
     * @example
     * // Create one Tbl_carrello
     * const Tbl_carrello = await prisma.tbl_carrello.create({
     *   data: {
     *     // ... data to create a Tbl_carrello
     *   }
     * })
     * 
    **/
    create<T extends tbl_carrelloCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_carrelloCreateArgs<ExtArgs>>
    ): Prisma__tbl_carrelloClient<$Result.GetResult<Prisma.$tbl_carrelloPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tbl_carrellos.
     *     @param {tbl_carrelloCreateManyArgs} args - Arguments to create many Tbl_carrellos.
     *     @example
     *     // Create many Tbl_carrellos
     *     const tbl_carrello = await prisma.tbl_carrello.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_carrelloCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_carrelloCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_carrello.
     * @param {tbl_carrelloDeleteArgs} args - Arguments to delete one Tbl_carrello.
     * @example
     * // Delete one Tbl_carrello
     * const Tbl_carrello = await prisma.tbl_carrello.delete({
     *   where: {
     *     // ... filter to delete one Tbl_carrello
     *   }
     * })
     * 
    **/
    delete<T extends tbl_carrelloDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_carrelloDeleteArgs<ExtArgs>>
    ): Prisma__tbl_carrelloClient<$Result.GetResult<Prisma.$tbl_carrelloPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tbl_carrello.
     * @param {tbl_carrelloUpdateArgs} args - Arguments to update one Tbl_carrello.
     * @example
     * // Update one Tbl_carrello
     * const tbl_carrello = await prisma.tbl_carrello.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_carrelloUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_carrelloUpdateArgs<ExtArgs>>
    ): Prisma__tbl_carrelloClient<$Result.GetResult<Prisma.$tbl_carrelloPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_carrellos.
     * @param {tbl_carrelloDeleteManyArgs} args - Arguments to filter Tbl_carrellos to delete.
     * @example
     * // Delete a few Tbl_carrellos
     * const { count } = await prisma.tbl_carrello.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_carrelloDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_carrelloDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_carrellos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_carrelloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_carrellos
     * const tbl_carrello = await prisma.tbl_carrello.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_carrelloUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_carrelloUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_carrello.
     * @param {tbl_carrelloUpsertArgs} args - Arguments to update or create a Tbl_carrello.
     * @example
     * // Update or create a Tbl_carrello
     * const tbl_carrello = await prisma.tbl_carrello.upsert({
     *   create: {
     *     // ... data to create a Tbl_carrello
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_carrello we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_carrelloUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_carrelloUpsertArgs<ExtArgs>>
    ): Prisma__tbl_carrelloClient<$Result.GetResult<Prisma.$tbl_carrelloPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tbl_carrellos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_carrelloCountArgs} args - Arguments to filter Tbl_carrellos to count.
     * @example
     * // Count the number of Tbl_carrellos
     * const count = await prisma.tbl_carrello.count({
     *   where: {
     *     // ... the filter for the Tbl_carrellos we want to count
     *   }
     * })
    **/
    count<T extends tbl_carrelloCountArgs>(
      args?: Subset<T, tbl_carrelloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_carrelloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_carrello.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_carrelloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_carrelloAggregateArgs>(args: Subset<T, Tbl_carrelloAggregateArgs>): Prisma.PrismaPromise<GetTbl_carrelloAggregateType<T>>

    /**
     * Group by Tbl_carrello.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_carrelloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_carrelloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_carrelloGroupByArgs['orderBy'] }
        : { orderBy?: tbl_carrelloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_carrelloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_carrelloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_carrello model
   */
  readonly fields: tbl_carrelloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_carrello.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_carrelloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tbl_cliente<T extends tbl_carrello$tbl_clienteArgs<ExtArgs> = {}>(args?: Subset<T, tbl_carrello$tbl_clienteArgs<ExtArgs>>): Prisma__tbl_clienteClient<$Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    tbl_ordine<T extends tbl_carrello$tbl_ordineArgs<ExtArgs> = {}>(args?: Subset<T, tbl_carrello$tbl_ordineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_ordinePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tbl_carrello model
   */ 
  interface tbl_carrelloFieldRefs {
    readonly ID: FieldRef<"tbl_carrello", 'String'>
    readonly DATA_ACQUISTO: FieldRef<"tbl_carrello", 'DateTime'>
    readonly QUANTITA_PRODOTTO: FieldRef<"tbl_carrello", 'Int'>
    readonly PREZZO_TOTALE: FieldRef<"tbl_carrello", 'Float'>
    readonly EMAIL_CLIENTE: FieldRef<"tbl_carrello", 'String'>
  }
    

  // Custom InputTypes

  /**
   * tbl_carrello findUnique
   */
  export type tbl_carrelloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
    /**
     * Filter, which tbl_carrello to fetch.
     */
    where: tbl_carrelloWhereUniqueInput
  }


  /**
   * tbl_carrello findUniqueOrThrow
   */
  export type tbl_carrelloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
    /**
     * Filter, which tbl_carrello to fetch.
     */
    where: tbl_carrelloWhereUniqueInput
  }


  /**
   * tbl_carrello findFirst
   */
  export type tbl_carrelloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
    /**
     * Filter, which tbl_carrello to fetch.
     */
    where?: tbl_carrelloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_carrellos to fetch.
     */
    orderBy?: tbl_carrelloOrderByWithRelationInput | tbl_carrelloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_carrellos.
     */
    cursor?: tbl_carrelloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_carrellos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_carrellos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_carrellos.
     */
    distinct?: Tbl_carrelloScalarFieldEnum | Tbl_carrelloScalarFieldEnum[]
  }


  /**
   * tbl_carrello findFirstOrThrow
   */
  export type tbl_carrelloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
    /**
     * Filter, which tbl_carrello to fetch.
     */
    where?: tbl_carrelloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_carrellos to fetch.
     */
    orderBy?: tbl_carrelloOrderByWithRelationInput | tbl_carrelloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_carrellos.
     */
    cursor?: tbl_carrelloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_carrellos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_carrellos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_carrellos.
     */
    distinct?: Tbl_carrelloScalarFieldEnum | Tbl_carrelloScalarFieldEnum[]
  }


  /**
   * tbl_carrello findMany
   */
  export type tbl_carrelloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
    /**
     * Filter, which tbl_carrellos to fetch.
     */
    where?: tbl_carrelloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_carrellos to fetch.
     */
    orderBy?: tbl_carrelloOrderByWithRelationInput | tbl_carrelloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_carrellos.
     */
    cursor?: tbl_carrelloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_carrellos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_carrellos.
     */
    skip?: number
    distinct?: Tbl_carrelloScalarFieldEnum | Tbl_carrelloScalarFieldEnum[]
  }


  /**
   * tbl_carrello create
   */
  export type tbl_carrelloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_carrello.
     */
    data: XOR<tbl_carrelloCreateInput, tbl_carrelloUncheckedCreateInput>
  }


  /**
   * tbl_carrello createMany
   */
  export type tbl_carrelloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_carrellos.
     */
    data: tbl_carrelloCreateManyInput | tbl_carrelloCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tbl_carrello update
   */
  export type tbl_carrelloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_carrello.
     */
    data: XOR<tbl_carrelloUpdateInput, tbl_carrelloUncheckedUpdateInput>
    /**
     * Choose, which tbl_carrello to update.
     */
    where: tbl_carrelloWhereUniqueInput
  }


  /**
   * tbl_carrello updateMany
   */
  export type tbl_carrelloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_carrellos.
     */
    data: XOR<tbl_carrelloUpdateManyMutationInput, tbl_carrelloUncheckedUpdateManyInput>
    /**
     * Filter which tbl_carrellos to update
     */
    where?: tbl_carrelloWhereInput
  }


  /**
   * tbl_carrello upsert
   */
  export type tbl_carrelloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_carrello to update in case it exists.
     */
    where: tbl_carrelloWhereUniqueInput
    /**
     * In case the tbl_carrello found by the `where` argument doesn't exist, create a new tbl_carrello with this data.
     */
    create: XOR<tbl_carrelloCreateInput, tbl_carrelloUncheckedCreateInput>
    /**
     * In case the tbl_carrello was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_carrelloUpdateInput, tbl_carrelloUncheckedUpdateInput>
  }


  /**
   * tbl_carrello delete
   */
  export type tbl_carrelloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
    /**
     * Filter which tbl_carrello to delete.
     */
    where: tbl_carrelloWhereUniqueInput
  }


  /**
   * tbl_carrello deleteMany
   */
  export type tbl_carrelloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_carrellos to delete
     */
    where?: tbl_carrelloWhereInput
  }


  /**
   * tbl_carrello.tbl_cliente
   */
  export type tbl_carrello$tbl_clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: tbl_clienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_clienteInclude<ExtArgs> | null
    where?: tbl_clienteWhereInput
  }


  /**
   * tbl_carrello.tbl_ordine
   */
  export type tbl_carrello$tbl_ordineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ordine
     */
    select?: tbl_ordineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_ordineInclude<ExtArgs> | null
    where?: tbl_ordineWhereInput
    orderBy?: tbl_ordineOrderByWithRelationInput | tbl_ordineOrderByWithRelationInput[]
    cursor?: tbl_ordineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_ordineScalarFieldEnum | Tbl_ordineScalarFieldEnum[]
  }


  /**
   * tbl_carrello without action
   */
  export type tbl_carrelloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
  }



  /**
   * Model tbl_cliente
   */

  export type AggregateTbl_cliente = {
    _count: Tbl_clienteCountAggregateOutputType | null
    _avg: Tbl_clienteAvgAggregateOutputType | null
    _sum: Tbl_clienteSumAggregateOutputType | null
    _min: Tbl_clienteMinAggregateOutputType | null
    _max: Tbl_clienteMaxAggregateOutputType | null
  }

  export type Tbl_clienteAvgAggregateOutputType = {
    ID: number | null
  }

  export type Tbl_clienteSumAggregateOutputType = {
    ID: number | null
  }

  export type Tbl_clienteMinAggregateOutputType = {
    ID: number | null
    NOME: string | null
    COGNOME: string | null
    EMAIL: string | null
    CELLULARE: string | null
    CODICE_FISCALE: string | null
    DATA_DI_NASCITA: string | null
    CITTA: string | null
    VIA: string | null
    N_CIVICO: string | null
    CAP: string | null
    NUM_CARTA: string | null
    CVV_CARTA: string | null
    INTESTATARIO_CARTA: string | null
    SCADENZA_CARTA: Date | null
    RUOLO: string | null
    UTENTE_PASSWORD: string | null
  }

  export type Tbl_clienteMaxAggregateOutputType = {
    ID: number | null
    NOME: string | null
    COGNOME: string | null
    EMAIL: string | null
    CELLULARE: string | null
    CODICE_FISCALE: string | null
    DATA_DI_NASCITA: string | null
    CITTA: string | null
    VIA: string | null
    N_CIVICO: string | null
    CAP: string | null
    NUM_CARTA: string | null
    CVV_CARTA: string | null
    INTESTATARIO_CARTA: string | null
    SCADENZA_CARTA: Date | null
    RUOLO: string | null
    UTENTE_PASSWORD: string | null
  }

  export type Tbl_clienteCountAggregateOutputType = {
    ID: number
    NOME: number
    COGNOME: number
    EMAIL: number
    CELLULARE: number
    CODICE_FISCALE: number
    DATA_DI_NASCITA: number
    CITTA: number
    VIA: number
    N_CIVICO: number
    CAP: number
    NUM_CARTA: number
    CVV_CARTA: number
    INTESTATARIO_CARTA: number
    SCADENZA_CARTA: number
    RUOLO: number
    UTENTE_PASSWORD: number
    _all: number
  }


  export type Tbl_clienteAvgAggregateInputType = {
    ID?: true
  }

  export type Tbl_clienteSumAggregateInputType = {
    ID?: true
  }

  export type Tbl_clienteMinAggregateInputType = {
    ID?: true
    NOME?: true
    COGNOME?: true
    EMAIL?: true
    CELLULARE?: true
    CODICE_FISCALE?: true
    DATA_DI_NASCITA?: true
    CITTA?: true
    VIA?: true
    N_CIVICO?: true
    CAP?: true
    NUM_CARTA?: true
    CVV_CARTA?: true
    INTESTATARIO_CARTA?: true
    SCADENZA_CARTA?: true
    RUOLO?: true
    UTENTE_PASSWORD?: true
  }

  export type Tbl_clienteMaxAggregateInputType = {
    ID?: true
    NOME?: true
    COGNOME?: true
    EMAIL?: true
    CELLULARE?: true
    CODICE_FISCALE?: true
    DATA_DI_NASCITA?: true
    CITTA?: true
    VIA?: true
    N_CIVICO?: true
    CAP?: true
    NUM_CARTA?: true
    CVV_CARTA?: true
    INTESTATARIO_CARTA?: true
    SCADENZA_CARTA?: true
    RUOLO?: true
    UTENTE_PASSWORD?: true
  }

  export type Tbl_clienteCountAggregateInputType = {
    ID?: true
    NOME?: true
    COGNOME?: true
    EMAIL?: true
    CELLULARE?: true
    CODICE_FISCALE?: true
    DATA_DI_NASCITA?: true
    CITTA?: true
    VIA?: true
    N_CIVICO?: true
    CAP?: true
    NUM_CARTA?: true
    CVV_CARTA?: true
    INTESTATARIO_CARTA?: true
    SCADENZA_CARTA?: true
    RUOLO?: true
    UTENTE_PASSWORD?: true
    _all?: true
  }

  export type Tbl_clienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_cliente to aggregate.
     */
    where?: tbl_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: tbl_clienteOrderByWithRelationInput | tbl_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_clientes
    **/
    _count?: true | Tbl_clienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_clienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_clienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_clienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_clienteMaxAggregateInputType
  }

  export type GetTbl_clienteAggregateType<T extends Tbl_clienteAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_cliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_cliente[P]>
      : GetScalarType<T[P], AggregateTbl_cliente[P]>
  }




  export type tbl_clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_clienteWhereInput
    orderBy?: tbl_clienteOrderByWithAggregationInput | tbl_clienteOrderByWithAggregationInput[]
    by: Tbl_clienteScalarFieldEnum[] | Tbl_clienteScalarFieldEnum
    having?: tbl_clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_clienteCountAggregateInputType | true
    _avg?: Tbl_clienteAvgAggregateInputType
    _sum?: Tbl_clienteSumAggregateInputType
    _min?: Tbl_clienteMinAggregateInputType
    _max?: Tbl_clienteMaxAggregateInputType
  }

  export type Tbl_clienteGroupByOutputType = {
    ID: number
    NOME: string
    COGNOME: string
    EMAIL: string
    CELLULARE: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    CITTA: string
    VIA: string
    N_CIVICO: string
    CAP: string
    NUM_CARTA: string
    CVV_CARTA: string
    INTESTATARIO_CARTA: string | null
    SCADENZA_CARTA: Date | null
    RUOLO: string | null
    UTENTE_PASSWORD: string | null
    _count: Tbl_clienteCountAggregateOutputType | null
    _avg: Tbl_clienteAvgAggregateOutputType | null
    _sum: Tbl_clienteSumAggregateOutputType | null
    _min: Tbl_clienteMinAggregateOutputType | null
    _max: Tbl_clienteMaxAggregateOutputType | null
  }

  type GetTbl_clienteGroupByPayload<T extends tbl_clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_clienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_clienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_clienteGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_clienteGroupByOutputType[P]>
        }
      >
    >


  export type tbl_clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    NOME?: boolean
    COGNOME?: boolean
    EMAIL?: boolean
    CELLULARE?: boolean
    CODICE_FISCALE?: boolean
    DATA_DI_NASCITA?: boolean
    CITTA?: boolean
    VIA?: boolean
    N_CIVICO?: boolean
    CAP?: boolean
    NUM_CARTA?: boolean
    CVV_CARTA?: boolean
    INTESTATARIO_CARTA?: boolean
    SCADENZA_CARTA?: boolean
    RUOLO?: boolean
    UTENTE_PASSWORD?: boolean
    tbl_carrello?: boolean | tbl_cliente$tbl_carrelloArgs<ExtArgs>
    _count?: boolean | Tbl_clienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_cliente"]>

  export type tbl_clienteSelectScalar = {
    ID?: boolean
    NOME?: boolean
    COGNOME?: boolean
    EMAIL?: boolean
    CELLULARE?: boolean
    CODICE_FISCALE?: boolean
    DATA_DI_NASCITA?: boolean
    CITTA?: boolean
    VIA?: boolean
    N_CIVICO?: boolean
    CAP?: boolean
    NUM_CARTA?: boolean
    CVV_CARTA?: boolean
    INTESTATARIO_CARTA?: boolean
    SCADENZA_CARTA?: boolean
    RUOLO?: boolean
    UTENTE_PASSWORD?: boolean
  }

  export type tbl_clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_carrello?: boolean | tbl_cliente$tbl_carrelloArgs<ExtArgs>
    _count?: boolean | Tbl_clienteCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $tbl_clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_cliente"
    objects: {
      tbl_carrello: Prisma.$tbl_carrelloPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      NOME: string
      COGNOME: string
      EMAIL: string
      CELLULARE: string
      CODICE_FISCALE: string
      DATA_DI_NASCITA: string
      CITTA: string
      VIA: string
      N_CIVICO: string
      CAP: string
      NUM_CARTA: string
      CVV_CARTA: string
      INTESTATARIO_CARTA: string | null
      SCADENZA_CARTA: Date | null
      RUOLO: string | null
      UTENTE_PASSWORD: string | null
    }, ExtArgs["result"]["tbl_cliente"]>
    composites: {}
  }


  type tbl_clienteGetPayload<S extends boolean | null | undefined | tbl_clienteDefaultArgs> = $Result.GetResult<Prisma.$tbl_clientePayload, S>

  type tbl_clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tbl_clienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tbl_clienteCountAggregateInputType | true
    }

  export interface tbl_clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_cliente'], meta: { name: 'tbl_cliente' } }
    /**
     * Find zero or one Tbl_cliente that matches the filter.
     * @param {tbl_clienteFindUniqueArgs} args - Arguments to find a Tbl_cliente
     * @example
     * // Get one Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_clienteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_clienteFindUniqueArgs<ExtArgs>>
    ): Prisma__tbl_clienteClient<$Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tbl_cliente that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_clienteFindUniqueOrThrowArgs} args - Arguments to find a Tbl_cliente
     * @example
     * // Get one Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_clienteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_clienteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_clienteClient<$Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tbl_cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteFindFirstArgs} args - Arguments to find a Tbl_cliente
     * @example
     * // Get one Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_clienteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_clienteFindFirstArgs<ExtArgs>>
    ): Prisma__tbl_clienteClient<$Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tbl_cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteFindFirstOrThrowArgs} args - Arguments to find a Tbl_cliente
     * @example
     * // Get one Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_clienteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_clienteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_clienteClient<$Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tbl_clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_clientes
     * const tbl_clientes = await prisma.tbl_cliente.findMany()
     * 
     * // Get first 10 Tbl_clientes
     * const tbl_clientes = await prisma.tbl_cliente.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const tbl_clienteWithIDOnly = await prisma.tbl_cliente.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends tbl_clienteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_clienteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tbl_cliente.
     * @param {tbl_clienteCreateArgs} args - Arguments to create a Tbl_cliente.
     * @example
     * // Create one Tbl_cliente
     * const Tbl_cliente = await prisma.tbl_cliente.create({
     *   data: {
     *     // ... data to create a Tbl_cliente
     *   }
     * })
     * 
    **/
    create<T extends tbl_clienteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_clienteCreateArgs<ExtArgs>>
    ): Prisma__tbl_clienteClient<$Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tbl_clientes.
     *     @param {tbl_clienteCreateManyArgs} args - Arguments to create many Tbl_clientes.
     *     @example
     *     // Create many Tbl_clientes
     *     const tbl_cliente = await prisma.tbl_cliente.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_clienteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_clienteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_cliente.
     * @param {tbl_clienteDeleteArgs} args - Arguments to delete one Tbl_cliente.
     * @example
     * // Delete one Tbl_cliente
     * const Tbl_cliente = await prisma.tbl_cliente.delete({
     *   where: {
     *     // ... filter to delete one Tbl_cliente
     *   }
     * })
     * 
    **/
    delete<T extends tbl_clienteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_clienteDeleteArgs<ExtArgs>>
    ): Prisma__tbl_clienteClient<$Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tbl_cliente.
     * @param {tbl_clienteUpdateArgs} args - Arguments to update one Tbl_cliente.
     * @example
     * // Update one Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_clienteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_clienteUpdateArgs<ExtArgs>>
    ): Prisma__tbl_clienteClient<$Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_clientes.
     * @param {tbl_clienteDeleteManyArgs} args - Arguments to filter Tbl_clientes to delete.
     * @example
     * // Delete a few Tbl_clientes
     * const { count } = await prisma.tbl_cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_clienteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_clienteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_clientes
     * const tbl_cliente = await prisma.tbl_cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_clienteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_clienteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_cliente.
     * @param {tbl_clienteUpsertArgs} args - Arguments to update or create a Tbl_cliente.
     * @example
     * // Update or create a Tbl_cliente
     * const tbl_cliente = await prisma.tbl_cliente.upsert({
     *   create: {
     *     // ... data to create a Tbl_cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_cliente we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_clienteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_clienteUpsertArgs<ExtArgs>>
    ): Prisma__tbl_clienteClient<$Result.GetResult<Prisma.$tbl_clientePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tbl_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteCountArgs} args - Arguments to filter Tbl_clientes to count.
     * @example
     * // Count the number of Tbl_clientes
     * const count = await prisma.tbl_cliente.count({
     *   where: {
     *     // ... the filter for the Tbl_clientes we want to count
     *   }
     * })
    **/
    count<T extends tbl_clienteCountArgs>(
      args?: Subset<T, tbl_clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_clienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_clienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_clienteAggregateArgs>(args: Subset<T, Tbl_clienteAggregateArgs>): Prisma.PrismaPromise<GetTbl_clienteAggregateType<T>>

    /**
     * Group by Tbl_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_clienteGroupByArgs['orderBy'] }
        : { orderBy?: tbl_clienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_clienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_cliente model
   */
  readonly fields: tbl_clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tbl_carrello<T extends tbl_cliente$tbl_carrelloArgs<ExtArgs> = {}>(args?: Subset<T, tbl_cliente$tbl_carrelloArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_carrelloPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tbl_cliente model
   */ 
  interface tbl_clienteFieldRefs {
    readonly ID: FieldRef<"tbl_cliente", 'Int'>
    readonly NOME: FieldRef<"tbl_cliente", 'String'>
    readonly COGNOME: FieldRef<"tbl_cliente", 'String'>
    readonly EMAIL: FieldRef<"tbl_cliente", 'String'>
    readonly CELLULARE: FieldRef<"tbl_cliente", 'String'>
    readonly CODICE_FISCALE: FieldRef<"tbl_cliente", 'String'>
    readonly DATA_DI_NASCITA: FieldRef<"tbl_cliente", 'String'>
    readonly CITTA: FieldRef<"tbl_cliente", 'String'>
    readonly VIA: FieldRef<"tbl_cliente", 'String'>
    readonly N_CIVICO: FieldRef<"tbl_cliente", 'String'>
    readonly CAP: FieldRef<"tbl_cliente", 'String'>
    readonly NUM_CARTA: FieldRef<"tbl_cliente", 'String'>
    readonly CVV_CARTA: FieldRef<"tbl_cliente", 'String'>
    readonly INTESTATARIO_CARTA: FieldRef<"tbl_cliente", 'String'>
    readonly SCADENZA_CARTA: FieldRef<"tbl_cliente", 'DateTime'>
    readonly RUOLO: FieldRef<"tbl_cliente", 'String'>
    readonly UTENTE_PASSWORD: FieldRef<"tbl_cliente", 'String'>
  }
    

  // Custom InputTypes

  /**
   * tbl_cliente findUnique
   */
  export type tbl_clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: tbl_clienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_clienteInclude<ExtArgs> | null
    /**
     * Filter, which tbl_cliente to fetch.
     */
    where: tbl_clienteWhereUniqueInput
  }


  /**
   * tbl_cliente findUniqueOrThrow
   */
  export type tbl_clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: tbl_clienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_clienteInclude<ExtArgs> | null
    /**
     * Filter, which tbl_cliente to fetch.
     */
    where: tbl_clienteWhereUniqueInput
  }


  /**
   * tbl_cliente findFirst
   */
  export type tbl_clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: tbl_clienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_clienteInclude<ExtArgs> | null
    /**
     * Filter, which tbl_cliente to fetch.
     */
    where?: tbl_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: tbl_clienteOrderByWithRelationInput | tbl_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_clientes.
     */
    cursor?: tbl_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_clientes.
     */
    distinct?: Tbl_clienteScalarFieldEnum | Tbl_clienteScalarFieldEnum[]
  }


  /**
   * tbl_cliente findFirstOrThrow
   */
  export type tbl_clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: tbl_clienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_clienteInclude<ExtArgs> | null
    /**
     * Filter, which tbl_cliente to fetch.
     */
    where?: tbl_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: tbl_clienteOrderByWithRelationInput | tbl_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_clientes.
     */
    cursor?: tbl_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_clientes.
     */
    distinct?: Tbl_clienteScalarFieldEnum | Tbl_clienteScalarFieldEnum[]
  }


  /**
   * tbl_cliente findMany
   */
  export type tbl_clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: tbl_clienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_clienteInclude<ExtArgs> | null
    /**
     * Filter, which tbl_clientes to fetch.
     */
    where?: tbl_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: tbl_clienteOrderByWithRelationInput | tbl_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_clientes.
     */
    cursor?: tbl_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_clientes.
     */
    skip?: number
    distinct?: Tbl_clienteScalarFieldEnum | Tbl_clienteScalarFieldEnum[]
  }


  /**
   * tbl_cliente create
   */
  export type tbl_clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: tbl_clienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_cliente.
     */
    data: XOR<tbl_clienteCreateInput, tbl_clienteUncheckedCreateInput>
  }


  /**
   * tbl_cliente createMany
   */
  export type tbl_clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_clientes.
     */
    data: tbl_clienteCreateManyInput | tbl_clienteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tbl_cliente update
   */
  export type tbl_clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: tbl_clienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_cliente.
     */
    data: XOR<tbl_clienteUpdateInput, tbl_clienteUncheckedUpdateInput>
    /**
     * Choose, which tbl_cliente to update.
     */
    where: tbl_clienteWhereUniqueInput
  }


  /**
   * tbl_cliente updateMany
   */
  export type tbl_clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_clientes.
     */
    data: XOR<tbl_clienteUpdateManyMutationInput, tbl_clienteUncheckedUpdateManyInput>
    /**
     * Filter which tbl_clientes to update
     */
    where?: tbl_clienteWhereInput
  }


  /**
   * tbl_cliente upsert
   */
  export type tbl_clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: tbl_clienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_cliente to update in case it exists.
     */
    where: tbl_clienteWhereUniqueInput
    /**
     * In case the tbl_cliente found by the `where` argument doesn't exist, create a new tbl_cliente with this data.
     */
    create: XOR<tbl_clienteCreateInput, tbl_clienteUncheckedCreateInput>
    /**
     * In case the tbl_cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_clienteUpdateInput, tbl_clienteUncheckedUpdateInput>
  }


  /**
   * tbl_cliente delete
   */
  export type tbl_clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: tbl_clienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_clienteInclude<ExtArgs> | null
    /**
     * Filter which tbl_cliente to delete.
     */
    where: tbl_clienteWhereUniqueInput
  }


  /**
   * tbl_cliente deleteMany
   */
  export type tbl_clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_clientes to delete
     */
    where?: tbl_clienteWhereInput
  }


  /**
   * tbl_cliente.tbl_carrello
   */
  export type tbl_cliente$tbl_carrelloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
    where?: tbl_carrelloWhereInput
    orderBy?: tbl_carrelloOrderByWithRelationInput | tbl_carrelloOrderByWithRelationInput[]
    cursor?: tbl_carrelloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_carrelloScalarFieldEnum | Tbl_carrelloScalarFieldEnum[]
  }


  /**
   * tbl_cliente without action
   */
  export type tbl_clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_cliente
     */
    select?: tbl_clienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_clienteInclude<ExtArgs> | null
  }



  /**
   * Model tbl_corriere
   */

  export type AggregateTbl_corriere = {
    _count: Tbl_corriereCountAggregateOutputType | null
    _min: Tbl_corriereMinAggregateOutputType | null
    _max: Tbl_corriereMaxAggregateOutputType | null
  }

  export type Tbl_corriereMinAggregateOutputType = {
    P_IVA: string | null
    NOME: string | null
    TELEFONO: string | null
    EMAIL: string | null
  }

  export type Tbl_corriereMaxAggregateOutputType = {
    P_IVA: string | null
    NOME: string | null
    TELEFONO: string | null
    EMAIL: string | null
  }

  export type Tbl_corriereCountAggregateOutputType = {
    P_IVA: number
    NOME: number
    TELEFONO: number
    EMAIL: number
    _all: number
  }


  export type Tbl_corriereMinAggregateInputType = {
    P_IVA?: true
    NOME?: true
    TELEFONO?: true
    EMAIL?: true
  }

  export type Tbl_corriereMaxAggregateInputType = {
    P_IVA?: true
    NOME?: true
    TELEFONO?: true
    EMAIL?: true
  }

  export type Tbl_corriereCountAggregateInputType = {
    P_IVA?: true
    NOME?: true
    TELEFONO?: true
    EMAIL?: true
    _all?: true
  }

  export type Tbl_corriereAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_corriere to aggregate.
     */
    where?: tbl_corriereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_corrieres to fetch.
     */
    orderBy?: tbl_corriereOrderByWithRelationInput | tbl_corriereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_corriereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_corrieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_corrieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_corrieres
    **/
    _count?: true | Tbl_corriereCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_corriereMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_corriereMaxAggregateInputType
  }

  export type GetTbl_corriereAggregateType<T extends Tbl_corriereAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_corriere]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_corriere[P]>
      : GetScalarType<T[P], AggregateTbl_corriere[P]>
  }




  export type tbl_corriereGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_corriereWhereInput
    orderBy?: tbl_corriereOrderByWithAggregationInput | tbl_corriereOrderByWithAggregationInput[]
    by: Tbl_corriereScalarFieldEnum[] | Tbl_corriereScalarFieldEnum
    having?: tbl_corriereScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_corriereCountAggregateInputType | true
    _min?: Tbl_corriereMinAggregateInputType
    _max?: Tbl_corriereMaxAggregateInputType
  }

  export type Tbl_corriereGroupByOutputType = {
    P_IVA: string
    NOME: string
    TELEFONO: string
    EMAIL: string
    _count: Tbl_corriereCountAggregateOutputType | null
    _min: Tbl_corriereMinAggregateOutputType | null
    _max: Tbl_corriereMaxAggregateOutputType | null
  }

  type GetTbl_corriereGroupByPayload<T extends tbl_corriereGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_corriereGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_corriereGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_corriereGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_corriereGroupByOutputType[P]>
        }
      >
    >


  export type tbl_corriereSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    P_IVA?: boolean
    NOME?: boolean
    TELEFONO?: boolean
    EMAIL?: boolean
    tbl_spedizione?: boolean | tbl_corriere$tbl_spedizioneArgs<ExtArgs>
    _count?: boolean | Tbl_corriereCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_corriere"]>

  export type tbl_corriereSelectScalar = {
    P_IVA?: boolean
    NOME?: boolean
    TELEFONO?: boolean
    EMAIL?: boolean
  }

  export type tbl_corriereInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_spedizione?: boolean | tbl_corriere$tbl_spedizioneArgs<ExtArgs>
    _count?: boolean | Tbl_corriereCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $tbl_corrierePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_corriere"
    objects: {
      tbl_spedizione: Prisma.$tbl_spedizionePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      P_IVA: string
      NOME: string
      TELEFONO: string
      EMAIL: string
    }, ExtArgs["result"]["tbl_corriere"]>
    composites: {}
  }


  type tbl_corriereGetPayload<S extends boolean | null | undefined | tbl_corriereDefaultArgs> = $Result.GetResult<Prisma.$tbl_corrierePayload, S>

  type tbl_corriereCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tbl_corriereFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tbl_corriereCountAggregateInputType | true
    }

  export interface tbl_corriereDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_corriere'], meta: { name: 'tbl_corriere' } }
    /**
     * Find zero or one Tbl_corriere that matches the filter.
     * @param {tbl_corriereFindUniqueArgs} args - Arguments to find a Tbl_corriere
     * @example
     * // Get one Tbl_corriere
     * const tbl_corriere = await prisma.tbl_corriere.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_corriereFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_corriereFindUniqueArgs<ExtArgs>>
    ): Prisma__tbl_corriereClient<$Result.GetResult<Prisma.$tbl_corrierePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tbl_corriere that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_corriereFindUniqueOrThrowArgs} args - Arguments to find a Tbl_corriere
     * @example
     * // Get one Tbl_corriere
     * const tbl_corriere = await prisma.tbl_corriere.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_corriereFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_corriereFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_corriereClient<$Result.GetResult<Prisma.$tbl_corrierePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tbl_corriere that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_corriereFindFirstArgs} args - Arguments to find a Tbl_corriere
     * @example
     * // Get one Tbl_corriere
     * const tbl_corriere = await prisma.tbl_corriere.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_corriereFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_corriereFindFirstArgs<ExtArgs>>
    ): Prisma__tbl_corriereClient<$Result.GetResult<Prisma.$tbl_corrierePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tbl_corriere that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_corriereFindFirstOrThrowArgs} args - Arguments to find a Tbl_corriere
     * @example
     * // Get one Tbl_corriere
     * const tbl_corriere = await prisma.tbl_corriere.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_corriereFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_corriereFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_corriereClient<$Result.GetResult<Prisma.$tbl_corrierePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tbl_corrieres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_corriereFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_corrieres
     * const tbl_corrieres = await prisma.tbl_corriere.findMany()
     * 
     * // Get first 10 Tbl_corrieres
     * const tbl_corrieres = await prisma.tbl_corriere.findMany({ take: 10 })
     * 
     * // Only select the `P_IVA`
     * const tbl_corriereWithP_IVAOnly = await prisma.tbl_corriere.findMany({ select: { P_IVA: true } })
     * 
    **/
    findMany<T extends tbl_corriereFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_corriereFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_corrierePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tbl_corriere.
     * @param {tbl_corriereCreateArgs} args - Arguments to create a Tbl_corriere.
     * @example
     * // Create one Tbl_corriere
     * const Tbl_corriere = await prisma.tbl_corriere.create({
     *   data: {
     *     // ... data to create a Tbl_corriere
     *   }
     * })
     * 
    **/
    create<T extends tbl_corriereCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_corriereCreateArgs<ExtArgs>>
    ): Prisma__tbl_corriereClient<$Result.GetResult<Prisma.$tbl_corrierePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tbl_corrieres.
     *     @param {tbl_corriereCreateManyArgs} args - Arguments to create many Tbl_corrieres.
     *     @example
     *     // Create many Tbl_corrieres
     *     const tbl_corriere = await prisma.tbl_corriere.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_corriereCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_corriereCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_corriere.
     * @param {tbl_corriereDeleteArgs} args - Arguments to delete one Tbl_corriere.
     * @example
     * // Delete one Tbl_corriere
     * const Tbl_corriere = await prisma.tbl_corriere.delete({
     *   where: {
     *     // ... filter to delete one Tbl_corriere
     *   }
     * })
     * 
    **/
    delete<T extends tbl_corriereDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_corriereDeleteArgs<ExtArgs>>
    ): Prisma__tbl_corriereClient<$Result.GetResult<Prisma.$tbl_corrierePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tbl_corriere.
     * @param {tbl_corriereUpdateArgs} args - Arguments to update one Tbl_corriere.
     * @example
     * // Update one Tbl_corriere
     * const tbl_corriere = await prisma.tbl_corriere.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_corriereUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_corriereUpdateArgs<ExtArgs>>
    ): Prisma__tbl_corriereClient<$Result.GetResult<Prisma.$tbl_corrierePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_corrieres.
     * @param {tbl_corriereDeleteManyArgs} args - Arguments to filter Tbl_corrieres to delete.
     * @example
     * // Delete a few Tbl_corrieres
     * const { count } = await prisma.tbl_corriere.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_corriereDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_corriereDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_corrieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_corriereUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_corrieres
     * const tbl_corriere = await prisma.tbl_corriere.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_corriereUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_corriereUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_corriere.
     * @param {tbl_corriereUpsertArgs} args - Arguments to update or create a Tbl_corriere.
     * @example
     * // Update or create a Tbl_corriere
     * const tbl_corriere = await prisma.tbl_corriere.upsert({
     *   create: {
     *     // ... data to create a Tbl_corriere
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_corriere we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_corriereUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_corriereUpsertArgs<ExtArgs>>
    ): Prisma__tbl_corriereClient<$Result.GetResult<Prisma.$tbl_corrierePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tbl_corrieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_corriereCountArgs} args - Arguments to filter Tbl_corrieres to count.
     * @example
     * // Count the number of Tbl_corrieres
     * const count = await prisma.tbl_corriere.count({
     *   where: {
     *     // ... the filter for the Tbl_corrieres we want to count
     *   }
     * })
    **/
    count<T extends tbl_corriereCountArgs>(
      args?: Subset<T, tbl_corriereCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_corriereCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_corriere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_corriereAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_corriereAggregateArgs>(args: Subset<T, Tbl_corriereAggregateArgs>): Prisma.PrismaPromise<GetTbl_corriereAggregateType<T>>

    /**
     * Group by Tbl_corriere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_corriereGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_corriereGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_corriereGroupByArgs['orderBy'] }
        : { orderBy?: tbl_corriereGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_corriereGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_corriereGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_corriere model
   */
  readonly fields: tbl_corriereFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_corriere.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_corriereClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tbl_spedizione<T extends tbl_corriere$tbl_spedizioneArgs<ExtArgs> = {}>(args?: Subset<T, tbl_corriere$tbl_spedizioneArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_spedizionePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tbl_corriere model
   */ 
  interface tbl_corriereFieldRefs {
    readonly P_IVA: FieldRef<"tbl_corriere", 'String'>
    readonly NOME: FieldRef<"tbl_corriere", 'String'>
    readonly TELEFONO: FieldRef<"tbl_corriere", 'String'>
    readonly EMAIL: FieldRef<"tbl_corriere", 'String'>
  }
    

  // Custom InputTypes

  /**
   * tbl_corriere findUnique
   */
  export type tbl_corriereFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_corriere
     */
    select?: tbl_corriereSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_corriereInclude<ExtArgs> | null
    /**
     * Filter, which tbl_corriere to fetch.
     */
    where: tbl_corriereWhereUniqueInput
  }


  /**
   * tbl_corriere findUniqueOrThrow
   */
  export type tbl_corriereFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_corriere
     */
    select?: tbl_corriereSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_corriereInclude<ExtArgs> | null
    /**
     * Filter, which tbl_corriere to fetch.
     */
    where: tbl_corriereWhereUniqueInput
  }


  /**
   * tbl_corriere findFirst
   */
  export type tbl_corriereFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_corriere
     */
    select?: tbl_corriereSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_corriereInclude<ExtArgs> | null
    /**
     * Filter, which tbl_corriere to fetch.
     */
    where?: tbl_corriereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_corrieres to fetch.
     */
    orderBy?: tbl_corriereOrderByWithRelationInput | tbl_corriereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_corrieres.
     */
    cursor?: tbl_corriereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_corrieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_corrieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_corrieres.
     */
    distinct?: Tbl_corriereScalarFieldEnum | Tbl_corriereScalarFieldEnum[]
  }


  /**
   * tbl_corriere findFirstOrThrow
   */
  export type tbl_corriereFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_corriere
     */
    select?: tbl_corriereSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_corriereInclude<ExtArgs> | null
    /**
     * Filter, which tbl_corriere to fetch.
     */
    where?: tbl_corriereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_corrieres to fetch.
     */
    orderBy?: tbl_corriereOrderByWithRelationInput | tbl_corriereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_corrieres.
     */
    cursor?: tbl_corriereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_corrieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_corrieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_corrieres.
     */
    distinct?: Tbl_corriereScalarFieldEnum | Tbl_corriereScalarFieldEnum[]
  }


  /**
   * tbl_corriere findMany
   */
  export type tbl_corriereFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_corriere
     */
    select?: tbl_corriereSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_corriereInclude<ExtArgs> | null
    /**
     * Filter, which tbl_corrieres to fetch.
     */
    where?: tbl_corriereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_corrieres to fetch.
     */
    orderBy?: tbl_corriereOrderByWithRelationInput | tbl_corriereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_corrieres.
     */
    cursor?: tbl_corriereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_corrieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_corrieres.
     */
    skip?: number
    distinct?: Tbl_corriereScalarFieldEnum | Tbl_corriereScalarFieldEnum[]
  }


  /**
   * tbl_corriere create
   */
  export type tbl_corriereCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_corriere
     */
    select?: tbl_corriereSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_corriereInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_corriere.
     */
    data: XOR<tbl_corriereCreateInput, tbl_corriereUncheckedCreateInput>
  }


  /**
   * tbl_corriere createMany
   */
  export type tbl_corriereCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_corrieres.
     */
    data: tbl_corriereCreateManyInput | tbl_corriereCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tbl_corriere update
   */
  export type tbl_corriereUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_corriere
     */
    select?: tbl_corriereSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_corriereInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_corriere.
     */
    data: XOR<tbl_corriereUpdateInput, tbl_corriereUncheckedUpdateInput>
    /**
     * Choose, which tbl_corriere to update.
     */
    where: tbl_corriereWhereUniqueInput
  }


  /**
   * tbl_corriere updateMany
   */
  export type tbl_corriereUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_corrieres.
     */
    data: XOR<tbl_corriereUpdateManyMutationInput, tbl_corriereUncheckedUpdateManyInput>
    /**
     * Filter which tbl_corrieres to update
     */
    where?: tbl_corriereWhereInput
  }


  /**
   * tbl_corriere upsert
   */
  export type tbl_corriereUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_corriere
     */
    select?: tbl_corriereSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_corriereInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_corriere to update in case it exists.
     */
    where: tbl_corriereWhereUniqueInput
    /**
     * In case the tbl_corriere found by the `where` argument doesn't exist, create a new tbl_corriere with this data.
     */
    create: XOR<tbl_corriereCreateInput, tbl_corriereUncheckedCreateInput>
    /**
     * In case the tbl_corriere was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_corriereUpdateInput, tbl_corriereUncheckedUpdateInput>
  }


  /**
   * tbl_corriere delete
   */
  export type tbl_corriereDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_corriere
     */
    select?: tbl_corriereSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_corriereInclude<ExtArgs> | null
    /**
     * Filter which tbl_corriere to delete.
     */
    where: tbl_corriereWhereUniqueInput
  }


  /**
   * tbl_corriere deleteMany
   */
  export type tbl_corriereDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_corrieres to delete
     */
    where?: tbl_corriereWhereInput
  }


  /**
   * tbl_corriere.tbl_spedizione
   */
  export type tbl_corriere$tbl_spedizioneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_spedizione
     */
    select?: tbl_spedizioneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_spedizioneInclude<ExtArgs> | null
    where?: tbl_spedizioneWhereInput
    orderBy?: tbl_spedizioneOrderByWithRelationInput | tbl_spedizioneOrderByWithRelationInput[]
    cursor?: tbl_spedizioneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_spedizioneScalarFieldEnum | Tbl_spedizioneScalarFieldEnum[]
  }


  /**
   * tbl_corriere without action
   */
  export type tbl_corriereDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_corriere
     */
    select?: tbl_corriereSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_corriereInclude<ExtArgs> | null
  }



  /**
   * Model tbl_dipendente
   */

  export type AggregateTbl_dipendente = {
    _count: Tbl_dipendenteCountAggregateOutputType | null
    _avg: Tbl_dipendenteAvgAggregateOutputType | null
    _sum: Tbl_dipendenteSumAggregateOutputType | null
    _min: Tbl_dipendenteMinAggregateOutputType | null
    _max: Tbl_dipendenteMaxAggregateOutputType | null
  }

  export type Tbl_dipendenteAvgAggregateOutputType = {
    ID: number | null
    PAGA_ORARIA: number | null
  }

  export type Tbl_dipendenteSumAggregateOutputType = {
    ID: number | null
    PAGA_ORARIA: number | null
  }

  export type Tbl_dipendenteMinAggregateOutputType = {
    ID: number | null
    NOME: string | null
    COGNOME: string | null
    EMAIL: string | null
    VIA: string | null
    N_CIVICO: string | null
    CAP: string | null
    CITTA: string | null
    CODICE_FISCALE: string | null
    DATA_DI_NASCITA: string | null
    DATA_ASSUNZIONE: Date | null
    PAGA_ORARIA: number | null
    CODICE_ZONA: string | null
    RUOLO: string | null
    UTENTE_PASSWORD: string | null
  }

  export type Tbl_dipendenteMaxAggregateOutputType = {
    ID: number | null
    NOME: string | null
    COGNOME: string | null
    EMAIL: string | null
    VIA: string | null
    N_CIVICO: string | null
    CAP: string | null
    CITTA: string | null
    CODICE_FISCALE: string | null
    DATA_DI_NASCITA: string | null
    DATA_ASSUNZIONE: Date | null
    PAGA_ORARIA: number | null
    CODICE_ZONA: string | null
    RUOLO: string | null
    UTENTE_PASSWORD: string | null
  }

  export type Tbl_dipendenteCountAggregateOutputType = {
    ID: number
    NOME: number
    COGNOME: number
    EMAIL: number
    VIA: number
    N_CIVICO: number
    CAP: number
    CITTA: number
    CODICE_FISCALE: number
    DATA_DI_NASCITA: number
    DATA_ASSUNZIONE: number
    PAGA_ORARIA: number
    CODICE_ZONA: number
    RUOLO: number
    UTENTE_PASSWORD: number
    _all: number
  }


  export type Tbl_dipendenteAvgAggregateInputType = {
    ID?: true
    PAGA_ORARIA?: true
  }

  export type Tbl_dipendenteSumAggregateInputType = {
    ID?: true
    PAGA_ORARIA?: true
  }

  export type Tbl_dipendenteMinAggregateInputType = {
    ID?: true
    NOME?: true
    COGNOME?: true
    EMAIL?: true
    VIA?: true
    N_CIVICO?: true
    CAP?: true
    CITTA?: true
    CODICE_FISCALE?: true
    DATA_DI_NASCITA?: true
    DATA_ASSUNZIONE?: true
    PAGA_ORARIA?: true
    CODICE_ZONA?: true
    RUOLO?: true
    UTENTE_PASSWORD?: true
  }

  export type Tbl_dipendenteMaxAggregateInputType = {
    ID?: true
    NOME?: true
    COGNOME?: true
    EMAIL?: true
    VIA?: true
    N_CIVICO?: true
    CAP?: true
    CITTA?: true
    CODICE_FISCALE?: true
    DATA_DI_NASCITA?: true
    DATA_ASSUNZIONE?: true
    PAGA_ORARIA?: true
    CODICE_ZONA?: true
    RUOLO?: true
    UTENTE_PASSWORD?: true
  }

  export type Tbl_dipendenteCountAggregateInputType = {
    ID?: true
    NOME?: true
    COGNOME?: true
    EMAIL?: true
    VIA?: true
    N_CIVICO?: true
    CAP?: true
    CITTA?: true
    CODICE_FISCALE?: true
    DATA_DI_NASCITA?: true
    DATA_ASSUNZIONE?: true
    PAGA_ORARIA?: true
    CODICE_ZONA?: true
    RUOLO?: true
    UTENTE_PASSWORD?: true
    _all?: true
  }

  export type Tbl_dipendenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_dipendente to aggregate.
     */
    where?: tbl_dipendenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_dipendentes to fetch.
     */
    orderBy?: tbl_dipendenteOrderByWithRelationInput | tbl_dipendenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_dipendenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_dipendentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_dipendentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_dipendentes
    **/
    _count?: true | Tbl_dipendenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_dipendenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_dipendenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_dipendenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_dipendenteMaxAggregateInputType
  }

  export type GetTbl_dipendenteAggregateType<T extends Tbl_dipendenteAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_dipendente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_dipendente[P]>
      : GetScalarType<T[P], AggregateTbl_dipendente[P]>
  }




  export type tbl_dipendenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_dipendenteWhereInput
    orderBy?: tbl_dipendenteOrderByWithAggregationInput | tbl_dipendenteOrderByWithAggregationInput[]
    by: Tbl_dipendenteScalarFieldEnum[] | Tbl_dipendenteScalarFieldEnum
    having?: tbl_dipendenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_dipendenteCountAggregateInputType | true
    _avg?: Tbl_dipendenteAvgAggregateInputType
    _sum?: Tbl_dipendenteSumAggregateInputType
    _min?: Tbl_dipendenteMinAggregateInputType
    _max?: Tbl_dipendenteMaxAggregateInputType
  }

  export type Tbl_dipendenteGroupByOutputType = {
    ID: number
    NOME: string
    COGNOME: string
    EMAIL: string
    VIA: string
    N_CIVICO: string
    CAP: string
    CITTA: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    DATA_ASSUNZIONE: Date | null
    PAGA_ORARIA: number
    CODICE_ZONA: string | null
    RUOLO: string | null
    UTENTE_PASSWORD: string | null
    _count: Tbl_dipendenteCountAggregateOutputType | null
    _avg: Tbl_dipendenteAvgAggregateOutputType | null
    _sum: Tbl_dipendenteSumAggregateOutputType | null
    _min: Tbl_dipendenteMinAggregateOutputType | null
    _max: Tbl_dipendenteMaxAggregateOutputType | null
  }

  type GetTbl_dipendenteGroupByPayload<T extends tbl_dipendenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_dipendenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_dipendenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_dipendenteGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_dipendenteGroupByOutputType[P]>
        }
      >
    >


  export type tbl_dipendenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    NOME?: boolean
    COGNOME?: boolean
    EMAIL?: boolean
    VIA?: boolean
    N_CIVICO?: boolean
    CAP?: boolean
    CITTA?: boolean
    CODICE_FISCALE?: boolean
    DATA_DI_NASCITA?: boolean
    DATA_ASSUNZIONE?: boolean
    PAGA_ORARIA?: boolean
    CODICE_ZONA?: boolean
    RUOLO?: boolean
    UTENTE_PASSWORD?: boolean
    tbl_filiale?: boolean | tbl_dipendente$tbl_filialeArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_dipendente"]>

  export type tbl_dipendenteSelectScalar = {
    ID?: boolean
    NOME?: boolean
    COGNOME?: boolean
    EMAIL?: boolean
    VIA?: boolean
    N_CIVICO?: boolean
    CAP?: boolean
    CITTA?: boolean
    CODICE_FISCALE?: boolean
    DATA_DI_NASCITA?: boolean
    DATA_ASSUNZIONE?: boolean
    PAGA_ORARIA?: boolean
    CODICE_ZONA?: boolean
    RUOLO?: boolean
    UTENTE_PASSWORD?: boolean
  }

  export type tbl_dipendenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_filiale?: boolean | tbl_dipendente$tbl_filialeArgs<ExtArgs>
  }


  export type $tbl_dipendentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_dipendente"
    objects: {
      tbl_filiale: Prisma.$tbl_filialePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      NOME: string
      COGNOME: string
      EMAIL: string
      VIA: string
      N_CIVICO: string
      CAP: string
      CITTA: string
      CODICE_FISCALE: string
      DATA_DI_NASCITA: string
      DATA_ASSUNZIONE: Date | null
      PAGA_ORARIA: number
      CODICE_ZONA: string | null
      RUOLO: string | null
      UTENTE_PASSWORD: string | null
    }, ExtArgs["result"]["tbl_dipendente"]>
    composites: {}
  }


  type tbl_dipendenteGetPayload<S extends boolean | null | undefined | tbl_dipendenteDefaultArgs> = $Result.GetResult<Prisma.$tbl_dipendentePayload, S>

  type tbl_dipendenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tbl_dipendenteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tbl_dipendenteCountAggregateInputType | true
    }

  export interface tbl_dipendenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_dipendente'], meta: { name: 'tbl_dipendente' } }
    /**
     * Find zero or one Tbl_dipendente that matches the filter.
     * @param {tbl_dipendenteFindUniqueArgs} args - Arguments to find a Tbl_dipendente
     * @example
     * // Get one Tbl_dipendente
     * const tbl_dipendente = await prisma.tbl_dipendente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_dipendenteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_dipendenteFindUniqueArgs<ExtArgs>>
    ): Prisma__tbl_dipendenteClient<$Result.GetResult<Prisma.$tbl_dipendentePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tbl_dipendente that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_dipendenteFindUniqueOrThrowArgs} args - Arguments to find a Tbl_dipendente
     * @example
     * // Get one Tbl_dipendente
     * const tbl_dipendente = await prisma.tbl_dipendente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_dipendenteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_dipendenteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_dipendenteClient<$Result.GetResult<Prisma.$tbl_dipendentePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tbl_dipendente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_dipendenteFindFirstArgs} args - Arguments to find a Tbl_dipendente
     * @example
     * // Get one Tbl_dipendente
     * const tbl_dipendente = await prisma.tbl_dipendente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_dipendenteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_dipendenteFindFirstArgs<ExtArgs>>
    ): Prisma__tbl_dipendenteClient<$Result.GetResult<Prisma.$tbl_dipendentePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tbl_dipendente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_dipendenteFindFirstOrThrowArgs} args - Arguments to find a Tbl_dipendente
     * @example
     * // Get one Tbl_dipendente
     * const tbl_dipendente = await prisma.tbl_dipendente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_dipendenteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_dipendenteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_dipendenteClient<$Result.GetResult<Prisma.$tbl_dipendentePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tbl_dipendentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_dipendenteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_dipendentes
     * const tbl_dipendentes = await prisma.tbl_dipendente.findMany()
     * 
     * // Get first 10 Tbl_dipendentes
     * const tbl_dipendentes = await prisma.tbl_dipendente.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const tbl_dipendenteWithIDOnly = await prisma.tbl_dipendente.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends tbl_dipendenteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_dipendenteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_dipendentePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tbl_dipendente.
     * @param {tbl_dipendenteCreateArgs} args - Arguments to create a Tbl_dipendente.
     * @example
     * // Create one Tbl_dipendente
     * const Tbl_dipendente = await prisma.tbl_dipendente.create({
     *   data: {
     *     // ... data to create a Tbl_dipendente
     *   }
     * })
     * 
    **/
    create<T extends tbl_dipendenteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_dipendenteCreateArgs<ExtArgs>>
    ): Prisma__tbl_dipendenteClient<$Result.GetResult<Prisma.$tbl_dipendentePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tbl_dipendentes.
     *     @param {tbl_dipendenteCreateManyArgs} args - Arguments to create many Tbl_dipendentes.
     *     @example
     *     // Create many Tbl_dipendentes
     *     const tbl_dipendente = await prisma.tbl_dipendente.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_dipendenteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_dipendenteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_dipendente.
     * @param {tbl_dipendenteDeleteArgs} args - Arguments to delete one Tbl_dipendente.
     * @example
     * // Delete one Tbl_dipendente
     * const Tbl_dipendente = await prisma.tbl_dipendente.delete({
     *   where: {
     *     // ... filter to delete one Tbl_dipendente
     *   }
     * })
     * 
    **/
    delete<T extends tbl_dipendenteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_dipendenteDeleteArgs<ExtArgs>>
    ): Prisma__tbl_dipendenteClient<$Result.GetResult<Prisma.$tbl_dipendentePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tbl_dipendente.
     * @param {tbl_dipendenteUpdateArgs} args - Arguments to update one Tbl_dipendente.
     * @example
     * // Update one Tbl_dipendente
     * const tbl_dipendente = await prisma.tbl_dipendente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_dipendenteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_dipendenteUpdateArgs<ExtArgs>>
    ): Prisma__tbl_dipendenteClient<$Result.GetResult<Prisma.$tbl_dipendentePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_dipendentes.
     * @param {tbl_dipendenteDeleteManyArgs} args - Arguments to filter Tbl_dipendentes to delete.
     * @example
     * // Delete a few Tbl_dipendentes
     * const { count } = await prisma.tbl_dipendente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_dipendenteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_dipendenteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_dipendentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_dipendenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_dipendentes
     * const tbl_dipendente = await prisma.tbl_dipendente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_dipendenteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_dipendenteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_dipendente.
     * @param {tbl_dipendenteUpsertArgs} args - Arguments to update or create a Tbl_dipendente.
     * @example
     * // Update or create a Tbl_dipendente
     * const tbl_dipendente = await prisma.tbl_dipendente.upsert({
     *   create: {
     *     // ... data to create a Tbl_dipendente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_dipendente we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_dipendenteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_dipendenteUpsertArgs<ExtArgs>>
    ): Prisma__tbl_dipendenteClient<$Result.GetResult<Prisma.$tbl_dipendentePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tbl_dipendentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_dipendenteCountArgs} args - Arguments to filter Tbl_dipendentes to count.
     * @example
     * // Count the number of Tbl_dipendentes
     * const count = await prisma.tbl_dipendente.count({
     *   where: {
     *     // ... the filter for the Tbl_dipendentes we want to count
     *   }
     * })
    **/
    count<T extends tbl_dipendenteCountArgs>(
      args?: Subset<T, tbl_dipendenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_dipendenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_dipendente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_dipendenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_dipendenteAggregateArgs>(args: Subset<T, Tbl_dipendenteAggregateArgs>): Prisma.PrismaPromise<GetTbl_dipendenteAggregateType<T>>

    /**
     * Group by Tbl_dipendente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_dipendenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_dipendenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_dipendenteGroupByArgs['orderBy'] }
        : { orderBy?: tbl_dipendenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_dipendenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_dipendenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_dipendente model
   */
  readonly fields: tbl_dipendenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_dipendente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_dipendenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tbl_filiale<T extends tbl_dipendente$tbl_filialeArgs<ExtArgs> = {}>(args?: Subset<T, tbl_dipendente$tbl_filialeArgs<ExtArgs>>): Prisma__tbl_filialeClient<$Result.GetResult<Prisma.$tbl_filialePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tbl_dipendente model
   */ 
  interface tbl_dipendenteFieldRefs {
    readonly ID: FieldRef<"tbl_dipendente", 'Int'>
    readonly NOME: FieldRef<"tbl_dipendente", 'String'>
    readonly COGNOME: FieldRef<"tbl_dipendente", 'String'>
    readonly EMAIL: FieldRef<"tbl_dipendente", 'String'>
    readonly VIA: FieldRef<"tbl_dipendente", 'String'>
    readonly N_CIVICO: FieldRef<"tbl_dipendente", 'String'>
    readonly CAP: FieldRef<"tbl_dipendente", 'String'>
    readonly CITTA: FieldRef<"tbl_dipendente", 'String'>
    readonly CODICE_FISCALE: FieldRef<"tbl_dipendente", 'String'>
    readonly DATA_DI_NASCITA: FieldRef<"tbl_dipendente", 'String'>
    readonly DATA_ASSUNZIONE: FieldRef<"tbl_dipendente", 'DateTime'>
    readonly PAGA_ORARIA: FieldRef<"tbl_dipendente", 'Float'>
    readonly CODICE_ZONA: FieldRef<"tbl_dipendente", 'String'>
    readonly RUOLO: FieldRef<"tbl_dipendente", 'String'>
    readonly UTENTE_PASSWORD: FieldRef<"tbl_dipendente", 'String'>
  }
    

  // Custom InputTypes

  /**
   * tbl_dipendente findUnique
   */
  export type tbl_dipendenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_dipendente
     */
    select?: tbl_dipendenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_dipendenteInclude<ExtArgs> | null
    /**
     * Filter, which tbl_dipendente to fetch.
     */
    where: tbl_dipendenteWhereUniqueInput
  }


  /**
   * tbl_dipendente findUniqueOrThrow
   */
  export type tbl_dipendenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_dipendente
     */
    select?: tbl_dipendenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_dipendenteInclude<ExtArgs> | null
    /**
     * Filter, which tbl_dipendente to fetch.
     */
    where: tbl_dipendenteWhereUniqueInput
  }


  /**
   * tbl_dipendente findFirst
   */
  export type tbl_dipendenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_dipendente
     */
    select?: tbl_dipendenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_dipendenteInclude<ExtArgs> | null
    /**
     * Filter, which tbl_dipendente to fetch.
     */
    where?: tbl_dipendenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_dipendentes to fetch.
     */
    orderBy?: tbl_dipendenteOrderByWithRelationInput | tbl_dipendenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_dipendentes.
     */
    cursor?: tbl_dipendenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_dipendentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_dipendentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_dipendentes.
     */
    distinct?: Tbl_dipendenteScalarFieldEnum | Tbl_dipendenteScalarFieldEnum[]
  }


  /**
   * tbl_dipendente findFirstOrThrow
   */
  export type tbl_dipendenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_dipendente
     */
    select?: tbl_dipendenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_dipendenteInclude<ExtArgs> | null
    /**
     * Filter, which tbl_dipendente to fetch.
     */
    where?: tbl_dipendenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_dipendentes to fetch.
     */
    orderBy?: tbl_dipendenteOrderByWithRelationInput | tbl_dipendenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_dipendentes.
     */
    cursor?: tbl_dipendenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_dipendentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_dipendentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_dipendentes.
     */
    distinct?: Tbl_dipendenteScalarFieldEnum | Tbl_dipendenteScalarFieldEnum[]
  }


  /**
   * tbl_dipendente findMany
   */
  export type tbl_dipendenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_dipendente
     */
    select?: tbl_dipendenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_dipendenteInclude<ExtArgs> | null
    /**
     * Filter, which tbl_dipendentes to fetch.
     */
    where?: tbl_dipendenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_dipendentes to fetch.
     */
    orderBy?: tbl_dipendenteOrderByWithRelationInput | tbl_dipendenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_dipendentes.
     */
    cursor?: tbl_dipendenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_dipendentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_dipendentes.
     */
    skip?: number
    distinct?: Tbl_dipendenteScalarFieldEnum | Tbl_dipendenteScalarFieldEnum[]
  }


  /**
   * tbl_dipendente create
   */
  export type tbl_dipendenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_dipendente
     */
    select?: tbl_dipendenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_dipendenteInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_dipendente.
     */
    data: XOR<tbl_dipendenteCreateInput, tbl_dipendenteUncheckedCreateInput>
  }


  /**
   * tbl_dipendente createMany
   */
  export type tbl_dipendenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_dipendentes.
     */
    data: tbl_dipendenteCreateManyInput | tbl_dipendenteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tbl_dipendente update
   */
  export type tbl_dipendenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_dipendente
     */
    select?: tbl_dipendenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_dipendenteInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_dipendente.
     */
    data: XOR<tbl_dipendenteUpdateInput, tbl_dipendenteUncheckedUpdateInput>
    /**
     * Choose, which tbl_dipendente to update.
     */
    where: tbl_dipendenteWhereUniqueInput
  }


  /**
   * tbl_dipendente updateMany
   */
  export type tbl_dipendenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_dipendentes.
     */
    data: XOR<tbl_dipendenteUpdateManyMutationInput, tbl_dipendenteUncheckedUpdateManyInput>
    /**
     * Filter which tbl_dipendentes to update
     */
    where?: tbl_dipendenteWhereInput
  }


  /**
   * tbl_dipendente upsert
   */
  export type tbl_dipendenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_dipendente
     */
    select?: tbl_dipendenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_dipendenteInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_dipendente to update in case it exists.
     */
    where: tbl_dipendenteWhereUniqueInput
    /**
     * In case the tbl_dipendente found by the `where` argument doesn't exist, create a new tbl_dipendente with this data.
     */
    create: XOR<tbl_dipendenteCreateInput, tbl_dipendenteUncheckedCreateInput>
    /**
     * In case the tbl_dipendente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_dipendenteUpdateInput, tbl_dipendenteUncheckedUpdateInput>
  }


  /**
   * tbl_dipendente delete
   */
  export type tbl_dipendenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_dipendente
     */
    select?: tbl_dipendenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_dipendenteInclude<ExtArgs> | null
    /**
     * Filter which tbl_dipendente to delete.
     */
    where: tbl_dipendenteWhereUniqueInput
  }


  /**
   * tbl_dipendente deleteMany
   */
  export type tbl_dipendenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_dipendentes to delete
     */
    where?: tbl_dipendenteWhereInput
  }


  /**
   * tbl_dipendente.tbl_filiale
   */
  export type tbl_dipendente$tbl_filialeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filiale
     */
    select?: tbl_filialeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_filialeInclude<ExtArgs> | null
    where?: tbl_filialeWhereInput
  }


  /**
   * tbl_dipendente without action
   */
  export type tbl_dipendenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_dipendente
     */
    select?: tbl_dipendenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_dipendenteInclude<ExtArgs> | null
  }



  /**
   * Model tbl_filiale
   */

  export type AggregateTbl_filiale = {
    _count: Tbl_filialeCountAggregateOutputType | null
    _min: Tbl_filialeMinAggregateOutputType | null
    _max: Tbl_filialeMaxAggregateOutputType | null
  }

  export type Tbl_filialeMinAggregateOutputType = {
    NOME_FILIALE: string | null
    SEDE: string | null
    CODICE_ZONA_FILIALE: string | null
  }

  export type Tbl_filialeMaxAggregateOutputType = {
    NOME_FILIALE: string | null
    SEDE: string | null
    CODICE_ZONA_FILIALE: string | null
  }

  export type Tbl_filialeCountAggregateOutputType = {
    NOME_FILIALE: number
    SEDE: number
    CODICE_ZONA_FILIALE: number
    _all: number
  }


  export type Tbl_filialeMinAggregateInputType = {
    NOME_FILIALE?: true
    SEDE?: true
    CODICE_ZONA_FILIALE?: true
  }

  export type Tbl_filialeMaxAggregateInputType = {
    NOME_FILIALE?: true
    SEDE?: true
    CODICE_ZONA_FILIALE?: true
  }

  export type Tbl_filialeCountAggregateInputType = {
    NOME_FILIALE?: true
    SEDE?: true
    CODICE_ZONA_FILIALE?: true
    _all?: true
  }

  export type Tbl_filialeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_filiale to aggregate.
     */
    where?: tbl_filialeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filiales to fetch.
     */
    orderBy?: tbl_filialeOrderByWithRelationInput | tbl_filialeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_filialeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filiales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_filiales
    **/
    _count?: true | Tbl_filialeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_filialeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_filialeMaxAggregateInputType
  }

  export type GetTbl_filialeAggregateType<T extends Tbl_filialeAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_filiale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_filiale[P]>
      : GetScalarType<T[P], AggregateTbl_filiale[P]>
  }




  export type tbl_filialeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_filialeWhereInput
    orderBy?: tbl_filialeOrderByWithAggregationInput | tbl_filialeOrderByWithAggregationInput[]
    by: Tbl_filialeScalarFieldEnum[] | Tbl_filialeScalarFieldEnum
    having?: tbl_filialeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_filialeCountAggregateInputType | true
    _min?: Tbl_filialeMinAggregateInputType
    _max?: Tbl_filialeMaxAggregateInputType
  }

  export type Tbl_filialeGroupByOutputType = {
    NOME_FILIALE: string
    SEDE: string
    CODICE_ZONA_FILIALE: string
    _count: Tbl_filialeCountAggregateOutputType | null
    _min: Tbl_filialeMinAggregateOutputType | null
    _max: Tbl_filialeMaxAggregateOutputType | null
  }

  type GetTbl_filialeGroupByPayload<T extends tbl_filialeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_filialeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_filialeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_filialeGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_filialeGroupByOutputType[P]>
        }
      >
    >


  export type tbl_filialeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NOME_FILIALE?: boolean
    SEDE?: boolean
    CODICE_ZONA_FILIALE?: boolean
    tbl_dipendente?: boolean | tbl_filiale$tbl_dipendenteArgs<ExtArgs>
    _count?: boolean | Tbl_filialeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_filiale"]>

  export type tbl_filialeSelectScalar = {
    NOME_FILIALE?: boolean
    SEDE?: boolean
    CODICE_ZONA_FILIALE?: boolean
  }

  export type tbl_filialeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_dipendente?: boolean | tbl_filiale$tbl_dipendenteArgs<ExtArgs>
    _count?: boolean | Tbl_filialeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $tbl_filialePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_filiale"
    objects: {
      tbl_dipendente: Prisma.$tbl_dipendentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      NOME_FILIALE: string
      SEDE: string
      CODICE_ZONA_FILIALE: string
    }, ExtArgs["result"]["tbl_filiale"]>
    composites: {}
  }


  type tbl_filialeGetPayload<S extends boolean | null | undefined | tbl_filialeDefaultArgs> = $Result.GetResult<Prisma.$tbl_filialePayload, S>

  type tbl_filialeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tbl_filialeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tbl_filialeCountAggregateInputType | true
    }

  export interface tbl_filialeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_filiale'], meta: { name: 'tbl_filiale' } }
    /**
     * Find zero or one Tbl_filiale that matches the filter.
     * @param {tbl_filialeFindUniqueArgs} args - Arguments to find a Tbl_filiale
     * @example
     * // Get one Tbl_filiale
     * const tbl_filiale = await prisma.tbl_filiale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_filialeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_filialeFindUniqueArgs<ExtArgs>>
    ): Prisma__tbl_filialeClient<$Result.GetResult<Prisma.$tbl_filialePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tbl_filiale that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_filialeFindUniqueOrThrowArgs} args - Arguments to find a Tbl_filiale
     * @example
     * // Get one Tbl_filiale
     * const tbl_filiale = await prisma.tbl_filiale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_filialeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_filialeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_filialeClient<$Result.GetResult<Prisma.$tbl_filialePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tbl_filiale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filialeFindFirstArgs} args - Arguments to find a Tbl_filiale
     * @example
     * // Get one Tbl_filiale
     * const tbl_filiale = await prisma.tbl_filiale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_filialeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_filialeFindFirstArgs<ExtArgs>>
    ): Prisma__tbl_filialeClient<$Result.GetResult<Prisma.$tbl_filialePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tbl_filiale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filialeFindFirstOrThrowArgs} args - Arguments to find a Tbl_filiale
     * @example
     * // Get one Tbl_filiale
     * const tbl_filiale = await prisma.tbl_filiale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_filialeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_filialeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_filialeClient<$Result.GetResult<Prisma.$tbl_filialePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tbl_filiales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filialeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_filiales
     * const tbl_filiales = await prisma.tbl_filiale.findMany()
     * 
     * // Get first 10 Tbl_filiales
     * const tbl_filiales = await prisma.tbl_filiale.findMany({ take: 10 })
     * 
     * // Only select the `NOME_FILIALE`
     * const tbl_filialeWithNOME_FILIALEOnly = await prisma.tbl_filiale.findMany({ select: { NOME_FILIALE: true } })
     * 
    **/
    findMany<T extends tbl_filialeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_filialeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_filialePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tbl_filiale.
     * @param {tbl_filialeCreateArgs} args - Arguments to create a Tbl_filiale.
     * @example
     * // Create one Tbl_filiale
     * const Tbl_filiale = await prisma.tbl_filiale.create({
     *   data: {
     *     // ... data to create a Tbl_filiale
     *   }
     * })
     * 
    **/
    create<T extends tbl_filialeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_filialeCreateArgs<ExtArgs>>
    ): Prisma__tbl_filialeClient<$Result.GetResult<Prisma.$tbl_filialePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tbl_filiales.
     *     @param {tbl_filialeCreateManyArgs} args - Arguments to create many Tbl_filiales.
     *     @example
     *     // Create many Tbl_filiales
     *     const tbl_filiale = await prisma.tbl_filiale.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_filialeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_filialeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_filiale.
     * @param {tbl_filialeDeleteArgs} args - Arguments to delete one Tbl_filiale.
     * @example
     * // Delete one Tbl_filiale
     * const Tbl_filiale = await prisma.tbl_filiale.delete({
     *   where: {
     *     // ... filter to delete one Tbl_filiale
     *   }
     * })
     * 
    **/
    delete<T extends tbl_filialeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_filialeDeleteArgs<ExtArgs>>
    ): Prisma__tbl_filialeClient<$Result.GetResult<Prisma.$tbl_filialePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tbl_filiale.
     * @param {tbl_filialeUpdateArgs} args - Arguments to update one Tbl_filiale.
     * @example
     * // Update one Tbl_filiale
     * const tbl_filiale = await prisma.tbl_filiale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_filialeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_filialeUpdateArgs<ExtArgs>>
    ): Prisma__tbl_filialeClient<$Result.GetResult<Prisma.$tbl_filialePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_filiales.
     * @param {tbl_filialeDeleteManyArgs} args - Arguments to filter Tbl_filiales to delete.
     * @example
     * // Delete a few Tbl_filiales
     * const { count } = await prisma.tbl_filiale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_filialeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_filialeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_filiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filialeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_filiales
     * const tbl_filiale = await prisma.tbl_filiale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_filialeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_filialeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_filiale.
     * @param {tbl_filialeUpsertArgs} args - Arguments to update or create a Tbl_filiale.
     * @example
     * // Update or create a Tbl_filiale
     * const tbl_filiale = await prisma.tbl_filiale.upsert({
     *   create: {
     *     // ... data to create a Tbl_filiale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_filiale we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_filialeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_filialeUpsertArgs<ExtArgs>>
    ): Prisma__tbl_filialeClient<$Result.GetResult<Prisma.$tbl_filialePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tbl_filiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filialeCountArgs} args - Arguments to filter Tbl_filiales to count.
     * @example
     * // Count the number of Tbl_filiales
     * const count = await prisma.tbl_filiale.count({
     *   where: {
     *     // ... the filter for the Tbl_filiales we want to count
     *   }
     * })
    **/
    count<T extends tbl_filialeCountArgs>(
      args?: Subset<T, tbl_filialeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_filialeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_filiale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_filialeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_filialeAggregateArgs>(args: Subset<T, Tbl_filialeAggregateArgs>): Prisma.PrismaPromise<GetTbl_filialeAggregateType<T>>

    /**
     * Group by Tbl_filiale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_filialeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_filialeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_filialeGroupByArgs['orderBy'] }
        : { orderBy?: tbl_filialeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_filialeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_filialeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_filiale model
   */
  readonly fields: tbl_filialeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_filiale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_filialeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tbl_dipendente<T extends tbl_filiale$tbl_dipendenteArgs<ExtArgs> = {}>(args?: Subset<T, tbl_filiale$tbl_dipendenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_dipendentePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tbl_filiale model
   */ 
  interface tbl_filialeFieldRefs {
    readonly NOME_FILIALE: FieldRef<"tbl_filiale", 'String'>
    readonly SEDE: FieldRef<"tbl_filiale", 'String'>
    readonly CODICE_ZONA_FILIALE: FieldRef<"tbl_filiale", 'String'>
  }
    

  // Custom InputTypes

  /**
   * tbl_filiale findUnique
   */
  export type tbl_filialeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filiale
     */
    select?: tbl_filialeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_filialeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filiale to fetch.
     */
    where: tbl_filialeWhereUniqueInput
  }


  /**
   * tbl_filiale findUniqueOrThrow
   */
  export type tbl_filialeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filiale
     */
    select?: tbl_filialeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_filialeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filiale to fetch.
     */
    where: tbl_filialeWhereUniqueInput
  }


  /**
   * tbl_filiale findFirst
   */
  export type tbl_filialeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filiale
     */
    select?: tbl_filialeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_filialeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filiale to fetch.
     */
    where?: tbl_filialeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filiales to fetch.
     */
    orderBy?: tbl_filialeOrderByWithRelationInput | tbl_filialeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_filiales.
     */
    cursor?: tbl_filialeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filiales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_filiales.
     */
    distinct?: Tbl_filialeScalarFieldEnum | Tbl_filialeScalarFieldEnum[]
  }


  /**
   * tbl_filiale findFirstOrThrow
   */
  export type tbl_filialeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filiale
     */
    select?: tbl_filialeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_filialeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filiale to fetch.
     */
    where?: tbl_filialeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filiales to fetch.
     */
    orderBy?: tbl_filialeOrderByWithRelationInput | tbl_filialeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_filiales.
     */
    cursor?: tbl_filialeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filiales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_filiales.
     */
    distinct?: Tbl_filialeScalarFieldEnum | Tbl_filialeScalarFieldEnum[]
  }


  /**
   * tbl_filiale findMany
   */
  export type tbl_filialeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filiale
     */
    select?: tbl_filialeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_filialeInclude<ExtArgs> | null
    /**
     * Filter, which tbl_filiales to fetch.
     */
    where?: tbl_filialeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_filiales to fetch.
     */
    orderBy?: tbl_filialeOrderByWithRelationInput | tbl_filialeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_filiales.
     */
    cursor?: tbl_filialeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_filiales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_filiales.
     */
    skip?: number
    distinct?: Tbl_filialeScalarFieldEnum | Tbl_filialeScalarFieldEnum[]
  }


  /**
   * tbl_filiale create
   */
  export type tbl_filialeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filiale
     */
    select?: tbl_filialeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_filialeInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_filiale.
     */
    data: XOR<tbl_filialeCreateInput, tbl_filialeUncheckedCreateInput>
  }


  /**
   * tbl_filiale createMany
   */
  export type tbl_filialeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_filiales.
     */
    data: tbl_filialeCreateManyInput | tbl_filialeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tbl_filiale update
   */
  export type tbl_filialeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filiale
     */
    select?: tbl_filialeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_filialeInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_filiale.
     */
    data: XOR<tbl_filialeUpdateInput, tbl_filialeUncheckedUpdateInput>
    /**
     * Choose, which tbl_filiale to update.
     */
    where: tbl_filialeWhereUniqueInput
  }


  /**
   * tbl_filiale updateMany
   */
  export type tbl_filialeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_filiales.
     */
    data: XOR<tbl_filialeUpdateManyMutationInput, tbl_filialeUncheckedUpdateManyInput>
    /**
     * Filter which tbl_filiales to update
     */
    where?: tbl_filialeWhereInput
  }


  /**
   * tbl_filiale upsert
   */
  export type tbl_filialeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filiale
     */
    select?: tbl_filialeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_filialeInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_filiale to update in case it exists.
     */
    where: tbl_filialeWhereUniqueInput
    /**
     * In case the tbl_filiale found by the `where` argument doesn't exist, create a new tbl_filiale with this data.
     */
    create: XOR<tbl_filialeCreateInput, tbl_filialeUncheckedCreateInput>
    /**
     * In case the tbl_filiale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_filialeUpdateInput, tbl_filialeUncheckedUpdateInput>
  }


  /**
   * tbl_filiale delete
   */
  export type tbl_filialeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filiale
     */
    select?: tbl_filialeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_filialeInclude<ExtArgs> | null
    /**
     * Filter which tbl_filiale to delete.
     */
    where: tbl_filialeWhereUniqueInput
  }


  /**
   * tbl_filiale deleteMany
   */
  export type tbl_filialeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_filiales to delete
     */
    where?: tbl_filialeWhereInput
  }


  /**
   * tbl_filiale.tbl_dipendente
   */
  export type tbl_filiale$tbl_dipendenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_dipendente
     */
    select?: tbl_dipendenteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_dipendenteInclude<ExtArgs> | null
    where?: tbl_dipendenteWhereInput
    orderBy?: tbl_dipendenteOrderByWithRelationInput | tbl_dipendenteOrderByWithRelationInput[]
    cursor?: tbl_dipendenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_dipendenteScalarFieldEnum | Tbl_dipendenteScalarFieldEnum[]
  }


  /**
   * tbl_filiale without action
   */
  export type tbl_filialeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_filiale
     */
    select?: tbl_filialeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_filialeInclude<ExtArgs> | null
  }



  /**
   * Model tbl_fornitore
   */

  export type AggregateTbl_fornitore = {
    _count: Tbl_fornitoreCountAggregateOutputType | null
    _min: Tbl_fornitoreMinAggregateOutputType | null
    _max: Tbl_fornitoreMaxAggregateOutputType | null
  }

  export type Tbl_fornitoreMinAggregateOutputType = {
    P_IVA: string | null
    NOME: string | null
    CITTA: string | null
    VIA: string | null
    CAP: string | null
  }

  export type Tbl_fornitoreMaxAggregateOutputType = {
    P_IVA: string | null
    NOME: string | null
    CITTA: string | null
    VIA: string | null
    CAP: string | null
  }

  export type Tbl_fornitoreCountAggregateOutputType = {
    P_IVA: number
    NOME: number
    CITTA: number
    VIA: number
    CAP: number
    _all: number
  }


  export type Tbl_fornitoreMinAggregateInputType = {
    P_IVA?: true
    NOME?: true
    CITTA?: true
    VIA?: true
    CAP?: true
  }

  export type Tbl_fornitoreMaxAggregateInputType = {
    P_IVA?: true
    NOME?: true
    CITTA?: true
    VIA?: true
    CAP?: true
  }

  export type Tbl_fornitoreCountAggregateInputType = {
    P_IVA?: true
    NOME?: true
    CITTA?: true
    VIA?: true
    CAP?: true
    _all?: true
  }

  export type Tbl_fornitoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_fornitore to aggregate.
     */
    where?: tbl_fornitoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_fornitores to fetch.
     */
    orderBy?: tbl_fornitoreOrderByWithRelationInput | tbl_fornitoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_fornitoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_fornitores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_fornitores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_fornitores
    **/
    _count?: true | Tbl_fornitoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_fornitoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_fornitoreMaxAggregateInputType
  }

  export type GetTbl_fornitoreAggregateType<T extends Tbl_fornitoreAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_fornitore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_fornitore[P]>
      : GetScalarType<T[P], AggregateTbl_fornitore[P]>
  }




  export type tbl_fornitoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_fornitoreWhereInput
    orderBy?: tbl_fornitoreOrderByWithAggregationInput | tbl_fornitoreOrderByWithAggregationInput[]
    by: Tbl_fornitoreScalarFieldEnum[] | Tbl_fornitoreScalarFieldEnum
    having?: tbl_fornitoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_fornitoreCountAggregateInputType | true
    _min?: Tbl_fornitoreMinAggregateInputType
    _max?: Tbl_fornitoreMaxAggregateInputType
  }

  export type Tbl_fornitoreGroupByOutputType = {
    P_IVA: string
    NOME: string
    CITTA: string
    VIA: string
    CAP: string
    _count: Tbl_fornitoreCountAggregateOutputType | null
    _min: Tbl_fornitoreMinAggregateOutputType | null
    _max: Tbl_fornitoreMaxAggregateOutputType | null
  }

  type GetTbl_fornitoreGroupByPayload<T extends tbl_fornitoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_fornitoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_fornitoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_fornitoreGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_fornitoreGroupByOutputType[P]>
        }
      >
    >


  export type tbl_fornitoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    P_IVA?: boolean
    NOME?: boolean
    CITTA?: boolean
    VIA?: boolean
    CAP?: boolean
    tbl_fornitura?: boolean | tbl_fornitore$tbl_fornituraArgs<ExtArgs>
    _count?: boolean | Tbl_fornitoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_fornitore"]>

  export type tbl_fornitoreSelectScalar = {
    P_IVA?: boolean
    NOME?: boolean
    CITTA?: boolean
    VIA?: boolean
    CAP?: boolean
  }

  export type tbl_fornitoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_fornitura?: boolean | tbl_fornitore$tbl_fornituraArgs<ExtArgs>
    _count?: boolean | Tbl_fornitoreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $tbl_fornitorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_fornitore"
    objects: {
      tbl_fornitura: Prisma.$tbl_fornituraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      P_IVA: string
      NOME: string
      CITTA: string
      VIA: string
      CAP: string
    }, ExtArgs["result"]["tbl_fornitore"]>
    composites: {}
  }


  type tbl_fornitoreGetPayload<S extends boolean | null | undefined | tbl_fornitoreDefaultArgs> = $Result.GetResult<Prisma.$tbl_fornitorePayload, S>

  type tbl_fornitoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tbl_fornitoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tbl_fornitoreCountAggregateInputType | true
    }

  export interface tbl_fornitoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_fornitore'], meta: { name: 'tbl_fornitore' } }
    /**
     * Find zero or one Tbl_fornitore that matches the filter.
     * @param {tbl_fornitoreFindUniqueArgs} args - Arguments to find a Tbl_fornitore
     * @example
     * // Get one Tbl_fornitore
     * const tbl_fornitore = await prisma.tbl_fornitore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_fornitoreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornitoreFindUniqueArgs<ExtArgs>>
    ): Prisma__tbl_fornitoreClient<$Result.GetResult<Prisma.$tbl_fornitorePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tbl_fornitore that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_fornitoreFindUniqueOrThrowArgs} args - Arguments to find a Tbl_fornitore
     * @example
     * // Get one Tbl_fornitore
     * const tbl_fornitore = await prisma.tbl_fornitore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_fornitoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornitoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_fornitoreClient<$Result.GetResult<Prisma.$tbl_fornitorePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tbl_fornitore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornitoreFindFirstArgs} args - Arguments to find a Tbl_fornitore
     * @example
     * // Get one Tbl_fornitore
     * const tbl_fornitore = await prisma.tbl_fornitore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_fornitoreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornitoreFindFirstArgs<ExtArgs>>
    ): Prisma__tbl_fornitoreClient<$Result.GetResult<Prisma.$tbl_fornitorePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tbl_fornitore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornitoreFindFirstOrThrowArgs} args - Arguments to find a Tbl_fornitore
     * @example
     * // Get one Tbl_fornitore
     * const tbl_fornitore = await prisma.tbl_fornitore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_fornitoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornitoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_fornitoreClient<$Result.GetResult<Prisma.$tbl_fornitorePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tbl_fornitores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornitoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_fornitores
     * const tbl_fornitores = await prisma.tbl_fornitore.findMany()
     * 
     * // Get first 10 Tbl_fornitores
     * const tbl_fornitores = await prisma.tbl_fornitore.findMany({ take: 10 })
     * 
     * // Only select the `P_IVA`
     * const tbl_fornitoreWithP_IVAOnly = await prisma.tbl_fornitore.findMany({ select: { P_IVA: true } })
     * 
    **/
    findMany<T extends tbl_fornitoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornitoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_fornitorePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tbl_fornitore.
     * @param {tbl_fornitoreCreateArgs} args - Arguments to create a Tbl_fornitore.
     * @example
     * // Create one Tbl_fornitore
     * const Tbl_fornitore = await prisma.tbl_fornitore.create({
     *   data: {
     *     // ... data to create a Tbl_fornitore
     *   }
     * })
     * 
    **/
    create<T extends tbl_fornitoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornitoreCreateArgs<ExtArgs>>
    ): Prisma__tbl_fornitoreClient<$Result.GetResult<Prisma.$tbl_fornitorePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tbl_fornitores.
     *     @param {tbl_fornitoreCreateManyArgs} args - Arguments to create many Tbl_fornitores.
     *     @example
     *     // Create many Tbl_fornitores
     *     const tbl_fornitore = await prisma.tbl_fornitore.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_fornitoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornitoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_fornitore.
     * @param {tbl_fornitoreDeleteArgs} args - Arguments to delete one Tbl_fornitore.
     * @example
     * // Delete one Tbl_fornitore
     * const Tbl_fornitore = await prisma.tbl_fornitore.delete({
     *   where: {
     *     // ... filter to delete one Tbl_fornitore
     *   }
     * })
     * 
    **/
    delete<T extends tbl_fornitoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornitoreDeleteArgs<ExtArgs>>
    ): Prisma__tbl_fornitoreClient<$Result.GetResult<Prisma.$tbl_fornitorePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tbl_fornitore.
     * @param {tbl_fornitoreUpdateArgs} args - Arguments to update one Tbl_fornitore.
     * @example
     * // Update one Tbl_fornitore
     * const tbl_fornitore = await prisma.tbl_fornitore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_fornitoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornitoreUpdateArgs<ExtArgs>>
    ): Prisma__tbl_fornitoreClient<$Result.GetResult<Prisma.$tbl_fornitorePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_fornitores.
     * @param {tbl_fornitoreDeleteManyArgs} args - Arguments to filter Tbl_fornitores to delete.
     * @example
     * // Delete a few Tbl_fornitores
     * const { count } = await prisma.tbl_fornitore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_fornitoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornitoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_fornitores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornitoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_fornitores
     * const tbl_fornitore = await prisma.tbl_fornitore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_fornitoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornitoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_fornitore.
     * @param {tbl_fornitoreUpsertArgs} args - Arguments to update or create a Tbl_fornitore.
     * @example
     * // Update or create a Tbl_fornitore
     * const tbl_fornitore = await prisma.tbl_fornitore.upsert({
     *   create: {
     *     // ... data to create a Tbl_fornitore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_fornitore we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_fornitoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornitoreUpsertArgs<ExtArgs>>
    ): Prisma__tbl_fornitoreClient<$Result.GetResult<Prisma.$tbl_fornitorePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tbl_fornitores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornitoreCountArgs} args - Arguments to filter Tbl_fornitores to count.
     * @example
     * // Count the number of Tbl_fornitores
     * const count = await prisma.tbl_fornitore.count({
     *   where: {
     *     // ... the filter for the Tbl_fornitores we want to count
     *   }
     * })
    **/
    count<T extends tbl_fornitoreCountArgs>(
      args?: Subset<T, tbl_fornitoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_fornitoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_fornitore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_fornitoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_fornitoreAggregateArgs>(args: Subset<T, Tbl_fornitoreAggregateArgs>): Prisma.PrismaPromise<GetTbl_fornitoreAggregateType<T>>

    /**
     * Group by Tbl_fornitore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornitoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_fornitoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_fornitoreGroupByArgs['orderBy'] }
        : { orderBy?: tbl_fornitoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_fornitoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_fornitoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_fornitore model
   */
  readonly fields: tbl_fornitoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_fornitore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_fornitoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tbl_fornitura<T extends tbl_fornitore$tbl_fornituraArgs<ExtArgs> = {}>(args?: Subset<T, tbl_fornitore$tbl_fornituraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_fornituraPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tbl_fornitore model
   */ 
  interface tbl_fornitoreFieldRefs {
    readonly P_IVA: FieldRef<"tbl_fornitore", 'String'>
    readonly NOME: FieldRef<"tbl_fornitore", 'String'>
    readonly CITTA: FieldRef<"tbl_fornitore", 'String'>
    readonly VIA: FieldRef<"tbl_fornitore", 'String'>
    readonly CAP: FieldRef<"tbl_fornitore", 'String'>
  }
    

  // Custom InputTypes

  /**
   * tbl_fornitore findUnique
   */
  export type tbl_fornitoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitore
     */
    select?: tbl_fornitoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornitoreInclude<ExtArgs> | null
    /**
     * Filter, which tbl_fornitore to fetch.
     */
    where: tbl_fornitoreWhereUniqueInput
  }


  /**
   * tbl_fornitore findUniqueOrThrow
   */
  export type tbl_fornitoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitore
     */
    select?: tbl_fornitoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornitoreInclude<ExtArgs> | null
    /**
     * Filter, which tbl_fornitore to fetch.
     */
    where: tbl_fornitoreWhereUniqueInput
  }


  /**
   * tbl_fornitore findFirst
   */
  export type tbl_fornitoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitore
     */
    select?: tbl_fornitoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornitoreInclude<ExtArgs> | null
    /**
     * Filter, which tbl_fornitore to fetch.
     */
    where?: tbl_fornitoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_fornitores to fetch.
     */
    orderBy?: tbl_fornitoreOrderByWithRelationInput | tbl_fornitoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_fornitores.
     */
    cursor?: tbl_fornitoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_fornitores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_fornitores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_fornitores.
     */
    distinct?: Tbl_fornitoreScalarFieldEnum | Tbl_fornitoreScalarFieldEnum[]
  }


  /**
   * tbl_fornitore findFirstOrThrow
   */
  export type tbl_fornitoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitore
     */
    select?: tbl_fornitoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornitoreInclude<ExtArgs> | null
    /**
     * Filter, which tbl_fornitore to fetch.
     */
    where?: tbl_fornitoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_fornitores to fetch.
     */
    orderBy?: tbl_fornitoreOrderByWithRelationInput | tbl_fornitoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_fornitores.
     */
    cursor?: tbl_fornitoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_fornitores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_fornitores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_fornitores.
     */
    distinct?: Tbl_fornitoreScalarFieldEnum | Tbl_fornitoreScalarFieldEnum[]
  }


  /**
   * tbl_fornitore findMany
   */
  export type tbl_fornitoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitore
     */
    select?: tbl_fornitoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornitoreInclude<ExtArgs> | null
    /**
     * Filter, which tbl_fornitores to fetch.
     */
    where?: tbl_fornitoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_fornitores to fetch.
     */
    orderBy?: tbl_fornitoreOrderByWithRelationInput | tbl_fornitoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_fornitores.
     */
    cursor?: tbl_fornitoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_fornitores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_fornitores.
     */
    skip?: number
    distinct?: Tbl_fornitoreScalarFieldEnum | Tbl_fornitoreScalarFieldEnum[]
  }


  /**
   * tbl_fornitore create
   */
  export type tbl_fornitoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitore
     */
    select?: tbl_fornitoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornitoreInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_fornitore.
     */
    data: XOR<tbl_fornitoreCreateInput, tbl_fornitoreUncheckedCreateInput>
  }


  /**
   * tbl_fornitore createMany
   */
  export type tbl_fornitoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_fornitores.
     */
    data: tbl_fornitoreCreateManyInput | tbl_fornitoreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tbl_fornitore update
   */
  export type tbl_fornitoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitore
     */
    select?: tbl_fornitoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornitoreInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_fornitore.
     */
    data: XOR<tbl_fornitoreUpdateInput, tbl_fornitoreUncheckedUpdateInput>
    /**
     * Choose, which tbl_fornitore to update.
     */
    where: tbl_fornitoreWhereUniqueInput
  }


  /**
   * tbl_fornitore updateMany
   */
  export type tbl_fornitoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_fornitores.
     */
    data: XOR<tbl_fornitoreUpdateManyMutationInput, tbl_fornitoreUncheckedUpdateManyInput>
    /**
     * Filter which tbl_fornitores to update
     */
    where?: tbl_fornitoreWhereInput
  }


  /**
   * tbl_fornitore upsert
   */
  export type tbl_fornitoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitore
     */
    select?: tbl_fornitoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornitoreInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_fornitore to update in case it exists.
     */
    where: tbl_fornitoreWhereUniqueInput
    /**
     * In case the tbl_fornitore found by the `where` argument doesn't exist, create a new tbl_fornitore with this data.
     */
    create: XOR<tbl_fornitoreCreateInput, tbl_fornitoreUncheckedCreateInput>
    /**
     * In case the tbl_fornitore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_fornitoreUpdateInput, tbl_fornitoreUncheckedUpdateInput>
  }


  /**
   * tbl_fornitore delete
   */
  export type tbl_fornitoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitore
     */
    select?: tbl_fornitoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornitoreInclude<ExtArgs> | null
    /**
     * Filter which tbl_fornitore to delete.
     */
    where: tbl_fornitoreWhereUniqueInput
  }


  /**
   * tbl_fornitore deleteMany
   */
  export type tbl_fornitoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_fornitores to delete
     */
    where?: tbl_fornitoreWhereInput
  }


  /**
   * tbl_fornitore.tbl_fornitura
   */
  export type tbl_fornitore$tbl_fornituraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitura
     */
    select?: tbl_fornituraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornituraInclude<ExtArgs> | null
    where?: tbl_fornituraWhereInput
    orderBy?: tbl_fornituraOrderByWithRelationInput | tbl_fornituraOrderByWithRelationInput[]
    cursor?: tbl_fornituraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_fornituraScalarFieldEnum | Tbl_fornituraScalarFieldEnum[]
  }


  /**
   * tbl_fornitore without action
   */
  export type tbl_fornitoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitore
     */
    select?: tbl_fornitoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornitoreInclude<ExtArgs> | null
  }



  /**
   * Model tbl_fornitura
   */

  export type AggregateTbl_fornitura = {
    _count: Tbl_fornituraCountAggregateOutputType | null
    _avg: Tbl_fornituraAvgAggregateOutputType | null
    _sum: Tbl_fornituraSumAggregateOutputType | null
    _min: Tbl_fornituraMinAggregateOutputType | null
    _max: Tbl_fornituraMaxAggregateOutputType | null
  }

  export type Tbl_fornituraAvgAggregateOutputType = {
    PREZZO: number | null
  }

  export type Tbl_fornituraSumAggregateOutputType = {
    PREZZO: number | null
  }

  export type Tbl_fornituraMinAggregateOutputType = {
    ID_FORNITURA: string | null
    P_IVA: string | null
    CODICE_ZONA: string | null
    PREZZO: number | null
    DATA_ACQUISTO: Date | null
    DATA_SPEDIZIONE: Date | null
  }

  export type Tbl_fornituraMaxAggregateOutputType = {
    ID_FORNITURA: string | null
    P_IVA: string | null
    CODICE_ZONA: string | null
    PREZZO: number | null
    DATA_ACQUISTO: Date | null
    DATA_SPEDIZIONE: Date | null
  }

  export type Tbl_fornituraCountAggregateOutputType = {
    ID_FORNITURA: number
    P_IVA: number
    CODICE_ZONA: number
    PREZZO: number
    DATA_ACQUISTO: number
    DATA_SPEDIZIONE: number
    _all: number
  }


  export type Tbl_fornituraAvgAggregateInputType = {
    PREZZO?: true
  }

  export type Tbl_fornituraSumAggregateInputType = {
    PREZZO?: true
  }

  export type Tbl_fornituraMinAggregateInputType = {
    ID_FORNITURA?: true
    P_IVA?: true
    CODICE_ZONA?: true
    PREZZO?: true
    DATA_ACQUISTO?: true
    DATA_SPEDIZIONE?: true
  }

  export type Tbl_fornituraMaxAggregateInputType = {
    ID_FORNITURA?: true
    P_IVA?: true
    CODICE_ZONA?: true
    PREZZO?: true
    DATA_ACQUISTO?: true
    DATA_SPEDIZIONE?: true
  }

  export type Tbl_fornituraCountAggregateInputType = {
    ID_FORNITURA?: true
    P_IVA?: true
    CODICE_ZONA?: true
    PREZZO?: true
    DATA_ACQUISTO?: true
    DATA_SPEDIZIONE?: true
    _all?: true
  }

  export type Tbl_fornituraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_fornitura to aggregate.
     */
    where?: tbl_fornituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_fornituras to fetch.
     */
    orderBy?: tbl_fornituraOrderByWithRelationInput | tbl_fornituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_fornituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_fornituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_fornituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_fornituras
    **/
    _count?: true | Tbl_fornituraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_fornituraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_fornituraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_fornituraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_fornituraMaxAggregateInputType
  }

  export type GetTbl_fornituraAggregateType<T extends Tbl_fornituraAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_fornitura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_fornitura[P]>
      : GetScalarType<T[P], AggregateTbl_fornitura[P]>
  }




  export type tbl_fornituraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_fornituraWhereInput
    orderBy?: tbl_fornituraOrderByWithAggregationInput | tbl_fornituraOrderByWithAggregationInput[]
    by: Tbl_fornituraScalarFieldEnum[] | Tbl_fornituraScalarFieldEnum
    having?: tbl_fornituraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_fornituraCountAggregateInputType | true
    _avg?: Tbl_fornituraAvgAggregateInputType
    _sum?: Tbl_fornituraSumAggregateInputType
    _min?: Tbl_fornituraMinAggregateInputType
    _max?: Tbl_fornituraMaxAggregateInputType
  }

  export type Tbl_fornituraGroupByOutputType = {
    ID_FORNITURA: string
    P_IVA: string
    CODICE_ZONA: string
    PREZZO: number | null
    DATA_ACQUISTO: Date | null
    DATA_SPEDIZIONE: Date | null
    _count: Tbl_fornituraCountAggregateOutputType | null
    _avg: Tbl_fornituraAvgAggregateOutputType | null
    _sum: Tbl_fornituraSumAggregateOutputType | null
    _min: Tbl_fornituraMinAggregateOutputType | null
    _max: Tbl_fornituraMaxAggregateOutputType | null
  }

  type GetTbl_fornituraGroupByPayload<T extends tbl_fornituraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_fornituraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_fornituraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_fornituraGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_fornituraGroupByOutputType[P]>
        }
      >
    >


  export type tbl_fornituraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_FORNITURA?: boolean
    P_IVA?: boolean
    CODICE_ZONA?: boolean
    PREZZO?: boolean
    DATA_ACQUISTO?: boolean
    DATA_SPEDIZIONE?: boolean
    tbl_fornitore?: boolean | tbl_fornitoreDefaultArgs<ExtArgs>
    tbl_prodotto?: boolean | tbl_fornitura$tbl_prodottoArgs<ExtArgs>
    _count?: boolean | Tbl_fornituraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_fornitura"]>

  export type tbl_fornituraSelectScalar = {
    ID_FORNITURA?: boolean
    P_IVA?: boolean
    CODICE_ZONA?: boolean
    PREZZO?: boolean
    DATA_ACQUISTO?: boolean
    DATA_SPEDIZIONE?: boolean
  }

  export type tbl_fornituraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_fornitore?: boolean | tbl_fornitoreDefaultArgs<ExtArgs>
    tbl_prodotto?: boolean | tbl_fornitura$tbl_prodottoArgs<ExtArgs>
    _count?: boolean | Tbl_fornituraCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $tbl_fornituraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_fornitura"
    objects: {
      tbl_fornitore: Prisma.$tbl_fornitorePayload<ExtArgs>
      tbl_prodotto: Prisma.$tbl_prodottoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_FORNITURA: string
      P_IVA: string
      CODICE_ZONA: string
      PREZZO: number | null
      DATA_ACQUISTO: Date | null
      DATA_SPEDIZIONE: Date | null
    }, ExtArgs["result"]["tbl_fornitura"]>
    composites: {}
  }


  type tbl_fornituraGetPayload<S extends boolean | null | undefined | tbl_fornituraDefaultArgs> = $Result.GetResult<Prisma.$tbl_fornituraPayload, S>

  type tbl_fornituraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tbl_fornituraFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tbl_fornituraCountAggregateInputType | true
    }

  export interface tbl_fornituraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_fornitura'], meta: { name: 'tbl_fornitura' } }
    /**
     * Find zero or one Tbl_fornitura that matches the filter.
     * @param {tbl_fornituraFindUniqueArgs} args - Arguments to find a Tbl_fornitura
     * @example
     * // Get one Tbl_fornitura
     * const tbl_fornitura = await prisma.tbl_fornitura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_fornituraFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornituraFindUniqueArgs<ExtArgs>>
    ): Prisma__tbl_fornituraClient<$Result.GetResult<Prisma.$tbl_fornituraPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tbl_fornitura that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_fornituraFindUniqueOrThrowArgs} args - Arguments to find a Tbl_fornitura
     * @example
     * // Get one Tbl_fornitura
     * const tbl_fornitura = await prisma.tbl_fornitura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_fornituraFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornituraFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_fornituraClient<$Result.GetResult<Prisma.$tbl_fornituraPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tbl_fornitura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornituraFindFirstArgs} args - Arguments to find a Tbl_fornitura
     * @example
     * // Get one Tbl_fornitura
     * const tbl_fornitura = await prisma.tbl_fornitura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_fornituraFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornituraFindFirstArgs<ExtArgs>>
    ): Prisma__tbl_fornituraClient<$Result.GetResult<Prisma.$tbl_fornituraPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tbl_fornitura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornituraFindFirstOrThrowArgs} args - Arguments to find a Tbl_fornitura
     * @example
     * // Get one Tbl_fornitura
     * const tbl_fornitura = await prisma.tbl_fornitura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_fornituraFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornituraFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_fornituraClient<$Result.GetResult<Prisma.$tbl_fornituraPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tbl_fornituras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornituraFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_fornituras
     * const tbl_fornituras = await prisma.tbl_fornitura.findMany()
     * 
     * // Get first 10 Tbl_fornituras
     * const tbl_fornituras = await prisma.tbl_fornitura.findMany({ take: 10 })
     * 
     * // Only select the `ID_FORNITURA`
     * const tbl_fornituraWithID_FORNITURAOnly = await prisma.tbl_fornitura.findMany({ select: { ID_FORNITURA: true } })
     * 
    **/
    findMany<T extends tbl_fornituraFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornituraFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_fornituraPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tbl_fornitura.
     * @param {tbl_fornituraCreateArgs} args - Arguments to create a Tbl_fornitura.
     * @example
     * // Create one Tbl_fornitura
     * const Tbl_fornitura = await prisma.tbl_fornitura.create({
     *   data: {
     *     // ... data to create a Tbl_fornitura
     *   }
     * })
     * 
    **/
    create<T extends tbl_fornituraCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornituraCreateArgs<ExtArgs>>
    ): Prisma__tbl_fornituraClient<$Result.GetResult<Prisma.$tbl_fornituraPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tbl_fornituras.
     *     @param {tbl_fornituraCreateManyArgs} args - Arguments to create many Tbl_fornituras.
     *     @example
     *     // Create many Tbl_fornituras
     *     const tbl_fornitura = await prisma.tbl_fornitura.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_fornituraCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornituraCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_fornitura.
     * @param {tbl_fornituraDeleteArgs} args - Arguments to delete one Tbl_fornitura.
     * @example
     * // Delete one Tbl_fornitura
     * const Tbl_fornitura = await prisma.tbl_fornitura.delete({
     *   where: {
     *     // ... filter to delete one Tbl_fornitura
     *   }
     * })
     * 
    **/
    delete<T extends tbl_fornituraDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornituraDeleteArgs<ExtArgs>>
    ): Prisma__tbl_fornituraClient<$Result.GetResult<Prisma.$tbl_fornituraPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tbl_fornitura.
     * @param {tbl_fornituraUpdateArgs} args - Arguments to update one Tbl_fornitura.
     * @example
     * // Update one Tbl_fornitura
     * const tbl_fornitura = await prisma.tbl_fornitura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_fornituraUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornituraUpdateArgs<ExtArgs>>
    ): Prisma__tbl_fornituraClient<$Result.GetResult<Prisma.$tbl_fornituraPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_fornituras.
     * @param {tbl_fornituraDeleteManyArgs} args - Arguments to filter Tbl_fornituras to delete.
     * @example
     * // Delete a few Tbl_fornituras
     * const { count } = await prisma.tbl_fornitura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_fornituraDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_fornituraDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_fornituras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornituraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_fornituras
     * const tbl_fornitura = await prisma.tbl_fornitura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_fornituraUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornituraUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_fornitura.
     * @param {tbl_fornituraUpsertArgs} args - Arguments to update or create a Tbl_fornitura.
     * @example
     * // Update or create a Tbl_fornitura
     * const tbl_fornitura = await prisma.tbl_fornitura.upsert({
     *   create: {
     *     // ... data to create a Tbl_fornitura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_fornitura we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_fornituraUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_fornituraUpsertArgs<ExtArgs>>
    ): Prisma__tbl_fornituraClient<$Result.GetResult<Prisma.$tbl_fornituraPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tbl_fornituras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornituraCountArgs} args - Arguments to filter Tbl_fornituras to count.
     * @example
     * // Count the number of Tbl_fornituras
     * const count = await prisma.tbl_fornitura.count({
     *   where: {
     *     // ... the filter for the Tbl_fornituras we want to count
     *   }
     * })
    **/
    count<T extends tbl_fornituraCountArgs>(
      args?: Subset<T, tbl_fornituraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_fornituraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_fornitura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_fornituraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_fornituraAggregateArgs>(args: Subset<T, Tbl_fornituraAggregateArgs>): Prisma.PrismaPromise<GetTbl_fornituraAggregateType<T>>

    /**
     * Group by Tbl_fornitura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_fornituraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_fornituraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_fornituraGroupByArgs['orderBy'] }
        : { orderBy?: tbl_fornituraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_fornituraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_fornituraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_fornitura model
   */
  readonly fields: tbl_fornituraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_fornitura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_fornituraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tbl_fornitore<T extends tbl_fornitoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_fornitoreDefaultArgs<ExtArgs>>): Prisma__tbl_fornitoreClient<$Result.GetResult<Prisma.$tbl_fornitorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    tbl_prodotto<T extends tbl_fornitura$tbl_prodottoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_fornitura$tbl_prodottoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_prodottoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tbl_fornitura model
   */ 
  interface tbl_fornituraFieldRefs {
    readonly ID_FORNITURA: FieldRef<"tbl_fornitura", 'String'>
    readonly P_IVA: FieldRef<"tbl_fornitura", 'String'>
    readonly CODICE_ZONA: FieldRef<"tbl_fornitura", 'String'>
    readonly PREZZO: FieldRef<"tbl_fornitura", 'Float'>
    readonly DATA_ACQUISTO: FieldRef<"tbl_fornitura", 'DateTime'>
    readonly DATA_SPEDIZIONE: FieldRef<"tbl_fornitura", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * tbl_fornitura findUnique
   */
  export type tbl_fornituraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitura
     */
    select?: tbl_fornituraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornituraInclude<ExtArgs> | null
    /**
     * Filter, which tbl_fornitura to fetch.
     */
    where: tbl_fornituraWhereUniqueInput
  }


  /**
   * tbl_fornitura findUniqueOrThrow
   */
  export type tbl_fornituraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitura
     */
    select?: tbl_fornituraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornituraInclude<ExtArgs> | null
    /**
     * Filter, which tbl_fornitura to fetch.
     */
    where: tbl_fornituraWhereUniqueInput
  }


  /**
   * tbl_fornitura findFirst
   */
  export type tbl_fornituraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitura
     */
    select?: tbl_fornituraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornituraInclude<ExtArgs> | null
    /**
     * Filter, which tbl_fornitura to fetch.
     */
    where?: tbl_fornituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_fornituras to fetch.
     */
    orderBy?: tbl_fornituraOrderByWithRelationInput | tbl_fornituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_fornituras.
     */
    cursor?: tbl_fornituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_fornituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_fornituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_fornituras.
     */
    distinct?: Tbl_fornituraScalarFieldEnum | Tbl_fornituraScalarFieldEnum[]
  }


  /**
   * tbl_fornitura findFirstOrThrow
   */
  export type tbl_fornituraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitura
     */
    select?: tbl_fornituraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornituraInclude<ExtArgs> | null
    /**
     * Filter, which tbl_fornitura to fetch.
     */
    where?: tbl_fornituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_fornituras to fetch.
     */
    orderBy?: tbl_fornituraOrderByWithRelationInput | tbl_fornituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_fornituras.
     */
    cursor?: tbl_fornituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_fornituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_fornituras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_fornituras.
     */
    distinct?: Tbl_fornituraScalarFieldEnum | Tbl_fornituraScalarFieldEnum[]
  }


  /**
   * tbl_fornitura findMany
   */
  export type tbl_fornituraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitura
     */
    select?: tbl_fornituraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornituraInclude<ExtArgs> | null
    /**
     * Filter, which tbl_fornituras to fetch.
     */
    where?: tbl_fornituraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_fornituras to fetch.
     */
    orderBy?: tbl_fornituraOrderByWithRelationInput | tbl_fornituraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_fornituras.
     */
    cursor?: tbl_fornituraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_fornituras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_fornituras.
     */
    skip?: number
    distinct?: Tbl_fornituraScalarFieldEnum | Tbl_fornituraScalarFieldEnum[]
  }


  /**
   * tbl_fornitura create
   */
  export type tbl_fornituraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitura
     */
    select?: tbl_fornituraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornituraInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_fornitura.
     */
    data: XOR<tbl_fornituraCreateInput, tbl_fornituraUncheckedCreateInput>
  }


  /**
   * tbl_fornitura createMany
   */
  export type tbl_fornituraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_fornituras.
     */
    data: tbl_fornituraCreateManyInput | tbl_fornituraCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tbl_fornitura update
   */
  export type tbl_fornituraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitura
     */
    select?: tbl_fornituraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornituraInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_fornitura.
     */
    data: XOR<tbl_fornituraUpdateInput, tbl_fornituraUncheckedUpdateInput>
    /**
     * Choose, which tbl_fornitura to update.
     */
    where: tbl_fornituraWhereUniqueInput
  }


  /**
   * tbl_fornitura updateMany
   */
  export type tbl_fornituraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_fornituras.
     */
    data: XOR<tbl_fornituraUpdateManyMutationInput, tbl_fornituraUncheckedUpdateManyInput>
    /**
     * Filter which tbl_fornituras to update
     */
    where?: tbl_fornituraWhereInput
  }


  /**
   * tbl_fornitura upsert
   */
  export type tbl_fornituraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitura
     */
    select?: tbl_fornituraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornituraInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_fornitura to update in case it exists.
     */
    where: tbl_fornituraWhereUniqueInput
    /**
     * In case the tbl_fornitura found by the `where` argument doesn't exist, create a new tbl_fornitura with this data.
     */
    create: XOR<tbl_fornituraCreateInput, tbl_fornituraUncheckedCreateInput>
    /**
     * In case the tbl_fornitura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_fornituraUpdateInput, tbl_fornituraUncheckedUpdateInput>
  }


  /**
   * tbl_fornitura delete
   */
  export type tbl_fornituraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitura
     */
    select?: tbl_fornituraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornituraInclude<ExtArgs> | null
    /**
     * Filter which tbl_fornitura to delete.
     */
    where: tbl_fornituraWhereUniqueInput
  }


  /**
   * tbl_fornitura deleteMany
   */
  export type tbl_fornituraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_fornituras to delete
     */
    where?: tbl_fornituraWhereInput
  }


  /**
   * tbl_fornitura.tbl_prodotto
   */
  export type tbl_fornitura$tbl_prodottoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_prodotto
     */
    select?: tbl_prodottoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_prodottoInclude<ExtArgs> | null
    where?: tbl_prodottoWhereInput
    orderBy?: tbl_prodottoOrderByWithRelationInput | tbl_prodottoOrderByWithRelationInput[]
    cursor?: tbl_prodottoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_prodottoScalarFieldEnum | Tbl_prodottoScalarFieldEnum[]
  }


  /**
   * tbl_fornitura without action
   */
  export type tbl_fornituraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_fornitura
     */
    select?: tbl_fornituraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_fornituraInclude<ExtArgs> | null
  }



  /**
   * Model tbl_ordine
   */

  export type AggregateTbl_ordine = {
    _count: Tbl_ordineCountAggregateOutputType | null
    _avg: Tbl_ordineAvgAggregateOutputType | null
    _sum: Tbl_ordineSumAggregateOutputType | null
    _min: Tbl_ordineMinAggregateOutputType | null
    _max: Tbl_ordineMaxAggregateOutputType | null
  }

  export type Tbl_ordineAvgAggregateOutputType = {
    NUMERO_ORDINE: number | null
  }

  export type Tbl_ordineSumAggregateOutputType = {
    NUMERO_ORDINE: number | null
  }

  export type Tbl_ordineMinAggregateOutputType = {
    ID_ORDINE: string | null
    FATTURA: string | null
    NUMERO_ORDINE: number | null
    ID_CARRELLO: string | null
    INDIRIZZO_SPEDIZIONE: string | null
    STATO_ORDINE: string | null
  }

  export type Tbl_ordineMaxAggregateOutputType = {
    ID_ORDINE: string | null
    FATTURA: string | null
    NUMERO_ORDINE: number | null
    ID_CARRELLO: string | null
    INDIRIZZO_SPEDIZIONE: string | null
    STATO_ORDINE: string | null
  }

  export type Tbl_ordineCountAggregateOutputType = {
    ID_ORDINE: number
    FATTURA: number
    NUMERO_ORDINE: number
    ID_CARRELLO: number
    INDIRIZZO_SPEDIZIONE: number
    STATO_ORDINE: number
    _all: number
  }


  export type Tbl_ordineAvgAggregateInputType = {
    NUMERO_ORDINE?: true
  }

  export type Tbl_ordineSumAggregateInputType = {
    NUMERO_ORDINE?: true
  }

  export type Tbl_ordineMinAggregateInputType = {
    ID_ORDINE?: true
    FATTURA?: true
    NUMERO_ORDINE?: true
    ID_CARRELLO?: true
    INDIRIZZO_SPEDIZIONE?: true
    STATO_ORDINE?: true
  }

  export type Tbl_ordineMaxAggregateInputType = {
    ID_ORDINE?: true
    FATTURA?: true
    NUMERO_ORDINE?: true
    ID_CARRELLO?: true
    INDIRIZZO_SPEDIZIONE?: true
    STATO_ORDINE?: true
  }

  export type Tbl_ordineCountAggregateInputType = {
    ID_ORDINE?: true
    FATTURA?: true
    NUMERO_ORDINE?: true
    ID_CARRELLO?: true
    INDIRIZZO_SPEDIZIONE?: true
    STATO_ORDINE?: true
    _all?: true
  }

  export type Tbl_ordineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_ordine to aggregate.
     */
    where?: tbl_ordineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ordines to fetch.
     */
    orderBy?: tbl_ordineOrderByWithRelationInput | tbl_ordineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_ordineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ordines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ordines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_ordines
    **/
    _count?: true | Tbl_ordineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_ordineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_ordineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_ordineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_ordineMaxAggregateInputType
  }

  export type GetTbl_ordineAggregateType<T extends Tbl_ordineAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_ordine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_ordine[P]>
      : GetScalarType<T[P], AggregateTbl_ordine[P]>
  }




  export type tbl_ordineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_ordineWhereInput
    orderBy?: tbl_ordineOrderByWithAggregationInput | tbl_ordineOrderByWithAggregationInput[]
    by: Tbl_ordineScalarFieldEnum[] | Tbl_ordineScalarFieldEnum
    having?: tbl_ordineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_ordineCountAggregateInputType | true
    _avg?: Tbl_ordineAvgAggregateInputType
    _sum?: Tbl_ordineSumAggregateInputType
    _min?: Tbl_ordineMinAggregateInputType
    _max?: Tbl_ordineMaxAggregateInputType
  }

  export type Tbl_ordineGroupByOutputType = {
    ID_ORDINE: string
    FATTURA: string
    NUMERO_ORDINE: number | null
    ID_CARRELLO: string | null
    INDIRIZZO_SPEDIZIONE: string | null
    STATO_ORDINE: string | null
    _count: Tbl_ordineCountAggregateOutputType | null
    _avg: Tbl_ordineAvgAggregateOutputType | null
    _sum: Tbl_ordineSumAggregateOutputType | null
    _min: Tbl_ordineMinAggregateOutputType | null
    _max: Tbl_ordineMaxAggregateOutputType | null
  }

  type GetTbl_ordineGroupByPayload<T extends tbl_ordineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_ordineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_ordineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_ordineGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_ordineGroupByOutputType[P]>
        }
      >
    >


  export type tbl_ordineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_ORDINE?: boolean
    FATTURA?: boolean
    NUMERO_ORDINE?: boolean
    ID_CARRELLO?: boolean
    INDIRIZZO_SPEDIZIONE?: boolean
    STATO_ORDINE?: boolean
    tbl_carrello?: boolean | tbl_ordine$tbl_carrelloArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_ordine"]>

  export type tbl_ordineSelectScalar = {
    ID_ORDINE?: boolean
    FATTURA?: boolean
    NUMERO_ORDINE?: boolean
    ID_CARRELLO?: boolean
    INDIRIZZO_SPEDIZIONE?: boolean
    STATO_ORDINE?: boolean
  }

  export type tbl_ordineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_carrello?: boolean | tbl_ordine$tbl_carrelloArgs<ExtArgs>
  }


  export type $tbl_ordinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_ordine"
    objects: {
      tbl_carrello: Prisma.$tbl_carrelloPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_ORDINE: string
      FATTURA: string
      NUMERO_ORDINE: number | null
      ID_CARRELLO: string | null
      INDIRIZZO_SPEDIZIONE: string | null
      STATO_ORDINE: string | null
    }, ExtArgs["result"]["tbl_ordine"]>
    composites: {}
  }


  type tbl_ordineGetPayload<S extends boolean | null | undefined | tbl_ordineDefaultArgs> = $Result.GetResult<Prisma.$tbl_ordinePayload, S>

  type tbl_ordineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tbl_ordineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tbl_ordineCountAggregateInputType | true
    }

  export interface tbl_ordineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_ordine'], meta: { name: 'tbl_ordine' } }
    /**
     * Find zero or one Tbl_ordine that matches the filter.
     * @param {tbl_ordineFindUniqueArgs} args - Arguments to find a Tbl_ordine
     * @example
     * // Get one Tbl_ordine
     * const tbl_ordine = await prisma.tbl_ordine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_ordineFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_ordineFindUniqueArgs<ExtArgs>>
    ): Prisma__tbl_ordineClient<$Result.GetResult<Prisma.$tbl_ordinePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tbl_ordine that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_ordineFindUniqueOrThrowArgs} args - Arguments to find a Tbl_ordine
     * @example
     * // Get one Tbl_ordine
     * const tbl_ordine = await prisma.tbl_ordine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_ordineFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_ordineFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_ordineClient<$Result.GetResult<Prisma.$tbl_ordinePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tbl_ordine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ordineFindFirstArgs} args - Arguments to find a Tbl_ordine
     * @example
     * // Get one Tbl_ordine
     * const tbl_ordine = await prisma.tbl_ordine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_ordineFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_ordineFindFirstArgs<ExtArgs>>
    ): Prisma__tbl_ordineClient<$Result.GetResult<Prisma.$tbl_ordinePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tbl_ordine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ordineFindFirstOrThrowArgs} args - Arguments to find a Tbl_ordine
     * @example
     * // Get one Tbl_ordine
     * const tbl_ordine = await prisma.tbl_ordine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_ordineFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_ordineFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_ordineClient<$Result.GetResult<Prisma.$tbl_ordinePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tbl_ordines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ordineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_ordines
     * const tbl_ordines = await prisma.tbl_ordine.findMany()
     * 
     * // Get first 10 Tbl_ordines
     * const tbl_ordines = await prisma.tbl_ordine.findMany({ take: 10 })
     * 
     * // Only select the `ID_ORDINE`
     * const tbl_ordineWithID_ORDINEOnly = await prisma.tbl_ordine.findMany({ select: { ID_ORDINE: true } })
     * 
    **/
    findMany<T extends tbl_ordineFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_ordineFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_ordinePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tbl_ordine.
     * @param {tbl_ordineCreateArgs} args - Arguments to create a Tbl_ordine.
     * @example
     * // Create one Tbl_ordine
     * const Tbl_ordine = await prisma.tbl_ordine.create({
     *   data: {
     *     // ... data to create a Tbl_ordine
     *   }
     * })
     * 
    **/
    create<T extends tbl_ordineCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_ordineCreateArgs<ExtArgs>>
    ): Prisma__tbl_ordineClient<$Result.GetResult<Prisma.$tbl_ordinePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tbl_ordines.
     *     @param {tbl_ordineCreateManyArgs} args - Arguments to create many Tbl_ordines.
     *     @example
     *     // Create many Tbl_ordines
     *     const tbl_ordine = await prisma.tbl_ordine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_ordineCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_ordineCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_ordine.
     * @param {tbl_ordineDeleteArgs} args - Arguments to delete one Tbl_ordine.
     * @example
     * // Delete one Tbl_ordine
     * const Tbl_ordine = await prisma.tbl_ordine.delete({
     *   where: {
     *     // ... filter to delete one Tbl_ordine
     *   }
     * })
     * 
    **/
    delete<T extends tbl_ordineDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_ordineDeleteArgs<ExtArgs>>
    ): Prisma__tbl_ordineClient<$Result.GetResult<Prisma.$tbl_ordinePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tbl_ordine.
     * @param {tbl_ordineUpdateArgs} args - Arguments to update one Tbl_ordine.
     * @example
     * // Update one Tbl_ordine
     * const tbl_ordine = await prisma.tbl_ordine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_ordineUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_ordineUpdateArgs<ExtArgs>>
    ): Prisma__tbl_ordineClient<$Result.GetResult<Prisma.$tbl_ordinePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_ordines.
     * @param {tbl_ordineDeleteManyArgs} args - Arguments to filter Tbl_ordines to delete.
     * @example
     * // Delete a few Tbl_ordines
     * const { count } = await prisma.tbl_ordine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_ordineDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_ordineDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_ordines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ordineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_ordines
     * const tbl_ordine = await prisma.tbl_ordine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_ordineUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_ordineUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_ordine.
     * @param {tbl_ordineUpsertArgs} args - Arguments to update or create a Tbl_ordine.
     * @example
     * // Update or create a Tbl_ordine
     * const tbl_ordine = await prisma.tbl_ordine.upsert({
     *   create: {
     *     // ... data to create a Tbl_ordine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_ordine we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_ordineUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_ordineUpsertArgs<ExtArgs>>
    ): Prisma__tbl_ordineClient<$Result.GetResult<Prisma.$tbl_ordinePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tbl_ordines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ordineCountArgs} args - Arguments to filter Tbl_ordines to count.
     * @example
     * // Count the number of Tbl_ordines
     * const count = await prisma.tbl_ordine.count({
     *   where: {
     *     // ... the filter for the Tbl_ordines we want to count
     *   }
     * })
    **/
    count<T extends tbl_ordineCountArgs>(
      args?: Subset<T, tbl_ordineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_ordineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_ordine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_ordineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_ordineAggregateArgs>(args: Subset<T, Tbl_ordineAggregateArgs>): Prisma.PrismaPromise<GetTbl_ordineAggregateType<T>>

    /**
     * Group by Tbl_ordine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_ordineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_ordineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_ordineGroupByArgs['orderBy'] }
        : { orderBy?: tbl_ordineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_ordineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_ordineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_ordine model
   */
  readonly fields: tbl_ordineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_ordine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_ordineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tbl_carrello<T extends tbl_ordine$tbl_carrelloArgs<ExtArgs> = {}>(args?: Subset<T, tbl_ordine$tbl_carrelloArgs<ExtArgs>>): Prisma__tbl_carrelloClient<$Result.GetResult<Prisma.$tbl_carrelloPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tbl_ordine model
   */ 
  interface tbl_ordineFieldRefs {
    readonly ID_ORDINE: FieldRef<"tbl_ordine", 'String'>
    readonly FATTURA: FieldRef<"tbl_ordine", 'String'>
    readonly NUMERO_ORDINE: FieldRef<"tbl_ordine", 'Int'>
    readonly ID_CARRELLO: FieldRef<"tbl_ordine", 'String'>
    readonly INDIRIZZO_SPEDIZIONE: FieldRef<"tbl_ordine", 'String'>
    readonly STATO_ORDINE: FieldRef<"tbl_ordine", 'String'>
  }
    

  // Custom InputTypes

  /**
   * tbl_ordine findUnique
   */
  export type tbl_ordineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ordine
     */
    select?: tbl_ordineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_ordineInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ordine to fetch.
     */
    where: tbl_ordineWhereUniqueInput
  }


  /**
   * tbl_ordine findUniqueOrThrow
   */
  export type tbl_ordineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ordine
     */
    select?: tbl_ordineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_ordineInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ordine to fetch.
     */
    where: tbl_ordineWhereUniqueInput
  }


  /**
   * tbl_ordine findFirst
   */
  export type tbl_ordineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ordine
     */
    select?: tbl_ordineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_ordineInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ordine to fetch.
     */
    where?: tbl_ordineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ordines to fetch.
     */
    orderBy?: tbl_ordineOrderByWithRelationInput | tbl_ordineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_ordines.
     */
    cursor?: tbl_ordineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ordines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ordines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_ordines.
     */
    distinct?: Tbl_ordineScalarFieldEnum | Tbl_ordineScalarFieldEnum[]
  }


  /**
   * tbl_ordine findFirstOrThrow
   */
  export type tbl_ordineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ordine
     */
    select?: tbl_ordineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_ordineInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ordine to fetch.
     */
    where?: tbl_ordineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ordines to fetch.
     */
    orderBy?: tbl_ordineOrderByWithRelationInput | tbl_ordineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_ordines.
     */
    cursor?: tbl_ordineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ordines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ordines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_ordines.
     */
    distinct?: Tbl_ordineScalarFieldEnum | Tbl_ordineScalarFieldEnum[]
  }


  /**
   * tbl_ordine findMany
   */
  export type tbl_ordineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ordine
     */
    select?: tbl_ordineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_ordineInclude<ExtArgs> | null
    /**
     * Filter, which tbl_ordines to fetch.
     */
    where?: tbl_ordineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_ordines to fetch.
     */
    orderBy?: tbl_ordineOrderByWithRelationInput | tbl_ordineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_ordines.
     */
    cursor?: tbl_ordineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_ordines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_ordines.
     */
    skip?: number
    distinct?: Tbl_ordineScalarFieldEnum | Tbl_ordineScalarFieldEnum[]
  }


  /**
   * tbl_ordine create
   */
  export type tbl_ordineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ordine
     */
    select?: tbl_ordineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_ordineInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_ordine.
     */
    data: XOR<tbl_ordineCreateInput, tbl_ordineUncheckedCreateInput>
  }


  /**
   * tbl_ordine createMany
   */
  export type tbl_ordineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_ordines.
     */
    data: tbl_ordineCreateManyInput | tbl_ordineCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tbl_ordine update
   */
  export type tbl_ordineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ordine
     */
    select?: tbl_ordineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_ordineInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_ordine.
     */
    data: XOR<tbl_ordineUpdateInput, tbl_ordineUncheckedUpdateInput>
    /**
     * Choose, which tbl_ordine to update.
     */
    where: tbl_ordineWhereUniqueInput
  }


  /**
   * tbl_ordine updateMany
   */
  export type tbl_ordineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_ordines.
     */
    data: XOR<tbl_ordineUpdateManyMutationInput, tbl_ordineUncheckedUpdateManyInput>
    /**
     * Filter which tbl_ordines to update
     */
    where?: tbl_ordineWhereInput
  }


  /**
   * tbl_ordine upsert
   */
  export type tbl_ordineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ordine
     */
    select?: tbl_ordineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_ordineInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_ordine to update in case it exists.
     */
    where: tbl_ordineWhereUniqueInput
    /**
     * In case the tbl_ordine found by the `where` argument doesn't exist, create a new tbl_ordine with this data.
     */
    create: XOR<tbl_ordineCreateInput, tbl_ordineUncheckedCreateInput>
    /**
     * In case the tbl_ordine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_ordineUpdateInput, tbl_ordineUncheckedUpdateInput>
  }


  /**
   * tbl_ordine delete
   */
  export type tbl_ordineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ordine
     */
    select?: tbl_ordineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_ordineInclude<ExtArgs> | null
    /**
     * Filter which tbl_ordine to delete.
     */
    where: tbl_ordineWhereUniqueInput
  }


  /**
   * tbl_ordine deleteMany
   */
  export type tbl_ordineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_ordines to delete
     */
    where?: tbl_ordineWhereInput
  }


  /**
   * tbl_ordine.tbl_carrello
   */
  export type tbl_ordine$tbl_carrelloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_carrello
     */
    select?: tbl_carrelloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_carrelloInclude<ExtArgs> | null
    where?: tbl_carrelloWhereInput
  }


  /**
   * tbl_ordine without action
   */
  export type tbl_ordineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_ordine
     */
    select?: tbl_ordineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_ordineInclude<ExtArgs> | null
  }



  /**
   * Model tbl_prodotto
   */

  export type AggregateTbl_prodotto = {
    _count: Tbl_prodottoCountAggregateOutputType | null
    _avg: Tbl_prodottoAvgAggregateOutputType | null
    _sum: Tbl_prodottoSumAggregateOutputType | null
    _min: Tbl_prodottoMinAggregateOutputType | null
    _max: Tbl_prodottoMaxAggregateOutputType | null
  }

  export type Tbl_prodottoAvgAggregateOutputType = {
    PREZZO_PRODOTTO: number | null
    QUANTITA: number | null
  }

  export type Tbl_prodottoSumAggregateOutputType = {
    PREZZO_PRODOTTO: number | null
    QUANTITA: number | null
  }

  export type Tbl_prodottoMinAggregateOutputType = {
    NOME_PRODOTTO: string | null
    PREZZO_PRODOTTO: number | null
    QUANTITA: number | null
    PROVENIENZA: string | null
    ID_FORNITURA: string | null
    ID_PRODOTTO: string | null
  }

  export type Tbl_prodottoMaxAggregateOutputType = {
    NOME_PRODOTTO: string | null
    PREZZO_PRODOTTO: number | null
    QUANTITA: number | null
    PROVENIENZA: string | null
    ID_FORNITURA: string | null
    ID_PRODOTTO: string | null
  }

  export type Tbl_prodottoCountAggregateOutputType = {
    NOME_PRODOTTO: number
    PREZZO_PRODOTTO: number
    QUANTITA: number
    PROVENIENZA: number
    ID_FORNITURA: number
    ID_PRODOTTO: number
    _all: number
  }


  export type Tbl_prodottoAvgAggregateInputType = {
    PREZZO_PRODOTTO?: true
    QUANTITA?: true
  }

  export type Tbl_prodottoSumAggregateInputType = {
    PREZZO_PRODOTTO?: true
    QUANTITA?: true
  }

  export type Tbl_prodottoMinAggregateInputType = {
    NOME_PRODOTTO?: true
    PREZZO_PRODOTTO?: true
    QUANTITA?: true
    PROVENIENZA?: true
    ID_FORNITURA?: true
    ID_PRODOTTO?: true
  }

  export type Tbl_prodottoMaxAggregateInputType = {
    NOME_PRODOTTO?: true
    PREZZO_PRODOTTO?: true
    QUANTITA?: true
    PROVENIENZA?: true
    ID_FORNITURA?: true
    ID_PRODOTTO?: true
  }

  export type Tbl_prodottoCountAggregateInputType = {
    NOME_PRODOTTO?: true
    PREZZO_PRODOTTO?: true
    QUANTITA?: true
    PROVENIENZA?: true
    ID_FORNITURA?: true
    ID_PRODOTTO?: true
    _all?: true
  }

  export type Tbl_prodottoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_prodotto to aggregate.
     */
    where?: tbl_prodottoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_prodottos to fetch.
     */
    orderBy?: tbl_prodottoOrderByWithRelationInput | tbl_prodottoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_prodottoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_prodottos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_prodottos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_prodottos
    **/
    _count?: true | Tbl_prodottoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_prodottoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_prodottoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_prodottoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_prodottoMaxAggregateInputType
  }

  export type GetTbl_prodottoAggregateType<T extends Tbl_prodottoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_prodotto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_prodotto[P]>
      : GetScalarType<T[P], AggregateTbl_prodotto[P]>
  }




  export type tbl_prodottoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_prodottoWhereInput
    orderBy?: tbl_prodottoOrderByWithAggregationInput | tbl_prodottoOrderByWithAggregationInput[]
    by: Tbl_prodottoScalarFieldEnum[] | Tbl_prodottoScalarFieldEnum
    having?: tbl_prodottoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_prodottoCountAggregateInputType | true
    _avg?: Tbl_prodottoAvgAggregateInputType
    _sum?: Tbl_prodottoSumAggregateInputType
    _min?: Tbl_prodottoMinAggregateInputType
    _max?: Tbl_prodottoMaxAggregateInputType
  }

  export type Tbl_prodottoGroupByOutputType = {
    NOME_PRODOTTO: string
    PREZZO_PRODOTTO: number
    QUANTITA: number
    PROVENIENZA: string
    ID_FORNITURA: string
    ID_PRODOTTO: string
    _count: Tbl_prodottoCountAggregateOutputType | null
    _avg: Tbl_prodottoAvgAggregateOutputType | null
    _sum: Tbl_prodottoSumAggregateOutputType | null
    _min: Tbl_prodottoMinAggregateOutputType | null
    _max: Tbl_prodottoMaxAggregateOutputType | null
  }

  type GetTbl_prodottoGroupByPayload<T extends tbl_prodottoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_prodottoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_prodottoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_prodottoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_prodottoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_prodottoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NOME_PRODOTTO?: boolean
    PREZZO_PRODOTTO?: boolean
    QUANTITA?: boolean
    PROVENIENZA?: boolean
    ID_FORNITURA?: boolean
    ID_PRODOTTO?: boolean
    tbl_fornitura?: boolean | tbl_fornituraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_prodotto"]>

  export type tbl_prodottoSelectScalar = {
    NOME_PRODOTTO?: boolean
    PREZZO_PRODOTTO?: boolean
    QUANTITA?: boolean
    PROVENIENZA?: boolean
    ID_FORNITURA?: boolean
    ID_PRODOTTO?: boolean
  }

  export type tbl_prodottoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_fornitura?: boolean | tbl_fornituraDefaultArgs<ExtArgs>
  }


  export type $tbl_prodottoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_prodotto"
    objects: {
      tbl_fornitura: Prisma.$tbl_fornituraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      NOME_PRODOTTO: string
      PREZZO_PRODOTTO: number
      QUANTITA: number
      PROVENIENZA: string
      ID_FORNITURA: string
      ID_PRODOTTO: string
    }, ExtArgs["result"]["tbl_prodotto"]>
    composites: {}
  }


  type tbl_prodottoGetPayload<S extends boolean | null | undefined | tbl_prodottoDefaultArgs> = $Result.GetResult<Prisma.$tbl_prodottoPayload, S>

  type tbl_prodottoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tbl_prodottoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tbl_prodottoCountAggregateInputType | true
    }

  export interface tbl_prodottoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_prodotto'], meta: { name: 'tbl_prodotto' } }
    /**
     * Find zero or one Tbl_prodotto that matches the filter.
     * @param {tbl_prodottoFindUniqueArgs} args - Arguments to find a Tbl_prodotto
     * @example
     * // Get one Tbl_prodotto
     * const tbl_prodotto = await prisma.tbl_prodotto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_prodottoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_prodottoFindUniqueArgs<ExtArgs>>
    ): Prisma__tbl_prodottoClient<$Result.GetResult<Prisma.$tbl_prodottoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tbl_prodotto that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_prodottoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_prodotto
     * @example
     * // Get one Tbl_prodotto
     * const tbl_prodotto = await prisma.tbl_prodotto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_prodottoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_prodottoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_prodottoClient<$Result.GetResult<Prisma.$tbl_prodottoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tbl_prodotto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_prodottoFindFirstArgs} args - Arguments to find a Tbl_prodotto
     * @example
     * // Get one Tbl_prodotto
     * const tbl_prodotto = await prisma.tbl_prodotto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_prodottoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_prodottoFindFirstArgs<ExtArgs>>
    ): Prisma__tbl_prodottoClient<$Result.GetResult<Prisma.$tbl_prodottoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tbl_prodotto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_prodottoFindFirstOrThrowArgs} args - Arguments to find a Tbl_prodotto
     * @example
     * // Get one Tbl_prodotto
     * const tbl_prodotto = await prisma.tbl_prodotto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_prodottoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_prodottoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_prodottoClient<$Result.GetResult<Prisma.$tbl_prodottoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tbl_prodottos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_prodottoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_prodottos
     * const tbl_prodottos = await prisma.tbl_prodotto.findMany()
     * 
     * // Get first 10 Tbl_prodottos
     * const tbl_prodottos = await prisma.tbl_prodotto.findMany({ take: 10 })
     * 
     * // Only select the `NOME_PRODOTTO`
     * const tbl_prodottoWithNOME_PRODOTTOOnly = await prisma.tbl_prodotto.findMany({ select: { NOME_PRODOTTO: true } })
     * 
    **/
    findMany<T extends tbl_prodottoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_prodottoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_prodottoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tbl_prodotto.
     * @param {tbl_prodottoCreateArgs} args - Arguments to create a Tbl_prodotto.
     * @example
     * // Create one Tbl_prodotto
     * const Tbl_prodotto = await prisma.tbl_prodotto.create({
     *   data: {
     *     // ... data to create a Tbl_prodotto
     *   }
     * })
     * 
    **/
    create<T extends tbl_prodottoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_prodottoCreateArgs<ExtArgs>>
    ): Prisma__tbl_prodottoClient<$Result.GetResult<Prisma.$tbl_prodottoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tbl_prodottos.
     *     @param {tbl_prodottoCreateManyArgs} args - Arguments to create many Tbl_prodottos.
     *     @example
     *     // Create many Tbl_prodottos
     *     const tbl_prodotto = await prisma.tbl_prodotto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_prodottoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_prodottoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_prodotto.
     * @param {tbl_prodottoDeleteArgs} args - Arguments to delete one Tbl_prodotto.
     * @example
     * // Delete one Tbl_prodotto
     * const Tbl_prodotto = await prisma.tbl_prodotto.delete({
     *   where: {
     *     // ... filter to delete one Tbl_prodotto
     *   }
     * })
     * 
    **/
    delete<T extends tbl_prodottoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_prodottoDeleteArgs<ExtArgs>>
    ): Prisma__tbl_prodottoClient<$Result.GetResult<Prisma.$tbl_prodottoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tbl_prodotto.
     * @param {tbl_prodottoUpdateArgs} args - Arguments to update one Tbl_prodotto.
     * @example
     * // Update one Tbl_prodotto
     * const tbl_prodotto = await prisma.tbl_prodotto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_prodottoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_prodottoUpdateArgs<ExtArgs>>
    ): Prisma__tbl_prodottoClient<$Result.GetResult<Prisma.$tbl_prodottoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_prodottos.
     * @param {tbl_prodottoDeleteManyArgs} args - Arguments to filter Tbl_prodottos to delete.
     * @example
     * // Delete a few Tbl_prodottos
     * const { count } = await prisma.tbl_prodotto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_prodottoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_prodottoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_prodottos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_prodottoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_prodottos
     * const tbl_prodotto = await prisma.tbl_prodotto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_prodottoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_prodottoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_prodotto.
     * @param {tbl_prodottoUpsertArgs} args - Arguments to update or create a Tbl_prodotto.
     * @example
     * // Update or create a Tbl_prodotto
     * const tbl_prodotto = await prisma.tbl_prodotto.upsert({
     *   create: {
     *     // ... data to create a Tbl_prodotto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_prodotto we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_prodottoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_prodottoUpsertArgs<ExtArgs>>
    ): Prisma__tbl_prodottoClient<$Result.GetResult<Prisma.$tbl_prodottoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tbl_prodottos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_prodottoCountArgs} args - Arguments to filter Tbl_prodottos to count.
     * @example
     * // Count the number of Tbl_prodottos
     * const count = await prisma.tbl_prodotto.count({
     *   where: {
     *     // ... the filter for the Tbl_prodottos we want to count
     *   }
     * })
    **/
    count<T extends tbl_prodottoCountArgs>(
      args?: Subset<T, tbl_prodottoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_prodottoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_prodotto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_prodottoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_prodottoAggregateArgs>(args: Subset<T, Tbl_prodottoAggregateArgs>): Prisma.PrismaPromise<GetTbl_prodottoAggregateType<T>>

    /**
     * Group by Tbl_prodotto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_prodottoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_prodottoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_prodottoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_prodottoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_prodottoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_prodottoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_prodotto model
   */
  readonly fields: tbl_prodottoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_prodotto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_prodottoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tbl_fornitura<T extends tbl_fornituraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_fornituraDefaultArgs<ExtArgs>>): Prisma__tbl_fornituraClient<$Result.GetResult<Prisma.$tbl_fornituraPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tbl_prodotto model
   */ 
  interface tbl_prodottoFieldRefs {
    readonly NOME_PRODOTTO: FieldRef<"tbl_prodotto", 'String'>
    readonly PREZZO_PRODOTTO: FieldRef<"tbl_prodotto", 'Float'>
    readonly QUANTITA: FieldRef<"tbl_prodotto", 'Int'>
    readonly PROVENIENZA: FieldRef<"tbl_prodotto", 'String'>
    readonly ID_FORNITURA: FieldRef<"tbl_prodotto", 'String'>
    readonly ID_PRODOTTO: FieldRef<"tbl_prodotto", 'String'>
  }
    

  // Custom InputTypes

  /**
   * tbl_prodotto findUnique
   */
  export type tbl_prodottoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_prodotto
     */
    select?: tbl_prodottoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_prodottoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_prodotto to fetch.
     */
    where: tbl_prodottoWhereUniqueInput
  }


  /**
   * tbl_prodotto findUniqueOrThrow
   */
  export type tbl_prodottoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_prodotto
     */
    select?: tbl_prodottoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_prodottoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_prodotto to fetch.
     */
    where: tbl_prodottoWhereUniqueInput
  }


  /**
   * tbl_prodotto findFirst
   */
  export type tbl_prodottoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_prodotto
     */
    select?: tbl_prodottoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_prodottoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_prodotto to fetch.
     */
    where?: tbl_prodottoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_prodottos to fetch.
     */
    orderBy?: tbl_prodottoOrderByWithRelationInput | tbl_prodottoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_prodottos.
     */
    cursor?: tbl_prodottoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_prodottos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_prodottos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_prodottos.
     */
    distinct?: Tbl_prodottoScalarFieldEnum | Tbl_prodottoScalarFieldEnum[]
  }


  /**
   * tbl_prodotto findFirstOrThrow
   */
  export type tbl_prodottoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_prodotto
     */
    select?: tbl_prodottoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_prodottoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_prodotto to fetch.
     */
    where?: tbl_prodottoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_prodottos to fetch.
     */
    orderBy?: tbl_prodottoOrderByWithRelationInput | tbl_prodottoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_prodottos.
     */
    cursor?: tbl_prodottoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_prodottos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_prodottos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_prodottos.
     */
    distinct?: Tbl_prodottoScalarFieldEnum | Tbl_prodottoScalarFieldEnum[]
  }


  /**
   * tbl_prodotto findMany
   */
  export type tbl_prodottoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_prodotto
     */
    select?: tbl_prodottoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_prodottoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_prodottos to fetch.
     */
    where?: tbl_prodottoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_prodottos to fetch.
     */
    orderBy?: tbl_prodottoOrderByWithRelationInput | tbl_prodottoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_prodottos.
     */
    cursor?: tbl_prodottoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_prodottos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_prodottos.
     */
    skip?: number
    distinct?: Tbl_prodottoScalarFieldEnum | Tbl_prodottoScalarFieldEnum[]
  }


  /**
   * tbl_prodotto create
   */
  export type tbl_prodottoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_prodotto
     */
    select?: tbl_prodottoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_prodottoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_prodotto.
     */
    data: XOR<tbl_prodottoCreateInput, tbl_prodottoUncheckedCreateInput>
  }


  /**
   * tbl_prodotto createMany
   */
  export type tbl_prodottoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_prodottos.
     */
    data: tbl_prodottoCreateManyInput | tbl_prodottoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tbl_prodotto update
   */
  export type tbl_prodottoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_prodotto
     */
    select?: tbl_prodottoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_prodottoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_prodotto.
     */
    data: XOR<tbl_prodottoUpdateInput, tbl_prodottoUncheckedUpdateInput>
    /**
     * Choose, which tbl_prodotto to update.
     */
    where: tbl_prodottoWhereUniqueInput
  }


  /**
   * tbl_prodotto updateMany
   */
  export type tbl_prodottoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_prodottos.
     */
    data: XOR<tbl_prodottoUpdateManyMutationInput, tbl_prodottoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_prodottos to update
     */
    where?: tbl_prodottoWhereInput
  }


  /**
   * tbl_prodotto upsert
   */
  export type tbl_prodottoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_prodotto
     */
    select?: tbl_prodottoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_prodottoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_prodotto to update in case it exists.
     */
    where: tbl_prodottoWhereUniqueInput
    /**
     * In case the tbl_prodotto found by the `where` argument doesn't exist, create a new tbl_prodotto with this data.
     */
    create: XOR<tbl_prodottoCreateInput, tbl_prodottoUncheckedCreateInput>
    /**
     * In case the tbl_prodotto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_prodottoUpdateInput, tbl_prodottoUncheckedUpdateInput>
  }


  /**
   * tbl_prodotto delete
   */
  export type tbl_prodottoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_prodotto
     */
    select?: tbl_prodottoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_prodottoInclude<ExtArgs> | null
    /**
     * Filter which tbl_prodotto to delete.
     */
    where: tbl_prodottoWhereUniqueInput
  }


  /**
   * tbl_prodotto deleteMany
   */
  export type tbl_prodottoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_prodottos to delete
     */
    where?: tbl_prodottoWhereInput
  }


  /**
   * tbl_prodotto without action
   */
  export type tbl_prodottoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_prodotto
     */
    select?: tbl_prodottoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_prodottoInclude<ExtArgs> | null
  }



  /**
   * Model tbl_spedizione
   */

  export type AggregateTbl_spedizione = {
    _count: Tbl_spedizioneCountAggregateOutputType | null
    _min: Tbl_spedizioneMinAggregateOutputType | null
    _max: Tbl_spedizioneMaxAggregateOutputType | null
  }

  export type Tbl_spedizioneMinAggregateOutputType = {
    NUMERO_TRACCIAMENTO: string | null
    P_IVA_CORRIERE: string | null
    NUMERO_ORDINE: string | null
    DATA_PARTENZA: Date | null
    DATA_ARRIVO: Date | null
  }

  export type Tbl_spedizioneMaxAggregateOutputType = {
    NUMERO_TRACCIAMENTO: string | null
    P_IVA_CORRIERE: string | null
    NUMERO_ORDINE: string | null
    DATA_PARTENZA: Date | null
    DATA_ARRIVO: Date | null
  }

  export type Tbl_spedizioneCountAggregateOutputType = {
    NUMERO_TRACCIAMENTO: number
    P_IVA_CORRIERE: number
    NUMERO_ORDINE: number
    DATA_PARTENZA: number
    DATA_ARRIVO: number
    _all: number
  }


  export type Tbl_spedizioneMinAggregateInputType = {
    NUMERO_TRACCIAMENTO?: true
    P_IVA_CORRIERE?: true
    NUMERO_ORDINE?: true
    DATA_PARTENZA?: true
    DATA_ARRIVO?: true
  }

  export type Tbl_spedizioneMaxAggregateInputType = {
    NUMERO_TRACCIAMENTO?: true
    P_IVA_CORRIERE?: true
    NUMERO_ORDINE?: true
    DATA_PARTENZA?: true
    DATA_ARRIVO?: true
  }

  export type Tbl_spedizioneCountAggregateInputType = {
    NUMERO_TRACCIAMENTO?: true
    P_IVA_CORRIERE?: true
    NUMERO_ORDINE?: true
    DATA_PARTENZA?: true
    DATA_ARRIVO?: true
    _all?: true
  }

  export type Tbl_spedizioneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_spedizione to aggregate.
     */
    where?: tbl_spedizioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_spediziones to fetch.
     */
    orderBy?: tbl_spedizioneOrderByWithRelationInput | tbl_spedizioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_spedizioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_spediziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_spediziones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_spediziones
    **/
    _count?: true | Tbl_spedizioneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_spedizioneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_spedizioneMaxAggregateInputType
  }

  export type GetTbl_spedizioneAggregateType<T extends Tbl_spedizioneAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_spedizione]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_spedizione[P]>
      : GetScalarType<T[P], AggregateTbl_spedizione[P]>
  }




  export type tbl_spedizioneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_spedizioneWhereInput
    orderBy?: tbl_spedizioneOrderByWithAggregationInput | tbl_spedizioneOrderByWithAggregationInput[]
    by: Tbl_spedizioneScalarFieldEnum[] | Tbl_spedizioneScalarFieldEnum
    having?: tbl_spedizioneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_spedizioneCountAggregateInputType | true
    _min?: Tbl_spedizioneMinAggregateInputType
    _max?: Tbl_spedizioneMaxAggregateInputType
  }

  export type Tbl_spedizioneGroupByOutputType = {
    NUMERO_TRACCIAMENTO: string
    P_IVA_CORRIERE: string
    NUMERO_ORDINE: string
    DATA_PARTENZA: Date
    DATA_ARRIVO: Date
    _count: Tbl_spedizioneCountAggregateOutputType | null
    _min: Tbl_spedizioneMinAggregateOutputType | null
    _max: Tbl_spedizioneMaxAggregateOutputType | null
  }

  type GetTbl_spedizioneGroupByPayload<T extends tbl_spedizioneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_spedizioneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_spedizioneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_spedizioneGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_spedizioneGroupByOutputType[P]>
        }
      >
    >


  export type tbl_spedizioneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NUMERO_TRACCIAMENTO?: boolean
    P_IVA_CORRIERE?: boolean
    NUMERO_ORDINE?: boolean
    DATA_PARTENZA?: boolean
    DATA_ARRIVO?: boolean
    tbl_corriere?: boolean | tbl_corriereDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_spedizione"]>

  export type tbl_spedizioneSelectScalar = {
    NUMERO_TRACCIAMENTO?: boolean
    P_IVA_CORRIERE?: boolean
    NUMERO_ORDINE?: boolean
    DATA_PARTENZA?: boolean
    DATA_ARRIVO?: boolean
  }

  export type tbl_spedizioneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_corriere?: boolean | tbl_corriereDefaultArgs<ExtArgs>
  }


  export type $tbl_spedizionePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_spedizione"
    objects: {
      tbl_corriere: Prisma.$tbl_corrierePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      NUMERO_TRACCIAMENTO: string
      P_IVA_CORRIERE: string
      NUMERO_ORDINE: string
      DATA_PARTENZA: Date
      DATA_ARRIVO: Date
    }, ExtArgs["result"]["tbl_spedizione"]>
    composites: {}
  }


  type tbl_spedizioneGetPayload<S extends boolean | null | undefined | tbl_spedizioneDefaultArgs> = $Result.GetResult<Prisma.$tbl_spedizionePayload, S>

  type tbl_spedizioneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tbl_spedizioneFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tbl_spedizioneCountAggregateInputType | true
    }

  export interface tbl_spedizioneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_spedizione'], meta: { name: 'tbl_spedizione' } }
    /**
     * Find zero or one Tbl_spedizione that matches the filter.
     * @param {tbl_spedizioneFindUniqueArgs} args - Arguments to find a Tbl_spedizione
     * @example
     * // Get one Tbl_spedizione
     * const tbl_spedizione = await prisma.tbl_spedizione.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tbl_spedizioneFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_spedizioneFindUniqueArgs<ExtArgs>>
    ): Prisma__tbl_spedizioneClient<$Result.GetResult<Prisma.$tbl_spedizionePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tbl_spedizione that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tbl_spedizioneFindUniqueOrThrowArgs} args - Arguments to find a Tbl_spedizione
     * @example
     * // Get one Tbl_spedizione
     * const tbl_spedizione = await prisma.tbl_spedizione.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tbl_spedizioneFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_spedizioneFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_spedizioneClient<$Result.GetResult<Prisma.$tbl_spedizionePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tbl_spedizione that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_spedizioneFindFirstArgs} args - Arguments to find a Tbl_spedizione
     * @example
     * // Get one Tbl_spedizione
     * const tbl_spedizione = await prisma.tbl_spedizione.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tbl_spedizioneFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_spedizioneFindFirstArgs<ExtArgs>>
    ): Prisma__tbl_spedizioneClient<$Result.GetResult<Prisma.$tbl_spedizionePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tbl_spedizione that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_spedizioneFindFirstOrThrowArgs} args - Arguments to find a Tbl_spedizione
     * @example
     * // Get one Tbl_spedizione
     * const tbl_spedizione = await prisma.tbl_spedizione.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tbl_spedizioneFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_spedizioneFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tbl_spedizioneClient<$Result.GetResult<Prisma.$tbl_spedizionePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tbl_spediziones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_spedizioneFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_spediziones
     * const tbl_spediziones = await prisma.tbl_spedizione.findMany()
     * 
     * // Get first 10 Tbl_spediziones
     * const tbl_spediziones = await prisma.tbl_spedizione.findMany({ take: 10 })
     * 
     * // Only select the `NUMERO_TRACCIAMENTO`
     * const tbl_spedizioneWithNUMERO_TRACCIAMENTOOnly = await prisma.tbl_spedizione.findMany({ select: { NUMERO_TRACCIAMENTO: true } })
     * 
    **/
    findMany<T extends tbl_spedizioneFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_spedizioneFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_spedizionePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tbl_spedizione.
     * @param {tbl_spedizioneCreateArgs} args - Arguments to create a Tbl_spedizione.
     * @example
     * // Create one Tbl_spedizione
     * const Tbl_spedizione = await prisma.tbl_spedizione.create({
     *   data: {
     *     // ... data to create a Tbl_spedizione
     *   }
     * })
     * 
    **/
    create<T extends tbl_spedizioneCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_spedizioneCreateArgs<ExtArgs>>
    ): Prisma__tbl_spedizioneClient<$Result.GetResult<Prisma.$tbl_spedizionePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tbl_spediziones.
     *     @param {tbl_spedizioneCreateManyArgs} args - Arguments to create many Tbl_spediziones.
     *     @example
     *     // Create many Tbl_spediziones
     *     const tbl_spedizione = await prisma.tbl_spedizione.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tbl_spedizioneCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_spedizioneCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_spedizione.
     * @param {tbl_spedizioneDeleteArgs} args - Arguments to delete one Tbl_spedizione.
     * @example
     * // Delete one Tbl_spedizione
     * const Tbl_spedizione = await prisma.tbl_spedizione.delete({
     *   where: {
     *     // ... filter to delete one Tbl_spedizione
     *   }
     * })
     * 
    **/
    delete<T extends tbl_spedizioneDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_spedizioneDeleteArgs<ExtArgs>>
    ): Prisma__tbl_spedizioneClient<$Result.GetResult<Prisma.$tbl_spedizionePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tbl_spedizione.
     * @param {tbl_spedizioneUpdateArgs} args - Arguments to update one Tbl_spedizione.
     * @example
     * // Update one Tbl_spedizione
     * const tbl_spedizione = await prisma.tbl_spedizione.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tbl_spedizioneUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_spedizioneUpdateArgs<ExtArgs>>
    ): Prisma__tbl_spedizioneClient<$Result.GetResult<Prisma.$tbl_spedizionePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tbl_spediziones.
     * @param {tbl_spedizioneDeleteManyArgs} args - Arguments to filter Tbl_spediziones to delete.
     * @example
     * // Delete a few Tbl_spediziones
     * const { count } = await prisma.tbl_spedizione.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tbl_spedizioneDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tbl_spedizioneDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_spediziones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_spedizioneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_spediziones
     * const tbl_spedizione = await prisma.tbl_spedizione.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tbl_spedizioneUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_spedizioneUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_spedizione.
     * @param {tbl_spedizioneUpsertArgs} args - Arguments to update or create a Tbl_spedizione.
     * @example
     * // Update or create a Tbl_spedizione
     * const tbl_spedizione = await prisma.tbl_spedizione.upsert({
     *   create: {
     *     // ... data to create a Tbl_spedizione
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_spedizione we want to update
     *   }
     * })
    **/
    upsert<T extends tbl_spedizioneUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tbl_spedizioneUpsertArgs<ExtArgs>>
    ): Prisma__tbl_spedizioneClient<$Result.GetResult<Prisma.$tbl_spedizionePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tbl_spediziones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_spedizioneCountArgs} args - Arguments to filter Tbl_spediziones to count.
     * @example
     * // Count the number of Tbl_spediziones
     * const count = await prisma.tbl_spedizione.count({
     *   where: {
     *     // ... the filter for the Tbl_spediziones we want to count
     *   }
     * })
    **/
    count<T extends tbl_spedizioneCountArgs>(
      args?: Subset<T, tbl_spedizioneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_spedizioneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_spedizione.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_spedizioneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_spedizioneAggregateArgs>(args: Subset<T, Tbl_spedizioneAggregateArgs>): Prisma.PrismaPromise<GetTbl_spedizioneAggregateType<T>>

    /**
     * Group by Tbl_spedizione.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_spedizioneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_spedizioneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_spedizioneGroupByArgs['orderBy'] }
        : { orderBy?: tbl_spedizioneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_spedizioneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_spedizioneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_spedizione model
   */
  readonly fields: tbl_spedizioneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_spedizione.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_spedizioneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tbl_corriere<T extends tbl_corriereDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_corriereDefaultArgs<ExtArgs>>): Prisma__tbl_corriereClient<$Result.GetResult<Prisma.$tbl_corrierePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tbl_spedizione model
   */ 
  interface tbl_spedizioneFieldRefs {
    readonly NUMERO_TRACCIAMENTO: FieldRef<"tbl_spedizione", 'String'>
    readonly P_IVA_CORRIERE: FieldRef<"tbl_spedizione", 'String'>
    readonly NUMERO_ORDINE: FieldRef<"tbl_spedizione", 'String'>
    readonly DATA_PARTENZA: FieldRef<"tbl_spedizione", 'DateTime'>
    readonly DATA_ARRIVO: FieldRef<"tbl_spedizione", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * tbl_spedizione findUnique
   */
  export type tbl_spedizioneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_spedizione
     */
    select?: tbl_spedizioneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_spedizioneInclude<ExtArgs> | null
    /**
     * Filter, which tbl_spedizione to fetch.
     */
    where: tbl_spedizioneWhereUniqueInput
  }


  /**
   * tbl_spedizione findUniqueOrThrow
   */
  export type tbl_spedizioneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_spedizione
     */
    select?: tbl_spedizioneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_spedizioneInclude<ExtArgs> | null
    /**
     * Filter, which tbl_spedizione to fetch.
     */
    where: tbl_spedizioneWhereUniqueInput
  }


  /**
   * tbl_spedizione findFirst
   */
  export type tbl_spedizioneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_spedizione
     */
    select?: tbl_spedizioneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_spedizioneInclude<ExtArgs> | null
    /**
     * Filter, which tbl_spedizione to fetch.
     */
    where?: tbl_spedizioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_spediziones to fetch.
     */
    orderBy?: tbl_spedizioneOrderByWithRelationInput | tbl_spedizioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_spediziones.
     */
    cursor?: tbl_spedizioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_spediziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_spediziones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_spediziones.
     */
    distinct?: Tbl_spedizioneScalarFieldEnum | Tbl_spedizioneScalarFieldEnum[]
  }


  /**
   * tbl_spedizione findFirstOrThrow
   */
  export type tbl_spedizioneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_spedizione
     */
    select?: tbl_spedizioneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_spedizioneInclude<ExtArgs> | null
    /**
     * Filter, which tbl_spedizione to fetch.
     */
    where?: tbl_spedizioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_spediziones to fetch.
     */
    orderBy?: tbl_spedizioneOrderByWithRelationInput | tbl_spedizioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_spediziones.
     */
    cursor?: tbl_spedizioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_spediziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_spediziones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_spediziones.
     */
    distinct?: Tbl_spedizioneScalarFieldEnum | Tbl_spedizioneScalarFieldEnum[]
  }


  /**
   * tbl_spedizione findMany
   */
  export type tbl_spedizioneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_spedizione
     */
    select?: tbl_spedizioneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_spedizioneInclude<ExtArgs> | null
    /**
     * Filter, which tbl_spediziones to fetch.
     */
    where?: tbl_spedizioneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_spediziones to fetch.
     */
    orderBy?: tbl_spedizioneOrderByWithRelationInput | tbl_spedizioneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_spediziones.
     */
    cursor?: tbl_spedizioneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_spediziones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_spediziones.
     */
    skip?: number
    distinct?: Tbl_spedizioneScalarFieldEnum | Tbl_spedizioneScalarFieldEnum[]
  }


  /**
   * tbl_spedizione create
   */
  export type tbl_spedizioneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_spedizione
     */
    select?: tbl_spedizioneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_spedizioneInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_spedizione.
     */
    data: XOR<tbl_spedizioneCreateInput, tbl_spedizioneUncheckedCreateInput>
  }


  /**
   * tbl_spedizione createMany
   */
  export type tbl_spedizioneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_spediziones.
     */
    data: tbl_spedizioneCreateManyInput | tbl_spedizioneCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tbl_spedizione update
   */
  export type tbl_spedizioneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_spedizione
     */
    select?: tbl_spedizioneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_spedizioneInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_spedizione.
     */
    data: XOR<tbl_spedizioneUpdateInput, tbl_spedizioneUncheckedUpdateInput>
    /**
     * Choose, which tbl_spedizione to update.
     */
    where: tbl_spedizioneWhereUniqueInput
  }


  /**
   * tbl_spedizione updateMany
   */
  export type tbl_spedizioneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_spediziones.
     */
    data: XOR<tbl_spedizioneUpdateManyMutationInput, tbl_spedizioneUncheckedUpdateManyInput>
    /**
     * Filter which tbl_spediziones to update
     */
    where?: tbl_spedizioneWhereInput
  }


  /**
   * tbl_spedizione upsert
   */
  export type tbl_spedizioneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_spedizione
     */
    select?: tbl_spedizioneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_spedizioneInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_spedizione to update in case it exists.
     */
    where: tbl_spedizioneWhereUniqueInput
    /**
     * In case the tbl_spedizione found by the `where` argument doesn't exist, create a new tbl_spedizione with this data.
     */
    create: XOR<tbl_spedizioneCreateInput, tbl_spedizioneUncheckedCreateInput>
    /**
     * In case the tbl_spedizione was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_spedizioneUpdateInput, tbl_spedizioneUncheckedUpdateInput>
  }


  /**
   * tbl_spedizione delete
   */
  export type tbl_spedizioneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_spedizione
     */
    select?: tbl_spedizioneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_spedizioneInclude<ExtArgs> | null
    /**
     * Filter which tbl_spedizione to delete.
     */
    where: tbl_spedizioneWhereUniqueInput
  }


  /**
   * tbl_spedizione deleteMany
   */
  export type tbl_spedizioneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_spediziones to delete
     */
    where?: tbl_spedizioneWhereInput
  }


  /**
   * tbl_spedizione without action
   */
  export type tbl_spedizioneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_spedizione
     */
    select?: tbl_spedizioneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tbl_spedizioneInclude<ExtArgs> | null
  }



  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    bio: string | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    bio: string | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    bio: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    bio: string | null
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    bio?: boolean
    userId?: boolean
  }

  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bio: string | null
      userId: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }


  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    viewCount: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    viewCount: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    published: boolean | null
    viewCount: number | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    published: boolean | null
    viewCount: number | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    content: number
    published: number
    viewCount: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    viewCount?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    viewCount?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    published?: true
    viewCount?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    published?: true
    viewCount?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    published?: true
    viewCount?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    content: string | null
    published: boolean
    viewCount: number
    authorId: number | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    viewCount?: boolean
    authorId?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    viewCount?: boolean
    authorId?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      content: string | null
      published: boolean
      viewCount: number
      authorId: number | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends Post$authorArgs<ExtArgs> = {}>(args?: Subset<T, Post$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly viewCount: FieldRef<"Post", 'Int'>
    readonly authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.author
   */
  export type Post$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tbl_carrelloScalarFieldEnum: {
    ID: 'ID',
    DATA_ACQUISTO: 'DATA_ACQUISTO',
    QUANTITA_PRODOTTO: 'QUANTITA_PRODOTTO',
    PREZZO_TOTALE: 'PREZZO_TOTALE',
    EMAIL_CLIENTE: 'EMAIL_CLIENTE'
  };

  export type Tbl_carrelloScalarFieldEnum = (typeof Tbl_carrelloScalarFieldEnum)[keyof typeof Tbl_carrelloScalarFieldEnum]


  export const Tbl_clienteScalarFieldEnum: {
    ID: 'ID',
    NOME: 'NOME',
    COGNOME: 'COGNOME',
    EMAIL: 'EMAIL',
    CELLULARE: 'CELLULARE',
    CODICE_FISCALE: 'CODICE_FISCALE',
    DATA_DI_NASCITA: 'DATA_DI_NASCITA',
    CITTA: 'CITTA',
    VIA: 'VIA',
    N_CIVICO: 'N_CIVICO',
    CAP: 'CAP',
    NUM_CARTA: 'NUM_CARTA',
    CVV_CARTA: 'CVV_CARTA',
    INTESTATARIO_CARTA: 'INTESTATARIO_CARTA',
    SCADENZA_CARTA: 'SCADENZA_CARTA',
    RUOLO: 'RUOLO',
    UTENTE_PASSWORD: 'UTENTE_PASSWORD'
  };

  export type Tbl_clienteScalarFieldEnum = (typeof Tbl_clienteScalarFieldEnum)[keyof typeof Tbl_clienteScalarFieldEnum]


  export const Tbl_corriereScalarFieldEnum: {
    P_IVA: 'P_IVA',
    NOME: 'NOME',
    TELEFONO: 'TELEFONO',
    EMAIL: 'EMAIL'
  };

  export type Tbl_corriereScalarFieldEnum = (typeof Tbl_corriereScalarFieldEnum)[keyof typeof Tbl_corriereScalarFieldEnum]


  export const Tbl_dipendenteScalarFieldEnum: {
    ID: 'ID',
    NOME: 'NOME',
    COGNOME: 'COGNOME',
    EMAIL: 'EMAIL',
    VIA: 'VIA',
    N_CIVICO: 'N_CIVICO',
    CAP: 'CAP',
    CITTA: 'CITTA',
    CODICE_FISCALE: 'CODICE_FISCALE',
    DATA_DI_NASCITA: 'DATA_DI_NASCITA',
    DATA_ASSUNZIONE: 'DATA_ASSUNZIONE',
    PAGA_ORARIA: 'PAGA_ORARIA',
    CODICE_ZONA: 'CODICE_ZONA',
    RUOLO: 'RUOLO',
    UTENTE_PASSWORD: 'UTENTE_PASSWORD'
  };

  export type Tbl_dipendenteScalarFieldEnum = (typeof Tbl_dipendenteScalarFieldEnum)[keyof typeof Tbl_dipendenteScalarFieldEnum]


  export const Tbl_filialeScalarFieldEnum: {
    NOME_FILIALE: 'NOME_FILIALE',
    SEDE: 'SEDE',
    CODICE_ZONA_FILIALE: 'CODICE_ZONA_FILIALE'
  };

  export type Tbl_filialeScalarFieldEnum = (typeof Tbl_filialeScalarFieldEnum)[keyof typeof Tbl_filialeScalarFieldEnum]


  export const Tbl_fornitoreScalarFieldEnum: {
    P_IVA: 'P_IVA',
    NOME: 'NOME',
    CITTA: 'CITTA',
    VIA: 'VIA',
    CAP: 'CAP'
  };

  export type Tbl_fornitoreScalarFieldEnum = (typeof Tbl_fornitoreScalarFieldEnum)[keyof typeof Tbl_fornitoreScalarFieldEnum]


  export const Tbl_fornituraScalarFieldEnum: {
    ID_FORNITURA: 'ID_FORNITURA',
    P_IVA: 'P_IVA',
    CODICE_ZONA: 'CODICE_ZONA',
    PREZZO: 'PREZZO',
    DATA_ACQUISTO: 'DATA_ACQUISTO',
    DATA_SPEDIZIONE: 'DATA_SPEDIZIONE'
  };

  export type Tbl_fornituraScalarFieldEnum = (typeof Tbl_fornituraScalarFieldEnum)[keyof typeof Tbl_fornituraScalarFieldEnum]


  export const Tbl_ordineScalarFieldEnum: {
    ID_ORDINE: 'ID_ORDINE',
    FATTURA: 'FATTURA',
    NUMERO_ORDINE: 'NUMERO_ORDINE',
    ID_CARRELLO: 'ID_CARRELLO',
    INDIRIZZO_SPEDIZIONE: 'INDIRIZZO_SPEDIZIONE',
    STATO_ORDINE: 'STATO_ORDINE'
  };

  export type Tbl_ordineScalarFieldEnum = (typeof Tbl_ordineScalarFieldEnum)[keyof typeof Tbl_ordineScalarFieldEnum]


  export const Tbl_prodottoScalarFieldEnum: {
    NOME_PRODOTTO: 'NOME_PRODOTTO',
    PREZZO_PRODOTTO: 'PREZZO_PRODOTTO',
    QUANTITA: 'QUANTITA',
    PROVENIENZA: 'PROVENIENZA',
    ID_FORNITURA: 'ID_FORNITURA',
    ID_PRODOTTO: 'ID_PRODOTTO'
  };

  export type Tbl_prodottoScalarFieldEnum = (typeof Tbl_prodottoScalarFieldEnum)[keyof typeof Tbl_prodottoScalarFieldEnum]


  export const Tbl_spedizioneScalarFieldEnum: {
    NUMERO_TRACCIAMENTO: 'NUMERO_TRACCIAMENTO',
    P_IVA_CORRIERE: 'P_IVA_CORRIERE',
    NUMERO_ORDINE: 'NUMERO_ORDINE',
    DATA_PARTENZA: 'DATA_PARTENZA',
    DATA_ARRIVO: 'DATA_ARRIVO'
  };

  export type Tbl_spedizioneScalarFieldEnum = (typeof Tbl_spedizioneScalarFieldEnum)[keyof typeof Tbl_spedizioneScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    content: 'content',
    published: 'published',
    viewCount: 'viewCount',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type tbl_carrelloWhereInput = {
    AND?: tbl_carrelloWhereInput | tbl_carrelloWhereInput[]
    OR?: tbl_carrelloWhereInput[]
    NOT?: tbl_carrelloWhereInput | tbl_carrelloWhereInput[]
    ID?: StringFilter<"tbl_carrello"> | string
    DATA_ACQUISTO?: DateTimeNullableFilter<"tbl_carrello"> | Date | string | null
    QUANTITA_PRODOTTO?: IntFilter<"tbl_carrello"> | number
    PREZZO_TOTALE?: FloatFilter<"tbl_carrello"> | number
    EMAIL_CLIENTE?: StringNullableFilter<"tbl_carrello"> | string | null
    tbl_cliente?: XOR<Tbl_clienteNullableRelationFilter, tbl_clienteWhereInput> | null
    tbl_ordine?: Tbl_ordineListRelationFilter
  }

  export type tbl_carrelloOrderByWithRelationInput = {
    ID?: SortOrder
    DATA_ACQUISTO?: SortOrderInput | SortOrder
    QUANTITA_PRODOTTO?: SortOrder
    PREZZO_TOTALE?: SortOrder
    EMAIL_CLIENTE?: SortOrderInput | SortOrder
    tbl_cliente?: tbl_clienteOrderByWithRelationInput
    tbl_ordine?: tbl_ordineOrderByRelationAggregateInput
  }

  export type tbl_carrelloWhereUniqueInput = Prisma.AtLeast<{
    ID?: string
    AND?: tbl_carrelloWhereInput | tbl_carrelloWhereInput[]
    OR?: tbl_carrelloWhereInput[]
    NOT?: tbl_carrelloWhereInput | tbl_carrelloWhereInput[]
    DATA_ACQUISTO?: DateTimeNullableFilter<"tbl_carrello"> | Date | string | null
    QUANTITA_PRODOTTO?: IntFilter<"tbl_carrello"> | number
    PREZZO_TOTALE?: FloatFilter<"tbl_carrello"> | number
    EMAIL_CLIENTE?: StringNullableFilter<"tbl_carrello"> | string | null
    tbl_cliente?: XOR<Tbl_clienteNullableRelationFilter, tbl_clienteWhereInput> | null
    tbl_ordine?: Tbl_ordineListRelationFilter
  }, "ID">

  export type tbl_carrelloOrderByWithAggregationInput = {
    ID?: SortOrder
    DATA_ACQUISTO?: SortOrderInput | SortOrder
    QUANTITA_PRODOTTO?: SortOrder
    PREZZO_TOTALE?: SortOrder
    EMAIL_CLIENTE?: SortOrderInput | SortOrder
    _count?: tbl_carrelloCountOrderByAggregateInput
    _avg?: tbl_carrelloAvgOrderByAggregateInput
    _max?: tbl_carrelloMaxOrderByAggregateInput
    _min?: tbl_carrelloMinOrderByAggregateInput
    _sum?: tbl_carrelloSumOrderByAggregateInput
  }

  export type tbl_carrelloScalarWhereWithAggregatesInput = {
    AND?: tbl_carrelloScalarWhereWithAggregatesInput | tbl_carrelloScalarWhereWithAggregatesInput[]
    OR?: tbl_carrelloScalarWhereWithAggregatesInput[]
    NOT?: tbl_carrelloScalarWhereWithAggregatesInput | tbl_carrelloScalarWhereWithAggregatesInput[]
    ID?: StringWithAggregatesFilter<"tbl_carrello"> | string
    DATA_ACQUISTO?: DateTimeNullableWithAggregatesFilter<"tbl_carrello"> | Date | string | null
    QUANTITA_PRODOTTO?: IntWithAggregatesFilter<"tbl_carrello"> | number
    PREZZO_TOTALE?: FloatWithAggregatesFilter<"tbl_carrello"> | number
    EMAIL_CLIENTE?: StringNullableWithAggregatesFilter<"tbl_carrello"> | string | null
  }

  export type tbl_clienteWhereInput = {
    AND?: tbl_clienteWhereInput | tbl_clienteWhereInput[]
    OR?: tbl_clienteWhereInput[]
    NOT?: tbl_clienteWhereInput | tbl_clienteWhereInput[]
    ID?: IntFilter<"tbl_cliente"> | number
    NOME?: StringFilter<"tbl_cliente"> | string
    COGNOME?: StringFilter<"tbl_cliente"> | string
    EMAIL?: StringFilter<"tbl_cliente"> | string
    CELLULARE?: StringFilter<"tbl_cliente"> | string
    CODICE_FISCALE?: StringFilter<"tbl_cliente"> | string
    DATA_DI_NASCITA?: StringFilter<"tbl_cliente"> | string
    CITTA?: StringFilter<"tbl_cliente"> | string
    VIA?: StringFilter<"tbl_cliente"> | string
    N_CIVICO?: StringFilter<"tbl_cliente"> | string
    CAP?: StringFilter<"tbl_cliente"> | string
    NUM_CARTA?: StringFilter<"tbl_cliente"> | string
    CVV_CARTA?: StringFilter<"tbl_cliente"> | string
    INTESTATARIO_CARTA?: StringNullableFilter<"tbl_cliente"> | string | null
    SCADENZA_CARTA?: DateTimeNullableFilter<"tbl_cliente"> | Date | string | null
    RUOLO?: StringNullableFilter<"tbl_cliente"> | string | null
    UTENTE_PASSWORD?: StringNullableFilter<"tbl_cliente"> | string | null
    tbl_carrello?: Tbl_carrelloListRelationFilter
  }

  export type tbl_clienteOrderByWithRelationInput = {
    ID?: SortOrder
    NOME?: SortOrder
    COGNOME?: SortOrder
    EMAIL?: SortOrder
    CELLULARE?: SortOrder
    CODICE_FISCALE?: SortOrder
    DATA_DI_NASCITA?: SortOrder
    CITTA?: SortOrder
    VIA?: SortOrder
    N_CIVICO?: SortOrder
    CAP?: SortOrder
    NUM_CARTA?: SortOrder
    CVV_CARTA?: SortOrder
    INTESTATARIO_CARTA?: SortOrderInput | SortOrder
    SCADENZA_CARTA?: SortOrderInput | SortOrder
    RUOLO?: SortOrderInput | SortOrder
    UTENTE_PASSWORD?: SortOrderInput | SortOrder
    tbl_carrello?: tbl_carrelloOrderByRelationAggregateInput
  }

  export type tbl_clienteWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    EMAIL?: string
    AND?: tbl_clienteWhereInput | tbl_clienteWhereInput[]
    OR?: tbl_clienteWhereInput[]
    NOT?: tbl_clienteWhereInput | tbl_clienteWhereInput[]
    NOME?: StringFilter<"tbl_cliente"> | string
    COGNOME?: StringFilter<"tbl_cliente"> | string
    CELLULARE?: StringFilter<"tbl_cliente"> | string
    CODICE_FISCALE?: StringFilter<"tbl_cliente"> | string
    DATA_DI_NASCITA?: StringFilter<"tbl_cliente"> | string
    CITTA?: StringFilter<"tbl_cliente"> | string
    VIA?: StringFilter<"tbl_cliente"> | string
    N_CIVICO?: StringFilter<"tbl_cliente"> | string
    CAP?: StringFilter<"tbl_cliente"> | string
    NUM_CARTA?: StringFilter<"tbl_cliente"> | string
    CVV_CARTA?: StringFilter<"tbl_cliente"> | string
    INTESTATARIO_CARTA?: StringNullableFilter<"tbl_cliente"> | string | null
    SCADENZA_CARTA?: DateTimeNullableFilter<"tbl_cliente"> | Date | string | null
    RUOLO?: StringNullableFilter<"tbl_cliente"> | string | null
    UTENTE_PASSWORD?: StringNullableFilter<"tbl_cliente"> | string | null
    tbl_carrello?: Tbl_carrelloListRelationFilter
  }, "ID" | "EMAIL">

  export type tbl_clienteOrderByWithAggregationInput = {
    ID?: SortOrder
    NOME?: SortOrder
    COGNOME?: SortOrder
    EMAIL?: SortOrder
    CELLULARE?: SortOrder
    CODICE_FISCALE?: SortOrder
    DATA_DI_NASCITA?: SortOrder
    CITTA?: SortOrder
    VIA?: SortOrder
    N_CIVICO?: SortOrder
    CAP?: SortOrder
    NUM_CARTA?: SortOrder
    CVV_CARTA?: SortOrder
    INTESTATARIO_CARTA?: SortOrderInput | SortOrder
    SCADENZA_CARTA?: SortOrderInput | SortOrder
    RUOLO?: SortOrderInput | SortOrder
    UTENTE_PASSWORD?: SortOrderInput | SortOrder
    _count?: tbl_clienteCountOrderByAggregateInput
    _avg?: tbl_clienteAvgOrderByAggregateInput
    _max?: tbl_clienteMaxOrderByAggregateInput
    _min?: tbl_clienteMinOrderByAggregateInput
    _sum?: tbl_clienteSumOrderByAggregateInput
  }

  export type tbl_clienteScalarWhereWithAggregatesInput = {
    AND?: tbl_clienteScalarWhereWithAggregatesInput | tbl_clienteScalarWhereWithAggregatesInput[]
    OR?: tbl_clienteScalarWhereWithAggregatesInput[]
    NOT?: tbl_clienteScalarWhereWithAggregatesInput | tbl_clienteScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"tbl_cliente"> | number
    NOME?: StringWithAggregatesFilter<"tbl_cliente"> | string
    COGNOME?: StringWithAggregatesFilter<"tbl_cliente"> | string
    EMAIL?: StringWithAggregatesFilter<"tbl_cliente"> | string
    CELLULARE?: StringWithAggregatesFilter<"tbl_cliente"> | string
    CODICE_FISCALE?: StringWithAggregatesFilter<"tbl_cliente"> | string
    DATA_DI_NASCITA?: StringWithAggregatesFilter<"tbl_cliente"> | string
    CITTA?: StringWithAggregatesFilter<"tbl_cliente"> | string
    VIA?: StringWithAggregatesFilter<"tbl_cliente"> | string
    N_CIVICO?: StringWithAggregatesFilter<"tbl_cliente"> | string
    CAP?: StringWithAggregatesFilter<"tbl_cliente"> | string
    NUM_CARTA?: StringWithAggregatesFilter<"tbl_cliente"> | string
    CVV_CARTA?: StringWithAggregatesFilter<"tbl_cliente"> | string
    INTESTATARIO_CARTA?: StringNullableWithAggregatesFilter<"tbl_cliente"> | string | null
    SCADENZA_CARTA?: DateTimeNullableWithAggregatesFilter<"tbl_cliente"> | Date | string | null
    RUOLO?: StringNullableWithAggregatesFilter<"tbl_cliente"> | string | null
    UTENTE_PASSWORD?: StringNullableWithAggregatesFilter<"tbl_cliente"> | string | null
  }

  export type tbl_corriereWhereInput = {
    AND?: tbl_corriereWhereInput | tbl_corriereWhereInput[]
    OR?: tbl_corriereWhereInput[]
    NOT?: tbl_corriereWhereInput | tbl_corriereWhereInput[]
    P_IVA?: StringFilter<"tbl_corriere"> | string
    NOME?: StringFilter<"tbl_corriere"> | string
    TELEFONO?: StringFilter<"tbl_corriere"> | string
    EMAIL?: StringFilter<"tbl_corriere"> | string
    tbl_spedizione?: Tbl_spedizioneListRelationFilter
  }

  export type tbl_corriereOrderByWithRelationInput = {
    P_IVA?: SortOrder
    NOME?: SortOrder
    TELEFONO?: SortOrder
    EMAIL?: SortOrder
    tbl_spedizione?: tbl_spedizioneOrderByRelationAggregateInput
  }

  export type tbl_corriereWhereUniqueInput = Prisma.AtLeast<{
    P_IVA?: string
    AND?: tbl_corriereWhereInput | tbl_corriereWhereInput[]
    OR?: tbl_corriereWhereInput[]
    NOT?: tbl_corriereWhereInput | tbl_corriereWhereInput[]
    NOME?: StringFilter<"tbl_corriere"> | string
    TELEFONO?: StringFilter<"tbl_corriere"> | string
    EMAIL?: StringFilter<"tbl_corriere"> | string
    tbl_spedizione?: Tbl_spedizioneListRelationFilter
  }, "P_IVA">

  export type tbl_corriereOrderByWithAggregationInput = {
    P_IVA?: SortOrder
    NOME?: SortOrder
    TELEFONO?: SortOrder
    EMAIL?: SortOrder
    _count?: tbl_corriereCountOrderByAggregateInput
    _max?: tbl_corriereMaxOrderByAggregateInput
    _min?: tbl_corriereMinOrderByAggregateInput
  }

  export type tbl_corriereScalarWhereWithAggregatesInput = {
    AND?: tbl_corriereScalarWhereWithAggregatesInput | tbl_corriereScalarWhereWithAggregatesInput[]
    OR?: tbl_corriereScalarWhereWithAggregatesInput[]
    NOT?: tbl_corriereScalarWhereWithAggregatesInput | tbl_corriereScalarWhereWithAggregatesInput[]
    P_IVA?: StringWithAggregatesFilter<"tbl_corriere"> | string
    NOME?: StringWithAggregatesFilter<"tbl_corriere"> | string
    TELEFONO?: StringWithAggregatesFilter<"tbl_corriere"> | string
    EMAIL?: StringWithAggregatesFilter<"tbl_corriere"> | string
  }

  export type tbl_dipendenteWhereInput = {
    AND?: tbl_dipendenteWhereInput | tbl_dipendenteWhereInput[]
    OR?: tbl_dipendenteWhereInput[]
    NOT?: tbl_dipendenteWhereInput | tbl_dipendenteWhereInput[]
    ID?: IntFilter<"tbl_dipendente"> | number
    NOME?: StringFilter<"tbl_dipendente"> | string
    COGNOME?: StringFilter<"tbl_dipendente"> | string
    EMAIL?: StringFilter<"tbl_dipendente"> | string
    VIA?: StringFilter<"tbl_dipendente"> | string
    N_CIVICO?: StringFilter<"tbl_dipendente"> | string
    CAP?: StringFilter<"tbl_dipendente"> | string
    CITTA?: StringFilter<"tbl_dipendente"> | string
    CODICE_FISCALE?: StringFilter<"tbl_dipendente"> | string
    DATA_DI_NASCITA?: StringFilter<"tbl_dipendente"> | string
    DATA_ASSUNZIONE?: DateTimeNullableFilter<"tbl_dipendente"> | Date | string | null
    PAGA_ORARIA?: FloatFilter<"tbl_dipendente"> | number
    CODICE_ZONA?: StringNullableFilter<"tbl_dipendente"> | string | null
    RUOLO?: StringNullableFilter<"tbl_dipendente"> | string | null
    UTENTE_PASSWORD?: StringNullableFilter<"tbl_dipendente"> | string | null
    tbl_filiale?: XOR<Tbl_filialeNullableRelationFilter, tbl_filialeWhereInput> | null
  }

  export type tbl_dipendenteOrderByWithRelationInput = {
    ID?: SortOrder
    NOME?: SortOrder
    COGNOME?: SortOrder
    EMAIL?: SortOrder
    VIA?: SortOrder
    N_CIVICO?: SortOrder
    CAP?: SortOrder
    CITTA?: SortOrder
    CODICE_FISCALE?: SortOrder
    DATA_DI_NASCITA?: SortOrder
    DATA_ASSUNZIONE?: SortOrderInput | SortOrder
    PAGA_ORARIA?: SortOrder
    CODICE_ZONA?: SortOrderInput | SortOrder
    RUOLO?: SortOrderInput | SortOrder
    UTENTE_PASSWORD?: SortOrderInput | SortOrder
    tbl_filiale?: tbl_filialeOrderByWithRelationInput
  }

  export type tbl_dipendenteWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: tbl_dipendenteWhereInput | tbl_dipendenteWhereInput[]
    OR?: tbl_dipendenteWhereInput[]
    NOT?: tbl_dipendenteWhereInput | tbl_dipendenteWhereInput[]
    NOME?: StringFilter<"tbl_dipendente"> | string
    COGNOME?: StringFilter<"tbl_dipendente"> | string
    EMAIL?: StringFilter<"tbl_dipendente"> | string
    VIA?: StringFilter<"tbl_dipendente"> | string
    N_CIVICO?: StringFilter<"tbl_dipendente"> | string
    CAP?: StringFilter<"tbl_dipendente"> | string
    CITTA?: StringFilter<"tbl_dipendente"> | string
    CODICE_FISCALE?: StringFilter<"tbl_dipendente"> | string
    DATA_DI_NASCITA?: StringFilter<"tbl_dipendente"> | string
    DATA_ASSUNZIONE?: DateTimeNullableFilter<"tbl_dipendente"> | Date | string | null
    PAGA_ORARIA?: FloatFilter<"tbl_dipendente"> | number
    CODICE_ZONA?: StringNullableFilter<"tbl_dipendente"> | string | null
    RUOLO?: StringNullableFilter<"tbl_dipendente"> | string | null
    UTENTE_PASSWORD?: StringNullableFilter<"tbl_dipendente"> | string | null
    tbl_filiale?: XOR<Tbl_filialeNullableRelationFilter, tbl_filialeWhereInput> | null
  }, "ID">

  export type tbl_dipendenteOrderByWithAggregationInput = {
    ID?: SortOrder
    NOME?: SortOrder
    COGNOME?: SortOrder
    EMAIL?: SortOrder
    VIA?: SortOrder
    N_CIVICO?: SortOrder
    CAP?: SortOrder
    CITTA?: SortOrder
    CODICE_FISCALE?: SortOrder
    DATA_DI_NASCITA?: SortOrder
    DATA_ASSUNZIONE?: SortOrderInput | SortOrder
    PAGA_ORARIA?: SortOrder
    CODICE_ZONA?: SortOrderInput | SortOrder
    RUOLO?: SortOrderInput | SortOrder
    UTENTE_PASSWORD?: SortOrderInput | SortOrder
    _count?: tbl_dipendenteCountOrderByAggregateInput
    _avg?: tbl_dipendenteAvgOrderByAggregateInput
    _max?: tbl_dipendenteMaxOrderByAggregateInput
    _min?: tbl_dipendenteMinOrderByAggregateInput
    _sum?: tbl_dipendenteSumOrderByAggregateInput
  }

  export type tbl_dipendenteScalarWhereWithAggregatesInput = {
    AND?: tbl_dipendenteScalarWhereWithAggregatesInput | tbl_dipendenteScalarWhereWithAggregatesInput[]
    OR?: tbl_dipendenteScalarWhereWithAggregatesInput[]
    NOT?: tbl_dipendenteScalarWhereWithAggregatesInput | tbl_dipendenteScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"tbl_dipendente"> | number
    NOME?: StringWithAggregatesFilter<"tbl_dipendente"> | string
    COGNOME?: StringWithAggregatesFilter<"tbl_dipendente"> | string
    EMAIL?: StringWithAggregatesFilter<"tbl_dipendente"> | string
    VIA?: StringWithAggregatesFilter<"tbl_dipendente"> | string
    N_CIVICO?: StringWithAggregatesFilter<"tbl_dipendente"> | string
    CAP?: StringWithAggregatesFilter<"tbl_dipendente"> | string
    CITTA?: StringWithAggregatesFilter<"tbl_dipendente"> | string
    CODICE_FISCALE?: StringWithAggregatesFilter<"tbl_dipendente"> | string
    DATA_DI_NASCITA?: StringWithAggregatesFilter<"tbl_dipendente"> | string
    DATA_ASSUNZIONE?: DateTimeNullableWithAggregatesFilter<"tbl_dipendente"> | Date | string | null
    PAGA_ORARIA?: FloatWithAggregatesFilter<"tbl_dipendente"> | number
    CODICE_ZONA?: StringNullableWithAggregatesFilter<"tbl_dipendente"> | string | null
    RUOLO?: StringNullableWithAggregatesFilter<"tbl_dipendente"> | string | null
    UTENTE_PASSWORD?: StringNullableWithAggregatesFilter<"tbl_dipendente"> | string | null
  }

  export type tbl_filialeWhereInput = {
    AND?: tbl_filialeWhereInput | tbl_filialeWhereInput[]
    OR?: tbl_filialeWhereInput[]
    NOT?: tbl_filialeWhereInput | tbl_filialeWhereInput[]
    NOME_FILIALE?: StringFilter<"tbl_filiale"> | string
    SEDE?: StringFilter<"tbl_filiale"> | string
    CODICE_ZONA_FILIALE?: StringFilter<"tbl_filiale"> | string
    tbl_dipendente?: Tbl_dipendenteListRelationFilter
  }

  export type tbl_filialeOrderByWithRelationInput = {
    NOME_FILIALE?: SortOrder
    SEDE?: SortOrder
    CODICE_ZONA_FILIALE?: SortOrder
    tbl_dipendente?: tbl_dipendenteOrderByRelationAggregateInput
  }

  export type tbl_filialeWhereUniqueInput = Prisma.AtLeast<{
    CODICE_ZONA_FILIALE?: string
    AND?: tbl_filialeWhereInput | tbl_filialeWhereInput[]
    OR?: tbl_filialeWhereInput[]
    NOT?: tbl_filialeWhereInput | tbl_filialeWhereInput[]
    NOME_FILIALE?: StringFilter<"tbl_filiale"> | string
    SEDE?: StringFilter<"tbl_filiale"> | string
    tbl_dipendente?: Tbl_dipendenteListRelationFilter
  }, "CODICE_ZONA_FILIALE">

  export type tbl_filialeOrderByWithAggregationInput = {
    NOME_FILIALE?: SortOrder
    SEDE?: SortOrder
    CODICE_ZONA_FILIALE?: SortOrder
    _count?: tbl_filialeCountOrderByAggregateInput
    _max?: tbl_filialeMaxOrderByAggregateInput
    _min?: tbl_filialeMinOrderByAggregateInput
  }

  export type tbl_filialeScalarWhereWithAggregatesInput = {
    AND?: tbl_filialeScalarWhereWithAggregatesInput | tbl_filialeScalarWhereWithAggregatesInput[]
    OR?: tbl_filialeScalarWhereWithAggregatesInput[]
    NOT?: tbl_filialeScalarWhereWithAggregatesInput | tbl_filialeScalarWhereWithAggregatesInput[]
    NOME_FILIALE?: StringWithAggregatesFilter<"tbl_filiale"> | string
    SEDE?: StringWithAggregatesFilter<"tbl_filiale"> | string
    CODICE_ZONA_FILIALE?: StringWithAggregatesFilter<"tbl_filiale"> | string
  }

  export type tbl_fornitoreWhereInput = {
    AND?: tbl_fornitoreWhereInput | tbl_fornitoreWhereInput[]
    OR?: tbl_fornitoreWhereInput[]
    NOT?: tbl_fornitoreWhereInput | tbl_fornitoreWhereInput[]
    P_IVA?: StringFilter<"tbl_fornitore"> | string
    NOME?: StringFilter<"tbl_fornitore"> | string
    CITTA?: StringFilter<"tbl_fornitore"> | string
    VIA?: StringFilter<"tbl_fornitore"> | string
    CAP?: StringFilter<"tbl_fornitore"> | string
    tbl_fornitura?: Tbl_fornituraListRelationFilter
  }

  export type tbl_fornitoreOrderByWithRelationInput = {
    P_IVA?: SortOrder
    NOME?: SortOrder
    CITTA?: SortOrder
    VIA?: SortOrder
    CAP?: SortOrder
    tbl_fornitura?: tbl_fornituraOrderByRelationAggregateInput
  }

  export type tbl_fornitoreWhereUniqueInput = Prisma.AtLeast<{
    P_IVA?: string
    AND?: tbl_fornitoreWhereInput | tbl_fornitoreWhereInput[]
    OR?: tbl_fornitoreWhereInput[]
    NOT?: tbl_fornitoreWhereInput | tbl_fornitoreWhereInput[]
    NOME?: StringFilter<"tbl_fornitore"> | string
    CITTA?: StringFilter<"tbl_fornitore"> | string
    VIA?: StringFilter<"tbl_fornitore"> | string
    CAP?: StringFilter<"tbl_fornitore"> | string
    tbl_fornitura?: Tbl_fornituraListRelationFilter
  }, "P_IVA">

  export type tbl_fornitoreOrderByWithAggregationInput = {
    P_IVA?: SortOrder
    NOME?: SortOrder
    CITTA?: SortOrder
    VIA?: SortOrder
    CAP?: SortOrder
    _count?: tbl_fornitoreCountOrderByAggregateInput
    _max?: tbl_fornitoreMaxOrderByAggregateInput
    _min?: tbl_fornitoreMinOrderByAggregateInput
  }

  export type tbl_fornitoreScalarWhereWithAggregatesInput = {
    AND?: tbl_fornitoreScalarWhereWithAggregatesInput | tbl_fornitoreScalarWhereWithAggregatesInput[]
    OR?: tbl_fornitoreScalarWhereWithAggregatesInput[]
    NOT?: tbl_fornitoreScalarWhereWithAggregatesInput | tbl_fornitoreScalarWhereWithAggregatesInput[]
    P_IVA?: StringWithAggregatesFilter<"tbl_fornitore"> | string
    NOME?: StringWithAggregatesFilter<"tbl_fornitore"> | string
    CITTA?: StringWithAggregatesFilter<"tbl_fornitore"> | string
    VIA?: StringWithAggregatesFilter<"tbl_fornitore"> | string
    CAP?: StringWithAggregatesFilter<"tbl_fornitore"> | string
  }

  export type tbl_fornituraWhereInput = {
    AND?: tbl_fornituraWhereInput | tbl_fornituraWhereInput[]
    OR?: tbl_fornituraWhereInput[]
    NOT?: tbl_fornituraWhereInput | tbl_fornituraWhereInput[]
    ID_FORNITURA?: StringFilter<"tbl_fornitura"> | string
    P_IVA?: StringFilter<"tbl_fornitura"> | string
    CODICE_ZONA?: StringFilter<"tbl_fornitura"> | string
    PREZZO?: FloatNullableFilter<"tbl_fornitura"> | number | null
    DATA_ACQUISTO?: DateTimeNullableFilter<"tbl_fornitura"> | Date | string | null
    DATA_SPEDIZIONE?: DateTimeNullableFilter<"tbl_fornitura"> | Date | string | null
    tbl_fornitore?: XOR<Tbl_fornitoreRelationFilter, tbl_fornitoreWhereInput>
    tbl_prodotto?: Tbl_prodottoListRelationFilter
  }

  export type tbl_fornituraOrderByWithRelationInput = {
    ID_FORNITURA?: SortOrder
    P_IVA?: SortOrder
    CODICE_ZONA?: SortOrder
    PREZZO?: SortOrderInput | SortOrder
    DATA_ACQUISTO?: SortOrderInput | SortOrder
    DATA_SPEDIZIONE?: SortOrderInput | SortOrder
    tbl_fornitore?: tbl_fornitoreOrderByWithRelationInput
    tbl_prodotto?: tbl_prodottoOrderByRelationAggregateInput
  }

  export type tbl_fornituraWhereUniqueInput = Prisma.AtLeast<{
    ID_FORNITURA?: string
    AND?: tbl_fornituraWhereInput | tbl_fornituraWhereInput[]
    OR?: tbl_fornituraWhereInput[]
    NOT?: tbl_fornituraWhereInput | tbl_fornituraWhereInput[]
    P_IVA?: StringFilter<"tbl_fornitura"> | string
    CODICE_ZONA?: StringFilter<"tbl_fornitura"> | string
    PREZZO?: FloatNullableFilter<"tbl_fornitura"> | number | null
    DATA_ACQUISTO?: DateTimeNullableFilter<"tbl_fornitura"> | Date | string | null
    DATA_SPEDIZIONE?: DateTimeNullableFilter<"tbl_fornitura"> | Date | string | null
    tbl_fornitore?: XOR<Tbl_fornitoreRelationFilter, tbl_fornitoreWhereInput>
    tbl_prodotto?: Tbl_prodottoListRelationFilter
  }, "ID_FORNITURA">

  export type tbl_fornituraOrderByWithAggregationInput = {
    ID_FORNITURA?: SortOrder
    P_IVA?: SortOrder
    CODICE_ZONA?: SortOrder
    PREZZO?: SortOrderInput | SortOrder
    DATA_ACQUISTO?: SortOrderInput | SortOrder
    DATA_SPEDIZIONE?: SortOrderInput | SortOrder
    _count?: tbl_fornituraCountOrderByAggregateInput
    _avg?: tbl_fornituraAvgOrderByAggregateInput
    _max?: tbl_fornituraMaxOrderByAggregateInput
    _min?: tbl_fornituraMinOrderByAggregateInput
    _sum?: tbl_fornituraSumOrderByAggregateInput
  }

  export type tbl_fornituraScalarWhereWithAggregatesInput = {
    AND?: tbl_fornituraScalarWhereWithAggregatesInput | tbl_fornituraScalarWhereWithAggregatesInput[]
    OR?: tbl_fornituraScalarWhereWithAggregatesInput[]
    NOT?: tbl_fornituraScalarWhereWithAggregatesInput | tbl_fornituraScalarWhereWithAggregatesInput[]
    ID_FORNITURA?: StringWithAggregatesFilter<"tbl_fornitura"> | string
    P_IVA?: StringWithAggregatesFilter<"tbl_fornitura"> | string
    CODICE_ZONA?: StringWithAggregatesFilter<"tbl_fornitura"> | string
    PREZZO?: FloatNullableWithAggregatesFilter<"tbl_fornitura"> | number | null
    DATA_ACQUISTO?: DateTimeNullableWithAggregatesFilter<"tbl_fornitura"> | Date | string | null
    DATA_SPEDIZIONE?: DateTimeNullableWithAggregatesFilter<"tbl_fornitura"> | Date | string | null
  }

  export type tbl_ordineWhereInput = {
    AND?: tbl_ordineWhereInput | tbl_ordineWhereInput[]
    OR?: tbl_ordineWhereInput[]
    NOT?: tbl_ordineWhereInput | tbl_ordineWhereInput[]
    ID_ORDINE?: StringFilter<"tbl_ordine"> | string
    FATTURA?: StringFilter<"tbl_ordine"> | string
    NUMERO_ORDINE?: IntNullableFilter<"tbl_ordine"> | number | null
    ID_CARRELLO?: StringNullableFilter<"tbl_ordine"> | string | null
    INDIRIZZO_SPEDIZIONE?: StringNullableFilter<"tbl_ordine"> | string | null
    STATO_ORDINE?: StringNullableFilter<"tbl_ordine"> | string | null
    tbl_carrello?: XOR<Tbl_carrelloNullableRelationFilter, tbl_carrelloWhereInput> | null
  }

  export type tbl_ordineOrderByWithRelationInput = {
    ID_ORDINE?: SortOrder
    FATTURA?: SortOrder
    NUMERO_ORDINE?: SortOrderInput | SortOrder
    ID_CARRELLO?: SortOrderInput | SortOrder
    INDIRIZZO_SPEDIZIONE?: SortOrderInput | SortOrder
    STATO_ORDINE?: SortOrderInput | SortOrder
    tbl_carrello?: tbl_carrelloOrderByWithRelationInput
  }

  export type tbl_ordineWhereUniqueInput = Prisma.AtLeast<{
    ID_ORDINE?: string
    AND?: tbl_ordineWhereInput | tbl_ordineWhereInput[]
    OR?: tbl_ordineWhereInput[]
    NOT?: tbl_ordineWhereInput | tbl_ordineWhereInput[]
    FATTURA?: StringFilter<"tbl_ordine"> | string
    NUMERO_ORDINE?: IntNullableFilter<"tbl_ordine"> | number | null
    ID_CARRELLO?: StringNullableFilter<"tbl_ordine"> | string | null
    INDIRIZZO_SPEDIZIONE?: StringNullableFilter<"tbl_ordine"> | string | null
    STATO_ORDINE?: StringNullableFilter<"tbl_ordine"> | string | null
    tbl_carrello?: XOR<Tbl_carrelloNullableRelationFilter, tbl_carrelloWhereInput> | null
  }, "ID_ORDINE">

  export type tbl_ordineOrderByWithAggregationInput = {
    ID_ORDINE?: SortOrder
    FATTURA?: SortOrder
    NUMERO_ORDINE?: SortOrderInput | SortOrder
    ID_CARRELLO?: SortOrderInput | SortOrder
    INDIRIZZO_SPEDIZIONE?: SortOrderInput | SortOrder
    STATO_ORDINE?: SortOrderInput | SortOrder
    _count?: tbl_ordineCountOrderByAggregateInput
    _avg?: tbl_ordineAvgOrderByAggregateInput
    _max?: tbl_ordineMaxOrderByAggregateInput
    _min?: tbl_ordineMinOrderByAggregateInput
    _sum?: tbl_ordineSumOrderByAggregateInput
  }

  export type tbl_ordineScalarWhereWithAggregatesInput = {
    AND?: tbl_ordineScalarWhereWithAggregatesInput | tbl_ordineScalarWhereWithAggregatesInput[]
    OR?: tbl_ordineScalarWhereWithAggregatesInput[]
    NOT?: tbl_ordineScalarWhereWithAggregatesInput | tbl_ordineScalarWhereWithAggregatesInput[]
    ID_ORDINE?: StringWithAggregatesFilter<"tbl_ordine"> | string
    FATTURA?: StringWithAggregatesFilter<"tbl_ordine"> | string
    NUMERO_ORDINE?: IntNullableWithAggregatesFilter<"tbl_ordine"> | number | null
    ID_CARRELLO?: StringNullableWithAggregatesFilter<"tbl_ordine"> | string | null
    INDIRIZZO_SPEDIZIONE?: StringNullableWithAggregatesFilter<"tbl_ordine"> | string | null
    STATO_ORDINE?: StringNullableWithAggregatesFilter<"tbl_ordine"> | string | null
  }

  export type tbl_prodottoWhereInput = {
    AND?: tbl_prodottoWhereInput | tbl_prodottoWhereInput[]
    OR?: tbl_prodottoWhereInput[]
    NOT?: tbl_prodottoWhereInput | tbl_prodottoWhereInput[]
    NOME_PRODOTTO?: StringFilter<"tbl_prodotto"> | string
    PREZZO_PRODOTTO?: FloatFilter<"tbl_prodotto"> | number
    QUANTITA?: IntFilter<"tbl_prodotto"> | number
    PROVENIENZA?: StringFilter<"tbl_prodotto"> | string
    ID_FORNITURA?: StringFilter<"tbl_prodotto"> | string
    ID_PRODOTTO?: StringFilter<"tbl_prodotto"> | string
    tbl_fornitura?: XOR<Tbl_fornituraRelationFilter, tbl_fornituraWhereInput>
  }

  export type tbl_prodottoOrderByWithRelationInput = {
    NOME_PRODOTTO?: SortOrder
    PREZZO_PRODOTTO?: SortOrder
    QUANTITA?: SortOrder
    PROVENIENZA?: SortOrder
    ID_FORNITURA?: SortOrder
    ID_PRODOTTO?: SortOrder
    tbl_fornitura?: tbl_fornituraOrderByWithRelationInput
  }

  export type tbl_prodottoWhereUniqueInput = Prisma.AtLeast<{
    ID_PRODOTTO?: string
    AND?: tbl_prodottoWhereInput | tbl_prodottoWhereInput[]
    OR?: tbl_prodottoWhereInput[]
    NOT?: tbl_prodottoWhereInput | tbl_prodottoWhereInput[]
    NOME_PRODOTTO?: StringFilter<"tbl_prodotto"> | string
    PREZZO_PRODOTTO?: FloatFilter<"tbl_prodotto"> | number
    QUANTITA?: IntFilter<"tbl_prodotto"> | number
    PROVENIENZA?: StringFilter<"tbl_prodotto"> | string
    ID_FORNITURA?: StringFilter<"tbl_prodotto"> | string
    tbl_fornitura?: XOR<Tbl_fornituraRelationFilter, tbl_fornituraWhereInput>
  }, "ID_PRODOTTO">

  export type tbl_prodottoOrderByWithAggregationInput = {
    NOME_PRODOTTO?: SortOrder
    PREZZO_PRODOTTO?: SortOrder
    QUANTITA?: SortOrder
    PROVENIENZA?: SortOrder
    ID_FORNITURA?: SortOrder
    ID_PRODOTTO?: SortOrder
    _count?: tbl_prodottoCountOrderByAggregateInput
    _avg?: tbl_prodottoAvgOrderByAggregateInput
    _max?: tbl_prodottoMaxOrderByAggregateInput
    _min?: tbl_prodottoMinOrderByAggregateInput
    _sum?: tbl_prodottoSumOrderByAggregateInput
  }

  export type tbl_prodottoScalarWhereWithAggregatesInput = {
    AND?: tbl_prodottoScalarWhereWithAggregatesInput | tbl_prodottoScalarWhereWithAggregatesInput[]
    OR?: tbl_prodottoScalarWhereWithAggregatesInput[]
    NOT?: tbl_prodottoScalarWhereWithAggregatesInput | tbl_prodottoScalarWhereWithAggregatesInput[]
    NOME_PRODOTTO?: StringWithAggregatesFilter<"tbl_prodotto"> | string
    PREZZO_PRODOTTO?: FloatWithAggregatesFilter<"tbl_prodotto"> | number
    QUANTITA?: IntWithAggregatesFilter<"tbl_prodotto"> | number
    PROVENIENZA?: StringWithAggregatesFilter<"tbl_prodotto"> | string
    ID_FORNITURA?: StringWithAggregatesFilter<"tbl_prodotto"> | string
    ID_PRODOTTO?: StringWithAggregatesFilter<"tbl_prodotto"> | string
  }

  export type tbl_spedizioneWhereInput = {
    AND?: tbl_spedizioneWhereInput | tbl_spedizioneWhereInput[]
    OR?: tbl_spedizioneWhereInput[]
    NOT?: tbl_spedizioneWhereInput | tbl_spedizioneWhereInput[]
    NUMERO_TRACCIAMENTO?: StringFilter<"tbl_spedizione"> | string
    P_IVA_CORRIERE?: StringFilter<"tbl_spedizione"> | string
    NUMERO_ORDINE?: StringFilter<"tbl_spedizione"> | string
    DATA_PARTENZA?: DateTimeFilter<"tbl_spedizione"> | Date | string
    DATA_ARRIVO?: DateTimeFilter<"tbl_spedizione"> | Date | string
    tbl_corriere?: XOR<Tbl_corriereRelationFilter, tbl_corriereWhereInput>
  }

  export type tbl_spedizioneOrderByWithRelationInput = {
    NUMERO_TRACCIAMENTO?: SortOrder
    P_IVA_CORRIERE?: SortOrder
    NUMERO_ORDINE?: SortOrder
    DATA_PARTENZA?: SortOrder
    DATA_ARRIVO?: SortOrder
    tbl_corriere?: tbl_corriereOrderByWithRelationInput
  }

  export type tbl_spedizioneWhereUniqueInput = Prisma.AtLeast<{
    NUMERO_TRACCIAMENTO?: string
    AND?: tbl_spedizioneWhereInput | tbl_spedizioneWhereInput[]
    OR?: tbl_spedizioneWhereInput[]
    NOT?: tbl_spedizioneWhereInput | tbl_spedizioneWhereInput[]
    P_IVA_CORRIERE?: StringFilter<"tbl_spedizione"> | string
    NUMERO_ORDINE?: StringFilter<"tbl_spedizione"> | string
    DATA_PARTENZA?: DateTimeFilter<"tbl_spedizione"> | Date | string
    DATA_ARRIVO?: DateTimeFilter<"tbl_spedizione"> | Date | string
    tbl_corriere?: XOR<Tbl_corriereRelationFilter, tbl_corriereWhereInput>
  }, "NUMERO_TRACCIAMENTO">

  export type tbl_spedizioneOrderByWithAggregationInput = {
    NUMERO_TRACCIAMENTO?: SortOrder
    P_IVA_CORRIERE?: SortOrder
    NUMERO_ORDINE?: SortOrder
    DATA_PARTENZA?: SortOrder
    DATA_ARRIVO?: SortOrder
    _count?: tbl_spedizioneCountOrderByAggregateInput
    _max?: tbl_spedizioneMaxOrderByAggregateInput
    _min?: tbl_spedizioneMinOrderByAggregateInput
  }

  export type tbl_spedizioneScalarWhereWithAggregatesInput = {
    AND?: tbl_spedizioneScalarWhereWithAggregatesInput | tbl_spedizioneScalarWhereWithAggregatesInput[]
    OR?: tbl_spedizioneScalarWhereWithAggregatesInput[]
    NOT?: tbl_spedizioneScalarWhereWithAggregatesInput | tbl_spedizioneScalarWhereWithAggregatesInput[]
    NUMERO_TRACCIAMENTO?: StringWithAggregatesFilter<"tbl_spedizione"> | string
    P_IVA_CORRIERE?: StringWithAggregatesFilter<"tbl_spedizione"> | string
    NUMERO_ORDINE?: StringWithAggregatesFilter<"tbl_spedizione"> | string
    DATA_PARTENZA?: DateTimeWithAggregatesFilter<"tbl_spedizione"> | Date | string
    DATA_ARRIVO?: DateTimeWithAggregatesFilter<"tbl_spedizione"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    bio?: StringNullableFilter<"Profile"> | string | null
    userId?: IntFilter<"Profile"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    bio?: StringNullableFilter<"Profile"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    userId?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    posts?: PostListRelationFilter
    profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
    profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    viewCount?: IntFilter<"Post"> | number
    authorId?: IntNullableFilter<"Post"> | number | null
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    viewCount?: SortOrder
    authorId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    viewCount?: IntFilter<"Post"> | number
    authorId?: IntNullableFilter<"Post"> | number | null
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    viewCount?: SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    viewCount?: IntWithAggregatesFilter<"Post"> | number
    authorId?: IntNullableWithAggregatesFilter<"Post"> | number | null
  }

  export type tbl_carrelloCreateInput = {
    ID: string
    DATA_ACQUISTO?: Date | string | null
    QUANTITA_PRODOTTO: number
    PREZZO_TOTALE: number
    tbl_cliente?: tbl_clienteCreateNestedOneWithoutTbl_carrelloInput
    tbl_ordine?: tbl_ordineCreateNestedManyWithoutTbl_carrelloInput
  }

  export type tbl_carrelloUncheckedCreateInput = {
    ID: string
    DATA_ACQUISTO?: Date | string | null
    QUANTITA_PRODOTTO: number
    PREZZO_TOTALE: number
    EMAIL_CLIENTE?: string | null
    tbl_ordine?: tbl_ordineUncheckedCreateNestedManyWithoutTbl_carrelloInput
  }

  export type tbl_carrelloUpdateInput = {
    ID?: StringFieldUpdateOperationsInput | string
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    QUANTITA_PRODOTTO?: IntFieldUpdateOperationsInput | number
    PREZZO_TOTALE?: FloatFieldUpdateOperationsInput | number
    tbl_cliente?: tbl_clienteUpdateOneWithoutTbl_carrelloNestedInput
    tbl_ordine?: tbl_ordineUpdateManyWithoutTbl_carrelloNestedInput
  }

  export type tbl_carrelloUncheckedUpdateInput = {
    ID?: StringFieldUpdateOperationsInput | string
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    QUANTITA_PRODOTTO?: IntFieldUpdateOperationsInput | number
    PREZZO_TOTALE?: FloatFieldUpdateOperationsInput | number
    EMAIL_CLIENTE?: NullableStringFieldUpdateOperationsInput | string | null
    tbl_ordine?: tbl_ordineUncheckedUpdateManyWithoutTbl_carrelloNestedInput
  }

  export type tbl_carrelloCreateManyInput = {
    ID: string
    DATA_ACQUISTO?: Date | string | null
    QUANTITA_PRODOTTO: number
    PREZZO_TOTALE: number
    EMAIL_CLIENTE?: string | null
  }

  export type tbl_carrelloUpdateManyMutationInput = {
    ID?: StringFieldUpdateOperationsInput | string
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    QUANTITA_PRODOTTO?: IntFieldUpdateOperationsInput | number
    PREZZO_TOTALE?: FloatFieldUpdateOperationsInput | number
  }

  export type tbl_carrelloUncheckedUpdateManyInput = {
    ID?: StringFieldUpdateOperationsInput | string
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    QUANTITA_PRODOTTO?: IntFieldUpdateOperationsInput | number
    PREZZO_TOTALE?: FloatFieldUpdateOperationsInput | number
    EMAIL_CLIENTE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_clienteCreateInput = {
    NOME: string
    COGNOME: string
    EMAIL: string
    CELLULARE: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    CITTA: string
    VIA: string
    N_CIVICO: string
    CAP: string
    NUM_CARTA: string
    CVV_CARTA: string
    INTESTATARIO_CARTA?: string | null
    SCADENZA_CARTA?: Date | string | null
    RUOLO?: string | null
    UTENTE_PASSWORD?: string | null
    tbl_carrello?: tbl_carrelloCreateNestedManyWithoutTbl_clienteInput
  }

  export type tbl_clienteUncheckedCreateInput = {
    ID?: number
    NOME: string
    COGNOME: string
    EMAIL: string
    CELLULARE: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    CITTA: string
    VIA: string
    N_CIVICO: string
    CAP: string
    NUM_CARTA: string
    CVV_CARTA: string
    INTESTATARIO_CARTA?: string | null
    SCADENZA_CARTA?: Date | string | null
    RUOLO?: string | null
    UTENTE_PASSWORD?: string | null
    tbl_carrello?: tbl_carrelloUncheckedCreateNestedManyWithoutTbl_clienteInput
  }

  export type tbl_clienteUpdateInput = {
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    CELLULARE?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    NUM_CARTA?: StringFieldUpdateOperationsInput | string
    CVV_CARTA?: StringFieldUpdateOperationsInput | string
    INTESTATARIO_CARTA?: NullableStringFieldUpdateOperationsInput | string | null
    SCADENZA_CARTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
    tbl_carrello?: tbl_carrelloUpdateManyWithoutTbl_clienteNestedInput
  }

  export type tbl_clienteUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    CELLULARE?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    NUM_CARTA?: StringFieldUpdateOperationsInput | string
    CVV_CARTA?: StringFieldUpdateOperationsInput | string
    INTESTATARIO_CARTA?: NullableStringFieldUpdateOperationsInput | string | null
    SCADENZA_CARTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
    tbl_carrello?: tbl_carrelloUncheckedUpdateManyWithoutTbl_clienteNestedInput
  }

  export type tbl_clienteCreateManyInput = {
    ID?: number
    NOME: string
    COGNOME: string
    EMAIL: string
    CELLULARE: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    CITTA: string
    VIA: string
    N_CIVICO: string
    CAP: string
    NUM_CARTA: string
    CVV_CARTA: string
    INTESTATARIO_CARTA?: string | null
    SCADENZA_CARTA?: Date | string | null
    RUOLO?: string | null
    UTENTE_PASSWORD?: string | null
  }

  export type tbl_clienteUpdateManyMutationInput = {
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    CELLULARE?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    NUM_CARTA?: StringFieldUpdateOperationsInput | string
    CVV_CARTA?: StringFieldUpdateOperationsInput | string
    INTESTATARIO_CARTA?: NullableStringFieldUpdateOperationsInput | string | null
    SCADENZA_CARTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_clienteUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    CELLULARE?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    NUM_CARTA?: StringFieldUpdateOperationsInput | string
    CVV_CARTA?: StringFieldUpdateOperationsInput | string
    INTESTATARIO_CARTA?: NullableStringFieldUpdateOperationsInput | string | null
    SCADENZA_CARTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_corriereCreateInput = {
    P_IVA: string
    NOME: string
    TELEFONO: string
    EMAIL: string
    tbl_spedizione?: tbl_spedizioneCreateNestedManyWithoutTbl_corriereInput
  }

  export type tbl_corriereUncheckedCreateInput = {
    P_IVA: string
    NOME: string
    TELEFONO: string
    EMAIL: string
    tbl_spedizione?: tbl_spedizioneUncheckedCreateNestedManyWithoutTbl_corriereInput
  }

  export type tbl_corriereUpdateInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    TELEFONO?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    tbl_spedizione?: tbl_spedizioneUpdateManyWithoutTbl_corriereNestedInput
  }

  export type tbl_corriereUncheckedUpdateInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    TELEFONO?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    tbl_spedizione?: tbl_spedizioneUncheckedUpdateManyWithoutTbl_corriereNestedInput
  }

  export type tbl_corriereCreateManyInput = {
    P_IVA: string
    NOME: string
    TELEFONO: string
    EMAIL: string
  }

  export type tbl_corriereUpdateManyMutationInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    TELEFONO?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_corriereUncheckedUpdateManyInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    TELEFONO?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_dipendenteCreateInput = {
    NOME: string
    COGNOME: string
    EMAIL: string
    VIA: string
    N_CIVICO: string
    CAP: string
    CITTA: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    DATA_ASSUNZIONE?: Date | string | null
    PAGA_ORARIA: number
    RUOLO?: string | null
    UTENTE_PASSWORD?: string | null
    tbl_filiale?: tbl_filialeCreateNestedOneWithoutTbl_dipendenteInput
  }

  export type tbl_dipendenteUncheckedCreateInput = {
    ID?: number
    NOME: string
    COGNOME: string
    EMAIL: string
    VIA: string
    N_CIVICO: string
    CAP: string
    CITTA: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    DATA_ASSUNZIONE?: Date | string | null
    PAGA_ORARIA: number
    CODICE_ZONA?: string | null
    RUOLO?: string | null
    UTENTE_PASSWORD?: string | null
  }

  export type tbl_dipendenteUpdateInput = {
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    DATA_ASSUNZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PAGA_ORARIA?: FloatFieldUpdateOperationsInput | number
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
    tbl_filiale?: tbl_filialeUpdateOneWithoutTbl_dipendenteNestedInput
  }

  export type tbl_dipendenteUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    DATA_ASSUNZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PAGA_ORARIA?: FloatFieldUpdateOperationsInput | number
    CODICE_ZONA?: NullableStringFieldUpdateOperationsInput | string | null
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_dipendenteCreateManyInput = {
    ID?: number
    NOME: string
    COGNOME: string
    EMAIL: string
    VIA: string
    N_CIVICO: string
    CAP: string
    CITTA: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    DATA_ASSUNZIONE?: Date | string | null
    PAGA_ORARIA: number
    CODICE_ZONA?: string | null
    RUOLO?: string | null
    UTENTE_PASSWORD?: string | null
  }

  export type tbl_dipendenteUpdateManyMutationInput = {
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    DATA_ASSUNZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PAGA_ORARIA?: FloatFieldUpdateOperationsInput | number
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_dipendenteUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    DATA_ASSUNZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PAGA_ORARIA?: FloatFieldUpdateOperationsInput | number
    CODICE_ZONA?: NullableStringFieldUpdateOperationsInput | string | null
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_filialeCreateInput = {
    NOME_FILIALE: string
    SEDE: string
    CODICE_ZONA_FILIALE: string
    tbl_dipendente?: tbl_dipendenteCreateNestedManyWithoutTbl_filialeInput
  }

  export type tbl_filialeUncheckedCreateInput = {
    NOME_FILIALE: string
    SEDE: string
    CODICE_ZONA_FILIALE: string
    tbl_dipendente?: tbl_dipendenteUncheckedCreateNestedManyWithoutTbl_filialeInput
  }

  export type tbl_filialeUpdateInput = {
    NOME_FILIALE?: StringFieldUpdateOperationsInput | string
    SEDE?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA_FILIALE?: StringFieldUpdateOperationsInput | string
    tbl_dipendente?: tbl_dipendenteUpdateManyWithoutTbl_filialeNestedInput
  }

  export type tbl_filialeUncheckedUpdateInput = {
    NOME_FILIALE?: StringFieldUpdateOperationsInput | string
    SEDE?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA_FILIALE?: StringFieldUpdateOperationsInput | string
    tbl_dipendente?: tbl_dipendenteUncheckedUpdateManyWithoutTbl_filialeNestedInput
  }

  export type tbl_filialeCreateManyInput = {
    NOME_FILIALE: string
    SEDE: string
    CODICE_ZONA_FILIALE: string
  }

  export type tbl_filialeUpdateManyMutationInput = {
    NOME_FILIALE?: StringFieldUpdateOperationsInput | string
    SEDE?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA_FILIALE?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_filialeUncheckedUpdateManyInput = {
    NOME_FILIALE?: StringFieldUpdateOperationsInput | string
    SEDE?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA_FILIALE?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_fornitoreCreateInput = {
    P_IVA: string
    NOME: string
    CITTA: string
    VIA: string
    CAP: string
    tbl_fornitura?: tbl_fornituraCreateNestedManyWithoutTbl_fornitoreInput
  }

  export type tbl_fornitoreUncheckedCreateInput = {
    P_IVA: string
    NOME: string
    CITTA: string
    VIA: string
    CAP: string
    tbl_fornitura?: tbl_fornituraUncheckedCreateNestedManyWithoutTbl_fornitoreInput
  }

  export type tbl_fornitoreUpdateInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    tbl_fornitura?: tbl_fornituraUpdateManyWithoutTbl_fornitoreNestedInput
  }

  export type tbl_fornitoreUncheckedUpdateInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    tbl_fornitura?: tbl_fornituraUncheckedUpdateManyWithoutTbl_fornitoreNestedInput
  }

  export type tbl_fornitoreCreateManyInput = {
    P_IVA: string
    NOME: string
    CITTA: string
    VIA: string
    CAP: string
  }

  export type tbl_fornitoreUpdateManyMutationInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_fornitoreUncheckedUpdateManyInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_fornituraCreateInput = {
    ID_FORNITURA: string
    CODICE_ZONA: string
    PREZZO?: number | null
    DATA_ACQUISTO?: Date | string | null
    DATA_SPEDIZIONE?: Date | string | null
    tbl_fornitore: tbl_fornitoreCreateNestedOneWithoutTbl_fornituraInput
    tbl_prodotto?: tbl_prodottoCreateNestedManyWithoutTbl_fornituraInput
  }

  export type tbl_fornituraUncheckedCreateInput = {
    ID_FORNITURA: string
    P_IVA: string
    CODICE_ZONA: string
    PREZZO?: number | null
    DATA_ACQUISTO?: Date | string | null
    DATA_SPEDIZIONE?: Date | string | null
    tbl_prodotto?: tbl_prodottoUncheckedCreateNestedManyWithoutTbl_fornituraInput
  }

  export type tbl_fornituraUpdateInput = {
    ID_FORNITURA?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA?: StringFieldUpdateOperationsInput | string
    PREZZO?: NullableFloatFieldUpdateOperationsInput | number | null
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_SPEDIZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tbl_fornitore?: tbl_fornitoreUpdateOneRequiredWithoutTbl_fornituraNestedInput
    tbl_prodotto?: tbl_prodottoUpdateManyWithoutTbl_fornituraNestedInput
  }

  export type tbl_fornituraUncheckedUpdateInput = {
    ID_FORNITURA?: StringFieldUpdateOperationsInput | string
    P_IVA?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA?: StringFieldUpdateOperationsInput | string
    PREZZO?: NullableFloatFieldUpdateOperationsInput | number | null
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_SPEDIZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tbl_prodotto?: tbl_prodottoUncheckedUpdateManyWithoutTbl_fornituraNestedInput
  }

  export type tbl_fornituraCreateManyInput = {
    ID_FORNITURA: string
    P_IVA: string
    CODICE_ZONA: string
    PREZZO?: number | null
    DATA_ACQUISTO?: Date | string | null
    DATA_SPEDIZIONE?: Date | string | null
  }

  export type tbl_fornituraUpdateManyMutationInput = {
    ID_FORNITURA?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA?: StringFieldUpdateOperationsInput | string
    PREZZO?: NullableFloatFieldUpdateOperationsInput | number | null
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_SPEDIZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_fornituraUncheckedUpdateManyInput = {
    ID_FORNITURA?: StringFieldUpdateOperationsInput | string
    P_IVA?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA?: StringFieldUpdateOperationsInput | string
    PREZZO?: NullableFloatFieldUpdateOperationsInput | number | null
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_SPEDIZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_ordineCreateInput = {
    ID_ORDINE: string
    FATTURA: string
    NUMERO_ORDINE?: number | null
    INDIRIZZO_SPEDIZIONE?: string | null
    STATO_ORDINE?: string | null
    tbl_carrello?: tbl_carrelloCreateNestedOneWithoutTbl_ordineInput
  }

  export type tbl_ordineUncheckedCreateInput = {
    ID_ORDINE: string
    FATTURA: string
    NUMERO_ORDINE?: number | null
    ID_CARRELLO?: string | null
    INDIRIZZO_SPEDIZIONE?: string | null
    STATO_ORDINE?: string | null
  }

  export type tbl_ordineUpdateInput = {
    ID_ORDINE?: StringFieldUpdateOperationsInput | string
    FATTURA?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: NullableIntFieldUpdateOperationsInput | number | null
    INDIRIZZO_SPEDIZIONE?: NullableStringFieldUpdateOperationsInput | string | null
    STATO_ORDINE?: NullableStringFieldUpdateOperationsInput | string | null
    tbl_carrello?: tbl_carrelloUpdateOneWithoutTbl_ordineNestedInput
  }

  export type tbl_ordineUncheckedUpdateInput = {
    ID_ORDINE?: StringFieldUpdateOperationsInput | string
    FATTURA?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: NullableIntFieldUpdateOperationsInput | number | null
    ID_CARRELLO?: NullableStringFieldUpdateOperationsInput | string | null
    INDIRIZZO_SPEDIZIONE?: NullableStringFieldUpdateOperationsInput | string | null
    STATO_ORDINE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_ordineCreateManyInput = {
    ID_ORDINE: string
    FATTURA: string
    NUMERO_ORDINE?: number | null
    ID_CARRELLO?: string | null
    INDIRIZZO_SPEDIZIONE?: string | null
    STATO_ORDINE?: string | null
  }

  export type tbl_ordineUpdateManyMutationInput = {
    ID_ORDINE?: StringFieldUpdateOperationsInput | string
    FATTURA?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: NullableIntFieldUpdateOperationsInput | number | null
    INDIRIZZO_SPEDIZIONE?: NullableStringFieldUpdateOperationsInput | string | null
    STATO_ORDINE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_ordineUncheckedUpdateManyInput = {
    ID_ORDINE?: StringFieldUpdateOperationsInput | string
    FATTURA?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: NullableIntFieldUpdateOperationsInput | number | null
    ID_CARRELLO?: NullableStringFieldUpdateOperationsInput | string | null
    INDIRIZZO_SPEDIZIONE?: NullableStringFieldUpdateOperationsInput | string | null
    STATO_ORDINE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_prodottoCreateInput = {
    NOME_PRODOTTO: string
    PREZZO_PRODOTTO: number
    QUANTITA: number
    PROVENIENZA: string
    ID_PRODOTTO: string
    tbl_fornitura: tbl_fornituraCreateNestedOneWithoutTbl_prodottoInput
  }

  export type tbl_prodottoUncheckedCreateInput = {
    NOME_PRODOTTO: string
    PREZZO_PRODOTTO: number
    QUANTITA: number
    PROVENIENZA: string
    ID_FORNITURA: string
    ID_PRODOTTO: string
  }

  export type tbl_prodottoUpdateInput = {
    NOME_PRODOTTO?: StringFieldUpdateOperationsInput | string
    PREZZO_PRODOTTO?: FloatFieldUpdateOperationsInput | number
    QUANTITA?: IntFieldUpdateOperationsInput | number
    PROVENIENZA?: StringFieldUpdateOperationsInput | string
    ID_PRODOTTO?: StringFieldUpdateOperationsInput | string
    tbl_fornitura?: tbl_fornituraUpdateOneRequiredWithoutTbl_prodottoNestedInput
  }

  export type tbl_prodottoUncheckedUpdateInput = {
    NOME_PRODOTTO?: StringFieldUpdateOperationsInput | string
    PREZZO_PRODOTTO?: FloatFieldUpdateOperationsInput | number
    QUANTITA?: IntFieldUpdateOperationsInput | number
    PROVENIENZA?: StringFieldUpdateOperationsInput | string
    ID_FORNITURA?: StringFieldUpdateOperationsInput | string
    ID_PRODOTTO?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_prodottoCreateManyInput = {
    NOME_PRODOTTO: string
    PREZZO_PRODOTTO: number
    QUANTITA: number
    PROVENIENZA: string
    ID_FORNITURA: string
    ID_PRODOTTO: string
  }

  export type tbl_prodottoUpdateManyMutationInput = {
    NOME_PRODOTTO?: StringFieldUpdateOperationsInput | string
    PREZZO_PRODOTTO?: FloatFieldUpdateOperationsInput | number
    QUANTITA?: IntFieldUpdateOperationsInput | number
    PROVENIENZA?: StringFieldUpdateOperationsInput | string
    ID_PRODOTTO?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_prodottoUncheckedUpdateManyInput = {
    NOME_PRODOTTO?: StringFieldUpdateOperationsInput | string
    PREZZO_PRODOTTO?: FloatFieldUpdateOperationsInput | number
    QUANTITA?: IntFieldUpdateOperationsInput | number
    PROVENIENZA?: StringFieldUpdateOperationsInput | string
    ID_FORNITURA?: StringFieldUpdateOperationsInput | string
    ID_PRODOTTO?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_spedizioneCreateInput = {
    NUMERO_TRACCIAMENTO: string
    NUMERO_ORDINE: string
    DATA_PARTENZA: Date | string
    DATA_ARRIVO: Date | string
    tbl_corriere: tbl_corriereCreateNestedOneWithoutTbl_spedizioneInput
  }

  export type tbl_spedizioneUncheckedCreateInput = {
    NUMERO_TRACCIAMENTO: string
    P_IVA_CORRIERE: string
    NUMERO_ORDINE: string
    DATA_PARTENZA: Date | string
    DATA_ARRIVO: Date | string
  }

  export type tbl_spedizioneUpdateInput = {
    NUMERO_TRACCIAMENTO?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: StringFieldUpdateOperationsInput | string
    DATA_PARTENZA?: DateTimeFieldUpdateOperationsInput | Date | string
    DATA_ARRIVO?: DateTimeFieldUpdateOperationsInput | Date | string
    tbl_corriere?: tbl_corriereUpdateOneRequiredWithoutTbl_spedizioneNestedInput
  }

  export type tbl_spedizioneUncheckedUpdateInput = {
    NUMERO_TRACCIAMENTO?: StringFieldUpdateOperationsInput | string
    P_IVA_CORRIERE?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: StringFieldUpdateOperationsInput | string
    DATA_PARTENZA?: DateTimeFieldUpdateOperationsInput | Date | string
    DATA_ARRIVO?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_spedizioneCreateManyInput = {
    NUMERO_TRACCIAMENTO: string
    P_IVA_CORRIERE: string
    NUMERO_ORDINE: string
    DATA_PARTENZA: Date | string
    DATA_ARRIVO: Date | string
  }

  export type tbl_spedizioneUpdateManyMutationInput = {
    NUMERO_TRACCIAMENTO?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: StringFieldUpdateOperationsInput | string
    DATA_PARTENZA?: DateTimeFieldUpdateOperationsInput | Date | string
    DATA_ARRIVO?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_spedizioneUncheckedUpdateManyInput = {
    NUMERO_TRACCIAMENTO?: StringFieldUpdateOperationsInput | string
    P_IVA_CORRIERE?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: StringFieldUpdateOperationsInput | string
    DATA_PARTENZA?: DateTimeFieldUpdateOperationsInput | Date | string
    DATA_ARRIVO?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    bio?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    bio?: string | null
    userId: number
  }

  export type ProfileUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyInput = {
    id?: number
    bio?: string | null
    userId: number
  }

  export type ProfileUpdateManyMutationInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
    posts?: PostCreateNestedManyWithoutAuthorInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutAuthorNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
    viewCount?: number
    author?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
    viewCount?: number
    authorId?: number | null
  }

  export type PostUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
    viewCount?: number
    authorId?: number | null
  }

  export type PostUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Tbl_clienteNullableRelationFilter = {
    is?: tbl_clienteWhereInput | null
    isNot?: tbl_clienteWhereInput | null
  }

  export type Tbl_ordineListRelationFilter = {
    every?: tbl_ordineWhereInput
    some?: tbl_ordineWhereInput
    none?: tbl_ordineWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tbl_ordineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_carrelloCountOrderByAggregateInput = {
    ID?: SortOrder
    DATA_ACQUISTO?: SortOrder
    QUANTITA_PRODOTTO?: SortOrder
    PREZZO_TOTALE?: SortOrder
    EMAIL_CLIENTE?: SortOrder
  }

  export type tbl_carrelloAvgOrderByAggregateInput = {
    QUANTITA_PRODOTTO?: SortOrder
    PREZZO_TOTALE?: SortOrder
  }

  export type tbl_carrelloMaxOrderByAggregateInput = {
    ID?: SortOrder
    DATA_ACQUISTO?: SortOrder
    QUANTITA_PRODOTTO?: SortOrder
    PREZZO_TOTALE?: SortOrder
    EMAIL_CLIENTE?: SortOrder
  }

  export type tbl_carrelloMinOrderByAggregateInput = {
    ID?: SortOrder
    DATA_ACQUISTO?: SortOrder
    QUANTITA_PRODOTTO?: SortOrder
    PREZZO_TOTALE?: SortOrder
    EMAIL_CLIENTE?: SortOrder
  }

  export type tbl_carrelloSumOrderByAggregateInput = {
    QUANTITA_PRODOTTO?: SortOrder
    PREZZO_TOTALE?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Tbl_carrelloListRelationFilter = {
    every?: tbl_carrelloWhereInput
    some?: tbl_carrelloWhereInput
    none?: tbl_carrelloWhereInput
  }

  export type tbl_carrelloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_clienteCountOrderByAggregateInput = {
    ID?: SortOrder
    NOME?: SortOrder
    COGNOME?: SortOrder
    EMAIL?: SortOrder
    CELLULARE?: SortOrder
    CODICE_FISCALE?: SortOrder
    DATA_DI_NASCITA?: SortOrder
    CITTA?: SortOrder
    VIA?: SortOrder
    N_CIVICO?: SortOrder
    CAP?: SortOrder
    NUM_CARTA?: SortOrder
    CVV_CARTA?: SortOrder
    INTESTATARIO_CARTA?: SortOrder
    SCADENZA_CARTA?: SortOrder
    RUOLO?: SortOrder
    UTENTE_PASSWORD?: SortOrder
  }

  export type tbl_clienteAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type tbl_clienteMaxOrderByAggregateInput = {
    ID?: SortOrder
    NOME?: SortOrder
    COGNOME?: SortOrder
    EMAIL?: SortOrder
    CELLULARE?: SortOrder
    CODICE_FISCALE?: SortOrder
    DATA_DI_NASCITA?: SortOrder
    CITTA?: SortOrder
    VIA?: SortOrder
    N_CIVICO?: SortOrder
    CAP?: SortOrder
    NUM_CARTA?: SortOrder
    CVV_CARTA?: SortOrder
    INTESTATARIO_CARTA?: SortOrder
    SCADENZA_CARTA?: SortOrder
    RUOLO?: SortOrder
    UTENTE_PASSWORD?: SortOrder
  }

  export type tbl_clienteMinOrderByAggregateInput = {
    ID?: SortOrder
    NOME?: SortOrder
    COGNOME?: SortOrder
    EMAIL?: SortOrder
    CELLULARE?: SortOrder
    CODICE_FISCALE?: SortOrder
    DATA_DI_NASCITA?: SortOrder
    CITTA?: SortOrder
    VIA?: SortOrder
    N_CIVICO?: SortOrder
    CAP?: SortOrder
    NUM_CARTA?: SortOrder
    CVV_CARTA?: SortOrder
    INTESTATARIO_CARTA?: SortOrder
    SCADENZA_CARTA?: SortOrder
    RUOLO?: SortOrder
    UTENTE_PASSWORD?: SortOrder
  }

  export type tbl_clienteSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type Tbl_spedizioneListRelationFilter = {
    every?: tbl_spedizioneWhereInput
    some?: tbl_spedizioneWhereInput
    none?: tbl_spedizioneWhereInput
  }

  export type tbl_spedizioneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_corriereCountOrderByAggregateInput = {
    P_IVA?: SortOrder
    NOME?: SortOrder
    TELEFONO?: SortOrder
    EMAIL?: SortOrder
  }

  export type tbl_corriereMaxOrderByAggregateInput = {
    P_IVA?: SortOrder
    NOME?: SortOrder
    TELEFONO?: SortOrder
    EMAIL?: SortOrder
  }

  export type tbl_corriereMinOrderByAggregateInput = {
    P_IVA?: SortOrder
    NOME?: SortOrder
    TELEFONO?: SortOrder
    EMAIL?: SortOrder
  }

  export type Tbl_filialeNullableRelationFilter = {
    is?: tbl_filialeWhereInput | null
    isNot?: tbl_filialeWhereInput | null
  }

  export type tbl_dipendenteCountOrderByAggregateInput = {
    ID?: SortOrder
    NOME?: SortOrder
    COGNOME?: SortOrder
    EMAIL?: SortOrder
    VIA?: SortOrder
    N_CIVICO?: SortOrder
    CAP?: SortOrder
    CITTA?: SortOrder
    CODICE_FISCALE?: SortOrder
    DATA_DI_NASCITA?: SortOrder
    DATA_ASSUNZIONE?: SortOrder
    PAGA_ORARIA?: SortOrder
    CODICE_ZONA?: SortOrder
    RUOLO?: SortOrder
    UTENTE_PASSWORD?: SortOrder
  }

  export type tbl_dipendenteAvgOrderByAggregateInput = {
    ID?: SortOrder
    PAGA_ORARIA?: SortOrder
  }

  export type tbl_dipendenteMaxOrderByAggregateInput = {
    ID?: SortOrder
    NOME?: SortOrder
    COGNOME?: SortOrder
    EMAIL?: SortOrder
    VIA?: SortOrder
    N_CIVICO?: SortOrder
    CAP?: SortOrder
    CITTA?: SortOrder
    CODICE_FISCALE?: SortOrder
    DATA_DI_NASCITA?: SortOrder
    DATA_ASSUNZIONE?: SortOrder
    PAGA_ORARIA?: SortOrder
    CODICE_ZONA?: SortOrder
    RUOLO?: SortOrder
    UTENTE_PASSWORD?: SortOrder
  }

  export type tbl_dipendenteMinOrderByAggregateInput = {
    ID?: SortOrder
    NOME?: SortOrder
    COGNOME?: SortOrder
    EMAIL?: SortOrder
    VIA?: SortOrder
    N_CIVICO?: SortOrder
    CAP?: SortOrder
    CITTA?: SortOrder
    CODICE_FISCALE?: SortOrder
    DATA_DI_NASCITA?: SortOrder
    DATA_ASSUNZIONE?: SortOrder
    PAGA_ORARIA?: SortOrder
    CODICE_ZONA?: SortOrder
    RUOLO?: SortOrder
    UTENTE_PASSWORD?: SortOrder
  }

  export type tbl_dipendenteSumOrderByAggregateInput = {
    ID?: SortOrder
    PAGA_ORARIA?: SortOrder
  }

  export type Tbl_dipendenteListRelationFilter = {
    every?: tbl_dipendenteWhereInput
    some?: tbl_dipendenteWhereInput
    none?: tbl_dipendenteWhereInput
  }

  export type tbl_dipendenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_filialeCountOrderByAggregateInput = {
    NOME_FILIALE?: SortOrder
    SEDE?: SortOrder
    CODICE_ZONA_FILIALE?: SortOrder
  }

  export type tbl_filialeMaxOrderByAggregateInput = {
    NOME_FILIALE?: SortOrder
    SEDE?: SortOrder
    CODICE_ZONA_FILIALE?: SortOrder
  }

  export type tbl_filialeMinOrderByAggregateInput = {
    NOME_FILIALE?: SortOrder
    SEDE?: SortOrder
    CODICE_ZONA_FILIALE?: SortOrder
  }

  export type Tbl_fornituraListRelationFilter = {
    every?: tbl_fornituraWhereInput
    some?: tbl_fornituraWhereInput
    none?: tbl_fornituraWhereInput
  }

  export type tbl_fornituraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_fornitoreCountOrderByAggregateInput = {
    P_IVA?: SortOrder
    NOME?: SortOrder
    CITTA?: SortOrder
    VIA?: SortOrder
    CAP?: SortOrder
  }

  export type tbl_fornitoreMaxOrderByAggregateInput = {
    P_IVA?: SortOrder
    NOME?: SortOrder
    CITTA?: SortOrder
    VIA?: SortOrder
    CAP?: SortOrder
  }

  export type tbl_fornitoreMinOrderByAggregateInput = {
    P_IVA?: SortOrder
    NOME?: SortOrder
    CITTA?: SortOrder
    VIA?: SortOrder
    CAP?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Tbl_fornitoreRelationFilter = {
    is?: tbl_fornitoreWhereInput
    isNot?: tbl_fornitoreWhereInput
  }

  export type Tbl_prodottoListRelationFilter = {
    every?: tbl_prodottoWhereInput
    some?: tbl_prodottoWhereInput
    none?: tbl_prodottoWhereInput
  }

  export type tbl_prodottoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_fornituraCountOrderByAggregateInput = {
    ID_FORNITURA?: SortOrder
    P_IVA?: SortOrder
    CODICE_ZONA?: SortOrder
    PREZZO?: SortOrder
    DATA_ACQUISTO?: SortOrder
    DATA_SPEDIZIONE?: SortOrder
  }

  export type tbl_fornituraAvgOrderByAggregateInput = {
    PREZZO?: SortOrder
  }

  export type tbl_fornituraMaxOrderByAggregateInput = {
    ID_FORNITURA?: SortOrder
    P_IVA?: SortOrder
    CODICE_ZONA?: SortOrder
    PREZZO?: SortOrder
    DATA_ACQUISTO?: SortOrder
    DATA_SPEDIZIONE?: SortOrder
  }

  export type tbl_fornituraMinOrderByAggregateInput = {
    ID_FORNITURA?: SortOrder
    P_IVA?: SortOrder
    CODICE_ZONA?: SortOrder
    PREZZO?: SortOrder
    DATA_ACQUISTO?: SortOrder
    DATA_SPEDIZIONE?: SortOrder
  }

  export type tbl_fornituraSumOrderByAggregateInput = {
    PREZZO?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Tbl_carrelloNullableRelationFilter = {
    is?: tbl_carrelloWhereInput | null
    isNot?: tbl_carrelloWhereInput | null
  }

  export type tbl_ordineCountOrderByAggregateInput = {
    ID_ORDINE?: SortOrder
    FATTURA?: SortOrder
    NUMERO_ORDINE?: SortOrder
    ID_CARRELLO?: SortOrder
    INDIRIZZO_SPEDIZIONE?: SortOrder
    STATO_ORDINE?: SortOrder
  }

  export type tbl_ordineAvgOrderByAggregateInput = {
    NUMERO_ORDINE?: SortOrder
  }

  export type tbl_ordineMaxOrderByAggregateInput = {
    ID_ORDINE?: SortOrder
    FATTURA?: SortOrder
    NUMERO_ORDINE?: SortOrder
    ID_CARRELLO?: SortOrder
    INDIRIZZO_SPEDIZIONE?: SortOrder
    STATO_ORDINE?: SortOrder
  }

  export type tbl_ordineMinOrderByAggregateInput = {
    ID_ORDINE?: SortOrder
    FATTURA?: SortOrder
    NUMERO_ORDINE?: SortOrder
    ID_CARRELLO?: SortOrder
    INDIRIZZO_SPEDIZIONE?: SortOrder
    STATO_ORDINE?: SortOrder
  }

  export type tbl_ordineSumOrderByAggregateInput = {
    NUMERO_ORDINE?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Tbl_fornituraRelationFilter = {
    is?: tbl_fornituraWhereInput
    isNot?: tbl_fornituraWhereInput
  }

  export type tbl_prodottoCountOrderByAggregateInput = {
    NOME_PRODOTTO?: SortOrder
    PREZZO_PRODOTTO?: SortOrder
    QUANTITA?: SortOrder
    PROVENIENZA?: SortOrder
    ID_FORNITURA?: SortOrder
    ID_PRODOTTO?: SortOrder
  }

  export type tbl_prodottoAvgOrderByAggregateInput = {
    PREZZO_PRODOTTO?: SortOrder
    QUANTITA?: SortOrder
  }

  export type tbl_prodottoMaxOrderByAggregateInput = {
    NOME_PRODOTTO?: SortOrder
    PREZZO_PRODOTTO?: SortOrder
    QUANTITA?: SortOrder
    PROVENIENZA?: SortOrder
    ID_FORNITURA?: SortOrder
    ID_PRODOTTO?: SortOrder
  }

  export type tbl_prodottoMinOrderByAggregateInput = {
    NOME_PRODOTTO?: SortOrder
    PREZZO_PRODOTTO?: SortOrder
    QUANTITA?: SortOrder
    PROVENIENZA?: SortOrder
    ID_FORNITURA?: SortOrder
    ID_PRODOTTO?: SortOrder
  }

  export type tbl_prodottoSumOrderByAggregateInput = {
    PREZZO_PRODOTTO?: SortOrder
    QUANTITA?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Tbl_corriereRelationFilter = {
    is?: tbl_corriereWhereInput
    isNot?: tbl_corriereWhereInput
  }

  export type tbl_spedizioneCountOrderByAggregateInput = {
    NUMERO_TRACCIAMENTO?: SortOrder
    P_IVA_CORRIERE?: SortOrder
    NUMERO_ORDINE?: SortOrder
    DATA_PARTENZA?: SortOrder
    DATA_ARRIVO?: SortOrder
  }

  export type tbl_spedizioneMaxOrderByAggregateInput = {
    NUMERO_TRACCIAMENTO?: SortOrder
    P_IVA_CORRIERE?: SortOrder
    NUMERO_ORDINE?: SortOrder
    DATA_PARTENZA?: SortOrder
    DATA_ARRIVO?: SortOrder
  }

  export type tbl_spedizioneMinOrderByAggregateInput = {
    NUMERO_TRACCIAMENTO?: SortOrder
    P_IVA_CORRIERE?: SortOrder
    NUMERO_ORDINE?: SortOrder
    DATA_PARTENZA?: SortOrder
    DATA_ARRIVO?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ProfileNullableRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    viewCount?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    viewCount?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    viewCount?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    viewCount?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    viewCount?: SortOrder
    authorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type tbl_clienteCreateNestedOneWithoutTbl_carrelloInput = {
    create?: XOR<tbl_clienteCreateWithoutTbl_carrelloInput, tbl_clienteUncheckedCreateWithoutTbl_carrelloInput>
    connectOrCreate?: tbl_clienteCreateOrConnectWithoutTbl_carrelloInput
    connect?: tbl_clienteWhereUniqueInput
  }

  export type tbl_ordineCreateNestedManyWithoutTbl_carrelloInput = {
    create?: XOR<tbl_ordineCreateWithoutTbl_carrelloInput, tbl_ordineUncheckedCreateWithoutTbl_carrelloInput> | tbl_ordineCreateWithoutTbl_carrelloInput[] | tbl_ordineUncheckedCreateWithoutTbl_carrelloInput[]
    connectOrCreate?: tbl_ordineCreateOrConnectWithoutTbl_carrelloInput | tbl_ordineCreateOrConnectWithoutTbl_carrelloInput[]
    createMany?: tbl_ordineCreateManyTbl_carrelloInputEnvelope
    connect?: tbl_ordineWhereUniqueInput | tbl_ordineWhereUniqueInput[]
  }

  export type tbl_ordineUncheckedCreateNestedManyWithoutTbl_carrelloInput = {
    create?: XOR<tbl_ordineCreateWithoutTbl_carrelloInput, tbl_ordineUncheckedCreateWithoutTbl_carrelloInput> | tbl_ordineCreateWithoutTbl_carrelloInput[] | tbl_ordineUncheckedCreateWithoutTbl_carrelloInput[]
    connectOrCreate?: tbl_ordineCreateOrConnectWithoutTbl_carrelloInput | tbl_ordineCreateOrConnectWithoutTbl_carrelloInput[]
    createMany?: tbl_ordineCreateManyTbl_carrelloInputEnvelope
    connect?: tbl_ordineWhereUniqueInput | tbl_ordineWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tbl_clienteUpdateOneWithoutTbl_carrelloNestedInput = {
    create?: XOR<tbl_clienteCreateWithoutTbl_carrelloInput, tbl_clienteUncheckedCreateWithoutTbl_carrelloInput>
    connectOrCreate?: tbl_clienteCreateOrConnectWithoutTbl_carrelloInput
    upsert?: tbl_clienteUpsertWithoutTbl_carrelloInput
    disconnect?: tbl_clienteWhereInput | boolean
    delete?: tbl_clienteWhereInput | boolean
    connect?: tbl_clienteWhereUniqueInput
    update?: XOR<XOR<tbl_clienteUpdateToOneWithWhereWithoutTbl_carrelloInput, tbl_clienteUpdateWithoutTbl_carrelloInput>, tbl_clienteUncheckedUpdateWithoutTbl_carrelloInput>
  }

  export type tbl_ordineUpdateManyWithoutTbl_carrelloNestedInput = {
    create?: XOR<tbl_ordineCreateWithoutTbl_carrelloInput, tbl_ordineUncheckedCreateWithoutTbl_carrelloInput> | tbl_ordineCreateWithoutTbl_carrelloInput[] | tbl_ordineUncheckedCreateWithoutTbl_carrelloInput[]
    connectOrCreate?: tbl_ordineCreateOrConnectWithoutTbl_carrelloInput | tbl_ordineCreateOrConnectWithoutTbl_carrelloInput[]
    upsert?: tbl_ordineUpsertWithWhereUniqueWithoutTbl_carrelloInput | tbl_ordineUpsertWithWhereUniqueWithoutTbl_carrelloInput[]
    createMany?: tbl_ordineCreateManyTbl_carrelloInputEnvelope
    set?: tbl_ordineWhereUniqueInput | tbl_ordineWhereUniqueInput[]
    disconnect?: tbl_ordineWhereUniqueInput | tbl_ordineWhereUniqueInput[]
    delete?: tbl_ordineWhereUniqueInput | tbl_ordineWhereUniqueInput[]
    connect?: tbl_ordineWhereUniqueInput | tbl_ordineWhereUniqueInput[]
    update?: tbl_ordineUpdateWithWhereUniqueWithoutTbl_carrelloInput | tbl_ordineUpdateWithWhereUniqueWithoutTbl_carrelloInput[]
    updateMany?: tbl_ordineUpdateManyWithWhereWithoutTbl_carrelloInput | tbl_ordineUpdateManyWithWhereWithoutTbl_carrelloInput[]
    deleteMany?: tbl_ordineScalarWhereInput | tbl_ordineScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type tbl_ordineUncheckedUpdateManyWithoutTbl_carrelloNestedInput = {
    create?: XOR<tbl_ordineCreateWithoutTbl_carrelloInput, tbl_ordineUncheckedCreateWithoutTbl_carrelloInput> | tbl_ordineCreateWithoutTbl_carrelloInput[] | tbl_ordineUncheckedCreateWithoutTbl_carrelloInput[]
    connectOrCreate?: tbl_ordineCreateOrConnectWithoutTbl_carrelloInput | tbl_ordineCreateOrConnectWithoutTbl_carrelloInput[]
    upsert?: tbl_ordineUpsertWithWhereUniqueWithoutTbl_carrelloInput | tbl_ordineUpsertWithWhereUniqueWithoutTbl_carrelloInput[]
    createMany?: tbl_ordineCreateManyTbl_carrelloInputEnvelope
    set?: tbl_ordineWhereUniqueInput | tbl_ordineWhereUniqueInput[]
    disconnect?: tbl_ordineWhereUniqueInput | tbl_ordineWhereUniqueInput[]
    delete?: tbl_ordineWhereUniqueInput | tbl_ordineWhereUniqueInput[]
    connect?: tbl_ordineWhereUniqueInput | tbl_ordineWhereUniqueInput[]
    update?: tbl_ordineUpdateWithWhereUniqueWithoutTbl_carrelloInput | tbl_ordineUpdateWithWhereUniqueWithoutTbl_carrelloInput[]
    updateMany?: tbl_ordineUpdateManyWithWhereWithoutTbl_carrelloInput | tbl_ordineUpdateManyWithWhereWithoutTbl_carrelloInput[]
    deleteMany?: tbl_ordineScalarWhereInput | tbl_ordineScalarWhereInput[]
  }

  export type tbl_carrelloCreateNestedManyWithoutTbl_clienteInput = {
    create?: XOR<tbl_carrelloCreateWithoutTbl_clienteInput, tbl_carrelloUncheckedCreateWithoutTbl_clienteInput> | tbl_carrelloCreateWithoutTbl_clienteInput[] | tbl_carrelloUncheckedCreateWithoutTbl_clienteInput[]
    connectOrCreate?: tbl_carrelloCreateOrConnectWithoutTbl_clienteInput | tbl_carrelloCreateOrConnectWithoutTbl_clienteInput[]
    createMany?: tbl_carrelloCreateManyTbl_clienteInputEnvelope
    connect?: tbl_carrelloWhereUniqueInput | tbl_carrelloWhereUniqueInput[]
  }

  export type tbl_carrelloUncheckedCreateNestedManyWithoutTbl_clienteInput = {
    create?: XOR<tbl_carrelloCreateWithoutTbl_clienteInput, tbl_carrelloUncheckedCreateWithoutTbl_clienteInput> | tbl_carrelloCreateWithoutTbl_clienteInput[] | tbl_carrelloUncheckedCreateWithoutTbl_clienteInput[]
    connectOrCreate?: tbl_carrelloCreateOrConnectWithoutTbl_clienteInput | tbl_carrelloCreateOrConnectWithoutTbl_clienteInput[]
    createMany?: tbl_carrelloCreateManyTbl_clienteInputEnvelope
    connect?: tbl_carrelloWhereUniqueInput | tbl_carrelloWhereUniqueInput[]
  }

  export type tbl_carrelloUpdateManyWithoutTbl_clienteNestedInput = {
    create?: XOR<tbl_carrelloCreateWithoutTbl_clienteInput, tbl_carrelloUncheckedCreateWithoutTbl_clienteInput> | tbl_carrelloCreateWithoutTbl_clienteInput[] | tbl_carrelloUncheckedCreateWithoutTbl_clienteInput[]
    connectOrCreate?: tbl_carrelloCreateOrConnectWithoutTbl_clienteInput | tbl_carrelloCreateOrConnectWithoutTbl_clienteInput[]
    upsert?: tbl_carrelloUpsertWithWhereUniqueWithoutTbl_clienteInput | tbl_carrelloUpsertWithWhereUniqueWithoutTbl_clienteInput[]
    createMany?: tbl_carrelloCreateManyTbl_clienteInputEnvelope
    set?: tbl_carrelloWhereUniqueInput | tbl_carrelloWhereUniqueInput[]
    disconnect?: tbl_carrelloWhereUniqueInput | tbl_carrelloWhereUniqueInput[]
    delete?: tbl_carrelloWhereUniqueInput | tbl_carrelloWhereUniqueInput[]
    connect?: tbl_carrelloWhereUniqueInput | tbl_carrelloWhereUniqueInput[]
    update?: tbl_carrelloUpdateWithWhereUniqueWithoutTbl_clienteInput | tbl_carrelloUpdateWithWhereUniqueWithoutTbl_clienteInput[]
    updateMany?: tbl_carrelloUpdateManyWithWhereWithoutTbl_clienteInput | tbl_carrelloUpdateManyWithWhereWithoutTbl_clienteInput[]
    deleteMany?: tbl_carrelloScalarWhereInput | tbl_carrelloScalarWhereInput[]
  }

  export type tbl_carrelloUncheckedUpdateManyWithoutTbl_clienteNestedInput = {
    create?: XOR<tbl_carrelloCreateWithoutTbl_clienteInput, tbl_carrelloUncheckedCreateWithoutTbl_clienteInput> | tbl_carrelloCreateWithoutTbl_clienteInput[] | tbl_carrelloUncheckedCreateWithoutTbl_clienteInput[]
    connectOrCreate?: tbl_carrelloCreateOrConnectWithoutTbl_clienteInput | tbl_carrelloCreateOrConnectWithoutTbl_clienteInput[]
    upsert?: tbl_carrelloUpsertWithWhereUniqueWithoutTbl_clienteInput | tbl_carrelloUpsertWithWhereUniqueWithoutTbl_clienteInput[]
    createMany?: tbl_carrelloCreateManyTbl_clienteInputEnvelope
    set?: tbl_carrelloWhereUniqueInput | tbl_carrelloWhereUniqueInput[]
    disconnect?: tbl_carrelloWhereUniqueInput | tbl_carrelloWhereUniqueInput[]
    delete?: tbl_carrelloWhereUniqueInput | tbl_carrelloWhereUniqueInput[]
    connect?: tbl_carrelloWhereUniqueInput | tbl_carrelloWhereUniqueInput[]
    update?: tbl_carrelloUpdateWithWhereUniqueWithoutTbl_clienteInput | tbl_carrelloUpdateWithWhereUniqueWithoutTbl_clienteInput[]
    updateMany?: tbl_carrelloUpdateManyWithWhereWithoutTbl_clienteInput | tbl_carrelloUpdateManyWithWhereWithoutTbl_clienteInput[]
    deleteMany?: tbl_carrelloScalarWhereInput | tbl_carrelloScalarWhereInput[]
  }

  export type tbl_spedizioneCreateNestedManyWithoutTbl_corriereInput = {
    create?: XOR<tbl_spedizioneCreateWithoutTbl_corriereInput, tbl_spedizioneUncheckedCreateWithoutTbl_corriereInput> | tbl_spedizioneCreateWithoutTbl_corriereInput[] | tbl_spedizioneUncheckedCreateWithoutTbl_corriereInput[]
    connectOrCreate?: tbl_spedizioneCreateOrConnectWithoutTbl_corriereInput | tbl_spedizioneCreateOrConnectWithoutTbl_corriereInput[]
    createMany?: tbl_spedizioneCreateManyTbl_corriereInputEnvelope
    connect?: tbl_spedizioneWhereUniqueInput | tbl_spedizioneWhereUniqueInput[]
  }

  export type tbl_spedizioneUncheckedCreateNestedManyWithoutTbl_corriereInput = {
    create?: XOR<tbl_spedizioneCreateWithoutTbl_corriereInput, tbl_spedizioneUncheckedCreateWithoutTbl_corriereInput> | tbl_spedizioneCreateWithoutTbl_corriereInput[] | tbl_spedizioneUncheckedCreateWithoutTbl_corriereInput[]
    connectOrCreate?: tbl_spedizioneCreateOrConnectWithoutTbl_corriereInput | tbl_spedizioneCreateOrConnectWithoutTbl_corriereInput[]
    createMany?: tbl_spedizioneCreateManyTbl_corriereInputEnvelope
    connect?: tbl_spedizioneWhereUniqueInput | tbl_spedizioneWhereUniqueInput[]
  }

  export type tbl_spedizioneUpdateManyWithoutTbl_corriereNestedInput = {
    create?: XOR<tbl_spedizioneCreateWithoutTbl_corriereInput, tbl_spedizioneUncheckedCreateWithoutTbl_corriereInput> | tbl_spedizioneCreateWithoutTbl_corriereInput[] | tbl_spedizioneUncheckedCreateWithoutTbl_corriereInput[]
    connectOrCreate?: tbl_spedizioneCreateOrConnectWithoutTbl_corriereInput | tbl_spedizioneCreateOrConnectWithoutTbl_corriereInput[]
    upsert?: tbl_spedizioneUpsertWithWhereUniqueWithoutTbl_corriereInput | tbl_spedizioneUpsertWithWhereUniqueWithoutTbl_corriereInput[]
    createMany?: tbl_spedizioneCreateManyTbl_corriereInputEnvelope
    set?: tbl_spedizioneWhereUniqueInput | tbl_spedizioneWhereUniqueInput[]
    disconnect?: tbl_spedizioneWhereUniqueInput | tbl_spedizioneWhereUniqueInput[]
    delete?: tbl_spedizioneWhereUniqueInput | tbl_spedizioneWhereUniqueInput[]
    connect?: tbl_spedizioneWhereUniqueInput | tbl_spedizioneWhereUniqueInput[]
    update?: tbl_spedizioneUpdateWithWhereUniqueWithoutTbl_corriereInput | tbl_spedizioneUpdateWithWhereUniqueWithoutTbl_corriereInput[]
    updateMany?: tbl_spedizioneUpdateManyWithWhereWithoutTbl_corriereInput | tbl_spedizioneUpdateManyWithWhereWithoutTbl_corriereInput[]
    deleteMany?: tbl_spedizioneScalarWhereInput | tbl_spedizioneScalarWhereInput[]
  }

  export type tbl_spedizioneUncheckedUpdateManyWithoutTbl_corriereNestedInput = {
    create?: XOR<tbl_spedizioneCreateWithoutTbl_corriereInput, tbl_spedizioneUncheckedCreateWithoutTbl_corriereInput> | tbl_spedizioneCreateWithoutTbl_corriereInput[] | tbl_spedizioneUncheckedCreateWithoutTbl_corriereInput[]
    connectOrCreate?: tbl_spedizioneCreateOrConnectWithoutTbl_corriereInput | tbl_spedizioneCreateOrConnectWithoutTbl_corriereInput[]
    upsert?: tbl_spedizioneUpsertWithWhereUniqueWithoutTbl_corriereInput | tbl_spedizioneUpsertWithWhereUniqueWithoutTbl_corriereInput[]
    createMany?: tbl_spedizioneCreateManyTbl_corriereInputEnvelope
    set?: tbl_spedizioneWhereUniqueInput | tbl_spedizioneWhereUniqueInput[]
    disconnect?: tbl_spedizioneWhereUniqueInput | tbl_spedizioneWhereUniqueInput[]
    delete?: tbl_spedizioneWhereUniqueInput | tbl_spedizioneWhereUniqueInput[]
    connect?: tbl_spedizioneWhereUniqueInput | tbl_spedizioneWhereUniqueInput[]
    update?: tbl_spedizioneUpdateWithWhereUniqueWithoutTbl_corriereInput | tbl_spedizioneUpdateWithWhereUniqueWithoutTbl_corriereInput[]
    updateMany?: tbl_spedizioneUpdateManyWithWhereWithoutTbl_corriereInput | tbl_spedizioneUpdateManyWithWhereWithoutTbl_corriereInput[]
    deleteMany?: tbl_spedizioneScalarWhereInput | tbl_spedizioneScalarWhereInput[]
  }

  export type tbl_filialeCreateNestedOneWithoutTbl_dipendenteInput = {
    create?: XOR<tbl_filialeCreateWithoutTbl_dipendenteInput, tbl_filialeUncheckedCreateWithoutTbl_dipendenteInput>
    connectOrCreate?: tbl_filialeCreateOrConnectWithoutTbl_dipendenteInput
    connect?: tbl_filialeWhereUniqueInput
  }

  export type tbl_filialeUpdateOneWithoutTbl_dipendenteNestedInput = {
    create?: XOR<tbl_filialeCreateWithoutTbl_dipendenteInput, tbl_filialeUncheckedCreateWithoutTbl_dipendenteInput>
    connectOrCreate?: tbl_filialeCreateOrConnectWithoutTbl_dipendenteInput
    upsert?: tbl_filialeUpsertWithoutTbl_dipendenteInput
    disconnect?: tbl_filialeWhereInput | boolean
    delete?: tbl_filialeWhereInput | boolean
    connect?: tbl_filialeWhereUniqueInput
    update?: XOR<XOR<tbl_filialeUpdateToOneWithWhereWithoutTbl_dipendenteInput, tbl_filialeUpdateWithoutTbl_dipendenteInput>, tbl_filialeUncheckedUpdateWithoutTbl_dipendenteInput>
  }

  export type tbl_dipendenteCreateNestedManyWithoutTbl_filialeInput = {
    create?: XOR<tbl_dipendenteCreateWithoutTbl_filialeInput, tbl_dipendenteUncheckedCreateWithoutTbl_filialeInput> | tbl_dipendenteCreateWithoutTbl_filialeInput[] | tbl_dipendenteUncheckedCreateWithoutTbl_filialeInput[]
    connectOrCreate?: tbl_dipendenteCreateOrConnectWithoutTbl_filialeInput | tbl_dipendenteCreateOrConnectWithoutTbl_filialeInput[]
    createMany?: tbl_dipendenteCreateManyTbl_filialeInputEnvelope
    connect?: tbl_dipendenteWhereUniqueInput | tbl_dipendenteWhereUniqueInput[]
  }

  export type tbl_dipendenteUncheckedCreateNestedManyWithoutTbl_filialeInput = {
    create?: XOR<tbl_dipendenteCreateWithoutTbl_filialeInput, tbl_dipendenteUncheckedCreateWithoutTbl_filialeInput> | tbl_dipendenteCreateWithoutTbl_filialeInput[] | tbl_dipendenteUncheckedCreateWithoutTbl_filialeInput[]
    connectOrCreate?: tbl_dipendenteCreateOrConnectWithoutTbl_filialeInput | tbl_dipendenteCreateOrConnectWithoutTbl_filialeInput[]
    createMany?: tbl_dipendenteCreateManyTbl_filialeInputEnvelope
    connect?: tbl_dipendenteWhereUniqueInput | tbl_dipendenteWhereUniqueInput[]
  }

  export type tbl_dipendenteUpdateManyWithoutTbl_filialeNestedInput = {
    create?: XOR<tbl_dipendenteCreateWithoutTbl_filialeInput, tbl_dipendenteUncheckedCreateWithoutTbl_filialeInput> | tbl_dipendenteCreateWithoutTbl_filialeInput[] | tbl_dipendenteUncheckedCreateWithoutTbl_filialeInput[]
    connectOrCreate?: tbl_dipendenteCreateOrConnectWithoutTbl_filialeInput | tbl_dipendenteCreateOrConnectWithoutTbl_filialeInput[]
    upsert?: tbl_dipendenteUpsertWithWhereUniqueWithoutTbl_filialeInput | tbl_dipendenteUpsertWithWhereUniqueWithoutTbl_filialeInput[]
    createMany?: tbl_dipendenteCreateManyTbl_filialeInputEnvelope
    set?: tbl_dipendenteWhereUniqueInput | tbl_dipendenteWhereUniqueInput[]
    disconnect?: tbl_dipendenteWhereUniqueInput | tbl_dipendenteWhereUniqueInput[]
    delete?: tbl_dipendenteWhereUniqueInput | tbl_dipendenteWhereUniqueInput[]
    connect?: tbl_dipendenteWhereUniqueInput | tbl_dipendenteWhereUniqueInput[]
    update?: tbl_dipendenteUpdateWithWhereUniqueWithoutTbl_filialeInput | tbl_dipendenteUpdateWithWhereUniqueWithoutTbl_filialeInput[]
    updateMany?: tbl_dipendenteUpdateManyWithWhereWithoutTbl_filialeInput | tbl_dipendenteUpdateManyWithWhereWithoutTbl_filialeInput[]
    deleteMany?: tbl_dipendenteScalarWhereInput | tbl_dipendenteScalarWhereInput[]
  }

  export type tbl_dipendenteUncheckedUpdateManyWithoutTbl_filialeNestedInput = {
    create?: XOR<tbl_dipendenteCreateWithoutTbl_filialeInput, tbl_dipendenteUncheckedCreateWithoutTbl_filialeInput> | tbl_dipendenteCreateWithoutTbl_filialeInput[] | tbl_dipendenteUncheckedCreateWithoutTbl_filialeInput[]
    connectOrCreate?: tbl_dipendenteCreateOrConnectWithoutTbl_filialeInput | tbl_dipendenteCreateOrConnectWithoutTbl_filialeInput[]
    upsert?: tbl_dipendenteUpsertWithWhereUniqueWithoutTbl_filialeInput | tbl_dipendenteUpsertWithWhereUniqueWithoutTbl_filialeInput[]
    createMany?: tbl_dipendenteCreateManyTbl_filialeInputEnvelope
    set?: tbl_dipendenteWhereUniqueInput | tbl_dipendenteWhereUniqueInput[]
    disconnect?: tbl_dipendenteWhereUniqueInput | tbl_dipendenteWhereUniqueInput[]
    delete?: tbl_dipendenteWhereUniqueInput | tbl_dipendenteWhereUniqueInput[]
    connect?: tbl_dipendenteWhereUniqueInput | tbl_dipendenteWhereUniqueInput[]
    update?: tbl_dipendenteUpdateWithWhereUniqueWithoutTbl_filialeInput | tbl_dipendenteUpdateWithWhereUniqueWithoutTbl_filialeInput[]
    updateMany?: tbl_dipendenteUpdateManyWithWhereWithoutTbl_filialeInput | tbl_dipendenteUpdateManyWithWhereWithoutTbl_filialeInput[]
    deleteMany?: tbl_dipendenteScalarWhereInput | tbl_dipendenteScalarWhereInput[]
  }

  export type tbl_fornituraCreateNestedManyWithoutTbl_fornitoreInput = {
    create?: XOR<tbl_fornituraCreateWithoutTbl_fornitoreInput, tbl_fornituraUncheckedCreateWithoutTbl_fornitoreInput> | tbl_fornituraCreateWithoutTbl_fornitoreInput[] | tbl_fornituraUncheckedCreateWithoutTbl_fornitoreInput[]
    connectOrCreate?: tbl_fornituraCreateOrConnectWithoutTbl_fornitoreInput | tbl_fornituraCreateOrConnectWithoutTbl_fornitoreInput[]
    createMany?: tbl_fornituraCreateManyTbl_fornitoreInputEnvelope
    connect?: tbl_fornituraWhereUniqueInput | tbl_fornituraWhereUniqueInput[]
  }

  export type tbl_fornituraUncheckedCreateNestedManyWithoutTbl_fornitoreInput = {
    create?: XOR<tbl_fornituraCreateWithoutTbl_fornitoreInput, tbl_fornituraUncheckedCreateWithoutTbl_fornitoreInput> | tbl_fornituraCreateWithoutTbl_fornitoreInput[] | tbl_fornituraUncheckedCreateWithoutTbl_fornitoreInput[]
    connectOrCreate?: tbl_fornituraCreateOrConnectWithoutTbl_fornitoreInput | tbl_fornituraCreateOrConnectWithoutTbl_fornitoreInput[]
    createMany?: tbl_fornituraCreateManyTbl_fornitoreInputEnvelope
    connect?: tbl_fornituraWhereUniqueInput | tbl_fornituraWhereUniqueInput[]
  }

  export type tbl_fornituraUpdateManyWithoutTbl_fornitoreNestedInput = {
    create?: XOR<tbl_fornituraCreateWithoutTbl_fornitoreInput, tbl_fornituraUncheckedCreateWithoutTbl_fornitoreInput> | tbl_fornituraCreateWithoutTbl_fornitoreInput[] | tbl_fornituraUncheckedCreateWithoutTbl_fornitoreInput[]
    connectOrCreate?: tbl_fornituraCreateOrConnectWithoutTbl_fornitoreInput | tbl_fornituraCreateOrConnectWithoutTbl_fornitoreInput[]
    upsert?: tbl_fornituraUpsertWithWhereUniqueWithoutTbl_fornitoreInput | tbl_fornituraUpsertWithWhereUniqueWithoutTbl_fornitoreInput[]
    createMany?: tbl_fornituraCreateManyTbl_fornitoreInputEnvelope
    set?: tbl_fornituraWhereUniqueInput | tbl_fornituraWhereUniqueInput[]
    disconnect?: tbl_fornituraWhereUniqueInput | tbl_fornituraWhereUniqueInput[]
    delete?: tbl_fornituraWhereUniqueInput | tbl_fornituraWhereUniqueInput[]
    connect?: tbl_fornituraWhereUniqueInput | tbl_fornituraWhereUniqueInput[]
    update?: tbl_fornituraUpdateWithWhereUniqueWithoutTbl_fornitoreInput | tbl_fornituraUpdateWithWhereUniqueWithoutTbl_fornitoreInput[]
    updateMany?: tbl_fornituraUpdateManyWithWhereWithoutTbl_fornitoreInput | tbl_fornituraUpdateManyWithWhereWithoutTbl_fornitoreInput[]
    deleteMany?: tbl_fornituraScalarWhereInput | tbl_fornituraScalarWhereInput[]
  }

  export type tbl_fornituraUncheckedUpdateManyWithoutTbl_fornitoreNestedInput = {
    create?: XOR<tbl_fornituraCreateWithoutTbl_fornitoreInput, tbl_fornituraUncheckedCreateWithoutTbl_fornitoreInput> | tbl_fornituraCreateWithoutTbl_fornitoreInput[] | tbl_fornituraUncheckedCreateWithoutTbl_fornitoreInput[]
    connectOrCreate?: tbl_fornituraCreateOrConnectWithoutTbl_fornitoreInput | tbl_fornituraCreateOrConnectWithoutTbl_fornitoreInput[]
    upsert?: tbl_fornituraUpsertWithWhereUniqueWithoutTbl_fornitoreInput | tbl_fornituraUpsertWithWhereUniqueWithoutTbl_fornitoreInput[]
    createMany?: tbl_fornituraCreateManyTbl_fornitoreInputEnvelope
    set?: tbl_fornituraWhereUniqueInput | tbl_fornituraWhereUniqueInput[]
    disconnect?: tbl_fornituraWhereUniqueInput | tbl_fornituraWhereUniqueInput[]
    delete?: tbl_fornituraWhereUniqueInput | tbl_fornituraWhereUniqueInput[]
    connect?: tbl_fornituraWhereUniqueInput | tbl_fornituraWhereUniqueInput[]
    update?: tbl_fornituraUpdateWithWhereUniqueWithoutTbl_fornitoreInput | tbl_fornituraUpdateWithWhereUniqueWithoutTbl_fornitoreInput[]
    updateMany?: tbl_fornituraUpdateManyWithWhereWithoutTbl_fornitoreInput | tbl_fornituraUpdateManyWithWhereWithoutTbl_fornitoreInput[]
    deleteMany?: tbl_fornituraScalarWhereInput | tbl_fornituraScalarWhereInput[]
  }

  export type tbl_fornitoreCreateNestedOneWithoutTbl_fornituraInput = {
    create?: XOR<tbl_fornitoreCreateWithoutTbl_fornituraInput, tbl_fornitoreUncheckedCreateWithoutTbl_fornituraInput>
    connectOrCreate?: tbl_fornitoreCreateOrConnectWithoutTbl_fornituraInput
    connect?: tbl_fornitoreWhereUniqueInput
  }

  export type tbl_prodottoCreateNestedManyWithoutTbl_fornituraInput = {
    create?: XOR<tbl_prodottoCreateWithoutTbl_fornituraInput, tbl_prodottoUncheckedCreateWithoutTbl_fornituraInput> | tbl_prodottoCreateWithoutTbl_fornituraInput[] | tbl_prodottoUncheckedCreateWithoutTbl_fornituraInput[]
    connectOrCreate?: tbl_prodottoCreateOrConnectWithoutTbl_fornituraInput | tbl_prodottoCreateOrConnectWithoutTbl_fornituraInput[]
    createMany?: tbl_prodottoCreateManyTbl_fornituraInputEnvelope
    connect?: tbl_prodottoWhereUniqueInput | tbl_prodottoWhereUniqueInput[]
  }

  export type tbl_prodottoUncheckedCreateNestedManyWithoutTbl_fornituraInput = {
    create?: XOR<tbl_prodottoCreateWithoutTbl_fornituraInput, tbl_prodottoUncheckedCreateWithoutTbl_fornituraInput> | tbl_prodottoCreateWithoutTbl_fornituraInput[] | tbl_prodottoUncheckedCreateWithoutTbl_fornituraInput[]
    connectOrCreate?: tbl_prodottoCreateOrConnectWithoutTbl_fornituraInput | tbl_prodottoCreateOrConnectWithoutTbl_fornituraInput[]
    createMany?: tbl_prodottoCreateManyTbl_fornituraInputEnvelope
    connect?: tbl_prodottoWhereUniqueInput | tbl_prodottoWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tbl_fornitoreUpdateOneRequiredWithoutTbl_fornituraNestedInput = {
    create?: XOR<tbl_fornitoreCreateWithoutTbl_fornituraInput, tbl_fornitoreUncheckedCreateWithoutTbl_fornituraInput>
    connectOrCreate?: tbl_fornitoreCreateOrConnectWithoutTbl_fornituraInput
    upsert?: tbl_fornitoreUpsertWithoutTbl_fornituraInput
    connect?: tbl_fornitoreWhereUniqueInput
    update?: XOR<XOR<tbl_fornitoreUpdateToOneWithWhereWithoutTbl_fornituraInput, tbl_fornitoreUpdateWithoutTbl_fornituraInput>, tbl_fornitoreUncheckedUpdateWithoutTbl_fornituraInput>
  }

  export type tbl_prodottoUpdateManyWithoutTbl_fornituraNestedInput = {
    create?: XOR<tbl_prodottoCreateWithoutTbl_fornituraInput, tbl_prodottoUncheckedCreateWithoutTbl_fornituraInput> | tbl_prodottoCreateWithoutTbl_fornituraInput[] | tbl_prodottoUncheckedCreateWithoutTbl_fornituraInput[]
    connectOrCreate?: tbl_prodottoCreateOrConnectWithoutTbl_fornituraInput | tbl_prodottoCreateOrConnectWithoutTbl_fornituraInput[]
    upsert?: tbl_prodottoUpsertWithWhereUniqueWithoutTbl_fornituraInput | tbl_prodottoUpsertWithWhereUniqueWithoutTbl_fornituraInput[]
    createMany?: tbl_prodottoCreateManyTbl_fornituraInputEnvelope
    set?: tbl_prodottoWhereUniqueInput | tbl_prodottoWhereUniqueInput[]
    disconnect?: tbl_prodottoWhereUniqueInput | tbl_prodottoWhereUniqueInput[]
    delete?: tbl_prodottoWhereUniqueInput | tbl_prodottoWhereUniqueInput[]
    connect?: tbl_prodottoWhereUniqueInput | tbl_prodottoWhereUniqueInput[]
    update?: tbl_prodottoUpdateWithWhereUniqueWithoutTbl_fornituraInput | tbl_prodottoUpdateWithWhereUniqueWithoutTbl_fornituraInput[]
    updateMany?: tbl_prodottoUpdateManyWithWhereWithoutTbl_fornituraInput | tbl_prodottoUpdateManyWithWhereWithoutTbl_fornituraInput[]
    deleteMany?: tbl_prodottoScalarWhereInput | tbl_prodottoScalarWhereInput[]
  }

  export type tbl_prodottoUncheckedUpdateManyWithoutTbl_fornituraNestedInput = {
    create?: XOR<tbl_prodottoCreateWithoutTbl_fornituraInput, tbl_prodottoUncheckedCreateWithoutTbl_fornituraInput> | tbl_prodottoCreateWithoutTbl_fornituraInput[] | tbl_prodottoUncheckedCreateWithoutTbl_fornituraInput[]
    connectOrCreate?: tbl_prodottoCreateOrConnectWithoutTbl_fornituraInput | tbl_prodottoCreateOrConnectWithoutTbl_fornituraInput[]
    upsert?: tbl_prodottoUpsertWithWhereUniqueWithoutTbl_fornituraInput | tbl_prodottoUpsertWithWhereUniqueWithoutTbl_fornituraInput[]
    createMany?: tbl_prodottoCreateManyTbl_fornituraInputEnvelope
    set?: tbl_prodottoWhereUniqueInput | tbl_prodottoWhereUniqueInput[]
    disconnect?: tbl_prodottoWhereUniqueInput | tbl_prodottoWhereUniqueInput[]
    delete?: tbl_prodottoWhereUniqueInput | tbl_prodottoWhereUniqueInput[]
    connect?: tbl_prodottoWhereUniqueInput | tbl_prodottoWhereUniqueInput[]
    update?: tbl_prodottoUpdateWithWhereUniqueWithoutTbl_fornituraInput | tbl_prodottoUpdateWithWhereUniqueWithoutTbl_fornituraInput[]
    updateMany?: tbl_prodottoUpdateManyWithWhereWithoutTbl_fornituraInput | tbl_prodottoUpdateManyWithWhereWithoutTbl_fornituraInput[]
    deleteMany?: tbl_prodottoScalarWhereInput | tbl_prodottoScalarWhereInput[]
  }

  export type tbl_carrelloCreateNestedOneWithoutTbl_ordineInput = {
    create?: XOR<tbl_carrelloCreateWithoutTbl_ordineInput, tbl_carrelloUncheckedCreateWithoutTbl_ordineInput>
    connectOrCreate?: tbl_carrelloCreateOrConnectWithoutTbl_ordineInput
    connect?: tbl_carrelloWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tbl_carrelloUpdateOneWithoutTbl_ordineNestedInput = {
    create?: XOR<tbl_carrelloCreateWithoutTbl_ordineInput, tbl_carrelloUncheckedCreateWithoutTbl_ordineInput>
    connectOrCreate?: tbl_carrelloCreateOrConnectWithoutTbl_ordineInput
    upsert?: tbl_carrelloUpsertWithoutTbl_ordineInput
    disconnect?: tbl_carrelloWhereInput | boolean
    delete?: tbl_carrelloWhereInput | boolean
    connect?: tbl_carrelloWhereUniqueInput
    update?: XOR<XOR<tbl_carrelloUpdateToOneWithWhereWithoutTbl_ordineInput, tbl_carrelloUpdateWithoutTbl_ordineInput>, tbl_carrelloUncheckedUpdateWithoutTbl_ordineInput>
  }

  export type tbl_fornituraCreateNestedOneWithoutTbl_prodottoInput = {
    create?: XOR<tbl_fornituraCreateWithoutTbl_prodottoInput, tbl_fornituraUncheckedCreateWithoutTbl_prodottoInput>
    connectOrCreate?: tbl_fornituraCreateOrConnectWithoutTbl_prodottoInput
    connect?: tbl_fornituraWhereUniqueInput
  }

  export type tbl_fornituraUpdateOneRequiredWithoutTbl_prodottoNestedInput = {
    create?: XOR<tbl_fornituraCreateWithoutTbl_prodottoInput, tbl_fornituraUncheckedCreateWithoutTbl_prodottoInput>
    connectOrCreate?: tbl_fornituraCreateOrConnectWithoutTbl_prodottoInput
    upsert?: tbl_fornituraUpsertWithoutTbl_prodottoInput
    connect?: tbl_fornituraWhereUniqueInput
    update?: XOR<XOR<tbl_fornituraUpdateToOneWithWhereWithoutTbl_prodottoInput, tbl_fornituraUpdateWithoutTbl_prodottoInput>, tbl_fornituraUncheckedUpdateWithoutTbl_prodottoInput>
  }

  export type tbl_corriereCreateNestedOneWithoutTbl_spedizioneInput = {
    create?: XOR<tbl_corriereCreateWithoutTbl_spedizioneInput, tbl_corriereUncheckedCreateWithoutTbl_spedizioneInput>
    connectOrCreate?: tbl_corriereCreateOrConnectWithoutTbl_spedizioneInput
    connect?: tbl_corriereWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tbl_corriereUpdateOneRequiredWithoutTbl_spedizioneNestedInput = {
    create?: XOR<tbl_corriereCreateWithoutTbl_spedizioneInput, tbl_corriereUncheckedCreateWithoutTbl_spedizioneInput>
    connectOrCreate?: tbl_corriereCreateOrConnectWithoutTbl_spedizioneInput
    upsert?: tbl_corriereUpsertWithoutTbl_spedizioneInput
    connect?: tbl_corriereWhereUniqueInput
    update?: XOR<XOR<tbl_corriereUpdateToOneWithWhereWithoutTbl_spedizioneInput, tbl_corriereUpdateWithoutTbl_spedizioneInput>, tbl_corriereUncheckedUpdateWithoutTbl_spedizioneInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type tbl_clienteCreateWithoutTbl_carrelloInput = {
    NOME: string
    COGNOME: string
    EMAIL: string
    CELLULARE: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    CITTA: string
    VIA: string
    N_CIVICO: string
    CAP: string
    NUM_CARTA: string
    CVV_CARTA: string
    INTESTATARIO_CARTA?: string | null
    SCADENZA_CARTA?: Date | string | null
    RUOLO?: string | null
    UTENTE_PASSWORD?: string | null
  }

  export type tbl_clienteUncheckedCreateWithoutTbl_carrelloInput = {
    ID?: number
    NOME: string
    COGNOME: string
    EMAIL: string
    CELLULARE: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    CITTA: string
    VIA: string
    N_CIVICO: string
    CAP: string
    NUM_CARTA: string
    CVV_CARTA: string
    INTESTATARIO_CARTA?: string | null
    SCADENZA_CARTA?: Date | string | null
    RUOLO?: string | null
    UTENTE_PASSWORD?: string | null
  }

  export type tbl_clienteCreateOrConnectWithoutTbl_carrelloInput = {
    where: tbl_clienteWhereUniqueInput
    create: XOR<tbl_clienteCreateWithoutTbl_carrelloInput, tbl_clienteUncheckedCreateWithoutTbl_carrelloInput>
  }

  export type tbl_ordineCreateWithoutTbl_carrelloInput = {
    ID_ORDINE: string
    FATTURA: string
    NUMERO_ORDINE?: number | null
    INDIRIZZO_SPEDIZIONE?: string | null
    STATO_ORDINE?: string | null
  }

  export type tbl_ordineUncheckedCreateWithoutTbl_carrelloInput = {
    ID_ORDINE: string
    FATTURA: string
    NUMERO_ORDINE?: number | null
    INDIRIZZO_SPEDIZIONE?: string | null
    STATO_ORDINE?: string | null
  }

  export type tbl_ordineCreateOrConnectWithoutTbl_carrelloInput = {
    where: tbl_ordineWhereUniqueInput
    create: XOR<tbl_ordineCreateWithoutTbl_carrelloInput, tbl_ordineUncheckedCreateWithoutTbl_carrelloInput>
  }

  export type tbl_ordineCreateManyTbl_carrelloInputEnvelope = {
    data: tbl_ordineCreateManyTbl_carrelloInput | tbl_ordineCreateManyTbl_carrelloInput[]
    skipDuplicates?: boolean
  }

  export type tbl_clienteUpsertWithoutTbl_carrelloInput = {
    update: XOR<tbl_clienteUpdateWithoutTbl_carrelloInput, tbl_clienteUncheckedUpdateWithoutTbl_carrelloInput>
    create: XOR<tbl_clienteCreateWithoutTbl_carrelloInput, tbl_clienteUncheckedCreateWithoutTbl_carrelloInput>
    where?: tbl_clienteWhereInput
  }

  export type tbl_clienteUpdateToOneWithWhereWithoutTbl_carrelloInput = {
    where?: tbl_clienteWhereInput
    data: XOR<tbl_clienteUpdateWithoutTbl_carrelloInput, tbl_clienteUncheckedUpdateWithoutTbl_carrelloInput>
  }

  export type tbl_clienteUpdateWithoutTbl_carrelloInput = {
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    CELLULARE?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    NUM_CARTA?: StringFieldUpdateOperationsInput | string
    CVV_CARTA?: StringFieldUpdateOperationsInput | string
    INTESTATARIO_CARTA?: NullableStringFieldUpdateOperationsInput | string | null
    SCADENZA_CARTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_clienteUncheckedUpdateWithoutTbl_carrelloInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    CELLULARE?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    NUM_CARTA?: StringFieldUpdateOperationsInput | string
    CVV_CARTA?: StringFieldUpdateOperationsInput | string
    INTESTATARIO_CARTA?: NullableStringFieldUpdateOperationsInput | string | null
    SCADENZA_CARTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_ordineUpsertWithWhereUniqueWithoutTbl_carrelloInput = {
    where: tbl_ordineWhereUniqueInput
    update: XOR<tbl_ordineUpdateWithoutTbl_carrelloInput, tbl_ordineUncheckedUpdateWithoutTbl_carrelloInput>
    create: XOR<tbl_ordineCreateWithoutTbl_carrelloInput, tbl_ordineUncheckedCreateWithoutTbl_carrelloInput>
  }

  export type tbl_ordineUpdateWithWhereUniqueWithoutTbl_carrelloInput = {
    where: tbl_ordineWhereUniqueInput
    data: XOR<tbl_ordineUpdateWithoutTbl_carrelloInput, tbl_ordineUncheckedUpdateWithoutTbl_carrelloInput>
  }

  export type tbl_ordineUpdateManyWithWhereWithoutTbl_carrelloInput = {
    where: tbl_ordineScalarWhereInput
    data: XOR<tbl_ordineUpdateManyMutationInput, tbl_ordineUncheckedUpdateManyWithoutTbl_carrelloInput>
  }

  export type tbl_ordineScalarWhereInput = {
    AND?: tbl_ordineScalarWhereInput | tbl_ordineScalarWhereInput[]
    OR?: tbl_ordineScalarWhereInput[]
    NOT?: tbl_ordineScalarWhereInput | tbl_ordineScalarWhereInput[]
    ID_ORDINE?: StringFilter<"tbl_ordine"> | string
    FATTURA?: StringFilter<"tbl_ordine"> | string
    NUMERO_ORDINE?: IntNullableFilter<"tbl_ordine"> | number | null
    ID_CARRELLO?: StringNullableFilter<"tbl_ordine"> | string | null
    INDIRIZZO_SPEDIZIONE?: StringNullableFilter<"tbl_ordine"> | string | null
    STATO_ORDINE?: StringNullableFilter<"tbl_ordine"> | string | null
  }

  export type tbl_carrelloCreateWithoutTbl_clienteInput = {
    ID: string
    DATA_ACQUISTO?: Date | string | null
    QUANTITA_PRODOTTO: number
    PREZZO_TOTALE: number
    tbl_ordine?: tbl_ordineCreateNestedManyWithoutTbl_carrelloInput
  }

  export type tbl_carrelloUncheckedCreateWithoutTbl_clienteInput = {
    ID: string
    DATA_ACQUISTO?: Date | string | null
    QUANTITA_PRODOTTO: number
    PREZZO_TOTALE: number
    tbl_ordine?: tbl_ordineUncheckedCreateNestedManyWithoutTbl_carrelloInput
  }

  export type tbl_carrelloCreateOrConnectWithoutTbl_clienteInput = {
    where: tbl_carrelloWhereUniqueInput
    create: XOR<tbl_carrelloCreateWithoutTbl_clienteInput, tbl_carrelloUncheckedCreateWithoutTbl_clienteInput>
  }

  export type tbl_carrelloCreateManyTbl_clienteInputEnvelope = {
    data: tbl_carrelloCreateManyTbl_clienteInput | tbl_carrelloCreateManyTbl_clienteInput[]
    skipDuplicates?: boolean
  }

  export type tbl_carrelloUpsertWithWhereUniqueWithoutTbl_clienteInput = {
    where: tbl_carrelloWhereUniqueInput
    update: XOR<tbl_carrelloUpdateWithoutTbl_clienteInput, tbl_carrelloUncheckedUpdateWithoutTbl_clienteInput>
    create: XOR<tbl_carrelloCreateWithoutTbl_clienteInput, tbl_carrelloUncheckedCreateWithoutTbl_clienteInput>
  }

  export type tbl_carrelloUpdateWithWhereUniqueWithoutTbl_clienteInput = {
    where: tbl_carrelloWhereUniqueInput
    data: XOR<tbl_carrelloUpdateWithoutTbl_clienteInput, tbl_carrelloUncheckedUpdateWithoutTbl_clienteInput>
  }

  export type tbl_carrelloUpdateManyWithWhereWithoutTbl_clienteInput = {
    where: tbl_carrelloScalarWhereInput
    data: XOR<tbl_carrelloUpdateManyMutationInput, tbl_carrelloUncheckedUpdateManyWithoutTbl_clienteInput>
  }

  export type tbl_carrelloScalarWhereInput = {
    AND?: tbl_carrelloScalarWhereInput | tbl_carrelloScalarWhereInput[]
    OR?: tbl_carrelloScalarWhereInput[]
    NOT?: tbl_carrelloScalarWhereInput | tbl_carrelloScalarWhereInput[]
    ID?: StringFilter<"tbl_carrello"> | string
    DATA_ACQUISTO?: DateTimeNullableFilter<"tbl_carrello"> | Date | string | null
    QUANTITA_PRODOTTO?: IntFilter<"tbl_carrello"> | number
    PREZZO_TOTALE?: FloatFilter<"tbl_carrello"> | number
    EMAIL_CLIENTE?: StringNullableFilter<"tbl_carrello"> | string | null
  }

  export type tbl_spedizioneCreateWithoutTbl_corriereInput = {
    NUMERO_TRACCIAMENTO: string
    NUMERO_ORDINE: string
    DATA_PARTENZA: Date | string
    DATA_ARRIVO: Date | string
  }

  export type tbl_spedizioneUncheckedCreateWithoutTbl_corriereInput = {
    NUMERO_TRACCIAMENTO: string
    NUMERO_ORDINE: string
    DATA_PARTENZA: Date | string
    DATA_ARRIVO: Date | string
  }

  export type tbl_spedizioneCreateOrConnectWithoutTbl_corriereInput = {
    where: tbl_spedizioneWhereUniqueInput
    create: XOR<tbl_spedizioneCreateWithoutTbl_corriereInput, tbl_spedizioneUncheckedCreateWithoutTbl_corriereInput>
  }

  export type tbl_spedizioneCreateManyTbl_corriereInputEnvelope = {
    data: tbl_spedizioneCreateManyTbl_corriereInput | tbl_spedizioneCreateManyTbl_corriereInput[]
    skipDuplicates?: boolean
  }

  export type tbl_spedizioneUpsertWithWhereUniqueWithoutTbl_corriereInput = {
    where: tbl_spedizioneWhereUniqueInput
    update: XOR<tbl_spedizioneUpdateWithoutTbl_corriereInput, tbl_spedizioneUncheckedUpdateWithoutTbl_corriereInput>
    create: XOR<tbl_spedizioneCreateWithoutTbl_corriereInput, tbl_spedizioneUncheckedCreateWithoutTbl_corriereInput>
  }

  export type tbl_spedizioneUpdateWithWhereUniqueWithoutTbl_corriereInput = {
    where: tbl_spedizioneWhereUniqueInput
    data: XOR<tbl_spedizioneUpdateWithoutTbl_corriereInput, tbl_spedizioneUncheckedUpdateWithoutTbl_corriereInput>
  }

  export type tbl_spedizioneUpdateManyWithWhereWithoutTbl_corriereInput = {
    where: tbl_spedizioneScalarWhereInput
    data: XOR<tbl_spedizioneUpdateManyMutationInput, tbl_spedizioneUncheckedUpdateManyWithoutTbl_corriereInput>
  }

  export type tbl_spedizioneScalarWhereInput = {
    AND?: tbl_spedizioneScalarWhereInput | tbl_spedizioneScalarWhereInput[]
    OR?: tbl_spedizioneScalarWhereInput[]
    NOT?: tbl_spedizioneScalarWhereInput | tbl_spedizioneScalarWhereInput[]
    NUMERO_TRACCIAMENTO?: StringFilter<"tbl_spedizione"> | string
    P_IVA_CORRIERE?: StringFilter<"tbl_spedizione"> | string
    NUMERO_ORDINE?: StringFilter<"tbl_spedizione"> | string
    DATA_PARTENZA?: DateTimeFilter<"tbl_spedizione"> | Date | string
    DATA_ARRIVO?: DateTimeFilter<"tbl_spedizione"> | Date | string
  }

  export type tbl_filialeCreateWithoutTbl_dipendenteInput = {
    NOME_FILIALE: string
    SEDE: string
    CODICE_ZONA_FILIALE: string
  }

  export type tbl_filialeUncheckedCreateWithoutTbl_dipendenteInput = {
    NOME_FILIALE: string
    SEDE: string
    CODICE_ZONA_FILIALE: string
  }

  export type tbl_filialeCreateOrConnectWithoutTbl_dipendenteInput = {
    where: tbl_filialeWhereUniqueInput
    create: XOR<tbl_filialeCreateWithoutTbl_dipendenteInput, tbl_filialeUncheckedCreateWithoutTbl_dipendenteInput>
  }

  export type tbl_filialeUpsertWithoutTbl_dipendenteInput = {
    update: XOR<tbl_filialeUpdateWithoutTbl_dipendenteInput, tbl_filialeUncheckedUpdateWithoutTbl_dipendenteInput>
    create: XOR<tbl_filialeCreateWithoutTbl_dipendenteInput, tbl_filialeUncheckedCreateWithoutTbl_dipendenteInput>
    where?: tbl_filialeWhereInput
  }

  export type tbl_filialeUpdateToOneWithWhereWithoutTbl_dipendenteInput = {
    where?: tbl_filialeWhereInput
    data: XOR<tbl_filialeUpdateWithoutTbl_dipendenteInput, tbl_filialeUncheckedUpdateWithoutTbl_dipendenteInput>
  }

  export type tbl_filialeUpdateWithoutTbl_dipendenteInput = {
    NOME_FILIALE?: StringFieldUpdateOperationsInput | string
    SEDE?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA_FILIALE?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_filialeUncheckedUpdateWithoutTbl_dipendenteInput = {
    NOME_FILIALE?: StringFieldUpdateOperationsInput | string
    SEDE?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA_FILIALE?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_dipendenteCreateWithoutTbl_filialeInput = {
    NOME: string
    COGNOME: string
    EMAIL: string
    VIA: string
    N_CIVICO: string
    CAP: string
    CITTA: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    DATA_ASSUNZIONE?: Date | string | null
    PAGA_ORARIA: number
    RUOLO?: string | null
    UTENTE_PASSWORD?: string | null
  }

  export type tbl_dipendenteUncheckedCreateWithoutTbl_filialeInput = {
    ID?: number
    NOME: string
    COGNOME: string
    EMAIL: string
    VIA: string
    N_CIVICO: string
    CAP: string
    CITTA: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    DATA_ASSUNZIONE?: Date | string | null
    PAGA_ORARIA: number
    RUOLO?: string | null
    UTENTE_PASSWORD?: string | null
  }

  export type tbl_dipendenteCreateOrConnectWithoutTbl_filialeInput = {
    where: tbl_dipendenteWhereUniqueInput
    create: XOR<tbl_dipendenteCreateWithoutTbl_filialeInput, tbl_dipendenteUncheckedCreateWithoutTbl_filialeInput>
  }

  export type tbl_dipendenteCreateManyTbl_filialeInputEnvelope = {
    data: tbl_dipendenteCreateManyTbl_filialeInput | tbl_dipendenteCreateManyTbl_filialeInput[]
    skipDuplicates?: boolean
  }

  export type tbl_dipendenteUpsertWithWhereUniqueWithoutTbl_filialeInput = {
    where: tbl_dipendenteWhereUniqueInput
    update: XOR<tbl_dipendenteUpdateWithoutTbl_filialeInput, tbl_dipendenteUncheckedUpdateWithoutTbl_filialeInput>
    create: XOR<tbl_dipendenteCreateWithoutTbl_filialeInput, tbl_dipendenteUncheckedCreateWithoutTbl_filialeInput>
  }

  export type tbl_dipendenteUpdateWithWhereUniqueWithoutTbl_filialeInput = {
    where: tbl_dipendenteWhereUniqueInput
    data: XOR<tbl_dipendenteUpdateWithoutTbl_filialeInput, tbl_dipendenteUncheckedUpdateWithoutTbl_filialeInput>
  }

  export type tbl_dipendenteUpdateManyWithWhereWithoutTbl_filialeInput = {
    where: tbl_dipendenteScalarWhereInput
    data: XOR<tbl_dipendenteUpdateManyMutationInput, tbl_dipendenteUncheckedUpdateManyWithoutTbl_filialeInput>
  }

  export type tbl_dipendenteScalarWhereInput = {
    AND?: tbl_dipendenteScalarWhereInput | tbl_dipendenteScalarWhereInput[]
    OR?: tbl_dipendenteScalarWhereInput[]
    NOT?: tbl_dipendenteScalarWhereInput | tbl_dipendenteScalarWhereInput[]
    ID?: IntFilter<"tbl_dipendente"> | number
    NOME?: StringFilter<"tbl_dipendente"> | string
    COGNOME?: StringFilter<"tbl_dipendente"> | string
    EMAIL?: StringFilter<"tbl_dipendente"> | string
    VIA?: StringFilter<"tbl_dipendente"> | string
    N_CIVICO?: StringFilter<"tbl_dipendente"> | string
    CAP?: StringFilter<"tbl_dipendente"> | string
    CITTA?: StringFilter<"tbl_dipendente"> | string
    CODICE_FISCALE?: StringFilter<"tbl_dipendente"> | string
    DATA_DI_NASCITA?: StringFilter<"tbl_dipendente"> | string
    DATA_ASSUNZIONE?: DateTimeNullableFilter<"tbl_dipendente"> | Date | string | null
    PAGA_ORARIA?: FloatFilter<"tbl_dipendente"> | number
    CODICE_ZONA?: StringNullableFilter<"tbl_dipendente"> | string | null
    RUOLO?: StringNullableFilter<"tbl_dipendente"> | string | null
    UTENTE_PASSWORD?: StringNullableFilter<"tbl_dipendente"> | string | null
  }

  export type tbl_fornituraCreateWithoutTbl_fornitoreInput = {
    ID_FORNITURA: string
    CODICE_ZONA: string
    PREZZO?: number | null
    DATA_ACQUISTO?: Date | string | null
    DATA_SPEDIZIONE?: Date | string | null
    tbl_prodotto?: tbl_prodottoCreateNestedManyWithoutTbl_fornituraInput
  }

  export type tbl_fornituraUncheckedCreateWithoutTbl_fornitoreInput = {
    ID_FORNITURA: string
    CODICE_ZONA: string
    PREZZO?: number | null
    DATA_ACQUISTO?: Date | string | null
    DATA_SPEDIZIONE?: Date | string | null
    tbl_prodotto?: tbl_prodottoUncheckedCreateNestedManyWithoutTbl_fornituraInput
  }

  export type tbl_fornituraCreateOrConnectWithoutTbl_fornitoreInput = {
    where: tbl_fornituraWhereUniqueInput
    create: XOR<tbl_fornituraCreateWithoutTbl_fornitoreInput, tbl_fornituraUncheckedCreateWithoutTbl_fornitoreInput>
  }

  export type tbl_fornituraCreateManyTbl_fornitoreInputEnvelope = {
    data: tbl_fornituraCreateManyTbl_fornitoreInput | tbl_fornituraCreateManyTbl_fornitoreInput[]
    skipDuplicates?: boolean
  }

  export type tbl_fornituraUpsertWithWhereUniqueWithoutTbl_fornitoreInput = {
    where: tbl_fornituraWhereUniqueInput
    update: XOR<tbl_fornituraUpdateWithoutTbl_fornitoreInput, tbl_fornituraUncheckedUpdateWithoutTbl_fornitoreInput>
    create: XOR<tbl_fornituraCreateWithoutTbl_fornitoreInput, tbl_fornituraUncheckedCreateWithoutTbl_fornitoreInput>
  }

  export type tbl_fornituraUpdateWithWhereUniqueWithoutTbl_fornitoreInput = {
    where: tbl_fornituraWhereUniqueInput
    data: XOR<tbl_fornituraUpdateWithoutTbl_fornitoreInput, tbl_fornituraUncheckedUpdateWithoutTbl_fornitoreInput>
  }

  export type tbl_fornituraUpdateManyWithWhereWithoutTbl_fornitoreInput = {
    where: tbl_fornituraScalarWhereInput
    data: XOR<tbl_fornituraUpdateManyMutationInput, tbl_fornituraUncheckedUpdateManyWithoutTbl_fornitoreInput>
  }

  export type tbl_fornituraScalarWhereInput = {
    AND?: tbl_fornituraScalarWhereInput | tbl_fornituraScalarWhereInput[]
    OR?: tbl_fornituraScalarWhereInput[]
    NOT?: tbl_fornituraScalarWhereInput | tbl_fornituraScalarWhereInput[]
    ID_FORNITURA?: StringFilter<"tbl_fornitura"> | string
    P_IVA?: StringFilter<"tbl_fornitura"> | string
    CODICE_ZONA?: StringFilter<"tbl_fornitura"> | string
    PREZZO?: FloatNullableFilter<"tbl_fornitura"> | number | null
    DATA_ACQUISTO?: DateTimeNullableFilter<"tbl_fornitura"> | Date | string | null
    DATA_SPEDIZIONE?: DateTimeNullableFilter<"tbl_fornitura"> | Date | string | null
  }

  export type tbl_fornitoreCreateWithoutTbl_fornituraInput = {
    P_IVA: string
    NOME: string
    CITTA: string
    VIA: string
    CAP: string
  }

  export type tbl_fornitoreUncheckedCreateWithoutTbl_fornituraInput = {
    P_IVA: string
    NOME: string
    CITTA: string
    VIA: string
    CAP: string
  }

  export type tbl_fornitoreCreateOrConnectWithoutTbl_fornituraInput = {
    where: tbl_fornitoreWhereUniqueInput
    create: XOR<tbl_fornitoreCreateWithoutTbl_fornituraInput, tbl_fornitoreUncheckedCreateWithoutTbl_fornituraInput>
  }

  export type tbl_prodottoCreateWithoutTbl_fornituraInput = {
    NOME_PRODOTTO: string
    PREZZO_PRODOTTO: number
    QUANTITA: number
    PROVENIENZA: string
    ID_PRODOTTO: string
  }

  export type tbl_prodottoUncheckedCreateWithoutTbl_fornituraInput = {
    NOME_PRODOTTO: string
    PREZZO_PRODOTTO: number
    QUANTITA: number
    PROVENIENZA: string
    ID_PRODOTTO: string
  }

  export type tbl_prodottoCreateOrConnectWithoutTbl_fornituraInput = {
    where: tbl_prodottoWhereUniqueInput
    create: XOR<tbl_prodottoCreateWithoutTbl_fornituraInput, tbl_prodottoUncheckedCreateWithoutTbl_fornituraInput>
  }

  export type tbl_prodottoCreateManyTbl_fornituraInputEnvelope = {
    data: tbl_prodottoCreateManyTbl_fornituraInput | tbl_prodottoCreateManyTbl_fornituraInput[]
    skipDuplicates?: boolean
  }

  export type tbl_fornitoreUpsertWithoutTbl_fornituraInput = {
    update: XOR<tbl_fornitoreUpdateWithoutTbl_fornituraInput, tbl_fornitoreUncheckedUpdateWithoutTbl_fornituraInput>
    create: XOR<tbl_fornitoreCreateWithoutTbl_fornituraInput, tbl_fornitoreUncheckedCreateWithoutTbl_fornituraInput>
    where?: tbl_fornitoreWhereInput
  }

  export type tbl_fornitoreUpdateToOneWithWhereWithoutTbl_fornituraInput = {
    where?: tbl_fornitoreWhereInput
    data: XOR<tbl_fornitoreUpdateWithoutTbl_fornituraInput, tbl_fornitoreUncheckedUpdateWithoutTbl_fornituraInput>
  }

  export type tbl_fornitoreUpdateWithoutTbl_fornituraInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_fornitoreUncheckedUpdateWithoutTbl_fornituraInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_prodottoUpsertWithWhereUniqueWithoutTbl_fornituraInput = {
    where: tbl_prodottoWhereUniqueInput
    update: XOR<tbl_prodottoUpdateWithoutTbl_fornituraInput, tbl_prodottoUncheckedUpdateWithoutTbl_fornituraInput>
    create: XOR<tbl_prodottoCreateWithoutTbl_fornituraInput, tbl_prodottoUncheckedCreateWithoutTbl_fornituraInput>
  }

  export type tbl_prodottoUpdateWithWhereUniqueWithoutTbl_fornituraInput = {
    where: tbl_prodottoWhereUniqueInput
    data: XOR<tbl_prodottoUpdateWithoutTbl_fornituraInput, tbl_prodottoUncheckedUpdateWithoutTbl_fornituraInput>
  }

  export type tbl_prodottoUpdateManyWithWhereWithoutTbl_fornituraInput = {
    where: tbl_prodottoScalarWhereInput
    data: XOR<tbl_prodottoUpdateManyMutationInput, tbl_prodottoUncheckedUpdateManyWithoutTbl_fornituraInput>
  }

  export type tbl_prodottoScalarWhereInput = {
    AND?: tbl_prodottoScalarWhereInput | tbl_prodottoScalarWhereInput[]
    OR?: tbl_prodottoScalarWhereInput[]
    NOT?: tbl_prodottoScalarWhereInput | tbl_prodottoScalarWhereInput[]
    NOME_PRODOTTO?: StringFilter<"tbl_prodotto"> | string
    PREZZO_PRODOTTO?: FloatFilter<"tbl_prodotto"> | number
    QUANTITA?: IntFilter<"tbl_prodotto"> | number
    PROVENIENZA?: StringFilter<"tbl_prodotto"> | string
    ID_FORNITURA?: StringFilter<"tbl_prodotto"> | string
    ID_PRODOTTO?: StringFilter<"tbl_prodotto"> | string
  }

  export type tbl_carrelloCreateWithoutTbl_ordineInput = {
    ID: string
    DATA_ACQUISTO?: Date | string | null
    QUANTITA_PRODOTTO: number
    PREZZO_TOTALE: number
    tbl_cliente?: tbl_clienteCreateNestedOneWithoutTbl_carrelloInput
  }

  export type tbl_carrelloUncheckedCreateWithoutTbl_ordineInput = {
    ID: string
    DATA_ACQUISTO?: Date | string | null
    QUANTITA_PRODOTTO: number
    PREZZO_TOTALE: number
    EMAIL_CLIENTE?: string | null
  }

  export type tbl_carrelloCreateOrConnectWithoutTbl_ordineInput = {
    where: tbl_carrelloWhereUniqueInput
    create: XOR<tbl_carrelloCreateWithoutTbl_ordineInput, tbl_carrelloUncheckedCreateWithoutTbl_ordineInput>
  }

  export type tbl_carrelloUpsertWithoutTbl_ordineInput = {
    update: XOR<tbl_carrelloUpdateWithoutTbl_ordineInput, tbl_carrelloUncheckedUpdateWithoutTbl_ordineInput>
    create: XOR<tbl_carrelloCreateWithoutTbl_ordineInput, tbl_carrelloUncheckedCreateWithoutTbl_ordineInput>
    where?: tbl_carrelloWhereInput
  }

  export type tbl_carrelloUpdateToOneWithWhereWithoutTbl_ordineInput = {
    where?: tbl_carrelloWhereInput
    data: XOR<tbl_carrelloUpdateWithoutTbl_ordineInput, tbl_carrelloUncheckedUpdateWithoutTbl_ordineInput>
  }

  export type tbl_carrelloUpdateWithoutTbl_ordineInput = {
    ID?: StringFieldUpdateOperationsInput | string
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    QUANTITA_PRODOTTO?: IntFieldUpdateOperationsInput | number
    PREZZO_TOTALE?: FloatFieldUpdateOperationsInput | number
    tbl_cliente?: tbl_clienteUpdateOneWithoutTbl_carrelloNestedInput
  }

  export type tbl_carrelloUncheckedUpdateWithoutTbl_ordineInput = {
    ID?: StringFieldUpdateOperationsInput | string
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    QUANTITA_PRODOTTO?: IntFieldUpdateOperationsInput | number
    PREZZO_TOTALE?: FloatFieldUpdateOperationsInput | number
    EMAIL_CLIENTE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_fornituraCreateWithoutTbl_prodottoInput = {
    ID_FORNITURA: string
    CODICE_ZONA: string
    PREZZO?: number | null
    DATA_ACQUISTO?: Date | string | null
    DATA_SPEDIZIONE?: Date | string | null
    tbl_fornitore: tbl_fornitoreCreateNestedOneWithoutTbl_fornituraInput
  }

  export type tbl_fornituraUncheckedCreateWithoutTbl_prodottoInput = {
    ID_FORNITURA: string
    P_IVA: string
    CODICE_ZONA: string
    PREZZO?: number | null
    DATA_ACQUISTO?: Date | string | null
    DATA_SPEDIZIONE?: Date | string | null
  }

  export type tbl_fornituraCreateOrConnectWithoutTbl_prodottoInput = {
    where: tbl_fornituraWhereUniqueInput
    create: XOR<tbl_fornituraCreateWithoutTbl_prodottoInput, tbl_fornituraUncheckedCreateWithoutTbl_prodottoInput>
  }

  export type tbl_fornituraUpsertWithoutTbl_prodottoInput = {
    update: XOR<tbl_fornituraUpdateWithoutTbl_prodottoInput, tbl_fornituraUncheckedUpdateWithoutTbl_prodottoInput>
    create: XOR<tbl_fornituraCreateWithoutTbl_prodottoInput, tbl_fornituraUncheckedCreateWithoutTbl_prodottoInput>
    where?: tbl_fornituraWhereInput
  }

  export type tbl_fornituraUpdateToOneWithWhereWithoutTbl_prodottoInput = {
    where?: tbl_fornituraWhereInput
    data: XOR<tbl_fornituraUpdateWithoutTbl_prodottoInput, tbl_fornituraUncheckedUpdateWithoutTbl_prodottoInput>
  }

  export type tbl_fornituraUpdateWithoutTbl_prodottoInput = {
    ID_FORNITURA?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA?: StringFieldUpdateOperationsInput | string
    PREZZO?: NullableFloatFieldUpdateOperationsInput | number | null
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_SPEDIZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tbl_fornitore?: tbl_fornitoreUpdateOneRequiredWithoutTbl_fornituraNestedInput
  }

  export type tbl_fornituraUncheckedUpdateWithoutTbl_prodottoInput = {
    ID_FORNITURA?: StringFieldUpdateOperationsInput | string
    P_IVA?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA?: StringFieldUpdateOperationsInput | string
    PREZZO?: NullableFloatFieldUpdateOperationsInput | number | null
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_SPEDIZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_corriereCreateWithoutTbl_spedizioneInput = {
    P_IVA: string
    NOME: string
    TELEFONO: string
    EMAIL: string
  }

  export type tbl_corriereUncheckedCreateWithoutTbl_spedizioneInput = {
    P_IVA: string
    NOME: string
    TELEFONO: string
    EMAIL: string
  }

  export type tbl_corriereCreateOrConnectWithoutTbl_spedizioneInput = {
    where: tbl_corriereWhereUniqueInput
    create: XOR<tbl_corriereCreateWithoutTbl_spedizioneInput, tbl_corriereUncheckedCreateWithoutTbl_spedizioneInput>
  }

  export type tbl_corriereUpsertWithoutTbl_spedizioneInput = {
    update: XOR<tbl_corriereUpdateWithoutTbl_spedizioneInput, tbl_corriereUncheckedUpdateWithoutTbl_spedizioneInput>
    create: XOR<tbl_corriereCreateWithoutTbl_spedizioneInput, tbl_corriereUncheckedCreateWithoutTbl_spedizioneInput>
    where?: tbl_corriereWhereInput
  }

  export type tbl_corriereUpdateToOneWithWhereWithoutTbl_spedizioneInput = {
    where?: tbl_corriereWhereInput
    data: XOR<tbl_corriereUpdateWithoutTbl_spedizioneInput, tbl_corriereUncheckedUpdateWithoutTbl_spedizioneInput>
  }

  export type tbl_corriereUpdateWithoutTbl_spedizioneInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    TELEFONO?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_corriereUncheckedUpdateWithoutTbl_spedizioneInput = {
    P_IVA?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    TELEFONO?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutProfileInput = {
    name?: string | null
    email: string
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    name?: string | null
    email: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PostCreateWithoutAuthorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
    viewCount?: number
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
    viewCount?: number
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    bio?: string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    bio?: string | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    viewCount?: IntFilter<"Post"> | number
    authorId?: IntNullableFilter<"Post"> | number | null
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutPostsInput = {
    name?: string | null
    email: string
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    name?: string | null
    email: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type tbl_ordineCreateManyTbl_carrelloInput = {
    ID_ORDINE: string
    FATTURA: string
    NUMERO_ORDINE?: number | null
    INDIRIZZO_SPEDIZIONE?: string | null
    STATO_ORDINE?: string | null
  }

  export type tbl_ordineUpdateWithoutTbl_carrelloInput = {
    ID_ORDINE?: StringFieldUpdateOperationsInput | string
    FATTURA?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: NullableIntFieldUpdateOperationsInput | number | null
    INDIRIZZO_SPEDIZIONE?: NullableStringFieldUpdateOperationsInput | string | null
    STATO_ORDINE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_ordineUncheckedUpdateWithoutTbl_carrelloInput = {
    ID_ORDINE?: StringFieldUpdateOperationsInput | string
    FATTURA?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: NullableIntFieldUpdateOperationsInput | number | null
    INDIRIZZO_SPEDIZIONE?: NullableStringFieldUpdateOperationsInput | string | null
    STATO_ORDINE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_ordineUncheckedUpdateManyWithoutTbl_carrelloInput = {
    ID_ORDINE?: StringFieldUpdateOperationsInput | string
    FATTURA?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: NullableIntFieldUpdateOperationsInput | number | null
    INDIRIZZO_SPEDIZIONE?: NullableStringFieldUpdateOperationsInput | string | null
    STATO_ORDINE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_carrelloCreateManyTbl_clienteInput = {
    ID: string
    DATA_ACQUISTO?: Date | string | null
    QUANTITA_PRODOTTO: number
    PREZZO_TOTALE: number
  }

  export type tbl_carrelloUpdateWithoutTbl_clienteInput = {
    ID?: StringFieldUpdateOperationsInput | string
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    QUANTITA_PRODOTTO?: IntFieldUpdateOperationsInput | number
    PREZZO_TOTALE?: FloatFieldUpdateOperationsInput | number
    tbl_ordine?: tbl_ordineUpdateManyWithoutTbl_carrelloNestedInput
  }

  export type tbl_carrelloUncheckedUpdateWithoutTbl_clienteInput = {
    ID?: StringFieldUpdateOperationsInput | string
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    QUANTITA_PRODOTTO?: IntFieldUpdateOperationsInput | number
    PREZZO_TOTALE?: FloatFieldUpdateOperationsInput | number
    tbl_ordine?: tbl_ordineUncheckedUpdateManyWithoutTbl_carrelloNestedInput
  }

  export type tbl_carrelloUncheckedUpdateManyWithoutTbl_clienteInput = {
    ID?: StringFieldUpdateOperationsInput | string
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    QUANTITA_PRODOTTO?: IntFieldUpdateOperationsInput | number
    PREZZO_TOTALE?: FloatFieldUpdateOperationsInput | number
  }

  export type tbl_spedizioneCreateManyTbl_corriereInput = {
    NUMERO_TRACCIAMENTO: string
    NUMERO_ORDINE: string
    DATA_PARTENZA: Date | string
    DATA_ARRIVO: Date | string
  }

  export type tbl_spedizioneUpdateWithoutTbl_corriereInput = {
    NUMERO_TRACCIAMENTO?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: StringFieldUpdateOperationsInput | string
    DATA_PARTENZA?: DateTimeFieldUpdateOperationsInput | Date | string
    DATA_ARRIVO?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_spedizioneUncheckedUpdateWithoutTbl_corriereInput = {
    NUMERO_TRACCIAMENTO?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: StringFieldUpdateOperationsInput | string
    DATA_PARTENZA?: DateTimeFieldUpdateOperationsInput | Date | string
    DATA_ARRIVO?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_spedizioneUncheckedUpdateManyWithoutTbl_corriereInput = {
    NUMERO_TRACCIAMENTO?: StringFieldUpdateOperationsInput | string
    NUMERO_ORDINE?: StringFieldUpdateOperationsInput | string
    DATA_PARTENZA?: DateTimeFieldUpdateOperationsInput | Date | string
    DATA_ARRIVO?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_dipendenteCreateManyTbl_filialeInput = {
    ID?: number
    NOME: string
    COGNOME: string
    EMAIL: string
    VIA: string
    N_CIVICO: string
    CAP: string
    CITTA: string
    CODICE_FISCALE: string
    DATA_DI_NASCITA: string
    DATA_ASSUNZIONE?: Date | string | null
    PAGA_ORARIA: number
    RUOLO?: string | null
    UTENTE_PASSWORD?: string | null
  }

  export type tbl_dipendenteUpdateWithoutTbl_filialeInput = {
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    DATA_ASSUNZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PAGA_ORARIA?: FloatFieldUpdateOperationsInput | number
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_dipendenteUncheckedUpdateWithoutTbl_filialeInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    DATA_ASSUNZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PAGA_ORARIA?: FloatFieldUpdateOperationsInput | number
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_dipendenteUncheckedUpdateManyWithoutTbl_filialeInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NOME?: StringFieldUpdateOperationsInput | string
    COGNOME?: StringFieldUpdateOperationsInput | string
    EMAIL?: StringFieldUpdateOperationsInput | string
    VIA?: StringFieldUpdateOperationsInput | string
    N_CIVICO?: StringFieldUpdateOperationsInput | string
    CAP?: StringFieldUpdateOperationsInput | string
    CITTA?: StringFieldUpdateOperationsInput | string
    CODICE_FISCALE?: StringFieldUpdateOperationsInput | string
    DATA_DI_NASCITA?: StringFieldUpdateOperationsInput | string
    DATA_ASSUNZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PAGA_ORARIA?: FloatFieldUpdateOperationsInput | number
    RUOLO?: NullableStringFieldUpdateOperationsInput | string | null
    UTENTE_PASSWORD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_fornituraCreateManyTbl_fornitoreInput = {
    ID_FORNITURA: string
    CODICE_ZONA: string
    PREZZO?: number | null
    DATA_ACQUISTO?: Date | string | null
    DATA_SPEDIZIONE?: Date | string | null
  }

  export type tbl_fornituraUpdateWithoutTbl_fornitoreInput = {
    ID_FORNITURA?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA?: StringFieldUpdateOperationsInput | string
    PREZZO?: NullableFloatFieldUpdateOperationsInput | number | null
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_SPEDIZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tbl_prodotto?: tbl_prodottoUpdateManyWithoutTbl_fornituraNestedInput
  }

  export type tbl_fornituraUncheckedUpdateWithoutTbl_fornitoreInput = {
    ID_FORNITURA?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA?: StringFieldUpdateOperationsInput | string
    PREZZO?: NullableFloatFieldUpdateOperationsInput | number | null
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_SPEDIZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tbl_prodotto?: tbl_prodottoUncheckedUpdateManyWithoutTbl_fornituraNestedInput
  }

  export type tbl_fornituraUncheckedUpdateManyWithoutTbl_fornitoreInput = {
    ID_FORNITURA?: StringFieldUpdateOperationsInput | string
    CODICE_ZONA?: StringFieldUpdateOperationsInput | string
    PREZZO?: NullableFloatFieldUpdateOperationsInput | number | null
    DATA_ACQUISTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_SPEDIZIONE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_prodottoCreateManyTbl_fornituraInput = {
    NOME_PRODOTTO: string
    PREZZO_PRODOTTO: number
    QUANTITA: number
    PROVENIENZA: string
    ID_PRODOTTO: string
  }

  export type tbl_prodottoUpdateWithoutTbl_fornituraInput = {
    NOME_PRODOTTO?: StringFieldUpdateOperationsInput | string
    PREZZO_PRODOTTO?: FloatFieldUpdateOperationsInput | number
    QUANTITA?: IntFieldUpdateOperationsInput | number
    PROVENIENZA?: StringFieldUpdateOperationsInput | string
    ID_PRODOTTO?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_prodottoUncheckedUpdateWithoutTbl_fornituraInput = {
    NOME_PRODOTTO?: StringFieldUpdateOperationsInput | string
    PREZZO_PRODOTTO?: FloatFieldUpdateOperationsInput | number
    QUANTITA?: IntFieldUpdateOperationsInput | number
    PROVENIENZA?: StringFieldUpdateOperationsInput | string
    ID_PRODOTTO?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_prodottoUncheckedUpdateManyWithoutTbl_fornituraInput = {
    NOME_PRODOTTO?: StringFieldUpdateOperationsInput | string
    PREZZO_PRODOTTO?: FloatFieldUpdateOperationsInput | number
    QUANTITA?: IntFieldUpdateOperationsInput | number
    PROVENIENZA?: StringFieldUpdateOperationsInput | string
    ID_PRODOTTO?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
    viewCount?: number
  }

  export type PostUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Tbl_carrelloCountOutputTypeDefaultArgs instead
     */
    export type Tbl_carrelloCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tbl_carrelloCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tbl_clienteCountOutputTypeDefaultArgs instead
     */
    export type Tbl_clienteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tbl_clienteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tbl_corriereCountOutputTypeDefaultArgs instead
     */
    export type Tbl_corriereCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tbl_corriereCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tbl_filialeCountOutputTypeDefaultArgs instead
     */
    export type Tbl_filialeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tbl_filialeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tbl_fornitoreCountOutputTypeDefaultArgs instead
     */
    export type Tbl_fornitoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tbl_fornitoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tbl_fornituraCountOutputTypeDefaultArgs instead
     */
    export type Tbl_fornituraCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tbl_fornituraCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tbl_carrelloDefaultArgs instead
     */
    export type tbl_carrelloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tbl_carrelloDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tbl_clienteDefaultArgs instead
     */
    export type tbl_clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tbl_clienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tbl_corriereDefaultArgs instead
     */
    export type tbl_corriereArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tbl_corriereDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tbl_dipendenteDefaultArgs instead
     */
    export type tbl_dipendenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tbl_dipendenteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tbl_filialeDefaultArgs instead
     */
    export type tbl_filialeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tbl_filialeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tbl_fornitoreDefaultArgs instead
     */
    export type tbl_fornitoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tbl_fornitoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tbl_fornituraDefaultArgs instead
     */
    export type tbl_fornituraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tbl_fornituraDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tbl_ordineDefaultArgs instead
     */
    export type tbl_ordineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tbl_ordineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tbl_prodottoDefaultArgs instead
     */
    export type tbl_prodottoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tbl_prodottoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tbl_spedizioneDefaultArgs instead
     */
    export type tbl_spedizioneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tbl_spedizioneDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileDefaultArgs instead
     */
    export type ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}