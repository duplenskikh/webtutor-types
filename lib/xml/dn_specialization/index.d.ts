type DnSpecializationDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: DnSpecializationDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  speciality_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnSpecializationDocument = XmlDocument & {
  TopElem: DnSpecializationDocumentTopElem;
  dn_specialization: DnSpecializationDocumentTopElem;
  DocDesc(): string;
};
