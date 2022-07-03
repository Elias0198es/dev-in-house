namespace GeraEstoque.Screen
{
    public static class  Criar
    {

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
            System.Console.WriteLine("Informe o valor de compra. Exemplo: 12,99");
            valorCompra = Convert.ToDecimal(Console.ReadLine());
            System.Console.WriteLine("Informe o valor de venda.  Exemplo: 21,99");
            valorVenda = Convert.ToDecimal(Console.ReadLine());
            System.Console.WriteLine("Produto cadastrado com sucesso!");
            System.Console.WriteLine("ID: " + id);
            System.Console.WriteLine("Nome: " + nome);
            System.Console.WriteLine("Qtd: " + quantidadeEstoque);
            System.Console.WriteLine("R$ Compra: " + valorCompra);
            System.Console.WriteLine("R$ Venda: " + valorVenda);
            System.Console.WriteLine();
            System.Console.WriteLine();

        }
    }
}