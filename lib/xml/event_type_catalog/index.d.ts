type EventTypeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  simpl_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  online: XmlElem<boolean>;
  auto_start: XmlElem<boolean>;
  can_use_camera: XmlElem<boolean | null>;
  can_use_microphone: XmlElem<boolean | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
