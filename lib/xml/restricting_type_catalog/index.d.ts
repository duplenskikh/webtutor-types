type RestrictingTypeCatalogDocumentTopElem = XmlTopElem & { Doc: RestrictingTypeCatalogDocument } & {
  id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  period_type_id: XmlElem<string>;
  state_id: XmlElem<string>;
}

type RestrictingTypeCatalogDocument = XmlDocument & { TopElem: RestrictingTypeCatalogDocumentTopElem; };
