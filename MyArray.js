public class Recursion{

public static int sum(int num){
if(num > 0){
return num + sum(num - 1);
}else{
return 0;
}
}

public static void main(String...args){
System.out.print(sum(10));
} 







}