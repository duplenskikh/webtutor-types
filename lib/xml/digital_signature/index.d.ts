type DigitalSignatureDocumentTopElem = XmlTopElem & { Doc: DigitalSignatureDocument } & 
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  name?(): string;
  person_id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  sign_date?: XmlElem<Date>;
  is_signed?: XmlElem<boolean>;
  custom_web_template_id?: XmlElem<number>;
  sign_open?: XmlElem<string>;
  sign_encrypted?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type DigitalSignatureDocument = XmlDocument & { TopElem: DigitalSignatureDocumentTopElem; };
