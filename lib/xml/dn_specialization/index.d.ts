type DnSpecializationDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: DnSpecializationDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  speciality_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnSpecializationDocument = XmlDocument & {
  TopElem: DnSpecializationDocumentTopElem;
  dn_specialization: DnSpecializationDocumentTopElem;
  DocDesc(): string;
};
