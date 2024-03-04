
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Tbl_carrelloScalarFieldEnum = {
  ID: 'ID',
  DATA_ACQUISTO: 'DATA_ACQUISTO',
  QUANTITA_PRODOTTO: 'QUANTITA_PRODOTTO',
  PREZZO_TOTALE: 'PREZZO_TOTALE',
  EMAIL_CLIENTE: 'EMAIL_CLIENTE'
};

exports.Prisma.Tbl_clienteScalarFieldEnum = {
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

exports.Prisma.Tbl_corriereScalarFieldEnum = {
  P_IVA: 'P_IVA',
  NOME: 'NOME',
  TELEFONO: 'TELEFONO',
  EMAIL: 'EMAIL'
};

exports.Prisma.Tbl_dipendenteScalarFieldEnum = {
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

exports.Prisma.Tbl_filialeScalarFieldEnum = {
  NOME_FILIALE: 'NOME_FILIALE',
  SEDE: 'SEDE',
  CODICE_ZONA_FILIALE: 'CODICE_ZONA_FILIALE'
};

exports.Prisma.Tbl_fornitoreScalarFieldEnum = {
  P_IVA: 'P_IVA',
  NOME: 'NOME',
  CITTA: 'CITTA',
  VIA: 'VIA',
  CAP: 'CAP'
};

exports.Prisma.Tbl_fornituraScalarFieldEnum = {
  ID_FORNITURA: 'ID_FORNITURA',
  P_IVA: 'P_IVA',
  CODICE_ZONA: 'CODICE_ZONA',
  PREZZO: 'PREZZO',
  DATA_ACQUISTO: 'DATA_ACQUISTO',
  DATA_SPEDIZIONE: 'DATA_SPEDIZIONE'
};

exports.Prisma.Tbl_ordineScalarFieldEnum = {
  ID_ORDINE: 'ID_ORDINE',
  FATTURA: 'FATTURA',
  NUMERO_ORDINE: 'NUMERO_ORDINE',
  ID_CARRELLO: 'ID_CARRELLO',
  INDIRIZZO_SPEDIZIONE: 'INDIRIZZO_SPEDIZIONE',
  STATO_ORDINE: 'STATO_ORDINE'
};

exports.Prisma.Tbl_prodottoScalarFieldEnum = {
  NOME_PRODOTTO: 'NOME_PRODOTTO',
  PREZZO_PRODOTTO: 'PREZZO_PRODOTTO',
  QUANTITA: 'QUANTITA',
  PROVENIENZA: 'PROVENIENZA',
  ID_FORNITURA: 'ID_FORNITURA',
  ID_PRODOTTO: 'ID_PRODOTTO'
};

exports.Prisma.Tbl_spedizioneScalarFieldEnum = {
  NUMERO_TRACCIAMENTO: 'NUMERO_TRACCIAMENTO',
  P_IVA_CORRIERE: 'P_IVA_CORRIERE',
  NUMERO_ORDINE: 'NUMERO_ORDINE',
  DATA_PARTENZA: 'DATA_PARTENZA',
  DATA_ARRIVO: 'DATA_ARRIVO'
};

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  bio: 'bio',
  userId: 'userId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  content: 'content',
  published: 'published',
  viewCount: 'viewCount',
  authorId: 'authorId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\luigi\\Documents\\GitHub\\public\\Experia-Coffee\\backend\\prisma\\src\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../..",
  "clientVersion": "5.10.2",
  "engineVersion": "5a9203d0590c951969e85a7d07215503f4672eb9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "mysql://root:password@localhost:3306/experia_coffee"
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./src/generated/client\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = \"mysql://root:password@localhost:3306/experia_coffee\"\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel tbl_aggiunto_in {\n  ID_PRODOTTO  String       @db.VarChar(50)\n  ID_CARRELLO  String       @db.VarChar(50)\n  tbl_prodotto tbl_prodotto @relation(fields: [ID_PRODOTTO], references: [ID_PRODOTTO], onDelete: NoAction, onUpdate: NoAction, map: \"tbl_aggiunto_in_ibfk_1\")\n  tbl_carrello tbl_carrello @relation(fields: [ID_CARRELLO], references: [ID], onDelete: NoAction, onUpdate: NoAction, map: \"tbl_aggiunto_in_ibfk_2\")\n\n  @@index([ID_CARRELLO], map: \"ID_CARRELLO\")\n  @@index([ID_PRODOTTO], map: \"ID_PRODOTTO\")\n  @@ignore\n}\n\nmodel tbl_carrello {\n  ID                String            @id @db.VarChar(50)\n  DATA_ACQUISTO     DateTime?         @db.Date\n  QUANTITA_PRODOTTO Int\n  PREZZO_TOTALE     Float             @db.Float\n  EMAIL_CLIENTE     String?           @db.VarChar(50)\n  tbl_aggiunto_in   tbl_aggiunto_in[] @ignore\n  tbl_cliente       tbl_cliente?      @relation(fields: [EMAIL_CLIENTE], references: [EMAIL], onDelete: NoAction, map: \"tbl_carrello_ibfk_1\")\n  tbl_ordine        tbl_ordine[]\n\n  @@index([EMAIL_CLIENTE], map: \"EMAIL_CLIENTE\")\n}\n\nmodel tbl_cliente {\n  ID                 Int            @id @default(autoincrement())\n  NOME               String         @db.VarChar(50)\n  COGNOME            String         @db.VarChar(50)\n  EMAIL              String         @unique(map: \"EMAIL\") @db.VarChar(50)\n  CELLULARE          String         @db.VarChar(50)\n  CODICE_FISCALE     String         @db.VarChar(50)\n  DATA_DI_NASCITA    String         @db.VarChar(50)\n  CITTA              String         @db.VarChar(50)\n  VIA                String         @db.VarChar(50)\n  N_CIVICO           String         @db.VarChar(50)\n  CAP                String         @db.VarChar(50)\n  NUM_CARTA          String         @db.VarChar(50)\n  CVV_CARTA          String         @db.VarChar(50)\n  INTESTATARIO_CARTA String?        @db.VarChar(50)\n  SCADENZA_CARTA     DateTime?      @db.Date\n  RUOLO              String?        @default(\"cliente\") @db.VarChar(50)\n  UTENTE_PASSWORD    String?        @default(\"1\") @db.VarChar(50)\n  tbl_carrello       tbl_carrello[]\n}\n\nmodel tbl_corriere {\n  P_IVA          String           @id @db.VarChar(50)\n  NOME           String           @db.VarChar(30)\n  TELEFONO       String           @db.VarChar(50)\n  EMAIL          String           @db.VarChar(30)\n  tbl_spedizione tbl_spedizione[]\n}\n\nmodel tbl_dipendente {\n  ID              Int          @id @default(autoincrement())\n  NOME            String       @db.VarChar(50)\n  COGNOME         String       @db.VarChar(50)\n  EMAIL           String       @db.VarChar(50)\n  VIA             String       @db.VarChar(50)\n  N_CIVICO        String       @db.VarChar(50)\n  CAP             String       @db.VarChar(50)\n  CITTA           String       @db.VarChar(50)\n  CODICE_FISCALE  String       @db.VarChar(50)\n  DATA_DI_NASCITA String       @db.VarChar(50)\n  DATA_ASSUNZIONE DateTime?    @db.Date\n  PAGA_ORARIA     Float        @db.Float\n  CODICE_ZONA     String?      @db.VarChar(50)\n  RUOLO           String?      @default(\"dipendente\") @db.VarChar(50)\n  UTENTE_PASSWORD String?      @default(\"1\") @db.VarChar(50)\n  tbl_filiale     tbl_filiale? @relation(fields: [CODICE_ZONA], references: [CODICE_ZONA_FILIALE], onDelete: NoAction, onUpdate: NoAction, map: \"tbl_dipendente_ibfk_1\")\n\n  @@index([CODICE_ZONA], map: \"CODICE_ZONA\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel tbl_emette_spedizione {\n  CODICE_ZONA_FILIALE String         @db.VarChar(50)\n  NUMERO_TRACCIAMENTO String         @db.VarChar(50)\n  tbl_filiale         tbl_filiale    @relation(fields: [CODICE_ZONA_FILIALE], references: [CODICE_ZONA_FILIALE], onDelete: NoAction, onUpdate: NoAction, map: \"tbl_emette_spedizione_ibfk_1\")\n  tbl_spedizione      tbl_spedizione @relation(fields: [NUMERO_TRACCIAMENTO], references: [NUMERO_TRACCIAMENTO], onDelete: NoAction, onUpdate: NoAction, map: \"tbl_emette_spedizione_ibfk_2\")\n\n  @@index([CODICE_ZONA_FILIALE], map: \"CODICE_ZONA_FILIALE\")\n  @@index([NUMERO_TRACCIAMENTO], map: \"NUMERO_TRACCIAMENTO\")\n  @@ignore\n}\n\nmodel tbl_filiale {\n  NOME_FILIALE          String                  @db.VarChar(50)\n  SEDE                  String                  @db.VarChar(50)\n  CODICE_ZONA_FILIALE   String                  @id @db.VarChar(50)\n  tbl_dipendente        tbl_dipendente[]\n  tbl_emette_spedizione tbl_emette_spedizione[] @ignore\n  tbl_gestito_da        tbl_gestito_da[]        @ignore\n  tbl_magazzino         tbl_magazzino[]         @ignore\n}\n\nmodel tbl_fornitore {\n  P_IVA         String          @id @db.VarChar(11)\n  NOME          String          @db.VarChar(50)\n  CITTA         String          @db.VarChar(30)\n  VIA           String          @db.VarChar(30)\n  CAP           String          @db.VarChar(30)\n  tbl_fornitura tbl_fornitura[]\n}\n\nmodel tbl_fornitura {\n  ID_FORNITURA    String         @id @db.VarChar(50)\n  P_IVA           String         @db.VarChar(50)\n  CODICE_ZONA     String         @db.VarChar(50)\n  PREZZO          Float?         @db.Float\n  DATA_ACQUISTO   DateTime?      @db.Date\n  DATA_SPEDIZIONE DateTime?      @db.Date\n  tbl_fornitore   tbl_fornitore  @relation(fields: [P_IVA], references: [P_IVA], onDelete: NoAction, onUpdate: NoAction, map: \"tbl_fornitura_ibfk_1\")\n  tbl_prodotto    tbl_prodotto[]\n\n  @@index([P_IVA], map: \"P_IVA\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel tbl_gestito_da {\n  ID_FILIALE    String      @db.VarChar(50)\n  CODICE_ORDINE String      @db.VarChar(50)\n  tbl_filiale   tbl_filiale @relation(fields: [ID_FILIALE], references: [CODICE_ZONA_FILIALE], onDelete: NoAction, onUpdate: NoAction, map: \"tbl_gestito_da_ibfk_1\")\n  tbl_ordine    tbl_ordine  @relation(fields: [CODICE_ORDINE], references: [ID_ORDINE], onDelete: Cascade, onUpdate: NoAction, map: \"tbl_gestito_da_ibfk_2\")\n\n  @@index([CODICE_ORDINE], map: \"CODICE_ORDINE\")\n  @@index([ID_FILIALE], map: \"ID_FILIALE\")\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel tbl_magazzino {\n  CODICE_MAGAZZINO  String      @db.VarChar(50)\n  ID_PRODOTTO       String      @db.VarChar(50)\n  QUANTITA_PRODOTTO Int\n  NOME_PRODOTTO     String?     @db.VarChar(51)\n  NOME_MAGAZZINO    String?     @db.VarChar(50)\n  tbl_filiale       tbl_filiale @relation(fields: [CODICE_MAGAZZINO], references: [CODICE_ZONA_FILIALE], onDelete: NoAction, onUpdate: NoAction, map: \"tbl_magazzino_ibfk_1\")\n\n  @@index([CODICE_MAGAZZINO], map: \"CODICE_MAGAZZINO\")\n  @@ignore\n}\n\nmodel tbl_ordine {\n  ID_ORDINE            String           @id @db.VarChar(50)\n  FATTURA              String           @db.VarChar(50)\n  NUMERO_ORDINE        Int?\n  ID_CARRELLO          String?          @db.VarChar(50)\n  INDIRIZZO_SPEDIZIONE String?          @db.VarChar(50)\n  STATO_ORDINE         String?          @default(\"non gestito\") @db.VarChar(50)\n  tbl_gestito_da       tbl_gestito_da[] @ignore\n  tbl_carrello         tbl_carrello?    @relation(fields: [ID_CARRELLO], references: [ID], onDelete: NoAction, onUpdate: NoAction, map: \"tbl_ordine_ibfk_1\")\n\n  @@index([ID_CARRELLO], map: \"ID_CARRELLO\")\n}\n\nmodel tbl_prodotto {\n  NOME_PRODOTTO   String            @db.VarChar(50)\n  PREZZO_PRODOTTO Float             @db.Float\n  QUANTITA        Int\n  PROVENIENZA     String            @db.VarChar(50)\n  ID_FORNITURA    String            @db.VarChar(50)\n  ID_PRODOTTO     String            @id @db.VarChar(50)\n  tbl_aggiunto_in tbl_aggiunto_in[] @ignore\n  tbl_fornitura   tbl_fornitura     @relation(fields: [ID_FORNITURA], references: [ID_FORNITURA], onDelete: NoAction, onUpdate: NoAction, map: \"tbl_prodotto_ibfk_1\")\n\n  @@index([ID_FORNITURA], map: \"ID_FORNITURA\")\n}\n\nmodel tbl_spedizione {\n  NUMERO_TRACCIAMENTO   String                  @id @db.VarChar(50)\n  P_IVA_CORRIERE        String                  @db.VarChar(50)\n  NUMERO_ORDINE         String                  @db.VarChar(50)\n  DATA_PARTENZA         DateTime                @db.Date\n  DATA_ARRIVO           DateTime                @db.Date\n  tbl_emette_spedizione tbl_emette_spedizione[] @ignore\n  tbl_corriere          tbl_corriere            @relation(fields: [P_IVA_CORRIERE], references: [P_IVA], onDelete: NoAction, onUpdate: NoAction, map: \"tbl_spedizione_ibfk_1\")\n\n  @@index([P_IVA_CORRIERE], map: \"P_IVA_CORRIERE\")\n}\n\n// PROVA\n\nmodel Profile {\n  id     Int     @default(autoincrement()) @id\n  bio    String?\n  user   User    @relation(fields: [userId], references: [id])\n  userId Int     @unique\n}\n\nmodel User {\n  id      Int      @default(autoincrement()) @id\n  name    String?\n  email   String   @unique\n  posts   Post[]\n  profile Profile?\n}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  title     String\n  content   String?\n  published Boolean  @default(false)\n  viewCount Int      @default(0)\n  author    User?    @relation(fields: [authorId], references: [id])\n  authorId  Int?\n}\n",
  "inlineSchemaHash": "3e290fa4981740d15566219df156d6dab86a04a979acb9ee7d8cddecf3fef036",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"tbl_carrello\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_ACQUISTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QUANTITA_PRODOTTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PREZZO_TOTALE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMAIL_CLIENTE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_cliente\",\"relationName\":\"tbl_carrelloTotbl_cliente\",\"relationFromFields\":[\"EMAIL_CLIENTE\"],\"relationToFields\":[\"EMAIL\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_ordine\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_ordine\",\"relationName\":\"tbl_carrelloTotbl_ordine\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_cliente\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COGNOME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMAIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CELLULARE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODICE_FISCALE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_DI_NASCITA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CITTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VIA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"N_CIVICO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CAP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUM_CARTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CVV_CARTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"INTESTATARIO_CARTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SCADENZA_CARTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RUOLO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"cliente\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UTENTE_PASSWORD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_carrello\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_carrello\",\"relationName\":\"tbl_carrelloTotbl_cliente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_corriere\":{\"dbName\":null,\"fields\":[{\"name\":\"P_IVA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TELEFONO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMAIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_spedizione\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_spedizione\",\"relationName\":\"tbl_corriereTotbl_spedizione\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_dipendente\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COGNOME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMAIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VIA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"N_CIVICO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CAP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CITTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODICE_FISCALE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_DI_NASCITA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_ASSUNZIONE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PAGA_ORARIA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODICE_ZONA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RUOLO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"dipendente\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UTENTE_PASSWORD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_filiale\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_filiale\",\"relationName\":\"tbl_dipendenteTotbl_filiale\",\"relationFromFields\":[\"CODICE_ZONA\"],\"relationToFields\":[\"CODICE_ZONA_FILIALE\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_filiale\":{\"dbName\":null,\"fields\":[{\"name\":\"NOME_FILIALE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEDE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODICE_ZONA_FILIALE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_dipendente\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_dipendente\",\"relationName\":\"tbl_dipendenteTotbl_filiale\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_fornitore\":{\"dbName\":null,\"fields\":[{\"name\":\"P_IVA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CITTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VIA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CAP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_fornitura\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_fornitura\",\"relationName\":\"tbl_fornitoreTotbl_fornitura\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_fornitura\":{\"dbName\":null,\"fields\":[{\"name\":\"ID_FORNITURA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"P_IVA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODICE_ZONA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PREZZO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_ACQUISTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_SPEDIZIONE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_fornitore\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_fornitore\",\"relationName\":\"tbl_fornitoreTotbl_fornitura\",\"relationFromFields\":[\"P_IVA\"],\"relationToFields\":[\"P_IVA\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_prodotto\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_prodotto\",\"relationName\":\"tbl_fornituraTotbl_prodotto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_ordine\":{\"dbName\":null,\"fields\":[{\"name\":\"ID_ORDINE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FATTURA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUMERO_ORDINE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_CARRELLO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"INDIRIZZO_SPEDIZIONE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STATO_ORDINE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"non gestito\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_carrello\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_carrello\",\"relationName\":\"tbl_carrelloTotbl_ordine\",\"relationFromFields\":[\"ID_CARRELLO\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_prodotto\":{\"dbName\":null,\"fields\":[{\"name\":\"NOME_PRODOTTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PREZZO_PRODOTTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QUANTITA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PROVENIENZA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_FORNITURA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_PRODOTTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_fornitura\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_fornitura\",\"relationName\":\"tbl_fornituraTotbl_prodotto\",\"relationFromFields\":[\"ID_FORNITURA\"],\"relationToFields\":[\"ID_FORNITURA\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_spedizione\":{\"dbName\":null,\"fields\":[{\"name\":\"NUMERO_TRACCIAMENTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"P_IVA_CORRIERE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUMERO_ORDINE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_PARTENZA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_ARRIVO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tbl_corriere\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_corriere\",\"relationName\":\"tbl_corriereTotbl_spedizione\",\"relationFromFields\":[\"P_IVA_CORRIERE\"],\"relationToFields\":[\"P_IVA\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Profile\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Post\",\"relationName\":\"PostToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Post\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viewCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PostToUser\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/client/schema.prisma")
