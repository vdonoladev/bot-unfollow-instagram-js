# 🤖 Instagram Auto-Unfollow Bot (JS)

Um script leve em JavaScript puro para executar diretamente no console do navegador (DevTools) e automatizar o processo de deixar de seguir perfis no Instagram de forma espaçada.

## 📌 Visão Geral

O script percorre a lista de perfis que você segue, localiza os botões com o texto **"Seguindo"**, aciona o clique de confirmação (**"Deixar de seguir"**) e adiciona um intervalo de tempo entre cada ação para mitigar bloqueios temporários por excesso de requisições.

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **DOM API** (Execução nativa no navegador)

## 🚀 Como Usar

### 1. Acesse o Instagram
1. Abra o [Instagram Web](https://www.instagram.com) no seu navegador (Chrome, Firefox, Edge, etc.).
2. Vá até o seu perfil e abra a lista de **Seguindo** (*Following*).
3. Role a lista para baixo até carregar os perfis que você deseja deixar de seguir.

### 2. Abra o Console do Desenvolvedor
- Pressione `F12` ou `Ctrl + Shift + I` (no macOS: `Cmd + Option + I`).
- Clique na aba **Console**.

### 3. Execute o Script
Cole o código do arquivo `index.js` no console e pressione **Enter**:

```javascript
let counter = 0;
document.querySelectorAll("._8A5w5").forEach((item, index) => {
  setTimeout(() => {
    if (item.innerText == "Seguindo") {
      item.click();
      document.querySelectorAll(".-Cab_").forEach((item, index) => {
        if (item.innerText == "Deixar de seguir") {
          item.click();
          counter++;
          console.log(`Você deixou de seguir ${counter} pessoas`);
        }
      });
    }
  }, index * 10000);
});
```

## ⚙️ Como Funciona

- **Intervalo de 10 segundos:** Cada desseguida é agendada com `index * 10000` milissegundos (10 segundos de espaçamento entre cada ação).
- **Contador em tempo real:** A cada ação concluída, o console exibe a contagem acumulada de perfis desseguidos.

## ⚠️ Avisos Importantes

1. **Seletores CSS dinâmicos:** O Instagram atualiza com frequência as classes CSS (como `._8A5w5` e `.-Cab_`). Se o script parar de clicar, verifique via *Inspecionar Elemento* se os nomes das classes continuam os mesmos.
2. **Idioma da interface:** O script verifica os rótulos exatos `"Seguindo"` e `"Deixar de seguir"`. Caso sua interface esteja em inglês ou outro idioma, altere esses textos no código (ex.: `"Following"` / `"Unfollow"`).
3. **Limites de Ação da Plataforma (Rate Limits):** Desseguir muitos usuários em pouco tempo pode resultar em bloqueio temporário de ação ou restrições na sua conta. Use com moderação.

## 📄 Licença

Este projeto é disponibilizado para fins educacionais. O uso em desacordo com as diretrizes da plataforma é de responsabilidade do usuário.
