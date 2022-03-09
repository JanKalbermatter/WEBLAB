import { Pipe, PipeTransform } from '@angular/core';
/*
 * Parse the ChampionName so the image can be loaded
 * Usage:
 *   value | championNamePipe
 * Example:
 *   {{ "Master Yi" | championNamePipe }}
 *   formats to: MasterYi
*/
@Pipe({name: 'championNamePipe'})
export class ChampionNamePipe implements PipeTransform {
  transform(value: string,): string {
    switch(value) {
        case "Wukong": 
            return "MonkeyKing"
        case "Rek'Sai": 
            return "RekSai"
        case "Kog'Maw": 
            return "KogMaw"
        case "Nunu & Willump": 
            return "Nunu"
        default: 
            if(value.indexOf("'") != -1) {
                const splitVal = value.split("'")
                value = splitVal[0] + splitVal[1].toLowerCase()
            }

            const cleanValue = value.replace(" ", "").replace(".", "").replace("'", "")
            let secondPart = ""
            if(value.indexOf(" ") != -1) {
                secondPart = cleanValue.slice(1)
            } else {
                
                secondPart = cleanValue.slice(1).toLowerCase()
            }
            const firstPart = value.charAt(0).toUpperCase()
            return firstPart + secondPart;
    }
    
  }
}