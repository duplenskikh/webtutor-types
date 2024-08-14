type WebRuleCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  url: XmlElem<string | null>;
  /** Включен */
  is_enabled: XmlElem<boolean | null>;
  /** Является шаблоном */
  is_pattern: XmlElem<boolean | null>;
  /** Использует подстановки */
  use_matches: XmlElem<boolean | null>;
  redirect_url: XmlElem<string | null>;
  redirect_type: XmlElem<number | null>;
  redirect_web_mode_id: XmlElem<number | null, WebModeCatalogDocumentTopElem>;
  weight: XmlElem<number | null>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Является системным */
  is_std: XmlElem<boolean | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
