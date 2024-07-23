import { checkUrl } from '../js/urlChecker'
test("CheckValadionUrl", ()=>{
    expect(checkUrl('https://www.udacity.com')).toBe(true)
});