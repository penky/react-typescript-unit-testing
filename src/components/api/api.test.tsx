import axios from 'axios';
import * as api from "./api";

jest.mock('axios');

test('invokes and expects then', () => {
        let val = {data: {result : "hello"}};

        axios.get.mockResolvedValue(val);

        const aPromise = api.invokedApi("success/");

        return aPromise.then(aResponse => expect(aResponse.result).toMatch("hello"));
});