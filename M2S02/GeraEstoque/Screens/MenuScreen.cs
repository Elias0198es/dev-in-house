namespace GeraEstoque.Screen
{
    public static class  Menu
    {
       public static void Iniciar()
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

                case 2:
                case 3:
                case 4:
                Iniciar();
                break;

                case 0:
                Environment.Exit(0);
                break;

                default:
                System.Console.WriteLine("Opção Inválida");
                Environment.Exit(0);
                break;
            }
        }

        public static void CadastrarProduto()
        {
            
            Guid id = Guid.NewGuid();
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
            System.Console.WriteLine("Produto cadastrado com sucesso!");
            System.Console.WriteLine("ID: " + id);
            System.Console.WriteLine("Nome: " + nome);
            System.Console.WriteLine("Qtd: " + quantidadeEstoque);
            System.Console.WriteLine("R$ Compra: " + valorCompra);
            System.Console.WriteLine("R$ Venda: " + valorVenda);
            System.Console.WriteLine();
            System.Console.WriteLine();
            System.Console.WriteLine("pressione qualquer tecla para voltar ao menu principal");

            var key = Console.ReadKey();
            
            if(key != null){
                Iniciar();
            }

        }
    }
}