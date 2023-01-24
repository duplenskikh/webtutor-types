type CertificateTypeCatalogDocumentTopElem = XmlTopElem & { Doc: CertificateTypeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  education_org_id: XmlElem<number>;
  required_quantity: XmlElem<number>;
  duration: XmlElem<number>;
  forever: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CertificateTypeCatalogDocument = XmlDocument & { TopElem: CertificateTypeCatalogDocumentTopElem; };
