type AccessRoleCatalogDocumentTopElem = XmlTopElem &
AccessRoleBase & {
  read_only: XmlElem<boolean | null>;
};
