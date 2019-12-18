import React from "react";
import axios from "axios";

const apiClient = axios.create();

export async function invokedApi(path : string): Promise<any> {

    return await axios.get<any>('http://localhost:8080/'+path).then(resp => resp.data);

}