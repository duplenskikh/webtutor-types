type SubstitutionCatalogDocumentTopElem = XmlTopElem & { Doc: SubstitutionCatalogDocument } & 
ObjectTypeBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  status: XmlElem<string>;
  substitution_type_id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  create_date: XmlElem<Date>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SubstitutionCatalogDocument = XmlDocument & { TopElem: SubstitutionCatalogDocumentTopElem; };
