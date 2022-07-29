const remoteSecurityProfileDocument: RemoteSecurityProfileDocument | undefined = tools.open_doc(1);
let methodAccess;

if (remoteSecurityProfileDocument !== undefined) {
  remoteSecurityProfileDocument.TopElem.method_name;
}
