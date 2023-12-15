package test1;

public class test3 {
    public static void main(String[] args) {
        // 비트연산자
        System.out.println(10 & 34); // and 비트연산자
        System.out.println(14 | 12);  // or 비트연산자
        System.out.println(~13);  // ~ : not 비트연산자 
        System.out.println(~-14);
        System.out.println(29 ^ 13);  // ^ : xor 비트연산자 : 서로 같을 땐 거짓, 다를 땐 참

        // 쉬프트 비트연산자
        System.out.println(10 << 2); // << 왼쪽 쉬프트 연산자
        System.out.println(24 >> 3);  // >> 오른쪽 쉬프트 연산자
        System.out.println();


    }
}