type ScriptQueueElemDocumentTopElem = XmlTopElem & { Doc: ScriptQueueElemDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  start_time: XmlElem<Date>;
  finish_time: XmlElem<Date>;
  delay: XmlElem<number>;
  completed: XmlElem<boolean>;
  error: XmlElem<string>;
  result: XmlElem<string>;
  delete_automatically: XmlElem<boolean>;
  obj: XmlElem<unknown>;
  run_code: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type ScriptQueueElemDocument = XmlDocument & { TopElem: ScriptQueueElemDocumentTopElem; };
