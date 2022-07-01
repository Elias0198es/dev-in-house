// See https://aka.ms/new-console-template for more information
namespace GeraEstoque
{
    class Program
    {
        public static void CadastrarProduto()
        {
            string? nome;
            int quantidadeEstoque;
            decimal valorCompra;
            decimal valorVenda;

            System.Console.WriteLine("Informe o nome do produto");
            nome = Console.ReadLine();
            System.Console.WriteLine("Informe a quantidade em estoque");
            quantidadeEstoque = Convert.ToInt32(Console.ReadLine());
            System.Console.WriteLine("Informe o valor de compra. Exemplo: 12.99");
            valorCompra = Convert.ToDecimal(Console.ReadLine());
            System.Console.WriteLine("Informe o valor de venda.  Exemplo: 21.99");
            valorVenda = Convert.ToDecimal(Console.ReadLine());

            Environment.Exit(0);
        }

        public static void Main()
        {

            int opcao;

            System.Console.WriteLine("Seja bem vindo ao GeraEstoque 1.0");
            System.Console.WriteLine(" 1 Cadastrar produto \r\n 2 Consultar produto \r\n 3 Modificar produto \r\n 4 Excluir produto \r\n 0 Sair \r\n Digite a opção:");
            opcao = Convert.ToInt32(Console.ReadLine());

            switch (opcao)
            {
                case 1:
                CadastrarProduto();
                break;

                default:
                System.Console.WriteLine("Encerrou o programa");
                break;
            }
        }
    }
}

