type DigitalSignatureDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DigitalSignatureDocument;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  create_date: XmlElem<Date>;
  sign_date: XmlElem<Date>;
  is_signed: XmlElem<boolean>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  sign_open: XmlElem<string>;
  sign_encrypted: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type DigitalSignatureDocument = XmlDocument & {
  TopElem: DigitalSignatureDocumentTopElem;
  digital_signature: DigitalSignatureDocumentTopElem;
  DocDesc(): string;
};
