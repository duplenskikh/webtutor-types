type EventTypeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  simpl_custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  online: XmlElem<boolean>;
  auto_start: XmlElem<boolean>;
  can_use_camera: XmlElem<boolean>;
  can_use_microphone: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
