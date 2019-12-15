import {NameValueItem} from "../types/NameValueItem";

export function createNameValueList(list : string[]) : NameValueItem[] {
    var nameValueItemList : NameValueItem[] = [];
    list.map( line => {
            console.log(line);
            let lineItems : string[] = line.split('=');
            nameValueItemList.push({name : lineItems[0], value : lineItems[1]})
        });
    return nameValueItemList;
}