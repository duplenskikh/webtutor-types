type VclassSettingCatalogDocumentTopElem = XmlTopElem & { Doc: VclassSettingCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  event_id: XmlElem<number>;
  conversation_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type VclassSettingCatalogDocument = XmlDocument & { TopElem: VclassSettingCatalogDocumentTopElem; };
