function solution(x, n) {
    var answer = [];
    i = 1
    while (i <= n) {
        answer.push(x * i)
        
        i++
    }
    
    return answer;
}