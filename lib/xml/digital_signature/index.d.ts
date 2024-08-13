type DigitalSignatureDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DigitalSignatureDocument;
  name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  sign_date: XmlElem<Date | null>;
  is_signed: XmlElem<boolean>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  sign_open: XmlElem<string | null>;
  sign_encrypted: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type DigitalSignatureDocument = XmlDocument & {
  TopElem: DigitalSignatureDocumentTopElem;
  digital_signature: DigitalSignatureDocumentTopElem;
  DocDesc(): string;
};
