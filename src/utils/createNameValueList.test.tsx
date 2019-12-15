import {createNameValueList} from "./createNameValueList";
import {NameValueItem} from "../types/NameValueItem";

describe('createList', () => {
    let nameValueItem : NameValueItem[] = [{name : 'date',value:'today'}];
    it('does something', () => expect((createNameValueList(["date=today"]))).toMatchObject(nameValueItem))
});