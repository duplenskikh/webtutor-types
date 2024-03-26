interface ObjectivesBase {
  candidate: XmlElem<string>;
}

interface ImageBase {
  name: XmlElem<string>;
  data: XmlElem<Binary>;
  location: XmlElem<string, typeof common.material_locations>;
}

interface RubricBase {
  candidate: XmlElem<string>;
  image: XmlElem<ImageBase>;
}
