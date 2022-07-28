type ObjectVersionDocumentTopElem = XmlTopElem & { Doc: ObjectVersionDocument } & 
  PersonFillingBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  status?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_modification_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  object_xml?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type ObjectVersionDocument = XmlDocument & { TopElem: ObjectVersionDocumentTopElem; };
