import { JsonObject } from "../Core/Json";
import anyTrait from "./anyTrait";
import ModelTraits from "./ModelTraits";
import primitiveTrait from "./primitiveTrait";

export default class CkanResourceFormatTraits extends ModelTraits {
  @primitiveTrait({
    name: "ID",
    description: "The ID of this distribution format.",
    type: "string"
  })
  id?: string;

  @primitiveTrait({
    name: "Format Regular Expression",
    description:
      "A regular expression that is matched against the distribution's format.",
    type: "string"
  })
  formatRegex?: string;

  @anyTrait({
    name: "Definition",
    description:
      "The catalog member definition to use when the URL and Format regular expressions match. The `URL` property will also be set."
  })
  definition?: JsonObject | null;

  static isRemoval(format: CkanResourceFormatTraits) {
    return format.definition === null;
  }
}