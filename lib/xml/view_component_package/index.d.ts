type ViewComponentPackageDocumentTopElem = XmlTopElem &
MsViewCatalogBase &
ViewColumnsBase & {
  Doc: ViewComponentPackageDocument;
  select_type_id: XmlElem<string>;
};

type ViewComponentPackageDocument = XmlDocument & {
  TopElem: ViewComponentPackageDocumentTopElem;
  view_component_package: ViewComponentPackageDocumentTopElem;
  OnInit(): void;
};
