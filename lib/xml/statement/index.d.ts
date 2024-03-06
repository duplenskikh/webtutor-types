interface StatementObjectBaseVerb {
  id: XmlElem<string>;
  display: XmlElem<string>;
}

interface StatementObjectBase {
  actor: XmlElem<ActorBase>;
  verb: XmlElem<StatementObjectBaseVerb>;
}

interface StatementDocumentRequestObjectDefinition {
  name: XmlElem<string>;
  description: XmlElem<string>;
}

interface StatementDocumentRequestObjectObjectDefinition {
  name: XmlElem<string>;
  description: XmlElem<string>;
}

interface StatementDocumentRequestObjectObject extends StatementObjectBase {
  id: XmlElem<string>;
  objectType: XmlElem<string>;
  definition: XmlElem<StatementDocumentRequestObjectObjectDefinition>;
}

interface StatementDocumentRequestObject extends StatementObjectBase {
  id: XmlElem<string>;
  objectType: XmlElem<string>;
  definition: XmlElem<StatementDocumentRequestObjectDefinition>;
  object: XmlElem<StatementDocumentRequestObjectObject>;
}

interface StatementDocumentRequestContext {
  registration: XmlElem<string>;
  instructor: XmlElem<string>;
  team: XmlElem<string>;
  revision: XmlElem<string>;
  platform: XmlElem<string>;
  language: XmlElem<string>;
  statement: XmlElem<string>;
}

interface StatementDocumentRequestResultScore {
  max: XmlElem<number>;
  min: XmlElem<number>;
  raw: XmlElem<number>;
  scaled: XmlElem<number>;
}

interface StatementDocumentRequestResultExtension {
  id: XmlElem<string>;
  value: XmlElem<string>;
}

interface StatementDocumentRequestResult {
  score: XmlElem<StatementDocumentRequestResultScore>;
  success: XmlElem<boolean>;
  completion: XmlElem<boolean>;
  response: XmlElem<string>;
  duration: XmlElem<string>;
  extensions: XmlMultiElem<StatementDocumentRequestResultExtension>;
}

interface StatementDocumentRequestAttachment {
  sha2: XmlElem<string>;
  usageType: XmlElem<string>;
  display: XmlElem<string>;
  description: XmlElem<string>;
  contentType: XmlElem<string>;
  length: XmlElem<number>;
  fileUrl: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
}

interface StatementDocumentRequest extends StatementObjectBase {
  json_str: XmlElem<string>;
  agent_json_str: XmlElem<string>;
  timestamp: XmlElem<Date>;
  object: XmlElem<StatementDocumentRequestObject>;
  context: XmlElem<StatementDocumentRequestContext>;
  result: XmlElem<StatementDocumentRequestResult>;
  attachments: XmlMultiElem<StatementDocumentRequestAttachment>;
}

type StatementDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase & {
  Doc: StatementDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): unknown;
  voited: XmlElem<boolean>;
  voided: XmlElem<boolean>;
  request: XmlElem<StatementDocumentRequest>;
  statement_ref_id(): unknown;
  learning_storage_id: XmlElem<number, LearningStorageCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  activity_id: XmlElem<number, ActivityCatalogDocumentTopElem>;
  activity_code: XmlElem<string>;
  activity_name: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  verb_name: XmlElem<string>;
  success: XmlElem<boolean>;
  completion: XmlElem<boolean>;
  response: XmlElem<string>;
  duration: XmlElem<string>;
  processed: XmlElem<boolean>;
  create_date: XmlElem<Date>;
  create_ticks: XmlElem<number>;
  version: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type StatementDocument = XmlDocument & {
  TopElem: StatementDocumentTopElem;
  statement: StatementDocumentTopElem;
  DocDesc(): unknown;
};
