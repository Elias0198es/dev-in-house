// See https://aka.ms/new-console-template for more information
namespace GeraEstoque
{
    class Program
    {
        public static void Main()
        {
            int opcao;

            System.Console.WriteLine("Seja bem vindo ao GeraEstoque 1.0");
            System.Console.WriteLine(" 1 Cadastrar produto \r\n 2 Consultar produto \r\n 3 Modificar produto \r\n 4 Excluir produto \r\n 0 Sair \r\n Digite a opção:");
            opcao = Convert.ToInt32(Console.ReadLine());

        }
    }
}
