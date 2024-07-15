// for문-> if문써서 대문자면 소문자로  소문자면 대문자로




function solution(my_string) {
    var swapString = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] ===my_string[i].toUpperCase()) {
            swapString += my_string[i].toLowerCase();
        } else {
            swapString += my_string[i].toUpperCase();

        }
    }
    return swapString;
}