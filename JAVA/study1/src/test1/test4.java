package test1;

import java.util.Scanner;

public class test4 {
    public static void main(String[] args) {
        /* int num = 100;
        System.out.println("한 줄씩 출력 " + num);
        System.out.print("줄바꿈 없이 출력 " + num);
        System.out.print(" 이어서 나온다");
        System.out.printf(" 포맷 지정 %d", num); */
        // %d 정수, %f 실수, %c 문자, %s 문자열
        // \n 개행, \t 탭, \' \" \r 캐리지 리턴, \b 백스페이스

        /* int a = 10, b = 20;
        float c = 3.12345f;
        System.out.printf(" %d %d ", a, b);
        System.out.printf(" %f %d \n", c, a);

        System.out.printf(" 실수는 %.1f이다 \n", c);
        System.out.printf(" 10 + 20 = %d ", 10 + 20); */

        Scanner sc = new Scanner(System.in);  // 자바에서 입력받으려면 Scanner 객체 필요

        /* System.out.println("정수 두 개 입력 (하나 입력하고 엔터키 눌러서 두 번째 입력)");
        int num1 = sc.nextInt();
        short num2 = sc.nextShort();
        System.out.println(num1 + " " + num2);

        System.out.println("이름 입력: ");
        String name = sc.next();
        System.out.println("이름은 " + name); */

        // 사각형의 너비와 높이를 입력받아 넓이 출력
        /* System.out.println("너비와 높이 입력");
        int width = sc.nextInt();
        short height = sc.nextShort();
        System.out.println(width * height); */

        // 국어 영어 역사 점수를 입력받아서 총점과 평균을 출력
        System.out.print("국어 점수 ");
        int ko = sc.nextInt();
        System.out.print("영어 점수 ");
        int en = sc.nextInt();
        System.out.print("역사 점수 ");
        int his = sc.nextInt();
        System.out.print("총점: " + (ko + en + his));
        System.out.print(" 평균: " + (ko + en + his) / 3);
    }
}
