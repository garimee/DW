package test1;

public class test2 {
    public static void main(String[] args) {
        // 형 변환 - 자동형변환, 강제형변환
        float num1 = 10;  // 자동형변환 -> 10.0f
        int a = 20;
        float b = a;  // 자동형변환 - 작은 범위에서 큰 범위로 저장될 때

        System.out.println(a + " " + b);

        long num3 = 10L;
        int num4 = (int)num3;  // 큰 범위에서 작은 범위로 데이터 이동 시 강제형변환
        System.out.println(num3 + " " + num4);

        float num5 = 13.1234f;
        int num6 = (int)num5;
        System.out.println(num5 + " " + num6);

        double num10 = 1032.234F;
        float num11 = (float)num10;

        int num20 = 65000;
        char ch = (char)num20;
        System.out.println(ch + " " + num20);
    }
}
