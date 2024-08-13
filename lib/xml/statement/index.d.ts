interface StatementObjectBaseVerb {
  id: XmlElem<string | null>;
  display: XmlElem<string | null>;
}

interface StatementObjectBase {
  actor: XmlElem<ActorBase | null>;
  verb: XmlElem<StatementObjectBaseVerb | null>;
}

interface StatementDocumentRequestObjectDefinition {
  name: XmlElem<string | null>;
  description: XmlElem<string | null>;
}

interface StatementDocumentRequestObjectObjectDefinition {
  name: XmlElem<string | null>;
  description: XmlElem<string | null>;
}

interface StatementDocumentRequestObjectObject extends StatementObjectBase {
  id: XmlElem<string | null>;
  objectType: XmlElem<string | null>;
  definition: XmlElem<StatementDocumentRequestObjectObjectDefinition | null>;
}

interface StatementDocumentRequestObject extends StatementObjectBase {
  id: XmlElem<string | null>;
  objectType: XmlElem<string | null>;
  definition: XmlElem<StatementDocumentRequestObjectDefinition | null>;
  object: XmlElem<StatementDocumentRequestObjectObject | null>;
}

interface StatementDocumentRequestContext {
  registration: XmlElem<string | null>;
  instructor: XmlElem<string | null>;
  team: XmlElem<string | null>;
  revision: XmlElem<string | null>;
  platform: XmlElem<string | null>;
  language: XmlElem<string | null>;
  statement: XmlElem<string | null>;
}

interface StatementDocumentRequestResultScore {
  max: XmlElem<number | null>;
  min: XmlElem<number | null>;
  raw: XmlElem<number | null>;
  scaled: XmlElem<number | null>;
}

interface StatementDocumentRequestResultExtension {
  id: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface StatementDocumentRequestResult {
  score: XmlElem<StatementDocumentRequestResultScore | null>;
  success: XmlElem<boolean | null>;
  completion: XmlElem<boolean | null>;
  response: XmlElem<string | null>;
  duration: XmlElem<string | null>;
  extensions: XmlMultiElem<StatementDocumentRequestResultExtension | null>;
}

interface StatementDocumentRequestAttachment {
  sha2: XmlElem<string | null>;
  usageType: XmlElem<string | null>;
  display: XmlElem<string | null>;
  description: XmlElem<string | null>;
  contentType: XmlElem<string | null>;
  length: XmlElem<number | null>;
  fileUrl: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
}

interface StatementDocumentRequest extends StatementObjectBase {
  json_str: XmlElem<string | null>;
  agent_json_str: XmlElem<string | null>;
  timestamp: XmlElem<Date | null>;
  object: XmlElem<StatementDocumentRequestObject | null>;
  context: XmlElem<StatementDocumentRequestContext | null>;
  result: XmlElem<StatementDocumentRequestResult | null>;
  attachments: XmlMultiElem<StatementDocumentRequestAttachment | null>;
}

type StatementDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase & {
  Doc: StatementDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  voited: XmlElem<boolean | null>;
  voided: XmlElem<boolean | null>;
  request: XmlElem<StatementDocumentRequest | null>;
  statement_ref_id(): unknown;
  learning_storage_id: XmlElem<number | null, LearningStorageCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  activity_code: XmlElem<string | null>;
  activity_name: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_name: XmlElem<string | null>;
  verb_name: XmlElem<string | null>;
  success: XmlElem<boolean | null>;
  completion: XmlElem<boolean | null>;
  response: XmlElem<string | null>;
  duration: XmlElem<string | null>;
  processed: XmlElem<boolean | null>;
  create_date: XmlElem<Date | null>;
  create_ticks: XmlElem<number | null>;
  version: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementDocument = XmlDocument & {
  TopElem: StatementDocumentTopElem;
  statement: StatementDocumentTopElem;
  DocDesc(): string;
};
