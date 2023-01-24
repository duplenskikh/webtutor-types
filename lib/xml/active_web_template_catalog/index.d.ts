type ActiveWebTemplateCatalogDocumentTopElem = XmlTopElem & { Doc: ActiveWebTemplateCatalogDocument } & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  access_level: XmlElem<number>;
  access_role: XmlElem<string>;
  mode: XmlElem<string>;
  web_design_id: XmlElem<number>;
  site_id: XmlElem<number>;
  hash: XmlElem<string>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
}

type ActiveWebTemplateCatalogDocument = XmlDocument & { TopElem: ActiveWebTemplateCatalogDocumentTopElem; };
