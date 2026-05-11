class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length){return false;}
        let string1 = new Array(26).fill(0);
        let string2 = new Array(26).fill(0);
        let matches = 0;

        for(let i = 0; i < s1.length; i++){
            string1[s1.charCodeAt(i) - 97]++;
            string2[s2.charCodeAt(i) - 97]++;
        }
        // for(let l of s2){
        //     string2[l.charCodeAt(0) - 97]++;
        // }

        for(let i = 0; i < 26; i++){
            if(string1[i] == string2[i]){
                matches++;
            }
        }

        let l = 0;
        for(let r = s1.length; r < s2.length; r++){
            if(matches == 26){
                return true;
            }

            let index = s2.charCodeAt(r) - 97;
            string2[index]++;
            console.log('right',string1,string2);

            if(string1[index] == string2[index]){
                matches++;
            } else if(string1[index] + 1 == string2[index]){
                matches--;
            }

            index = s2.charCodeAt(l) - 97;
            string2[index]--;
            console.log('rileftght',string1,string2);
            if(string1[index]==string2[index]){
                matches++;
            } else if(string1[index] - 1 == string2[index]){
                matches--;
            }
            l++;
        }
        console.log(string2);
        return matches == 26;
    }
}

