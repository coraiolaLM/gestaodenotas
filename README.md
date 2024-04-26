#						    Gestão de Notas
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Botem o nome e sobrenome embaixo com o ra:
	Bruno Coraiola - 23067150-2 -Função feita no trabalho
	Pedro  - RA   -Função feita no trabalho
	Gabriel - RA  -Função feita no trabalho
	Henrique - RA -Função feita no trabalho
	Victor - RA - -Função feita no trabalho
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 	
	  					Trabalho - Gestão de Notas
        
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			O departamento acadêmico de uma instituição de ensino superior está buscando
			modernizar seu sistema de gestão escolar para facilitar o acompanhamento do
			 desempenho dos alunos e a tomada de decisões por parte dos professores e
		  coordenadores. Para isso, foi proposto o desenvolvimento de um novo sistema de gestão
		escolar, que permitirá o cadastro de alunos, o registro de suas notas ao longo do semestre,
			o cálculo automático de médias e a determinação do status de aprovação de cada
							estudante.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

						          	Requisitos:
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Cadastro de Alunos (nome de quem fez):
	  ● O sistema deve permitir ao usuário adicionar informações dos alunos.
	  ● As informações obrigatórias incluem nome, e-mail e RA (Registro Acadêmico).
 	  ● Não é permitido cadastrar as notas do primeiro e segundo bimestre ao mesmo tempo.
 	 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Cadastro de Notas(nome de quem fez):
	  ● O usuário deve ser capaz de cadastrar as notas dos alunos de forma flexível,
 	    podendo modelar a estrutura de dados como entender.
 	  ● As notas incluem a nota da prova (valendo até 8), nota da AEP (Avaliação de
  	   Estudos Práticos - valendo até 1) e nota da prova integrada (valendo até 1).
  	  ● A média bimestral é a soma da nota da prova, nota da AEP e nota da prova
    	   integrada, porém, esta média nunca poderá ser maior que 10 ou menor que 0.
 	  ● A média semestral é a soma das médias bimestrais dividida por 2.
  	  ● Os campos do formulário devem seguir a seguinte regra
   		 ○ input para nome deve ter o seguinte id: input_nome
   		 ○ input para ra deve ter o seguinte id: input_ra
   		 ○ input para e-mail deve ter o seguinte id: input_email
   		 ○ input para prova primeiro bimestre deve ter o seguinte id: input_prova_1
    		 ○ input para prova integrada primeiro bimestre deve ter o seguinte id: 
			 					input_prova_integrada_1
    		 ○ input para aep primeiro bimestre deve ter o seguinte id: input_aep_1
    		 ○ input para prova segundo bimestre deve ter o seguinte id: input_prova_2
    		 ○ input para prova integrada segundo bimestre deve ter o seguinte id: 
			 					input_prova_integrada_2
    		 ○ input para aep segundo bimestre deve ter o seguinte id: input_aep_2
    		 ○ a função que deve ser chamado após o click do botão no formulário deve ter
			  o seguinte nome: adicionaDadosAluno() sem recebimento de parametros.

 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Armazenamento com LocalStorage(nome de quem fez):
	  ● Após o cadastro, as informações dos alunos e suas notas devem ser armazenadas
 	    utilizando a API do LocalStorage para persistência de dados no navegador.
 	  ● O armazenamento deve ser feito de acordo com a estrutura definida pelo usuário,
 	    permitindo flexibilidade na modelagem dos dados.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Cálculo de Médias(nome de quem fez):
	  ● O sistema deve calcular automaticamente a média bimestral de cada aluno para o primeiro e segundo bimestre.
 	  ● Além disso, o sistema deve calcular a média final de cada aluno.
 	  ● A média bimestral deve ser calculada considerando a fórmula: (nota da prova * 0.8) + (nota da AEP * 0.1) + (nota da prova integrada * 0.1).
 							 Esta média deve ser limitada entre 0 e 10.
   	  ● A média final deve ser a média aritmética das médias bimestrais. 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Status de Aprovação(nome de quem fez):
 	 ● Com base na média final de cada aluno, o sistema deve determinar seu status de aprovação.
 	 ● Se a média final for maior ou igual a 6, o aluno deve ser considerado "Aprovado".
 	 ● Se a média final for menor que 6 e maior ou igual a 3, o aluno deve estar em "Recuperação".
 	 ● Se a média final for menor que 3, o aluno deve ser considerado "Reprovado". 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Exibição em Tabela HTML(nome de quem fez):
 	 ● Os dados dos alunos, incluindo seus nomes, notas e status de aprovação, devem ser exibidos em uma tabela HTML. 
 	 ● A tabela deve permitir a edição das notas já informadas de um aluno e também a possibilidade de excluir um aluno.
 	 ● A tabela deve ser renderizada na mesma tela de cadastro ou em uma tela separada, mas deve consultar os dados armazenados no LocalStorage.
 	 ● Ao exibir os dados, a tabela deve mostrar a média aritmética de cada coluna: prova
   	  primeiro bimestre, AEP primeiro bimestre, prova integrada primeiro bimestre e média
   	    primeiro bimestre. O mesmo deve ser feito para o segundo bimestre e para a média
   						 final.
	  
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 	Restrições:
 	 ● As informações de nome, e-mail e RA devem ser obrigatoriamente informadas para realizar o cadastro do aluno.
 	 ● O sistema deve incluir validações nos formulários de cadastro para garantir a integridade dos dados
  	
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Tecnologias Permitidas:
 	 ● Somente é permitido o uso de HTML5, CSS3 e JavaScript puro para desenvolver
  	  este projeto. Não é permitido o uso de bibliotecas ou frameworks externos para
    	funcionalidades JavaScript, apenas para estilizar o frontend.
    
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Trabalho em Equipe:
	  ● O trabalho deve ser realizado em equipes de até 5 integrantes.
 	  ● Cada equipe deve criar um repositório público no GitHub para o projeto e adicionar
   			 os membros da equipe como colaboradores.
  	  ● As avaliações serão individuais, analisando as contribuições individuais dos
  				  membros da equipe.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Nota Importante:
  	● Qualquer forma de plágio resultará em nota zero para todos os envolvidos.
