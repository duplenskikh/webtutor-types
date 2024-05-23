interface CustomResultDocumentInstPack {
  id: XmlElem<string>;
}

interface CustomResultDocumentInstCustomPack {
  id: XmlElem<string>;
  name: XmlElem<string>;
  lng_id: XmlElem<string>;
  url: XmlElem<string>;
}

type CustomResultDocumentTopElem = XmlTopElem &
SelectServerBase & {
  Doc: CustomResultDocument;
  inst_packs_ref: XmlElem<unknown>;
  inst_packs: XmlMultiElem<CustomResultDocumentInstPack>;
  inst_custom_packs: XmlMultiElem<CustomResultDocumentInstCustomPack>;
  server_custom_url: XmlElem<string>;
};

type CustomResultDocument = XmlDocument & {
  TopElem: CustomResultDocumentTopElem;
  custom_result: CustomResultDocumentTopElem;
  OnInit(): void;
};
