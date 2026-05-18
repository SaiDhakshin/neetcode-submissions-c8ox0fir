class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        console.log(tokens);
        const stack = [];
        let set = new Set(['+','-','*','/']);

        for(let i = 0; i < tokens.length; i++){
            if(set.has(tokens[i])){
                let pop1 = stack.pop();
                let pop2 = stack.pop();
                console.log('operation token', tokens[i], pop1, pop2);
                switch(tokens[i]){
                    case '+':
                        stack.push(Number(pop1) + Number(pop2));
                        break;
                    case '-':
                        stack.push((Number(pop2) - Number(pop1)));
                        break;
                    case '*':
                        stack.push(Number(pop1) * Number(pop2));
                        break;
                    case '/':
                        stack.push(Math.trunc(Number(pop2) / Number(pop1)));
                        break;
                }
            } else {
                stack.push(tokens[i]);
                console.log('stack push', stack)
            }

        }

        return stack.pop();


    }
}
