type ProfessionalAreaDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProfessionalAreaDocument;
  parent_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  professional_area_type_id: XmlElem<number | null, ProfessionalAreaTypeCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type ProfessionalAreaDocument = XmlDocument & {
  TopElem: ProfessionalAreaDocumentTopElem;
  professional_area: ProfessionalAreaDocumentTopElem;
  DocDesc(): string;
};
