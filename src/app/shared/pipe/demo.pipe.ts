import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "demo",
})
export class DemoPipe implements PipeTransform {
  transform(s: string, ...args: any): any {
    if (args[0] == "upper") {
      return s.toUpperCase();
    } else return s.toLocaleLowerCase();
  }
}
