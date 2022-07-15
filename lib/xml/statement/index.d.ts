interface StatementRequestAttachment {
  sha2?: XmlElem<string>;
  usageType?: XmlElem<string>;
  display?: XmlElem<string>;
  description?: XmlElem<string>;
  contentType?: XmlElem<string>;
  length?: XmlElem<number>;
  fileUrl?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface StatementRequestContext {
  registration?: XmlElem<string>;
  instructor?: XmlElem<string>;
  team?: XmlElem<string>;
  revision?: XmlElem<string>;
  platform?: XmlElem<string>;
  language?: XmlElem<string>;
  statement?: XmlElem<string>;
}

interface StatementRequestResultScore {
  max?: XmlElem<number>;
  min?: XmlElem<number>;
  raw?: XmlElem<number>;
  scaled?: XmlElem<number>;
}

interface StatementRequestResult {
  success?: XmlElem<boolean>;
  completion?: XmlElem<boolean>;
  response?: XmlElem<string>;
  duration?: XmlElem<string>;
  score?: XmlElem<StatementRequestResultScore>;
}

interface StatementRequestObjectDefinition {
  name?: XmlElem<string>;
  description?: XmlElem<string>;
}

interface StatementRequestObjectObjectDefinition {
  name?: XmlElem<string>;
  description?: XmlElem<string>;
}

interface StatementRequestObjectObject extends StatementObjectBase {
  id?: XmlElem<string>;
  objectType?: XmlElem<string>;
  definition?: XmlElem<StatementRequestObjectObjectDefinition>;
}

interface StatementRequestObject extends StatementObjectBase {
  id?: XmlElem<string>;
  objectType?: XmlElem<string>;
  definition?: XmlElem<StatementRequestObjectDefinition>;
  object?: XmlElem<StatementRequestObjectObject>;
}

interface StatementRequest extends StatementObjectBase {
  json_str?: XmlElem<string>;
  agent_json_str?: XmlElem<string>;
  timestamp?: XmlElem<Date>;
  attachments?: XmlMultiElem<StatementRequestAttachment>;
  context?: XmlElem<StatementRequestContext>;
  result?: XmlElem<StatementRequestResult>;
  object?: XmlElem<StatementRequestObject>;
}

interface StatementTopElem extends XmlTopElem<StatementDocument>, PersonFillingBase, FileListBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  voited?: XmlElem<boolean>;
  voided?: XmlElem<boolean>;
  learning_storage_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  activity_id?: XmlElem<number>;
  activity_code?: XmlElem<string>;
  activity_name?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  object_name?: XmlElem<string>;
  verb_name?: XmlElem<string>;
  success?: XmlElem<boolean>;
  completion?: XmlElem<boolean>;
  response?: XmlElem<string>;
  duration?: XmlElem<string>;
  processed?: XmlElem<boolean>;
  create_date?: XmlElem<Date>;
  create_ticks?: XmlElem<number>;
  version?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  request?: XmlElem<StatementRequest>;
  name?(): any;
  statement_ref_id?(): any;
}

type StatementDocument = XmlDocument<StatementTopElem>;
