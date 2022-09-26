$(document).ready(function() {
    $("header button").click(function() {
        $("form").slideDown();
    })

    $("#botao-cancel").click(function() {
        $("form").slideUp();
    })

    $("form").on("submit", function(e) {
        e.preventDefault();
        const enderecoDaNovaImg = $("#endereco-img-new").val();
        const novoItem = $("<li style='display: none'></li>");
        $(`<img src="${enderecoDaNovaImg}">`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImg}" target=_"blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>`).appendTo(novoItem);
            $(novoItem).appendTo("ul");
            $(novoItem).fadeIn(1000);
            $("endereco-img-new").val('');
    })
})

