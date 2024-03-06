type ProfessionalAreaDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProfessionalAreaDocument;
  parent_id: XmlElem<number, ProfessionalAreaCatalogDocumentTopElem>;
  professional_area_type_id: XmlElem<number, ProfessionalAreaTypeCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type ProfessionalAreaDocument = XmlDocument & {
  TopElem: ProfessionalAreaDocumentTopElem;
  professional_area: ProfessionalAreaDocumentTopElem;
  DocDesc(): unknown;
};
