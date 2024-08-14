const element = CreateDynamicElem("name", "type") as XmlElem<number>;
const clonedElement = element.CloneWithoutForm();
clonedElement.Name;

const foundElement = clonedElement.GetChildIndexByValue(true);

if (foundElement !== -1) {
  foundElement.Name;
}
