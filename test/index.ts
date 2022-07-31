const remoteSecurityProfileDocument = tools.open_doc<RemoteActionDocument>(1);
remoteSecurityProfileDocument?.TopElem.comment.Value;

if (remoteSecurityProfileDocument !== undefined) {
  const rspTopElem: RemoteActionDocumentTopElem = remoteSecurityProfileDocument.TopElem;
  rspTopElem.code.Value = "asds";
  rspTopElem.method_name;
}
