import { NAME_OF_DAY, CLASS_MODIFIERS } from "../../defaultSettings";

export function colorForThisDayOfTheWeek(nameDay: string): string {
  switch (nameDay) {
    case NAME_OF_DAY.MONDAY:
      return CLASS_MODIFIERS.ORANGE;
    case NAME_OF_DAY.TUESDAY:
      return CLASS_MODIFIERS.YELLOW;
    case NAME_OF_DAY.WEDNESDAY:
      return CLASS_MODIFIERS.GREEN;
    case NAME_OF_DAY.THURSDAY:
      return CLASS_MODIFIERS.LIGHT_BLUE;
    case NAME_OF_DAY.FRIDAY:
      return CLASS_MODIFIERS.BLUE;
    case NAME_OF_DAY.SATURDAY:
      return CLASS_MODIFIERS.PURPLE;
    default:
      return "";
  }
}
