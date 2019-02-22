const readline = require('readline-sync');

function print (msg){
    console.log(msg);
}

function question(msg) {
    return readline.question(msg);
}

function clear () {
    process.stdout.write('\033c');
}

print("당신은 유령의 집 앞에 서 있습니다.");
print("유령의 집에 들어가시겠습니까?");
print("1. 들어간다");
print("2. 들어가지 않는다");

if (question("당신의 선택은?") == "1") {
    clear();
    print("으스스한 기운이 당신을 감쌉니다.");
} else {
    clear();
    print("용기없는 자에게 모험은 사치입니다. 당신은 죽었습니다.");
    process.exit();
}

print("정면에 계단만이 보일 뿐 다른 통로는 보이지 않습니다.");

print("1. 위로 올라간다.");
print("2. 지하로 향한다.");

if (question("당신의 선택은?") == "1") {
    clear();
    print("아무리 올라가도 끝나지 않는 계단이 이어집니다. 당신은 좌절 속에서 굶어 죽었습니다.");
    process.exit();
}else {
    clear();
    print("어두컴컴한 지하입니다. '찍찍' 쥐소리만 들릴 뿐, 인기척은 전혀 느껴지지 않습니다.");
} 

// hidden 선택지 넣어놔도 재밌을 듯. 보이지 않는 선택지이지만 선택되었을 때 결과 출력.
// or 비밀번호 입력하면 결과 보여주도록. 5번 틀리면 죽고 exit
print("당신은 주머니를 뒤져 성냥을 꺼냈습니다.");
print("금방 꺼질 듯한 불빛에 의지한 채 주위를 둘러보았더니!");
print("심상치 않은 물건이 몇 개 보입니다. 어떤 것을 살펴보시겠습니까?")

print("1. 열쇠");
print("2. ");
print("3. ");

if(question("당신의 선택은?") == "1") {
    clear();
    print("");
}else if(question("당신의 선택은?") == "2") {
    clear();
    print("");
}else {
    clear();
    print("");
}