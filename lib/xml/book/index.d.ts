type BookDocumentTopElem = XmlTopElem &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
CustomElemsBase & {
  Doc: BookDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  library_section_id: XmlElem<number>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type BookDocument = XmlDocument & {
  TopElem: BookDocumentTopElem;
};
