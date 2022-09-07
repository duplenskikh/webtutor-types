type ReprimandDocumentTopElem = XmlTopElem & { Doc: ReprimandDocument } & 
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  reprimand_type_id: XmlElem<number>;
  person_id: XmlElem<number>;
  date: XmlElem<Date>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type ReprimandDocument = XmlDocument & {
  TopElem: ReprimandDocumentTopElem;
};
