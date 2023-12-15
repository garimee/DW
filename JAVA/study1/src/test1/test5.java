package test1;

import java.util.Scanner;

public class test5 {
    public static void main(String[] args) {
        // int num1 = 10;
        // int num2 = 40;

        // if(num1 > num2) {
        //     System.out.println("큰 숫자: " + num1);
        // } else {
        //     System.out.println("큰 숫자: " + num2);
        // }

        Scanner sc = new Scanner(System.in);
        /* int tall = sc.nextInt();
        // 키가 130 이상만 바이킹을 탈 수 있다
        if(tall >= 130) {
            System.out.println("바이킹 탑승 가능");
        } else {
            System.out.println("바이킹 탑승 불가");
        } */

        System.out.println("이름 입력: ");
        String name = sc.nextLine();
        if(name.equals("이순신")) {
            System.out.println("올바르게 입력했습니다.");
        } else
        System.out.println("잘못 입력했습니다.");

        if(name.contains("순")) {
            
        }

        if(name.indexOf("신") != -1)
            System.out.println("신이 있습니다.");
        else 
            System.out.println("신이 있지 않습니다.");
    }
    
}
