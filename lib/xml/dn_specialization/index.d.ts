type DnSpecializationDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: DnSpecializationDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  speciality_id: XmlElem<number, DnSpecialCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnSpecializationDocument = XmlDocument & {
  TopElem: DnSpecializationDocumentTopElem;
  dn_specialization: DnSpecializationDocumentTopElem;
  DocDesc(): string;
};
