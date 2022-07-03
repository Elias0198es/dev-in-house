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
                Criar.CadastrarProduto(); Iniciar(); break;

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
        
    }
}