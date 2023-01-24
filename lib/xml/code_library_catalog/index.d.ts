type CodeLibraryCatalogDocumentTopElem = XmlTopElem & { Doc: CodeLibraryCatalogDocument } & 
ObjectCodeNameBase & {
  code_type: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CodeLibraryCatalogDocument = XmlDocument & { TopElem: CodeLibraryCatalogDocumentTopElem; };
