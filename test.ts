
function main() {
  const doc = tools.open_doc<CareerReserveDocument>(1);
  const activity = ArrayOptFind(doc?.TopElem.tasks!, "some_expression");

  const str = "hello";

  if (IsArray(str)) {
    return str;
  }

  return str;
}
