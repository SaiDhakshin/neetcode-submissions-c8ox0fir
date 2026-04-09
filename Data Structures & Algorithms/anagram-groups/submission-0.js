class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        let res = [];

        for(let i = 0; i < strs.length; i++){
            let anagram = strs[i].split('').sort().join('')
            if(map.has(anagram)){
                map.get(anagram).push(strs[i])
                // console.log(map.get(anagram))
            } else {
                map.set(anagram, [strs[i]])
                // console.log(map)
            }
        }
        for(let v of map){
            console.log(v[1]);
            res.push(v[1]);
        }

        return res;
    }
}
