
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
