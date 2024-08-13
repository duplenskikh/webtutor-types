type ScriptQueueElemDocumentTopElem = XmlTopElem & {
  Doc: ScriptQueueElemDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  start_time: XmlElem<Date | null>;
  finish_time: XmlElem<Date | null>;
  delay: XmlElem<number | null>;
  completed: XmlElem<boolean>;
  error: XmlElem<string | null>;
  result: XmlElem<string | null>;
  delete_automatically: XmlElem<boolean>;
  obj: XmlElem<unknown | null>;
  run_code: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ScriptQueueElemDocument = XmlDocument & {
  TopElem: ScriptQueueElemDocumentTopElem;
  script_queue_elem: ScriptQueueElemDocumentTopElem;
  DocDesc(): string;
};
