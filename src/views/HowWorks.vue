<template>
  <div class="how-works">
    <h2>Como funciona?</h2>
    <p class="mt-30">O <strong>Insumator</strong> é uma ferramenta parceira dos DIs, DMs e Front-ends.
      Fazer o download dos insumos (ícones e imagens) de um roteiro é sempre uma tarefa repetitiva e que
      demanda de tempo para finalizar.
    </p>
    <p class="mt-30">Para isso automatizamos todo o processo, onde o sistema consegue identificar
      o que é <strong>Link</strong> e <strong>ID</strong> no
      roteiro e entregar uma lista filtrada agilizando o fluxo de download em poucos minutos.
    </p>
    <p class="mt-30">Para o funcionamento da ferramenta é necessário seguir algumas regras:</p>
    <h3 class="mt-30">Iconfinder</h3>
    <p>Utilizar o link inteiro e sem quebra de linha</p>
    <p class="mt-30">Exemplo:</p>
    <p>(sem https) www.iconfinder.com/icons/342932/close_remove_x_icon</p>
    <p>ou</p>
    <p>(com https) https://www.iconfinder.com/icons/342932/</p>
    <img class="img-full" src="../assets/img-01.png" alt="">
    <h3 class="mt-60">Shutter e Getty</h3>
    <p>Inicial do banco + _ + ID correspondente</p>
    <p class="mt-30"><strong>Para o Getty:</strong> G_1204017788</p>
    <p><strong>Para o Shutter:</strong> S_123456789</p>
    <p class="mt-30">Essa nomenclatura evita erros de digitação dos nomes do Getty ou Shutter (Gety, Getti, Shuter, etc) e ajuda o sistema na identificação de cada banco de imagens.</p>
    <img class="img-full" src="../assets/img-03.png" alt="">
    <h3 class="mt-60">Outros links</h3>
    <p>O sistema não irá identificar banco de imagens de cliente, Flickr, Pexels, Unsplash, etc. Nesses casos usar o link inteiro e sem quebra para manter o padrão.</p>
    <img class="img-full" src="../assets/img-02.png" alt="">
  </div>
</template>

<script>
export default {
  name: "HowWorks"
}
</script>

<style scoped>

</style>
