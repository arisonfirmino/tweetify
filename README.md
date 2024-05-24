# Tweetify

Tweetify é uma aplicação simples de rede social onde os usuários podem postar “tweets” e visualizar “tweets” da comunidade.

👉 [acesse a aplicação](https://tweetify-kappa.vercel.app)

![Preview](https://utfs.io/f/55ebf823-9be6-492a-b2ce-54faada9e98b-8u90el.png)

Tweetify é uma aplicação web desenvolvida utilizando *Next.js* e *TypeScript*, com inspiração no antigo Twitter (X). O principal objetivo é proporcionar aos usuários uma experiência similar à do Twitter, permitindo-lhes compartilhar seus pensamentos, opiniões e momentos com uma comunidade online.

A aplicação oferece uma experiência interativa e intuitiva, projetada para facilitar o uso. Optei por integrar um sistema de login com o Google para garantir acesso rápido e seguro. Para interagir, os usuários podem usar suas contas do Google.

Após o login, os usuários têm um “perfil personalizado” com foto, nome e um tipo de “nickname”. Abaixo, há um campo de texto para fazer publicações, onde podem compartilhar o que desejam.

Como os dados do usuário do Google são apenas para vinculação, não implementei a exclusão de tweets específicos. Em vez disso, adicionei uma opção de 'Desfazer' após fazer uma publicação. Esse botão aparece por 10 segundos, permitindo que os usuários removam uma publicação recente.

Além disso, a aplicação permite aos usuários explorar tweets publicados por outros membros da comunidade, organizados em uma linha do tempo cronológica. A interação é fundamental, os usuários podem expressar suas opiniões e ideias através de comentários, estimulando discussões e trocas de ideias entre os membros da comunidade.

Oferecendo também a possibilidade de compartilhar tweets fora da plataforma, facilitando a disseminação de conteúdo e alcançando uma audiência mais ampla.

Experimente o Tweetify e faça parte dessa comunidade de compartilhamento e interação!

## Backend

Criei uma API responsável por adicionar novos tweets, adicionar comentários aos tweets publicados, listar tanto os tweets quanto os comentários associados a esses tweets, e também implementei a função de exclusão de um tweet. Utilizei o MongoDB como nosso banco de dados principal para armazenar os tweets e os comentários associados a eles.

Você pode conferir o código do backend [aqui](https://github.com/arisonfirmino/api-tweetify)
