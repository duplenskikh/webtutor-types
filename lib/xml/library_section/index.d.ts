interface LibrarySectionDocumentAdministrator extends PersonFillingBase {
  person_id: XmlElem<number>;
}

type LibrarySectionDocumentTopElem = XmlTopElem & { Doc: LibrarySectionDocument } & 
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  parent_object_id: XmlElem<number>;
  position: XmlElem<number>;
  link: XmlElem<string>;
  web_view: XmlElem<string>;
  administrators: XmlMultiElem<LibrarySectionDocumentAdministrator>;
  external_id: XmlElem<string>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
}

type LibrarySectionDocument = XmlDocument & { TopElem: LibrarySectionDocumentTopElem; };
