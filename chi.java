 class Chi{
public static void main(String...args){
java.util.Scanner input = new java.util.Scanner(System.in);

System.out.print("Enter a five-digits number: ");
String number = input.nextLine();
for(int count = number.length()-1; count >=1; count--){
System.out.println(number.charAt(count) + " ");
}

}
}