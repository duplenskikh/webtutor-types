type CheckScheduleDocumentTopElem = XmlTopElem & { Doc: CheckScheduleDocument } & 
  AdminAccessBase &
  WebVariablesBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_enabled?: XmlElem<boolean>;
  type_id?: XmlElem<string>;
  library_url?: XmlElem<string>;
  comment?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
}

type CheckScheduleDocument = XmlDocument & { TopElem: CheckScheduleDocumentTopElem; };
